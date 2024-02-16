import { useEffect, useState } from "react";

interface Options {
  defaultValue?: string | null;
}

const useInput = ({ defaultValue }: Options = {}) => {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (defaultValue) setInputValue(defaultValue);
  }, []);

  const handleChangeInput = (newValue: string) => {
    setInputValue(newValue);
  };

  return { inputValue, handleChangeInput };
};

export default useInput;
