import { ALL } from "../actions/actions-types";
  
  const initialState = {
    all: [],
  };
  
  export default function reducer(state = initialState, { type, payload }) {
    // ! ----------------------------------------------- Dishes
    switch (type) {
  
      case ALL:
        return {
          ...state,
          all: payload,
        };

      // ! ------------------------------------------------ Default
      default:
        return state;
    }
  }
  