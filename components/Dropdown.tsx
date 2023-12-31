import React, { useState } from "react";

const Dropdown = ({ handleSort }: { handleSort: any }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleSelection = (e: any) => {
    setSelectedOption(e.target.value);
    handleSort(e.target.value);
  };

  return (
    <>
      <div className="mb-4">
        <label
          htmlFor="dropdown"
          className="block text-sm font-medium text-gray-700"
        >
          Filter
        </label>
      </div>

      <div className="mb-6">
        <select
          id="dropdown"
          className="block  px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200"
          onChange={handleSelection}
          value={selectedOption}
        >
          <option value="createdAscendent" defaultValue={"createdAscendent"}>
            Sort by Created at Ascendent
          </option>
          <option value="filenameAscendent">Sort by Filename Ascendent</option>
          <option value="filenameDescendent">
            Sort by Filename Descendent
          </option>
        </select>
      </div>
    </>
  );
};

export default Dropdown;
