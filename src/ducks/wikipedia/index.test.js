import { call, put } from 'redux-saga/effects'
import { cloneableGenerator } from '@redux-saga/testing-utils'

import { mockString } from '../../utils/test-helpers'
import wikipediaDucks from '.'

describe('actions', () => {
  describe('getPageviews', () => {
    it('should create expected action', () => {
      const fields = {
        day: mockString(),
        month: mockString(),
        year: mockString()
      }

      const expectedAction = {
        type: wikipediaDucks.actionTypes.GET_PAGEVIEWS,
        day: fields.day,
        month: fields.month,
        year: fields.year
      }

      expect(wikipediaDucks.actions.getPageviews({
        day: fields.day,
        month: fields.month,
        year: fields.year
      })).toEqual(expectedAction)
    })
  })
})

describe('reducers', () => {
  describe('GET_PAGEVIEWS_SUCCESS', () => {
    it('should properly update the state with expected articles, error, loading, success states', () => {
      const action = {
        type: wikipediaDucks.actionTypes.GET_PAGEVIEWS_SUCCESS,
        articles: [mockString()]
      }

      const state = wikipediaDucks.reducer(undefined, action)
      expect(state.articles).toEqual(action.articles)
      expect(state.error).toBeFalsy()
      expect(state.loading).toBeFalsy()
      expect(state.success).toBeTruthy()
    })
  })
})

describe('sagas', () => {
  describe('getPageviews', () => {
    const fields = {
      day: mockString(),
      month: mockString(),
      year: mockString()
    }

    const action = {
      day: fields.day,
      month: fields.month,
      year: fields.year
    }

    const errorResponse = { error: mockString() }
    const successResponse = { data: { items: [{ articles: [{ views: mockString(), article: mockString(), rank: mockString() }] }] } }

    const data = {
      gen: cloneableGenerator(wikipediaDucks.sagas.getPageviews)(action)
    }

    it('calls wikipediaDucks.api.getPageviews', () => {
      const expectedValue = call(wikipediaDucks.api.getPageviews, action)
      const testValue = data.gen.next().value
      expect(testValue).toEqual(expectedValue)

      data.clone = data.gen.clone()
    })

    it('puts wikipediaDucks.actionTypes.GET_PAGEVIEWS_ERROR when api returns error', () => {
      const expectedValue = put({
        type: wikipediaDucks.actionTypes.GET_PAGEVIEWS_ERROR,
        error: errorResponse.error
      })

      const testValue = data.gen.next(errorResponse).value
      expect(testValue).toEqual(expectedValue)
    })

    it('puts wikipediaDucks.actionTypes.GET_PAGEVIEWS_SUCCESS when api returns success', () => {
      const expectedValue = put({
        type: wikipediaDucks.actionTypes.GET_PAGEVIEWS_SUCCESS,
        articles: successResponse.data.items[0].articles.map(wikipediaDucks.serializers.deserializeArticle)
      })

      const testValue = data.clone.next(successResponse).value
      expect(testValue).toEqual(expectedValue)
    })
  })
})

describe('selectors', () => {
  describe('articles', () => {
    it('returns expected data', () => {
      const state = {
        wikipedia: {
          articles: [mockString()]
        }
      }

      expect(wikipediaDucks.selectors.articles(state)).toEqual(state.wikipedia.articles)
    })
  })
})
