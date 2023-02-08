import React, { useEffect, useState } from 'react'
import { getItem, setItem } from './utils';

const useCookie = (key: string, defaultValue: string = "") => {
  const [cookie, setCookie] = useState<string>("");

  useEffect(() => {
    const foundCookie = getItem(key) || defaultValue;
    setCookie(foundCookie);
  }, [key, defaultValue]);

  const updateCookie = (value: string, numberOfDays: number = 0) => {
    setCookie(value);
    setItem(key, value, numberOfDays);
  }

  return { cookie, updateCookie };
}

export default useCookie