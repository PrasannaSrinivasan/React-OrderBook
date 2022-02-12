import { configureStore , createSlice} from '@reduxjs/toolkit';

const dataSlice = createSlice({
  name: 'data',
  initialState: { records: [] },
  reducers: {
    updateData( state , action) {
      state.records = action.payload.records;
    }
  }
});

const store = configureStore({
  reducer: dataSlice.reducer,
});


export const dataActions =  dataSlice.actions;

export default store;
