import { createSlice } from "@reduxjs/toolkit"
import type { IProject } from '../types/projectTypes.ts';

const mockList: IProject[] = [
    {id: 'id1', name: 'Бизнес приложуха', description: 'Верняк тема', profit: 1000, expectedProfit: 10000},
    {id: 'id2', name: 'Шавуха', description: 'Вкюсний и свежий', profit: 10000, expectedProfit: 5000},
    {id: 'id3', name: 'LBDY', description: 'Уникальный помощник в твоей учебе', profit: 5000, expectedProfit: 3000000},
    {id: 'id4', name: 'Скам1', description: 'Верняк тема', profit: 1000, expectedProfit: 10000},
    {id: 'id5', name: 'Скам2', description: 'Верняк тема', profit: 1000, expectedProfit: 10000},
    {id: 'id6', name: 'Скам3', description: 'Верняк тема', profit: 1000, expectedProfit: 10000},
  ]

interface IProjectState {
    projectsList: IProject[];
}

const initialState: IProjectState = {
    projectsList: mockList
}

const projectSlice = createSlice({
    name: 'project',
    initialState,
    reducers: {},
    // extraReducers: тута будет запрос проектов с сервачка
})

export default projectSlice.reducer;
 