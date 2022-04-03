import React,{useState} from "react";
import Web from "./Web/index";
import Mobile from "./Mobile/index"
import {AiOutlineMenuUnfold} from "react-icons/ai";
import './header.css';
function Header() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="header">
      <a href="/">
      <div className="logo">Shukl Kashyap</div>
      </a>
      
      <dic className="menu">
        <dev className="web_menu">
          <Web />
        </dev>
        <div className="mobile_menu">
          <div onClick={ () => setIsOpen(!isOpen)}>
          <AiOutlineMenuUnfold className="menu_icon" /> 
          </div>
          {
            isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen}/>
          }
        </div>
      </dic>
    </div>
  );
}

export default Header;
