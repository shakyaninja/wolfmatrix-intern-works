import React from 'react'
import { connect } from 'react-redux'
import Contact from './contact'

export const Contacts = (props) => {
  return (
    <div className='container'>
        <div className="row">
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>
                            S.N.
                        </th>
                        <th>
                            Name
                        </th>
                        <th>
                            Contact No.
                        </th>
                        <th>
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.contacts.map((element,i) => (
                            <Contact 
                                key={i+1}
                                id={i}
                                name={element.name}
                                contact={element.contact}
                                deleteContact={props.deleteContact}
                            ></Contact>
                        ))
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Contacts)