import { supabase } from "@/shared/api/supabase"

type signInType = {
    email: string,
    password: string,
}

export const signIn = async ({email, password}: signInType) => {
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    })
    // eslint-disable-next-line no-console
    console.log(data, error)
    // TODO:
}