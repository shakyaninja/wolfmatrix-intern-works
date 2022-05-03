export const ContactActionTypes = {
    CREATE_SUCCESS: "CREATE_SUCCESS",
    DELETE_SUCCESS: "DELETE_SUCCESS",
    CREATE: "CREATE",
    DELETE: "DELETE"
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