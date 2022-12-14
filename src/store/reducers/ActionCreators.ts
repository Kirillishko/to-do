import axios, {AxiosError} from "axios";
import {AppDispatch} from "../store";
import {IUser} from "../../models/IUser";
import {userSlice} from "./UserSlice";
import {createAsyncThunk} from "@reduxjs/toolkit";

const actions = userSlice.actions;

export const fetchUsers = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(actions.usersFetching())
        const response = await axios.get<IUser[]>(`https://jsonplaceholder.typicode.com/users`)
        dispatch(actions.usersFetchingSuccess(response.data))
    } catch (e : any) {
        dispatch(actions.usersFetchingError(e.message))
    }
}

// export const fetchUsers = createAsyncThunk(
//     'user/fetchAll',
//     async (_, thunkAPI) => {
//         try {
//             const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
//             return response.data;
//         } catch (e) {
//             return thunkAPI.rejectWithValue("Сосать + лежать")
//         }
//     }
// )