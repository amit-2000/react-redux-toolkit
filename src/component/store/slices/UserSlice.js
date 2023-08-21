import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    adduser(state, actions) {
      state.push(actions.payload);
    },
    removeUser(state, actions) {},
  },
});
export const { adduser } = usersSlice.actions;
export default usersSlice.reducer;
