import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import styled from 'styled-components'

import { getFormattedYesterday } from '../services/dateHelpers'
import DateSelector from './common/dateSelector'

const StyledContainer = styled.div`
  margin: 0 auto;
  max-width: 768px;
`

const Container = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const formattedYesterday = getFormattedYesterday()

  useEffect(() => {
    if (!searchParams.get('date')) {
      setSearchParams({ date: formattedYesterday })
    }
  }, [formattedYesterday, searchParams, setSearchParams])

  const handleDateChange = event => {
    const newDate = event.target.value
    setSearchParams({ date: newDate })
  }

  return (
    <Component
      date={searchParams.get('date')}
      handleDateChange={handleDateChange}
      max={formattedYesterday}
    />
  )
}

const Component = ({ date, handleDateChange, max }) => (
  <StyledContainer>
    {date && <DateSelector date={date} max={max} onChange={handleDateChange} />}
  </StyledContainer>
)

export default Container
