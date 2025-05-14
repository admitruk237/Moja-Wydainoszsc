// components/SelectMenu.tsx
import { useState } from 'react';

type SelectMenuProps = {
  onChange?: (value: string) => void; // Опціональний проп для передачі значення
};

function SelectMenu({ onChange }: SelectMenuProps) {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedOption(value);
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <div className="w-full">
      <label
        htmlFor="role"
        className="block text-sm font-medium text-gray-700 mb-1"
      ></label>
      <select
        id="role"
        name="role"
        value={selectedOption}
        onChange={handleChange}
        className="block w-full p-3.5 pr-10 border border-gray-300 rounded-2xl   focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors duration-200 appearance-none"
      >
        <option value="" disabled>
          Виберіть агенцію
        </option>
        <option value="Olensen">Оленсен</option>
        <option value="Synegia">Синергія</option>
        <option value="Personal">Персонал Технік</option>
        <option value="Progress">Прогрес</option>
      </select>
    </div>
  );
}

export default SelectMenu;
