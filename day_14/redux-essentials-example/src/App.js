import React, { useEffect, useState } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import Contacts from './app/components/contacts/contacts';
import {create , remove ,update} from './features/contact/contactSlicer';
import UpdateForm from './app/components/contacts/UpdateForm';

function App() {

const dispatch = useDispatch();

const [contactInfo,setContactInfo] = useState({
    name: '',
    contact: ''
})

const [updateContact,setUpdateContact] = useState({
  name: '',
  contact: ''
})
const [modal,setModal] = useState(false);


const allContacts = useSelector(state =>
  state.contacts
)

  const handleChange = (e) => {
    switch(e.target.name){
      case 'name':
        setContactInfo({
          ...contactInfo,
          name: e.target.value
        })
        break;
      
      case 'contact':
        setContactInfo({
          ...contactInfo,
          contact: e.target.value
        })
        break;
    }
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    let contact = {
      name: contactInfo.name,
      contact: contactInfo.contact
    }

    // console.log(contact);
    // Redux call 
    // createContact(contact);
    dispatch(create(contact));
  }
  
  const deleteContact = (e, index) => {
    e.preventDefault();
    // console.log("delete contact index: ",index);
    // deleteContact(index);
    dispatch(remove(index));
  }

  const editContact = (e, index) => {
    e.preventDefault();
    // show edit modal
    setModal(true);
    var contact = {id: ''};
    allContacts.forEach((element,id) => {
      if(id === index){
        contact = {...contact,element};
      }
    });
    contact.id = index;
    
    setUpdateContact(contact);
    // contact.name = e.target.value
    // console.log("edit contact index: ",index);
    // editContact(index,contact);
  }

  const closeUpdate = (e) => {
    setModal(false);
  }

  const commitUpdate = (data) => {
    dispatch(update(data));
    setModal(false);
  }


  return (
      <div className="app" >
        {modal?<UpdateForm closeUpdate={closeUpdate} contact={updateContact} updateContact={commitUpdate}></UpdateForm>:""}
        <div className="container mt-3" id={modal?'inactive':''}>
          <h3>Add Contact Form</h3>
          <hr />
          <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} name="name" placeholder='type name here' className="form-control" value={contactInfo.name}/><br />
            <input type="tel" onChange={handleChange} name="contact" placeholder='eg.98********' className="form-control" value={contactInfo.contact}/><br />
            <input type="submit" className="btn btn-success" value="ADD"/>
          </form>
          <hr />
            <Contacts contacts={allContacts} deleteContact={deleteContact} editContact={editContact} ></Contacts>
        </div>
      </div>
  )
}



export default App

