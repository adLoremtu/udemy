import { useCallback, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

import { UserType } from "../types/api/user"
import { useMessage } from "./useMessage"
import { useLoginUser } from "./useLoginUser"

export const useAuth = () => {
  const navigate = useNavigate()
  const { showMessage } = useMessage()
  const [loading, setLoading] = useState(false)
  const { setLoginUser } = useLoginUser()

  const login = useCallback((id: string) => {
    setLoading(true)

    axios.get<UserType>(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) => {
      if (res.data) {
        const isAdmin = res.data.id === 10;
        setLoginUser({ ...res.data, isAdmin })
        showMessage({ title: 'ログインしました', status: 'success' })
        navigate("/home")
      } else {
        showMessage({ title: 'ユーザが見つかりません', status: 'error' })
      }
    }).catch((err) => {
      showMessage({ title: 'ログインできません', status: 'error' })
    }).finally(() => {
      setLoading(false)
    })
  }, [history, showMessage])

  return { login, loading }
}