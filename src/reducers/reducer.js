const values = 'abcdefghijklmnopqrstuvwxyz'.split('');
const table = [...Array(10)].map((_, i) => ([...Array(10)].map((_, i) => ({
  value: values[Math.floor(Math.random() * values.length)],
  className: `font-${Math.ceil(Math.random() * 4)}`
}))));

export const initialState = {
  values,
  allowUppercase: true,
  fonts: {
    one: true,
    two: true,
    three: true,
    four: true,
  },
  table,
};

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_WORD':
      return {
        ...state,
        values: [...state.values, action.word],
      };
    case 'CLEAR_WORDS':
      return {
        ...state,
        values: [],
      };
    case 'CHANGE_FONTS':
      return {
        ...state,
        fonts: {
          ...state.fonts,
          [action.font]: !state.fonts[action.font]
        }
      };
    case 'TOGGLE_UPPERCASE':
      return {
        ...state,
        allowUppercase: !state.allowUppercase
      };
    // case 'GENERATE':
    //   return {
    //     ...state,
    //     table: generateTable()
    //   }
    default:
      return state;
  }
};
