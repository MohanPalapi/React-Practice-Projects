import { useState } from "react";

export function useForm(initialValue) {
  const [values, setValue] = useState(initialValue);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue((prev) => ({ ...prev, [name]: value }));
  };

  const reset = () => setValue(initialValue);

  return { values, reset, handleChange };
}
