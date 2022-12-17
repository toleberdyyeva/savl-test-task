import { createSlice } from '@reduxjs/toolkit'
import initialState from './address.state'
import reducers from './address.reducers'

const NAME = 'AddressModule'

const AddressSlice = createSlice({
    name: NAME,
    initialState,
    reducers
})

const { reducer } = AddressSlice;
export const AddressActions = AddressSlice.actions
export { reducer as AddressModule };
export { default as AddressSaga } from './address.saga';
