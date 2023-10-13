import { configureStore } from '@reduxjs/toolkit';
import myReducer from './slices';

export const store = configureStore({
  reducer: {
    mySlice: myReducer
  }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch


// import { createStore, combineReducers} from 'redux';
// import userReducer from './reducers';

// const rootReducer = combineReducers({ userReducer });

// export const Store = createStore(rootReducer);


