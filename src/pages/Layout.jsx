import { Outlet } from "react-router-dom";
import Header from "../components/header/Index";

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
