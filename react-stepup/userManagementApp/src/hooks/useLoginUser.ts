import { useCallback, useContext } from "react"

import { LoginUserContextType, LoginUserContext } from "../providers/loginUserProvider"

export const useLoginUser = (): LoginUserContextType => useContext(LoginUserContext)