export const getCookie = (key: string) => {
  return document.cookie
    .split("; ")
    .reduce((allCookies: string, currentCookie: string) => {
      const item = currentCookie.split("=");
      const storedKey = item[0];
      const storedValue = item[1];

      return key == storedKey
        ? decodeURIComponent(storedValue)
        : allCookies;
    }, "");
}

export const setCookie = (key: string, value: string, numberOfDays: number = 0) => {
  let newCookie = `${key}=${value}; path=/;`;

  if (numberOfDays === 0) {
    document.cookie = newCookie;
    return;
  }
  
  const now = new Date();
  const expDate = now.getTime() + (numberOfDays * 60 * 60 * 24 * 1000);
  now.setTime(expDate);

  newCookie += ` expires=${now.toUTCString()}`;

  document.cookie = newCookie;
}