import React from 'react'
import useLoginStore from '../state/store'
import { BASE_URL } from '../../../constants';
import axios from 'axios';
import useCookie from '../../../hooks/useCookie';

const useSubmit = () => {
  const username = useLoginStore(state => state.username);
  const password = useLoginStore(state => state.password);
  const { updateCookie } = useCookie("token");

  const handleSubmit = () => {
    const LOGIN_URL = BASE_URL + "/api/login/";

    axios.post(LOGIN_URL, {
      email: username,
      password
    })
      .then(res => {
        const token: string = res.data.token;
        updateCookie(token);
        location.replace("/");
      })
      .catch(err => {
        alert("LOGIN ERROR");
      })
  }
  
  return handleSubmit;
}

export default useSubmit