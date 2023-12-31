import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  table2RollNos: [],
  table3Data: [],
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    submit: (state, action) => {
      state.users.push(action.payload);
    },
    remove: (state, action) => {
      const index = state.users.findIndex(user => user.rollno === action.payload);
      if (index !== -1) {
        state.users.splice(index, 1);
      }
    },
    edit: (state, action) => {
      const { rollno, updatedUser } = action.payload;
      const index = state.users.findIndex(user => user.rollno === rollno);
      if (index !== -1) {
        state.users[index] = { ...state.users[index], ...updatedUser };
      }
    },
    addTable2RollNo: (state, action) => {
      state.table2RollNos.push(action.payload);
    },
    saveTable3Data: (state, action) => {
      state.table3Data = action.payload;
    },
    removeTable3RollNo: (state, action) => {
      const removedRollNo = action.payload;
      const updatedTable3Data = state.table3Data.filter(row => row.rollno !== removedRollNo);
      state.table3Data = updatedTable3Data;
      state.table2RollNos.push(removedRollNo);
    },
  },
});

export default userSlice.reducer;
export const { submit,  remove, edit ,addTable2RollNo,saveTable3Data,removeTable3RollNo } = userSlice.actions;
export const selectUsers = (state) => state.user.users;
