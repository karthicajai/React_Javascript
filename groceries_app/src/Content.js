import React from 'react'
import { FaTrashAlt } from 'react-icons/fa';

export default function Content({ items, handleCheck, handleDelete }) {
  return (
    <>
        {items.length ? (
        <ul>
            {items.map((item) => (
                <li 
                    key={item.id} 
                    className="item">
                    <input
                        type="checkbox"
                        onChange={() => handleCheck(item.id)}
                        checked={item.checked}
                    />
                    <label
                        style={(item.checked) ? { textDecoration: 'line-through' } : null}
                        onDoubleClick={() => handleCheck(item.id)}
                    >{item.item}</label>
                    <FaTrashAlt
                        onClick={() => handleDelete(item.id)}
                        role="button"
                        tabIndex="0"
                        aria-label={`Delete ${item.item}`}
                    />
                </li>
            ))}
        </ul>
        ):(
            <p style={{ marginTop: '2rem' }}>Your list is empty.</p>
        )}
    </>
  )
}
