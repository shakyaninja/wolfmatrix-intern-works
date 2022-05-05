import React, { Component } from 'react';
import './App.css';
import Contacts from './components/contacts/contacts';
import {connect} from 'react-redux';
import {createContact,deleteContact, editContact} from './actions/contact.acts';

class App extends Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      contacts: {
          name: '',
          contact: ''
      }
    }
  }

  // shouldComponentUpdate(){
  //   console.log(this.props);
  //   console.log(this.state);
  // }

  componentDidMount(){
    // console.log("props: ",this.props);
    // console.log(this.state);
  }

  handleChange = (e) => {
    switch(e.target.name){
      case 'name':
        this.setState({
          contacts: {
            ...this.state.contacts,
            name: e.target.value
          }
        })
        break;
      
      case 'contact':
        this.setState({
          contacts: {
            ...this.state.contacts,
            contact: e.target.value
          }
        })
        break;
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let contact = {
      name: this.state.contacts.name,
      contact: this.state.contacts.contact
    }
    // console.log(contact);
    // this.setState({
    //   contacts: {
    //     name: '',
    //     contact: ''
    //   }
    // });

    // Redux call 
    this.props.createContact(contact);

  }

  deleteContact = (e, index) => {
    e.preventDefault();
    // console.log("delete contact index: ",index);
    this.props.deleteContact(index);
  }

  editContact = (e, index) => {
    e.preventDefault();
    var contact = {
      name: "luja Shakya",
      contact: "9860685929"
    }
    // contact.name = e.target.value
    console.log("edit contact index: ",index);
    this.props.editContact(index,contact);
  }


  render() {
    return (
      <div className="app">
        <div className="container mt-3">
          <h3>Add Contact Form</h3>
          <hr />
          <form onSubmit={this.handleSubmit}>
            <input type="text" onChange={this.handleChange} name="name" placeholder='type name here' className="form-control" value={this.state.name}/><br />
            <input type="tel" onChange={this.handleChange} name="contact" placeholder='eg.98********' className="form-control" value={this.state.contact}/><br />
            <input type="submit" className="btn btn-success" value="ADD"/>
          </form>
        </div>
        <hr />
        <Contacts contacts={this.props.contacts} deleteContact={this.deleteContact} editContact={this.editContact}></Contacts>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log("mapStateToProps: ",state);
  return {
    contacts: state.contact
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createContact: contact => dispatch(createContact(contact)),
    deleteContact: index =>dispatch(deleteContact(index)),
    editContact: (index,contact) => dispatch(editContact(index,contact))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
