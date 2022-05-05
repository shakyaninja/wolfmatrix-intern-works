import React from 'react'
import { connect } from 'react-redux'
export const Contact = (props) => {



  return (
    <tr>
        <td>{Number(props.id) + 1}</td>
        <td>{props.name}</td>
        <td>{props.contact}</td>
        <td>
          <button className="btn btn-info mx-2" onClick={(e) => { props.editContact(e, props.id) }}>
            Edit
          </button>
          <button onClick={(e) => props.deleteContact(e, props.id)} className="btn btn-danger mx-2">
            Delete
          </button>
        </td>
    </tr>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Contact)