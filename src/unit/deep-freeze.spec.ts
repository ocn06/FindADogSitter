var deepFreeze = require('deep-freeze');
import * as types from '../../../atest/src/app/users.actions';
import { usersReducer } from 'src/app/users.reducer';

it('Should add a new dog object to array of dogs', () => {
    let state = {isDog: true, isSitter: false, dogs: [], sitters: []};
    deepFreeze(state);
  
    let newDog= { id: 10, name: 'Arne', breed: 'Bulldog', age: 8, gender: 'Male', postalcode: 2450 };
  
    expect(usersReducer(state, { 
      type: types.UsersActions.ADD_DOG, 
      payload: newDog
     })).toEqual({isDog: true, isSitter: false, dogs: [{id: 10, name: 'Arne', breed: 'Bulldog', age: 8, gender: 'Male', postalcode: 2450}], sitters: []});
});
