import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const GlobalRequest = createApi({
    reducerPath: 'GlobalRequest',
    baseQuery: fetchBaseQuery({baseUrl:''}),
    endpoints: (build) => ({
        getProjects: build.query({
            query: () => '/'
        })
    })
})

export const { useGetProjectsQuery } = GlobalRequest; 

export default GlobalRequest