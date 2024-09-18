import { createSlice } from "@reduxjs/toolkit";
import { usersList } from "../../data/usersData";




const userSlice = createSlice({
    name: 'users',
    initialState: usersList,
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload)
        },

        updateUser: (state, action) => {
            const {id, name, email} = action.payload
            const uId = state.find(n => n.id == id)

            if(uId) {
                uId.name = name,
                uId.email = email
            }
        },

        deleteUser: (state, action) => {
            const { id } = action.payload
            const uId = state.find(n => n.id == id)

            if(uId) {
                return state.filter(n => n.id != id)
            }
        }
    }
})


export const { addUser, updateUser, deleteUser } = userSlice.actions

export default userSlice.reducer