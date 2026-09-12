export const initialState = {
  values: {},
  errors: {},
};

const formReducer = (state, action) => {
  switch (action.type) {
    case "SET_FIELD":
      return {
        ...state,
        values: {
          ...state.values,
          [action.field]: action.value,
        },
      };

    case "SET_ERROR":
      return {
        ...state,
        errors: {
          ...state.errors,
          [action.field]: action.error,
        },
      };

    case "RESET":
      return initialState;

    default:
      return state;
  }
};

export default formReducer;
