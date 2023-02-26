import React from 'react'
import colorNames from 'colornames'

export default function InputColor({ colorValue, setColorValue, setHexValue, isDarkText, setIsDarkText }) {
  return (
    <div>
        <input 
            type="text"
            placeholder='Enter color name' 
            value={colorValue}
            onChange={(e) => {
                setColorValue(e.target.value)
                setHexValue( colorNames(e.target.value) )}}
            />
        <button
            type="button"
            onClick={() => setIsDarkText(!isDarkText)}>
            Toggle Text Color
        </button>
    </div>
  )
}
