import React, { useState } from 'react'
import './updateform.component.css';
function UpdateForm(props) {
    // console.log(props.contact);
    const [updatedContact,setUpdatedContact] = useState({
        name: props.contact.element.name,
        contact: props.contact.element.contact
    });

    const handleChange = (e) => {
        if(e.target.name === 'updateName'){
            setUpdatedContact({
                ...updatedContact,
                name: e.target.value
            })
        }else if(e.target.name === 'updateContact'){
            setUpdatedContact({
                ...updatedContact,
                contact: e.target.value
            })
        }
    }
  return (
    <div id='updateForm'>
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title">Update Contact</h5>
                <button type="button" className="btn-close" onClick={()=> {props.closeUpdate();}}></button>
            </div>
            <div className="modal-body">
                <form>
                    <div className="mb-3">
                        <label htmlFor="updateName" className="col-form-label">Name:</label>
                        <input type="text" className="form-control" name='updateName' id="updateName" onChange={handleChange} defaultValue={updatedContact.name}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="updateContact" className="col-form-label">Contact:</label>
                        <input className="form-control" name='updateContact' id="updateContact" onChange={handleChange} defaultValue={updatedContact.contact}/>
                    </div>
                </form>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={()=> {props.closeUpdate();}}>Close</button>
                <button type="button" className="btn btn-primary" onClick={()=> {props.updateContact({
                    id: props.contact.id,
                    element:{
                        name: updatedContact.name,
                        contact: updatedContact.contact
                    }
                });}}>Update</button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default UpdateForm