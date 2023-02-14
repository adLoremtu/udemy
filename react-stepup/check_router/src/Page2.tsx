import { Link, Outlet } from "react-router-dom"

export const Page2 = () => {
  return (
    <div>
      <h1>Page2ページです</h1>
      <Link to="999">URL Parameter</Link>
      <br />
      <Link to={{
        pathname: '888',
        search: '?name=hogehoge'
      }}>URL Search Parameter</Link>
      <Outlet />
    </div>
  )
}