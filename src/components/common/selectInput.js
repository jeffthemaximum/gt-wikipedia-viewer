const SelectInput = ({
  onChange,
  options,
  value
}) => (
  <select value={value} onChange={onChange}>
    {options.map(option => (
      <option key={option} name={option}>
        {option}
      </option>
    ))}
  </select>
)

export default SelectInput
