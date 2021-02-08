import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Item } from '../Model';
import { AppThunk, RootState } from './store';

interface ItemsSlice  {
    items: [Item] | [],
    newItem: Item | null
}

const initialState: ItemsSlice = {
  items: [],
  newItem : null
}

export const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
  setItems: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
     state.items = action.payload
    },
  },
});

export const { setItems } = itemsSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
// export const incrementAsync = (amount: number): AppThunk => dispatch => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount));
//   }, 1000);
// };

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectItems = (state: RootState) => state.items

export default  itemsSlice.reducer;
