import {FETCH_POSTS} from '../actions';
import {FETCH_LINTERS} from '../actions';
import _ from 'lodash';

<<<<<<< HEAD
export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_POSTS:
            return action.payload.data;
        default :
            return state
=======
export default function(state = {},action){
//console.log('the state is',state,'the actions is:',action)
//console.log('should return : ',_.mapKeys(action.payload.data,"id"))
	switch(action.type){
		case FETCH_POSTS:
		return _.mapKeys(action.payload.data,"id");
		//{4:post}
		default :
		return state
>>>>>>> parent of 7d7245f... make it better app

    }
}