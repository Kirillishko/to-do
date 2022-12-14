import React, {useEffect} from 'react';
import './App.css';
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import {userSlice} from "./store/reducers/UserSlice";
import {fetchUsers} from "./store/reducers/ActionCreators";

function App() {
    const dispatch = useAppDispatch();
    const {users, isLoading, error} = useAppSelector(state => state.userReducer)

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    if (isLoading) {
        return (
        <h1>Загрузка</h1>
        )
    }

    if (error) {
        return (
            <h1>{error}</h1>
        )
    }

    return (
    <div className="App">
        {isLoading && <h1>Загрузка</h1>}
        {error && <h1>{error}</h1>}
        {JSON.stringify(users, null, 2)}
    </div>
    );
}

export default App;
