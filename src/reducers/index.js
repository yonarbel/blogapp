import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
import PostReducer from './reducer_posts';
<<<<<<< HEAD
import LintReducer from './reducer_linters';


=======
>>>>>>> parent of 7d7245f... make it better app
const rootReducer = combineReducers({
    posts: PostReducer,
    linters: LintReducer,
    form: formReducer
});

export default rootReducer;
