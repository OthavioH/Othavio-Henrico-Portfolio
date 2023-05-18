import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export enum Language {
  ENGLISH = "en",
  BRAZILIAN_PORTUGUESE = "pt-br",
}

export interface LanguageState {
  language: Language;
}

const initialState: LanguageState = {
  language:
    navigator.language === Language.BRAZILIAN_PORTUGUESE
      ? Language.BRAZILIAN_PORTUGUESE
      : Language.ENGLISH,
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    changeLanguage(state, action: PayloadAction<Language>) {
      state.language = action.payload;
    },
  },
});

export const { changeLanguage } = languageSlice.actions;

export default languageSlice.reducer;
