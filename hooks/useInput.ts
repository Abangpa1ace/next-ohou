import { ChangeEvent, useEffect, useState } from "react";

interface Options {
  defaultValue?: string;
}

const useInput = ({ defaultValue }: Options = {}) => {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (defaultValue) setInputValue(defaultValue);
  }, []);

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return { inputValue, handleChangeInput };
};

export default useInput;
