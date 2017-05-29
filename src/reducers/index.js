import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
import PostReducer from './reducer_posts';
import LintReducer from './reducer_linters';


const rootReducer = combineReducers({
    posts: PostReducer,
    linters: LintReducer,
    form: formReducer
});

export default rootReducer;
