import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import styled from 'styled-components'

import { formattedToParts } from '../services/dateHelpers'
import ErrorMessage from './common/errorMessage'
import Loader from './common/loader'
import usePrevious from '../hooks/usePrevious'
import wikipediaDucks from '../ducks/wikipedia'

const StyledContainer = styled.div`
  padding-top: 32px;
`

const StyledArticles = styled.div`
  margin: 0 auto;
  max-width: 768px;

  p {
    color: ${props => props.theme.colors.white};
  }

  .article-card {
    align-items: center;
    border: 1px solid ${props => props.theme.colors.white};
    border-radius: 4px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
    padding: 8px 16px;

    &:hover {
      box-shadow: rgb(12 10 29 / 32%) 0px 2px 8px 4px;
    }
  }

  .article-metadata {
    text-align: right;
  }
`

const Article = ({ article }) => (
  <div className='article-card'>
    <p className='article-title'>{article.title}</p>
    <div className='article-metadata'>
      <p className='article-metadata-title'>Views: {article.views}</p>
      <p className='article-metadata-title'>Rank: {article.rank}</p>
    </div>
  </div>
)

const Container = () => {
  const dispatch = useDispatch()

  const [searchParams] = useSearchParams()
  const country = searchParams.get('country')
  const date = searchParams.get('date')
  const dateParts = formattedToParts(date)
  const limit = searchParams.get('limit')

  let articles = useSelector(wikipediaDucks.selectors.articles)
  const error = useSelector(wikipediaDucks.selectors.error)
  const loading = useSelector(wikipediaDucks.selectors.loading)
  const success = useSelector(wikipediaDucks.selectors.success)

  const previousCountry = usePrevious(country)
  const previousDay = usePrevious(dateParts.day)
  const previousMonth = usePrevious(dateParts.month)
  const previousYear = usePrevious(dateParts.year)

  if (limit) {
    articles = [...articles].slice(0, parseInt(limit))
  }

  useEffect(() => {
    const shouldInitialFetch = (
      articles.length === 0 &&
      !error &&
      !loading &&
      !success &&
      dateParts.day &&
      dateParts.month &&
      dateParts.year
    )

    const shouldReFetch = (
      (error || success) &&
      !loading &&
      (
        dateParts.day !== previousDay ||
        dateParts.month !== previousMonth ||
        dateParts.year !== previousYear ||
        country !== previousCountry
      )
    )

    if (shouldInitialFetch || shouldReFetch) {
      dispatch(wikipediaDucks.actions.getPageviews({ country, day: dateParts.day, month: dateParts.month, year: dateParts.year }))
    }
  }, [
    articles,
    country,
    dateParts.day,
    dateParts.month,
    dateParts.year, dispatch,
    error,
    loading,
    previousCountry,
    previousDay,
    previousMonth,
    previousYear,
    success
  ])

  return (
    <Component
      articles={articles}
      error={error}
      loading={loading}
    />
  )
}

const Component = ({ articles, error, loading }) => (
  <StyledContainer>
    <Loader loading={loading} />
    <ErrorMessage error={error} />
    <StyledArticles>
      {articles.map(article => <Article article={article} key={article.title} />)}
    </StyledArticles>
  </StyledContainer>
)

export default Container
