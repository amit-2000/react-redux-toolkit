import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    adduser(state, actions) {},
    removeUser(state, actions) {},
  },
});

export default usersSlice.reducer;
