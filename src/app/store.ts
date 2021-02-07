import { configureStore, ThunkAction, Action, getDefaultMiddleware } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import itemsReducer from './itemsSlice';
import userReducer from './userSlice';
import {getFirestore} from 'redux-firestore'
import {
  ReactReduxFirebaseProvider,
  firebaseReducer
} from 'react-redux-firebase'
import { createFirestoreInstance, firestoreReducer } from 'redux-firestore'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    items: itemsReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
