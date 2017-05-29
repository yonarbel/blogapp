import React from 'react';
import {List, ListItem} from 'material-ui/List';
<<<<<<< HEAD
import ActionGrade from 'material-ui/svg-icons/action/grade';
=======
import Explore from 'material-ui/svg-icons/action/explore';
import Find from 'material-ui/svg-icons/action/find-in-page';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
>>>>>>> 602467c7f322e637c383feb906adce53f182cddb
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import ContentSend from 'material-ui/svg-icons/content/send';
import Subheader from 'material-ui/Subheader';
<<<<<<< HEAD
import Toggle from 'material-ui/Toggle';

export default class ListExampleNested extends React.Component {

  state = {
    open: false,
  };


  handleNestedListToggle = (item) => {
    this.setState({
      open: item.state.open,
    });
  };

  render() {
    return (
      <div className="main-sidebar">
        <div>
          <List>
            <Subheader>Nested List Items</Subheader>
            <ListItem primaryText="Sent mail" leftIcon={<ContentSend />} />
            <ListItem primaryText="Drafts" leftIcon={<ContentDrafts />} />
            <ListItem
              primaryText="Workers"
              leftIcon={<ContentInbox />}
              initiallyOpen={false}
              primaryTogglesNestedList={true}
              nestedItems={[
                <ListItem
                  key={1}
                  primaryText="Worker1"
                  leftIcon={<ActionGrade />}
                />,
                <ListItem
                  key={2}
                  primaryText="Worker2"
                  leftIcon={<ContentSend />}
                  disabled={true}
                />,
                <ListItem
                  key={3}
                  primaryText="Worker3"
                  leftIcon={<ContentInbox />}
                  open={this.state.open}
                  onNestedListToggle={this.handleNestedListToggle}
                />,
              ]}
            />
          </List>
        </div>
      </div>
    );
  }
}
=======
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
                        this.props.fetchPosts(linter.linter, 1)
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

>>>>>>> 602467c7f322e637c383feb906adce53f182cddb
