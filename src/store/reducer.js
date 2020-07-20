import * as actionTypes from "./actions";

const initialState = {
  persons: [],
};

const reducor = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PERSON_ADDED:
        const newPerson = {
            id: Math.random(), // only for project
            name: action.personData.name,
            age: action.personData.age
        }
        return {
            persons: state.persons.concat(newPerson)
        }
    case actionTypes.PERSON_DELETED:
        const updatedArray = state.persons.filter(person => person.id !== action.id)
        return {
            persons: updatedArray
        }
    default:
      return state;
  }
};

export default reducor;
