import reducerWeather from "../reducers";
import { configureStore } from "@reduxjs/toolkit";
const store = configureStore({
  reducer: reducerWeather
});
export default store;


//store il contenitore dello stato di redux, per gestire lo stato dall'esterno
