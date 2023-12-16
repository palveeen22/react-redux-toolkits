// disini kita akan membuat storenya dan memasang reducer dari slice yang kita buat
import { configureStore } from "@reduxjs/toolkit";
import posts from "../Store/FetchSlice";

export default configureStore({
  reducer: {
    posts,
  },
});
