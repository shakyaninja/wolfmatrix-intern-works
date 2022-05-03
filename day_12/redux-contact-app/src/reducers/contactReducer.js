import {ContactActionTypes} from '../actions/contact.acts';

export default function contactReducer(state = [], action){
    console.log("action: ",action);
    switch (action.type){
      case ContactActionTypes.CREATE:
        var ret = [
          ...state,
          action.contacts
        ]
        return ret;

      case ContactActionTypes.DELETE:
        console.log("here");
        var rets = state.filter((data, i) => i !== action.id);
        console.log("filtered array:",rets);
        return rets;
        
      default:
            return state;
    }
  };