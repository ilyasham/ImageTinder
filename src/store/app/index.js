/**
 * Created by dev on 4/20/17.
 */
import { Record } from 'immutable'

/* Actions */
export const SET_PATH = 'SET_PATH'

const InitialState = new Record({
  path: 'Login'
})

export default function reducer(state = new InitialState(), action = {}) {
  if (!(state instanceof InitialState)) return toInitialState(state)

  switch (action.type) {

    case SET_PATH:
      return state
        .set('path', action.payload.path)

    default: {
      return state
    }
  }
}

// Action generators

export const setPath = (path) => {
  return {
    type: SET_PATH,
    payload: {
      path
    }
  }
}