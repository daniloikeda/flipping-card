import PropTypes from "prop-types";
import "./FlippingCard.css";
import React, { useState, useEffect } from "react";

export function FlippingCard ({
    frontBackgroundColor = 'pink',
    frontTitle = 'Set "frontTitle" to empty to hide it',
    frontTitleFontSize = '20px',
    frontDescription = 'Set "frontDescription" to empty to hide it',
    backBackgroundColor = 'lightcyan',
    backTitle = 'Set "backTitle" to empty to hide it',
    backDescription = 'Set "backDescription" to empty to hide it',
    cardWidth = '400px',
    cardHeight = '300px'
  })
  {
    return (
      <div className="card" style={{width:cardWidth, height:cardHeight}}>
        <div className="card__content card__hover card__flip" >
          
          {/* Card front */}
          <div className="card__front" style={{backgroundColor: frontBackgroundColor}}>
            <label className="title" style={{fontSize:frontTitleFontSize}}>{frontTitle}</label>
            <p className="description">{frontDescription}</p>
          </div>

          {/* Card back */}
          <div className=" card__back" style={{backgroundColor: backBackgroundColor}}>
            <label className="title">{backTitle}</label>
            <p className="description">{backDescription}</p>
          </div>  
        </div>
      </div>
  );
}

FlippingCard.propTypes = {
  frontBackgroundColor: PropTypes.string,
  backBackgroundColor: PropTypes.string,
  cardWidth: PropTypes.string,
  cardHeight: PropTypes.string,
  frontTitle: PropTypes.string,
  rotateOnHover: PropTypes.bool
}