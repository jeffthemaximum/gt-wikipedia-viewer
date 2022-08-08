import { StyledContainer } from "./selectInput"

const DateSelector = ({ date, max, onChange, title }) => (
  <StyledContainer>
    <p>{title}</p>
    <input
      max={max}
      name='articles date'
      onChange={onChange}
      type='date'
      value={date}
    />
  </StyledContainer>
)

export default DateSelector
