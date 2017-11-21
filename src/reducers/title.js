import { Map } from 'immutable';

import createReducer from '../lib/helpers/createReducer';
import { TITLE_SET } from '../lib/constants/actions';


const defaultState = Map().set('title', 'Valet Buddy Initial State');

export default createReducer(defaultState, {

  [TITLE_SET](state, action) {
    return state.set('title', action.payload);
  },

});
