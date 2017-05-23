import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions'
var NUM_OF_RENDERS = 1;
class PostIndex extends Component {

	componentDidMount() {
		this.props.fetchPosts();
	}

	renderPosts(){


		return _.map(this.props.posts, post =>{

			return(
					<li className="list-group-item" key={post.id}>
					{post.title}
					</li>
				);

		});


	}
	render() {
		console.log('RENDER NUMBER : ' + NUM_OF_RENDERS,this.props.posts);
		NUM_OF_RENDERS ++ ;
		console.log('Next Render will be number ',NUM_OF_RENDERS);
		return (
			<div>
			<h3>Posts</h3>
			<ul className="list-group">
				{this.renderPosts()}

			</ul>
			</div>
			);
	}
}

function mapStateToProps(state){
	return {posts : state.posts};
}


export default connect(mapStateToProps,{fetchPosts})(PostIndex);