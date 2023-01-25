import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam.p.rapidapi.com',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', 'ee964281fdmsh75dd69b3b1637bdp18bca7jsn49d0702c931b');
            
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({query: () => '/charts/track'}),
    })
})

export const {
    useGetTopChartsQuery,
} = shazamCoreApi;