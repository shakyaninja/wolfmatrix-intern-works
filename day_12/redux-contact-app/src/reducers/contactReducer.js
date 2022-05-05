import {ContactActionTypes} from '../actions/contact.acts';

export default function contactReducer(state = [], action){
    // console.log("action: ",action);
    switch (action.type){
      case ContactActionTypes.CREATE:
        var ret = [
          ...state,
          action.contacts
        ]
        return ret;

      case ContactActionTypes.DELETE:
        return state.filter((data, i) => i !== action.id);

      case ContactActionTypes.EDIT:
        var filtered = state.filter((data, i) => i !== action.id);
        var ret = [
          ...filtered,
          action.contacts
        ]
        return ret;
        
      default:
        return state;
    }
  };