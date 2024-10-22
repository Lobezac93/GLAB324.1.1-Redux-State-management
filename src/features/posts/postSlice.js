import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: '1', title: 'First Post!', content: 'Hello' },
  { id: '2', title: 'Second Post!', content: 'More text' },
];

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded(state, action) {
      state.push(action.payload);
    },
  },
});

export const { postAdded } = postSlice.actions; // Export action creator from .actions
export default postSlice.reducer; // Export reducer
