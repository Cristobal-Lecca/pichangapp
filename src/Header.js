import React from "react";
// import SearchIcon from '@mui/icons-material/Search';
// import LanguageIcon from "@mui/icons-material/Language";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import MuiThemeProvider from "@material-ui/styles/MuiThemeProvider";
import "./Header.css";
import { Link } from 'react-router-dom';
import logo from './logo.png'


function Header() {
  return <>

    <div className="header">
      <Link to='/'>
        <img
          className="header__icon"
          src={logo}
          alt=""
        />
      </Link>
      

      {/* 
      <div className="header__center">
        <input type="text" />
        
      </div>
      <div className="header__right">
        <p>Become a host</p>
        
      </div>
    */}

    </div>

    </>
}

export default Header;
