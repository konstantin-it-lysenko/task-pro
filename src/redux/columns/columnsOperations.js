// import { createAsyncThunk } from '@reduxjs/toolkit';
// import { axiosInstance, ENDPOINTS } from 'api';

// export const addColumn = createAsyncThunk(
//   'columns/addColumn',
//   async (newColumn, thunkAPI) => {
//     try {
//       const response = await axiosInstance.post(
//         ENDPOINTS.columns.allColumns,
//         newColumn
//       );
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const deleteColumn = createAsyncThunk(
//   'columns/deleteColumn',
//   async (columnId, thunkAPI) => {
//     try {
//       const response = await axiosInstance.delete(
//         ENDPOINTS.columns.oneColumn(columnId)
//       );
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const editColumn = createAsyncThunk(
//   'columns/editColumn',
//   async ({ editedColumn, id }, thunkAPI) => {
//     try {
//       const response = await axiosInstance.patch(
//         ENDPOINTS.columns.oneColumn(id),
//         editedColumn
//       );
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const fetchColumnsOfBoard = createAsyncThunk(
//   'columns/fetchAllOfBoard',
//   async (boardId, thunkAPI) => {
//     try {
//       const response = await axiosInstance.get(
//         ENDPOINTS.columns.allColumns,
//         boardId
//       );
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
