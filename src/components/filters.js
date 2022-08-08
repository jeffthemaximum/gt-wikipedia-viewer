import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import styled from 'styled-components'

import { getFormattedYesterday } from '../services/dateHelpers'
import DateSelector from './common/dateSelector'
import SelectInput from './common/selectInput'

const selectOptions = [
  25,
  50,
  75,
  100,
  200
]

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 768px;
`

const getAllSearchParams = searchParams => {
  const allSearchParams = {}
  for (const [key, value] of searchParams.entries()) {
    allSearchParams[key] = value
  }

  return allSearchParams
}

const Container = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const formattedYesterday = getFormattedYesterday()

  const date = searchParams.get('date')
  const limit = searchParams.get('limit')

  useEffect(() => {
    if (!date) {
      setSearchParams({ ...getAllSearchParams(searchParams), date: formattedYesterday })
    }
  }, [
    date,
    formattedYesterday,
    searchParams,
    setSearchParams
  ])

  useEffect(() => {
    if (!limit) {
      setSearchParams({ ...getAllSearchParams(searchParams), limit: 100 })
    }
  }, [
    limit,
    searchParams,
    setSearchParams
  ])

  const handleDateChange = event => {
    const newDate = event.target.value
    setSearchParams({ ...getAllSearchParams(searchParams), date: newDate })
  }

  const handleSelectChange = event => {
    setSearchParams({ ...getAllSearchParams(searchParams), limit: event.target.value })
  }

  return (
    <Component
      date={date}
      handleDateChange={handleDateChange}
      handleSelectChange={handleSelectChange}
      limit={limit}
      max={formattedYesterday}
    />
  )
}

const Component = ({ date, handleDateChange, handleSelectChange, limit, max }) => (
  <StyledContainer>
    {date && <DateSelector date={date} max={max} onChange={handleDateChange} />}
    {limit && <SelectInput onChange={handleSelectChange} options={selectOptions} value={limit} />}
  </StyledContainer>
)

export default Container
