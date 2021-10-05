import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface IUser {
  id?: number
  name?: string
}

const initialState: IUser = {
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<IUser>) => ({ ...state, ...action.payload }),
    logout: () => initialState
  }
})

export const { login, logout } = userSlice.actions

export default userSlice.reducer