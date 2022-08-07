export const filterArticle = article => {
  return !article.article || !article.view || !article.rank
}

export const deserializeArticle = article => {
  return {
    title: article.article,
    views: article.views,
    rank: article.rank
  }
}
