
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const authApi = createApi({
    reducerPath: "auth",
    tagTypes: ['Auth'],
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000'
    }),
    endpoints: (builder) => ({
        signup: builder.mutation({
            query: (user) => ({
                url: `/signup`,
                method: "POST",
                body: user
            }),
            invalidatesTags: ['Auth']
        }),

        signin: builder.mutation({
            query: (user) => ({
                url: `/signin`,
                method: "POST",
                body: user
            }),
            invalidatesTags: ['Auth']
        }),

    
    })
})

export const {useSigninMutation, useSignupMutation} = authApi

export const authReducer = authApi.reducer
export default authApi