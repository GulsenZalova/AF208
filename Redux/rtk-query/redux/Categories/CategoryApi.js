import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const CategorApi=createApi({
    reducerPath:"categoryApi",
    baseQuery:fetchBaseQuery({baseUrl:"https://northwind.vercel.app/api/categories"}),
    endpoints:(builder)=>({
        getCategories:builder.query({
            query : () => "/"
        }),
        getCategory:builder.query({
            query:(id)=> `/${id}`
        }),
        deleteCategory: builder.mutation({
            query:(id)=>({
                url:`/${id}`,
                method:"DELETE"
            })
        })
        ,
        postCategory:builder.mutation({
            query :(newCategory)=>({
                url:"/",
                method:"POST",
                body:newCategory
            })
        }),
        putCategory:builder.mutation({
            query :(updateCategory)=>({
                url:`/${updateCategory.id}`,
                method:"PUT",
                body:{name:updateCategory.name,description:updateCategory.description}
            })
        })
   
    })
})


export let  {
    useGetCategoriesQuery,
    useGetCategoryQuery,
    useDeleteCategoryMutation,
    usePostCategoryMutation,
    usePutCategoryMutation
} = CategorApi


