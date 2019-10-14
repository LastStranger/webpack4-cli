const componentTwoReducer = (state, action) => {
  switch (action.type) {
    case "add":
      return {
        ...state,
        age: state.age + action.data
      };
    default:
      return state;
  }
};

export default componentTwoReducer;
