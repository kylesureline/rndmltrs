const generateTable = (fonts, values, allowUppercase) => {
  return [...Array(6)].map((_, rowIndex) => {
    return [...Array(6)].map((_, colIndex) => {
      let value = values[Math.floor(Math.random() * values.length)];
      if(allowUppercase) {
        value = Math.random() > .5 ? `${value.slice(0, 1).toUpperCase()}${value.slice(1)}` : value;
      }
      const font = fonts[Math.floor(Math.random() * fonts.length)];
      return {
        value,
        className: `font-${font}`
      };
    })
  })
};

const values = 'abcdefghijklmnopqrstuvwxyz'.split('');
const allowUppercase = true;
const fonts = [1, 2, 3, 4];
const table = generateTable(fonts, values, allowUppercase);

export const initialState = {
  values,
  allowUppercase,
  fonts,
  table,
  fontSize: 32,
};

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_WORD':
      return {
        ...state,
        values: [...state.values, ...action.word.split(' ')].filter(word => word.replace(' ', '') !== ''),
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
    case 'GENERATE':
      return {
        ...state,
        table: generateTable(state.fonts, state.values, state.allowUppercase)
      };
    case 'SET_FONT_SIZE':
      return {
        ...state,
        fontSize: action.fontSize
      };
    case 'MAKE_FONT_SMALLER':
      return {
        ...state,
        fontSize: state.fontSize - 1 >= 12 ? state.fontSize - 1 : state.fontSize
      };
    case 'MAKE_FONT_LARGER':
      return {
        ...state,
        fontSize: state.fontSize + 1 <= 72 ? state.fontSize + 1 : state.fontSize
      };
    default:
      return state;
  }
};
