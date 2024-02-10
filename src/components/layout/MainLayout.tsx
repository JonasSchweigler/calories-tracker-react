import React from "react";
import { Outlet } from "react-router";
import styled from "styled-components";

const Layout = styled.div`
  height: 100vh;
  overflow-y: auto;

  .layout {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
    display: flex;
    flex-direction: column;
  }
`;

export const MainLayout = () => {
  return (
    <Layout>
      <div className='layout'>
        <Outlet />
      </div>
    </Layout>
  );
};
