import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");
  const onInputChange = ({ target: { value } }) => {
    setInputValue(value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    const value = inputValue.trim();
    if (inputValue.trim().length <= 1) return;
    onNewCategory(value);
    // setCategories((cat) => [inputValue, ...cat]);
    setInputValue("");
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
