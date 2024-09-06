import {z }from 'zod'


export const schemaOrder = z.object({
    name: z.string().min(1,'Error, add name'),
    email : z.string().min(1,'Error, add email'),
    telephone : z.number().min(1,'Error, add telephone')
})