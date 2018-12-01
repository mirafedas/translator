import { combineReducers } from 'redux-immutable';
import { connectRouter } from 'connected-react-router/immutable';

import history from 'utils/history';
import languageProviderReducer from 'containers/LanguageProvider/reducer';
import inputFieldReducer from 'components/reducer';

export default function createReducer (injectedReducers = {}) {
  const rootReducer = combineReducers({
    language: languageProviderReducer,
    value: inputFieldReducer,
    selectedOption: inputFieldReducer,
    ...injectedReducers,
  });

  const mergeWithRouterState = connectRouter(history);
  return mergeWithRouterState(rootReducer);
}
