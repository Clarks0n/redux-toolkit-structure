import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import UserService from "../../services/UserService";

const initialStateValue = { 
    dataSource: []
};

export const getAll = createAsyncThunk(
  "users/getAll",
  async () => {
    const res = await UserService.getAll();
    return res.data.results;
  }
);

export const getPagination = createAsyncThunk(
  "users/getPagination",
  async ({page} ) => {
    const res = await UserService.getPagination(page);
    return res.data.results;
  }
);

export const searchGender = createAsyncThunk(
  "users/searchGender",
  async ({page, gender}) => {
    const res = await UserService.searchGender(page,gender);
    return res.data.results;
  }
);

export const searchKeyword = createAsyncThunk(
  "users/searchKeyword",
  async ({page, keyword}) => {
    const res = await UserService.searchKeyword(page,keyword);
    return res.data.results;
  }
);

export const searchSorted = createAsyncThunk(
  "users/searchSorted",
  async ({page,dataField,sortOrder}) => {
    const res = await UserService.searchSorted(page,dataField,sortOrder);
    return res.data.results;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: initialStateValue,
  reducers: {
  
  },
  extraReducers: {
    [getAll.fulfilled]: (state, action) => {
      state.dataSource = action.payload
    },
    [getPagination.fulfilled]: (state, action) => {
      state.dataSource = action.payload
    },
    [searchGender.fulfilled]: (state, action) => {
      state.dataSource = action.payload
    },
    [searchKeyword.fulfilled]: (state, action) => {
      state.dataSource = action.payload
    },
    [searchSorted.fulfilled]: (state, action) => {
      state.dataSource = action.payload
    },
  },
});

export default userSlice;


