import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import categoryReducer from "./category/categorySlice";
import productReducer from "./product/productSlice";
import orderReducer, { localStorageMiddleware } from "./order/orderSlice";
import modalReducer from "./ModalDelivery/ModalDeliverySlice";

export const store = configureStore ({
  reducer: {
    category: categoryReducer,
    product: productReducer,
    order: orderReducer,
    modal: modalReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(localStorageMiddleware)
});