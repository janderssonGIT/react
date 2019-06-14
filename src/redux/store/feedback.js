import * as ActionTypes from '../ActionTypes';

export const Feedback = (state = {
        errMess: null,
        feedback: [], 
    }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_FEEDBACK:
            return {...state, isLoading: false, errMess: null, feedback: action.payload};

        default:
          return state;
      }
};