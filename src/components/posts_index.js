import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import {fetchPosts, fetchTotals} from '../actions';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn
} from 'material-ui/Table';
import {Pagination} from 'react-bootstrap';

class PostIndex extends Component {

    constructor(props) {
        super(props);
        this.handlePageClick = this.handlePageClick.bind(this);
    }

    state = {
        selected: [0]
    };


    componentDidMount() {
        this.props.fetchPosts('gotype');
    }

    isSelected = (index) => {
        return this.state.selected.indexOf(index) !== -1;
    };

    handleRowSelection = (selectedRows) => {
        this.setState({selected: selectedRows});
    };

    getPaginationSize() {
        if (this.props.posts && this.props.linters && this.props.posts[0]) {
            if (this.props.linters[this.props.posts[0].linter])
                return this.props.linters[this.props.posts[0].linter].pages;
        }

        return 1;
    }

    getCurrentLinter() {
        if (this.props.posts && this.props.linters && this.props.posts[0])
            return this.props.posts[0].linter;
    }

    handlePageClick(page) {
        console.log('The page is ', page.selected);
        this.props.fetchPosts(this.getCurrentLinter(), page.selected + 1);
    }
    renderPosts() {
        var i = -1;
        return _.map(this.props.posts, (post) => {
            i++;
            return (
                <TableRow key={i} selected={this.isSelected(i)}>
                    <TableRowColumn>{post.message}</TableRowColumn>
                    <TableRowColumn>{post.path}</TableRowColumn>
                    <TableRowColumn>{post.severity}</TableRowColumn>
                    <TableRowColumn>{post.line}</TableRowColumn>
                    <TableRowColumn>{post.col}</TableRowColumn>
                </TableRow>

            );

        });
    }

    render() {
        //console.log(this.props.posts);
        return (
            <div className="post-list">

                <ReactPaginate previousLabel={"<"}
                               nextLabel={">"}
                               breakLabel={<a href="">...</a>}
                               breakClassName={"break-me"}
                               current={5}
                               pageCount={this.getPaginationSize()}
                               marginPagesDisplayed={2}
                               forcePage={5}
                               onPageChange={this.handlePageClick}
                               containerClassName={"pagination text-xs-right"}
                               subContainerClassName={"pages pagination"}
                               activeClassName={"active"}/>
                <h3>{this.getCurrentLinter()}</h3>

                <MuiThemeProvider>
                    <Table onRowSelection={this.handleRowSelection}>
                        <TableHeader>
                            <TableRow>
                                <TableHeaderColumn>Message</TableHeaderColumn>
                                <TableHeaderColumn>Path</TableHeaderColumn>
                                <TableHeaderColumn>Severity</TableHeaderColumn>
                                <TableHeaderColumn>Line</TableHeaderColumn>
                                <TableHeaderColumn>Col</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {this.renderPosts()}
                        </TableBody>
                    </Table>
                </MuiThemeProvider>
                <div className="text-xs-right">
                    <Link to="/posts/new" className="btn btn-primary">Add a Post</Link>
                </div>

            </div>
        );
    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchPosts,
        fetchTotals
    }, dispatch)
}

function mapStateToProps(state) {

    return {posts: state.posts, linters: state.linters};
}

export default connect(mapStateToProps, mapDispatchToProps)(PostIndex);
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
		console.log(this.props.posts);
		NUM_OF_RENDERS ++ ;
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

