import { createSlice } from "@reduxjs/toolkit"
import type { IProject } from '../types/projectTypes.ts';

interface IProjectState {
    projectsList: IProject[];
}

const initialState: IProjectState = {
    projectsList: []
}

const projectSlice = createSlice({
    name: 'project',
    initialState,
    reducers: {

    },
    // extraReducers: тута будет запрос проектов с сервачка
})

export default projectSlice;
 