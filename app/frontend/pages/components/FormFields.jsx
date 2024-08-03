/**
 * Input Field component with a label and inertia error message handler.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.name - The name of the input field.
 * @param {string} props.label - The label text for the input field.
 * @param {string} props.value - The current value of the input field.
 * @param {function} props.onChange - The event handler for input field changes.
 * @param {string[]} props.error - An array of error messages (if any).
 * @param {boolean} props.isMoney - Indicates whether the input field is for money values.
 * @returns {JSX.Element} The rendered InputField component.
 */
const InputField = ({ name, label, value, onChange, error, isMoney }) => {
  const inputStyleClasses = "block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50";

  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <input
        type={isMoney ? "number" : "text"}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        className={inputStyleClasses}
        step={isMoney ? "0.01" : undefined}
        min={isMoney ? "0" : undefined}
        max={isMoney ? "1000000000" : undefined}
        inputMode={isMoney ? "decimal" : "text"}
      />
      {error && (<div style={{ color: 'red' }}>{error.join(', ')}</div>)}
    </div>
  );
};

/**
 * Checkbox Field omponent with a label and inertia error message handler.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.name - The name of the checkbox field.
 * @param {string} props.label - The label for the checkbox field.
 * @param {boolean} props.checked - The checked state of the checkbox.
 * @param {function} props.onChange - The event handler for the checkbox change event.
 * @param {string[]} props.error - The error messages for the checkbox field.
 * @returns {JSX.Element} The rendered CheckboxField component.
 */
const CheckboxField = ({ name, label, checked, onChange, error }) => {
  const inputStyleClasses = "h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500";
  
  return (
    <div className="mb-4 flex items-center">
      <input
        type="checkbox"
        name={name}
        id={name}
        checked={checked}
        onChange={onChange}
        className={inputStyleClasses}
      />
      <label htmlFor={name} className="ml-2 text-sm font-medium text-gray-700">{label}</label>
      {error && (<div style={{ color: 'red' }}>{error.join(', ')}</div>)}
    </div>
  );
};

/**
 * Select Field component with a label and inertia error message handler.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.name - The name of the select field.
 * @param {string} props.label - The label for the select field.
 * @param {string} props.value - The current value of the select field.
 * @param {function} props.onChange - The function to handle the change event of the select field.
 * @param {Array.<[number, string]>} props.options - The of options for the select field. Each option is represented as a tuple [value, display_value] * @param {Array} props.error - The array of error messages for the select field.
 * @returns {JSX.Element} The rendered SelectField component.
 */
const SelectField = ({ name, label, value, onChange, options, error }) => {
  const inputStyleClasses = "block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50";

  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <select
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        className={inputStyleClasses}
      >
        <option value="">Select Option</option>
        {options.map(option => (
          <option key={option[0]} value={option[0]}>{option[1]}</option>
        ))}
      </select>
      {error && (<div style={{ color: 'red' }}>{error.join(', ')}</div>)}
    </div>
  );
};

export { InputField, CheckboxField, SelectField };