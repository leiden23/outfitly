import z from "zod";

export const schema = z.object({
    name: z.string().trim().min(1, 'введите имя').regex(/^[a-zA-Zа-яА-Я\s]+$/, 'некорректные символы'),
    email: z.string().trim().email('некорректный email'),
    password: z.string().min(6, 'минимум 6 символов'),
    password2: z.string().min(1, 'подтвердите пароль'),
}).refine((data) => data.password === data.password2, {
    path: ['password2'],
    message: 'пароли не совпадают',
});