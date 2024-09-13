import React from 'react';
import { Outlet } from 'react-router-dom';
import Buttons from './components/Buttons.jsx';
import styled from 'styled-components';

const LayoutContainer = styled.div`
  position: relative;
  min-height: 100vh; /* Ensures the layout takes at least the full viewport height */
`;

const ButtonsWrapper = styled.div`
  position: fixed; /* Keeps the buttons fixed in one position */
  bottom: 0; /* Position at the bottom of the viewport */
  width: 100%; /* Full width to align with the viewport edges */
 /* Background color to distinguish from other content */
  display: flex;
  justify-content: center; /* Center the buttons horizontally */
  padding: 1rem; /* Add padding around the buttons */
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1); /* Optional shadow for better visibility */
`;

function Layout() {
  return (
    <>
    <LayoutContainer>
      <Outlet /> {/* This renders the current route's content */}
    </LayoutContainer>
    <ButtonsWrapper>
      <Buttons /> {/* Buttons will appear on every page */}
    </ButtonsWrapper>
    </>
  );
}

export default Layout;
