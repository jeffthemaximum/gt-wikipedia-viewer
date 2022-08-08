const SelectInput = ({
  firstBlank,
  onChange,
  options,
  value
}) => (
  <select value={value} onChange={onChange}>
    {firstBlank && <option value='false'>{firstBlank}</option>}
    {options.map(option => (
      <option key={option} value={option.value || null}>
        {option.displayName}
      </option>
    ))}
  </select>
)

export default SelectInput
