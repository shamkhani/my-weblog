import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

interface ThemeState {
  theme: 'light' | 'dark';
}

const initialState: ThemeState = {
  theme: 'light',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state, action) => {
      if (action.payload) {
        state.theme = action.payload; 
      } else {
        state.theme = state.theme === 'light' ? 'dark' : 'light';
      }
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export const selectTheme = (state: RootState) => state.theme.theme;

export default themeSlice.reducer;
