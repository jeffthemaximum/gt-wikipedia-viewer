import styled from "styled-components"

export const StyledContainer = styled.div`
  p {
    color: ${props => props.theme.colors.white};
    font-size: 14px;
    line-height: 1;
    margin-bottom: 4px;
  }

  &:last-child {
    padding-top: 16px;
  }
`

const SelectInput = ({
  firstBlank,
  onChange,
  options,
  title,
  value
}) => (
  <StyledContainer>
    <p>{title}</p>
    <select value={value} onChange={onChange}>
      {firstBlank && <option value='false'>{firstBlank}</option>}
      {options.map(option => (
        <option key={option} value={option.value || null}>
          {option.displayName}
        </option>
      ))}
    </select>
  </StyledContainer>
)

export default SelectInput
