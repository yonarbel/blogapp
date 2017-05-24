import {FETCH_POSTS} from '../actions';
import _ from 'lodash';

export default function(state = {},action){
//console.log('the state is',state,'the actions is:',action)
//console.log('should return : ',_.mapKeys(action.payload.data,"id"))
	switch(action.type){
		case FETCH_POSTS:
		return _.mapKeys(action.payload.data,"id");
		//{4:post}
		default :
		return state

	}
}