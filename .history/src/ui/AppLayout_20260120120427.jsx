import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";
import styled from "styled-components";

const Main = styled.main`
  background-color: var(--color-grey-);
`;

function AppLayout() {
  return (
    <div>
      <SideBar />
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
