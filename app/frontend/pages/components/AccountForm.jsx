import React, { useState } from 'react';

const AccountForm = () => {
  const [formData, setFormData] = useState({
    selectedOption: '',
    textInput1: '',
    textInput2: '',
    checkbox: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Aquí puedes manejar el envío del formulario
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-lg rounded-lg">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="selector" className="block text-sm font-medium text-gray-700 mb-1">Selector</label>
          <select
            id="selector"
            name="selectedOption"
            value={formData.selectedOption}
            onChange={handleChange}
            className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
          >
            <option value="">Selecciona una opción</option>
            <option value="option1">Opción 1</option>
            <option value="option2">Opción 2</option>
            <option value="option3">Opción 3</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="textInput1" className="block text-sm font-medium text-gray-700 mb-1">Texto 1</label>
          <input
            type="text"
            id="textInput1"
            name="textInput1"
            value={formData.textInput1}
            onChange={handleChange}
            className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="textInput2" className="block text-sm font-medium text-gray-700 mb-1">Texto 2</label>
          <input
            type="text"
            id="textInput2"
            name="textInput2"
            value={formData.textInput2}
            onChange={handleChange}
            className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
          />
        </div>

        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            id="checkbox"
            name="checkbox"
            checked={formData.checkbox}
            onChange={handleChange}
            className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
          />
          <label htmlFor="checkbox" className="ml-2 text-sm font-medium text-gray-700">Acepto los términos</label>
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default AccountForm;