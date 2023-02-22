import React from 'react'
import useLoginStore from '../state/store'
import { BASE_URL } from '../../../constants';
import axios from 'axios';
import { setCookie } from '../../../utils/cookie';
import { useNavigate } from 'react-router-dom';

const useSubmit = () => {
  const username = useLoginStore(state => state.username);
  const password = useLoginStore(state => state.password);
  const isLoading = useLoginStore(state => state.isLoading);
  const setIsLoading = useLoginStore(state => state.setIsLoading);
  const navigate = useNavigate();

  const handleSubmit = () => {
    setIsLoading(true);
    const LOGIN_URL = BASE_URL + "/api/login/";

    axios.post(LOGIN_URL, {
      email: username,
      password
    })
      .then(res => {
        const token: string = res.data.token;
        setCookie("token", token);
        setIsLoading(false);
        navigate("/");
      })
      .catch(err => {
        alert("LOGIN ERROR");
        setIsLoading(false);
      })
  }
  
  return { handleSubmit, isLoading };
}

export default useSubmit