import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { widgets } from "../data/widgets";
import { Widget } from "../models/widget.model";
import type { AppState } from "../store";

export interface WidgetsState {
    data: Widget[];
    status: 'idle' | 'loading' | 'failed';
}

const initialState: WidgetsState = {
    data: widgets,
    status: 'idle',
};

export const fetchWidgetsAsync = createAsyncThunk(
    'widgets/fetch',
    () => {
        return [];
        /*
        // TODO fetch
        const response = await fetchWidgets();
        return response.data;
        */
    },
);

export const widgetsSlice = createSlice({
    name: 'widgets',
    initialState,
    reducers: {
        pop: (state) => {
            state.data.pop();
        }
    },
});

export const { pop } = widgetsSlice.actions;

export const selectData = (state: AppState): Widget[] => state.widgets.data;

export default widgetsSlice.reducer;
