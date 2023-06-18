import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Advantage = {
  value: string;
};

type FormData = {
  phone: string;
  email: string;
  nickname: string;
  name: string;
  surname: string;
  sex: 'man' | 'woman' | '';
  advantages?: Advantage[];
  radio: string;
  checkbox?: number[];
  about: string;
};

type FormState = {
  formData: FormData;
  step: number;
  isEmailValid: boolean;
  isPhoneValid: boolean;
};

export type RootState = {
  form: FormState;
};

const initialState: FormState = {
  formData: {
    phone: '+7 (963) 293-77-10',
    email: 'i.sedow2012@yandex.ru',
    nickname: '',
    name: '',
    surname: '',
    sex: '',
    advantages: [{ value: '' }, { value: '' }, { value: '' }],
    radio: '1',
    checkbox: [],
    about: '',
  },
  step: 1,
  isEmailValid: true,
  isPhoneValid: true,
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setFormData: (state, action: PayloadAction<FormData>) => {
      state.formData = { ...state.formData, ...action.payload };
    },
    setIsEmailValid: (state, action: PayloadAction<boolean>) => {
      state.isEmailValid = action.payload;
    },
    setIsPhoneValid: (state, action: PayloadAction<boolean>) => {
      state.isPhoneValid = action.payload;
    },
    nextStep: (state) => {
      state.step += 1;
    },
    prevStep: (state) => {
      state.step -= 1;
    },
    reset(state) {
      state.step = initialState.step;
      state.isEmailValid = initialState.isEmailValid;
    },
  },
});

export const {
  nextStep,
  prevStep,
  setFormData,
  setIsEmailValid,
  setIsPhoneValid,
  reset,
} = formSlice.actions;

export default formSlice.reducer;
