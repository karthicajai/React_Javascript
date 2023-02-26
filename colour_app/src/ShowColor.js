import React from 'react'

export default function ShowColor({ colorValue , hexValue, isDarkText}) {
  return (
    <div 
        className="square" 
        style={{
            background: colorValue,
            color: isDarkText ? "#000" : "#FFF"
            }}>
        <div>{colorValue? colorValue : "Empty value"}</div>
        <div>{hexValue? hexValue : null}</div>
    </div>
  )
}