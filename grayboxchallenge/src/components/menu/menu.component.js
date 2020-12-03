import React, { useState, useEffect, useRef } from 'react';
import '../app/app.css'
import {useFetch} from '../hooks/useFetch'
import MenuLinks from "./menuLinks.component"
import Gallery from "../gallery/gallery.component"
import GenericButton from '../utils/genericbutton.component';
import SubMenuTitle from '../menu/subMenuTitle.component'

const Menu = () => { 

  const [open, setOpen] = useState(false);
  const divRoot = useRef(null)
  const { data } = useFetch(`https://cors-anywhere.herokuapp.com/http://codetestjson.s3-website-us-west-2.amazonaws.com/kittens.json`);

    useEffect(() => {
    document.addEventListener("click", handleMenuClick, false);
    return () => {
      document.removeEventListener("click", handleMenuClick, false);
    }
  });

  const handleMenuClick = (e) => {
    if (open === true) {
      setOpen(false);
    }
  };

  const [text] = useState("Show Results")

  const toogle = (e) => {
    console.log(e);
    e.stopPropagation();
    setOpen(!open);
  };
    
  
  if (data !== null) {    
    let menuStatus = open ? 'isopen' : '';
    return (
      <div ref={divRoot}>
        <div className="menubar">
                <div className="hambclicker" onClick={toogle} ></div>
                <div id="hambmenu" className={menuStatus} ><span></span><span></span><span></span><span></span></div>
                <div className="title">
                  <span>GrayBox Challenge</span>
                </div>
        </div>        
        <div className={menuStatus} id="menu">
          <SubMenuTitle />
        <ul>
        {          
          data.filters.map(subGroups => (         
            <div>              
                <MenuLinks filters={subGroups} />              
            </div>
          ))        
        }
            <li>
              <GenericButton text={text} />
            </li>
          </ul>
          </div>
        <div id="container">
          <Gallery />
        </div>
      </div>
    )    
  } else {
    return ( <h1>Please check the API</h1>)
  }
  
    
}

export default Menu;