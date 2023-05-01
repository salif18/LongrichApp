import React, { useContext } from "react";
import HomeIcon from "@mui/icons-material/Home";
import RoofingIcon from "@mui/icons-material/Roofing";
import NotificationsIcon from '@mui/icons-material/Notifications';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { MyStore } from "../../context/store";
const Navbar = () => {
  const {isDark ,theme , ChangeTheme} = useContext(MyStore)

  const image =`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCBttM2FPxA1sfmtEHayeJ6ubxF1eVnNvKWA&usqp=CAU`
  return (
    <nav className="navbar" style={{backgroundColor:theme.background}}>
      <div className="nav-bar-left">
        <RoofingIcon style={{fontSize:40 ,color:'green',fontWeight:'bold'}} color="green" />
        <h1>Admin</h1>
      </div>
      <div className="nav-bar-right">
        <div className="notification"><NotificationsIcon style={{fontSize:26 ,color:theme.text}}/></div>
        <div className="theme"><button className="btn" onClick={ChangeTheme}>{isDark ? <WbSunnyIcon style={{color:'orange'}}/>:<DarkModeIcon style={{color:'orange'}} />}</button></div>
        <div className="container-profile">
        <img className="img-profil" src={image} alt='ss' />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
