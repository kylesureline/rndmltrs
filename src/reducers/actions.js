export const ADD_WORD = word => ({
  type: 'ADD_WORD',
  word,
});

export const CLEAR_WORDS = () => ({
  type: 'CLEAR_WORDS',
});

export const CHANGE_FONTS = font => ({
  type: 'CHANGE_FONTS',
  font,
});

export const TOGGLE_UPPERCASE = () => ({
  type: 'TOGGLE_UPPERCASE',
});

export const GENERATE = () => ({
  type: 'GENERATE',
});

export const SET_FONT_SIZE = fontSize => ({
  type: 'SET_FONT_SIZE',
  fontSize,
});
