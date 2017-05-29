import React from 'react';
import {List, ListItem} from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import ContentSend from 'material-ui/svg-icons/content/send';
import Subheader from 'material-ui/Subheader';
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
