import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query";


export const postAPI = createApi({
    reducerPath: 'postAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com'}),
    endpoints: (build) => ({
        fetchAllPosts: build.query({
            query: () => ({
                url: `/posts`
            })
        })
    })
})

const isFetchBaseQueryErrorType = (error: any): error is FetchBaseQueryErrorType => 'status' in error

export const {useFetchAllPostsQuery} = postAPI;