import { Outlet } from 'react-router-dom'
const SubLayout = () => {
  return (
    <>
      <Outlet />
      <div>
        <h1>SubLayout</h1>
      </div>
    </>
  )
}

export default SubLayout