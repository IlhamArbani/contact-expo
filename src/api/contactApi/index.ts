import { createApi } from "@reduxjs/toolkit/query/react";
import services from "../../services/service";
import { Contact, ContactPayload } from "../../types/contact";

export const contactApi = createApi({
  reducerPath: 'contactApi',
  baseQuery: services(),
  endpoints(builder){
    return {
      getContact: builder.query<Contact[], void>({
        query: () => ({url: `contact`, method: 'get'})
      }),
      postContact: builder.mutation<void, ContactPayload>({
        query: (data) => ({url: 'contact', data, method: 'post'})
      })
    }
  }
})

export const {
  useGetContactQuery,
  usePostContactMutation,
} = contactApi;