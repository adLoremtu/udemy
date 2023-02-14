import { useCallback, useState } from "react"
import axios from "axios"

import { UserType } from "../types/api/user"
import { useMessage } from "./useMessage"

export const useAllUsers = () => {
  const [loading, setLoading] = useState(false)
  const [users, setUsers] = useState<UserType[]>([])
  const { showMessage } = useMessage()

  const getUsers = useCallback(() => {
    setLoading(true)
    axios.get<UserType[]>("https://jsonplaceholder.typicode.com/users/").then((res) => {
      setUsers(res.data)
    }).catch((err) => {
      showMessage({ title: 'ユーザ取得に失敗しました', status: 'error' })
    }).finally(() => {
      setLoading(false)
    })
  }, [])

  return { getUsers, loading, users }
}