import { UsersActions } from '../app/users.actions';
import { UsersState } from '../app/store/store';
import { tassign } from 'tassign';


const INITIAL_STATE: UsersState = {
  isDog: undefined, isSitter: undefined,
  dogs: [{
    id: 1,
    name: "Karla",
    breed: "Bulldog",
    age: 2,
    gender: "Female",
    postalcode: 2720
  }],
  sitters: [{
    id: 1,
    firstname: "Lene",
    lastname: "Henriksen",
    age: 37,
    postalcode: 2700,
    phone: 37883728
  }]
}
export function usersReducer(state: UsersState = INITIAL_STATE, action: any) {

  switch (action.type) {

    //DOG
    case UsersActions.GET_DOGS: // The component wants the data
      return state;

    case UsersActions.GET_DOGS_SUCCESS: // The ws sent back the users.
      //action.payload: an array of users
      return tassign(state, { dogs: action.payload });

    /*   // return state;
    case UsersActions.GET_USERS_FAILURE: // The ws failed or something else bad
      return state; */


    /*        case UsersActions.ADD_RATING:
            // action.payload: {id, rating}
            let sitters = [...state.sitters];
            let index = sitters.findIndex(dog => dog.id === action.payload.id);
            
            let newRatings = [...sitters[index].ratings];
    
            //NOT ALLOWED??
            newRatings.push(action.payload.rating);
            sitters[index].ratings = newRatings;
      
            return state; */

    case UsersActions.ADD_DOG: // action.payload is dog: dog
      // How to add an object to an array of objects without modifying the existing array?
      //return tassign(state, {dogs: [...state.dogs, action.payload]});

      return { ...state, dogs: [...state.dogs, action.payload] };

      //NOT ALLOWED?
      //state.dogs.push(action.payload);
      //return state;

    case UsersActions.SET_DOG_TYPE: // action.payload is isdog: boolean

    state.isDog = action.payload;
    return state;

    //return Object.assign({}, state, {isdog: action.payload, foo: 1});
    //return tassign(state, { isdog: action.payload});


    

    //SITTER
    case UsersActions.GET_SITTERS:
      return state;

    case UsersActions.GET_SITTERS_SUCCESS: // The ws sent back the users.
      //action.payload: an array of users
      return tassign(state, { sitters: action.payload });

    case UsersActions.ADD_SITTER: // action.payload is sitter: sitter
      return tassign(state, { sitters: [...state.sitters, action.payload] });

    case UsersActions.SET_SITTER_TYPE: // action.payload is issitter: boolean
      state.isSitter = action.payload;
      return state;

    case UsersActions.DELETE_SITTER: 
    let sitters = [...state.sitters];
    let index = sitters.findIndex(sitter => sitter.id === action.payload.id);

    sitters.splice(index, 1);

    default:
      return state;
  }
}
  
