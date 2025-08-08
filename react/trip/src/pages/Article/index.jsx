import { Outlet, Link } from "react-router-dom"
const Article = () => {
  return (
    <>
      <Outlet />
      <div>
        {/* <Link to="/article/new">发布新文章</Link> */}
      </div>

    </>
  )
}
export default Article
