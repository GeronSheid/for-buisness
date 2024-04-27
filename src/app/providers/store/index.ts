import { configureStore } from "@reduxjs/toolkit";
import {viewerReducer} from '../../../entities/users/viewer';
import { projectReducer } from "../../../entities/project";


const store = configureStore({
    reducer: {
        auth: viewerReducer,
        project: projectReducer
    },
})

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;