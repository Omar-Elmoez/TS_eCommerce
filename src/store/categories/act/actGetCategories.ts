import { TResponse } from "@/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const actGetCategories = createAsyncThunk("categories/getCategories", async (_, thunkAPI) => {

  const { rejectWithValue } = thunkAPI;

  try {

    const response = await axios.get<TResponse>("http://localhost:5005/categories");
    return response.data;

  } catch (error) {

    if (axios.isAxiosError(error)) {
      return rejectWithValue(error.response?.data.message || error.message);
  } else {
    return rejectWithValue("An unexpected error occurred");
  }
  
}
});

export default actGetCategories