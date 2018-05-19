import { UsersActions } from '../app/users.actions';
import { UsersState } from '../app/store/store';
import { tassign } from 'tassign';


const INITIAL_STATE: UsersState = { isDog: undefined, dogs: [], 
    sitters: [{
        id: "1",
        firstname: "Lene",
        lastname: "Henriksen",
        age: 37,
        postalcode: 2700,
        phone: 37283728
    }]
}
export function usersReducer(state: UsersState = INITIAL_STATE, action:any) {
 
    switch (action.type) {
  
      case UsersActions.GET_USERS: // The component wants the data
        return state;
      case UsersActions.GET_USERS_SUCCESS: // The ws sent back the users.
        //action.payload: an array of users
        return tassign(state, {dogs: action.payload});
        
        // return state;
      case UsersActions.GET_USERS_FAILURE: // The ws failed or something else bad
        return state;
  
  
/*        case UsersActions.ADD_RATING:
        // action.payload: {id, rating}
        let sitters = [...state.sitters];
        let index = sitters.findIndex(dog => dog.id === action.payload.id);
        
        let newRatings = [...sitters[index].ratings];
        newRatings.push(action.payload.rating);
        sitters[index].ratings = newRatings;
  
        return state; */
   
      case UsersActions.ADD_DOG: // action.payload is dog: dog
      // How to add an object to an array of objects without modifying the existing array?
        return tassign(state, {dogs: [...state.dogs, action.payload]});
  
      // return {...state, dogs:[...state.dogs, action.payload] };
  
      // state.dogs.push(action.payload);
      // return state;
  
      case UsersActions.SET_TYPE: // action.payload is isdog: boolean
  
       state.isDog = action.payload;
       return state;
  
      // return Object.assign({}, state, {isdog: action.payload, foo: 1});
      //return tassign(state, { isdog: action.payload});
   
      default:
       return state; 
   }
  }
  
