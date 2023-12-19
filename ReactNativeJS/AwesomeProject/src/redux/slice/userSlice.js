import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  userName: null,
  userLoading: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      // console.log("got user", user);
      state.user = action.payload;
      // console.log("u==", state.user);
    },
    setUserName: (state, action) => {
      state.userName = action.payload;
    },
  },
});

export const { setUser, setUserName } = userSlice.actions;

export default userSlice.reducer;
