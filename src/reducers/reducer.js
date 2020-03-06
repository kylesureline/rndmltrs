const values = 'abcdefghijklmnopqrstuvwxyz'.split('');
const table = [...Array(10)].map((_, i) => ([...Array(10)].map((_, i) => ({
  value: values[Math.floor(Math.random() * values.length)],
  className: `font-${Math.ceil(Math.random() * 4)}`
}))));

export const initialState = {
  values,
  allowUppercase: true,
  fonts: [1, 2, 3, 4],
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
        fonts: state.fonts.includes(action.font) ? (
          // if it's already there, remove it
          state.fonts.filter(font => font !== action.font)
        ) : (
          // if it's not there, add it
          [...state.fonts, action.font]
        )
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
