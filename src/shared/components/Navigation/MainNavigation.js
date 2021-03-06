import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom'
;
import MainHeader from './MainHeader'
import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer';
import './MainNavigation.css'
import Backdrop from '../UIElements/Backdrop';

//Main component to render all header components 
const MainNavigation = props => {
  //State for conditional SideDrawer component display 
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  //Handler switches for conditional SideDrawer component display 
  const openDrawer = () => {
    setDrawerIsOpen(true)
  };

  const closeDrawer = () => {
    setDrawerIsOpen(false)
  };

  return (
    <Fragment>
      {/*Conditional SideDrawer backdrop to be clickable to close the SideDrawer*/}
      {drawerIsOpen && <Backdrop onClick={closeDrawer}/>}
      {/*Conditional SideDrawer content to be displayed if true, else null*/}
       {drawerIsOpen && 
       <SideDrawer>
        <nav className='main-navigation__drawer-nav'>
          <NavLinks />
        </nav>
      </SideDrawer>}
      <MainHeader>
        {/*Creates hamburger button menu*/}
        <button className="main-navigation__menu-btn" onClick={openDrawer}>
          <span />
          <span />
          <span />
        </button>
        <h1 className="main-navigation__title">
        <Link to="/"> Your Pets</Link>
        </h1>
        <nav className='main-navigation__header-nav'>
          <NavLinks />
        </nav>
      </MainHeader>
    </Fragment>
  );
};

export default MainNavigation; 