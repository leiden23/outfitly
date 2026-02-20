import { z } from 'zod'

export const schema = z.object({
    email: z.string().trim().email('некорректный email'),
    password: z.string().min(6, 'минимум 6 символов'),
})