import "./style.css";

const SelectPriority = ({ 
  optionsList, 
  defaultValue, 
  handleChange,
  selectorName
}) => {
  const options = optionsList.map(option => (
    <option key={option} value={option} >
      {option}
    </option>
  ))

  return (
  <select
    value={defaultValue}
    onChange={handleChange}
    className={`${selectorName}_${defaultValue} ${selectorName}`} 
  >
    {options}
  </select>
  );
}

export default SelectPriority;