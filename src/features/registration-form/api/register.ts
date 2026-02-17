import { supabase } from "@/shared/api/supabase"

type RegisterType = {
    email: string,
    password: string,
    name: string,
}

export const register = async ({email, password, name}: RegisterType) => {
    const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
            data: {
                name,
            }
        },
    })
    // eslint-disable-next-line no-console
    console.log(data, error);
    // TODO:
}