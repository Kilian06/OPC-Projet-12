import React from "react";
import logoSportSee from "../../assets/logoSportSee.png";
import { NavLink } from "react-router-dom";

function NavBarHor(props) {
  return (
    <div className="menuHor">
      <img className="menuHorLogo"src={logoSportSee} alt="" />
      <NavLink className="menuHorLink">Accueil</NavLink>
      <NavLink className="menuHorLink">Profil</NavLink>
      <NavLink className="menuHorLink">Réglage</NavLink>
      <NavLink className="menuHorLink">Communauté</NavLink>
    </div>
  );
}

export default NavBarHor;
