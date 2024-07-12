import { useContext } from "react"
import { UserContextApi } from "../components/contextApiAnotherWay/UserContextApi"

export const UserHook = () =>{
    return useContext(UserContextApi)
}