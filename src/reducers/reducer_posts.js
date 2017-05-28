import {FETCH_POSTS} from '../actions';
import {FETCH_LINTERS} from '../actions';
import _ from 'lodash';

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_POSTS:
            return action.payload.data;
        default :
            return state

    }
}