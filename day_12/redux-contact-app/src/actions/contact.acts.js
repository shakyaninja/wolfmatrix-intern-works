export const ContactActionTypes = {
    CREATE: "CREATE",
    DELETE: "DELETE",
    EDIT: "EDIT"
}

export const createContact = (contact) => {
    return {
      type: ContactActionTypes.CREATE,
      contacts: contact
    }
  };

export const deleteContact = (id) => {
    return {
        type: ContactActionTypes.DELETE,
        id: id
    }
}

export const editContact = (id,contact) => {
  return {
    type: ContactActionTypes.EDIT,
    id: id,
    contacts: contact
  }
}