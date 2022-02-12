import { configureStore , createSlice} from '@reduxjs/toolkit';

const dataSlice = createSlice({
  name: 'data',
  initialState: { records: [], timer : 10 },
  reducers: {
    updateData( state , action) {
      state.records = action.payload.records;
    },
    updateTimer(state){
      state.timer = Number(state.timer) + 1;
    }
  }
});

const store = configureStore({
  reducer: dataSlice.reducer,
});


export const dataActions =  dataSlice.actions;

export default store;
