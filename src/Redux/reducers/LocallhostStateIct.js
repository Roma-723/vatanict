import { createSlice } from "@reduxjs/toolkit";

const LocallhostStateIct = createSlice({
    name:'LocallhostStateIct',
    initialState: ({    
        language:'ru',
        project_item: {},
    }),
    reducers: ({
        setLanguage: (state, aciton) => {
            state.language = aciton.payload;
        },
        setProjectItem: (state, action) => {state.project_item = action.payload}
    }),
})

export const {
    setLanguage,
    setProjectItem,
} = LocallhostStateIct.actions

export default LocallhostStateIct.reducer