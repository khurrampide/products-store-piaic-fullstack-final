import { cookies } from "next/headers"

export function getUserCookie(){
    const setCookies = cookies();
    const user_id = cookies().get("user_id")
    return user_id
}