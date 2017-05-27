import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
class PostsNew extends Component {

  renderField(field) {

    return (

      <div className="form-group">
        <label>{field.label}</label>
        <input className="form-control" type="text" {...field.input}/>
        {field.meta.error}
      </div>
    )
  }
  onSubmit(values){
    console.log('form vals are',values)
  }
  render() {
    const {handleSubmit} = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field label="Title" name="title" component={this.renderField}/>
        <Field label="Category" name="category" component={this.renderField}/>
        <Field label="Post Content" name="content" component={this.renderField}/>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

function validate(val){
const errors = {};

if(!val.title)
errors.title = "Please enter title";
if(!val.category)
errors.category = "Please enter category";
if(!val.content)
errors.content = "Please enter content";

return errors;
}

export default reduxForm({
  form: 'PostsNewForm',
  validate


})(PostsNew);
