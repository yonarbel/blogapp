import {FETCH_LINTERS} from '../actions';
import _ from 'lodash';

export default function (state = {}, action) {

    switch (action.type) {
        case FETCH_LINTERS:
            return _.mapKeys(action.payload.data, "linter");
        default :
            return state

    }

}