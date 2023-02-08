import React, { useState } from 'react'

interface ReturnValue {
  username: string;
  password: string;
  handleChangeUsername: (value: string) => void;
  handleChangePassword: (value: string) => void;
  handleSubmit: () => void;
}

const useData = (): ReturnValue => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleChangeUsername = (value: string) => {
    setUsername(value);
  }

  const handleChangePassword = (value: string) => {
    setPassword(value);
  }

  const handleSubmit = () => {
    console.log("===== username:", username);
    console.log("===== password:", password);
  }

  return {
    username,
    password,
    handleChangeUsername,
    handleChangePassword,
    handleSubmit
  }
}

export default useData