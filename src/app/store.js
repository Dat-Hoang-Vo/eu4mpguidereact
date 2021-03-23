import { configureStore } from '@reduxjs/toolkit';
import infoReducer from '../components/country/InfoSlice'

export default configureStore({
    reducer: {
        quickInfo: infoReducer
    }
})