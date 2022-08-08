const DateSelector = ({ date, max, onChange }) => (
  <input
    max={max}
    name='articles date'
    onChange={onChange}
    type='date'
    value={date}
  />
)

export default DateSelector
