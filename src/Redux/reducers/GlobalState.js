import { createSlice } from "@reduxjs/toolkit";


const GlobalState = createSlice({
    name: 'GlobalState',
    initialState: ({
        order_service: false,
        apply_model: false,
        pdfModel:{open:false,image:null},
    }),
    reducers: ({
        setOrderService: (state, action) => {state.order_service = action.payload},
        setApplyModel: (state, action) => {state.apply_model = action.payload},
        setPdfModel: (state, action) => {state.pdfModel = action.payload},
    }),
})

export const {
    setOrderService,
    setApplyModel,
    setPdfModel,
} = GlobalState.actions

export default GlobalState.reducer