import React, { useState, useEffect, useRef } from 'react';
import '../app/app.css'
import {useFetch} from '../hooks/useFetch'
import MenuLinks from "./menuLinks.component"
import GenericButton from '../utils/genericbutton.component';
import SubMenuTitle from '../menu/subMenuTitle.component'
import Gallery from '../gallery/gallery.component';

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

  const generateKey = (pre) => {
    return `${ pre }_${ new Date().getTime() }`;
  }
    
  
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
        <div className={menuStatus} key={text} id="menu">
          <SubMenuTitle />
        <ul>
        {          
          data.filters.map(subGroups => (         
            <div key={ generateKey(subGroups) }>
                <MenuLinks filters={subGroups} />              
            </div>
          ))        
        }
            <li>
              <GenericButton text={text} />
            </li>
          </ul>
          </div>
        <div className="container">
          {
            data.images.map(item => (
              <div key={ generateKey(item.altText)}>
                <Gallery alt={item.altText} source={item.imageUrl} />
              </div>
            ))
          }
        </div>
      </div>
    )    
  } else {
    return ( <h1>Please check the API</h1>)
  }
  
    
}

export default Menu;