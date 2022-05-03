import React from 'react'
import { connect } from 'react-redux'
export const Contact = (props) => {
  return (
    <tr>
        <td>{parseInt(props.id) + 1}</td>
        <td>{props.name}</td>
        <td>{props.contact}</td>
        <td><button onClick={(e) => props.deleteContact(e, props.id)} className="btn btn-danger">
            Delete
          </button></td>
    </tr>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Contact)