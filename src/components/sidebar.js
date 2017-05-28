import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Explore from 'material-ui/svg-icons/action/explore';
import Find from 'material-ui/svg-icons/action/find-in-page';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import ContentSend from 'material-ui/svg-icons/content/send';
import Subheader from 'material-ui/Subheader';
import {fetchLinters} from '../actions'
import {fetchPosts} from '../actions'

class ListExampleNested extends React.Component {

    state = {
        open: false,
    };


    handleNestedListToggle = (item) => {
        this.setState({
            open: item.state.open,
        });
    };

    componentDidMount() {
        this.props.fetchLinters();
    }

    renderLinters() {
        var i = -1;
        return _.map(this.props.linters, (linter) => {
            i++;
            return (
                <ListItem
                    key={i}
                    onTouchTap={() => {
                        this.props.fetchPosts(linter.linter)
                    }}
                    primaryText={linter.linter}
                    leftIcon={<Explore />}
                />
            );
        });
    }

    render() {
        return (
            <div className="main-sidebar">
                <div>
                    <List>
                        <Subheader>Choose Linter</Subheader>
                        {/* <ListItem primaryText="Sent mail" leftIcon={<ContentSend />} />
                         <ListItem primaryText="Drafts" leftIcon={<ContentDrafts />} />*/}
                        <ListItem
                            primaryText="Linters"
                            leftIcon={<Find />}
                            initiallyOpen={true}
                            primaryTogglesNestedList={true}
                            nestedItems={this.renderLinters()}
                        />
                    </List>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {

    return {
        linters: state.linters,
        posts: state.posts
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchPosts,
        fetchLinters
    }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(ListExampleNested);

