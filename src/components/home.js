import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import wikipediaDucks from '../ducks/wikipedia'

const StyledHeader = styled.div`
  background-color: ${props => props.theme.colors.grey0};
`

const Header = () => (
  <StyledHeader>
    <h1>Grow Take Home</h1>
  </StyledHeader>
)

const Container = () => {
  const dispatch = useDispatch()

  const articles = useSelector(wikipediaDucks.selectors.articles)
  const error = useSelector(wikipediaDucks.selectors.error)
  const loading = useSelector(wikipediaDucks.selectors.loading)
  const success = useSelector(wikipediaDucks.selectors.success)

  useEffect(() => {
    const shouldFetch = (
      articles.length === 0 &&
      !error &&
      !loading &&
      !success
    )

    if (shouldFetch) {
      dispatch(wikipediaDucks.actions.getPageviews({ day: '31', month: '03', year: '2019' }))
    }
  }, [articles, dispatch, error, loading, success])

  console.log({ articles })

  return (
    <Component />
  )
}

const Component = () => (
  <Header />
)

export default Container
