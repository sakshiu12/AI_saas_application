import * as z from "zod"

export const formschema = z.object({
    prompt: z.string().min(1, {
        message:"promt is required"
    })
})