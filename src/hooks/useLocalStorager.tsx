import { useState, useEffect } from "react";

const useLocalStorager = (key: string, initialValue: any) => {
  const [value, setValue] = useState(() => {
    const storager = localStorage.getItem(key);
    return storager !== null ? JSON.parse(storager) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorager;