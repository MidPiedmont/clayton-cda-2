import { Outlet } from "react-router";

export default function EndPageLayout() {
    return(
      <div>
        <nav>Navbar goes here</nav>
        <Outlet />
      </div>
    )
}