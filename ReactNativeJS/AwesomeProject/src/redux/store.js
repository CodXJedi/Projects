import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import ProductReducer from "./slice/ProductSlice";
import userReducer from "./slice/userSlice";

export const store = configureStore({
  reducer: {
    product: ProductReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
