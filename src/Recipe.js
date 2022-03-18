import React from 'react';

export default function Recipe({recipe,onDeleteClick}){
    const {name,cuisine,photo,ingredients,preparation,key} = recipe;
    return(
        <tr key={key}>
            <td className='content_td'><p>{name}</p></td>
            <td className='content_td'><p>{cuisine}</p></td>
            <td className='content_td'><img src={photo} alt=""/></td>
            <td className='content_td'><p>{ingredients}</p></td>
            <td className='content_td'><p>{preparation}</p></td>
            <td className='content_td'><button name="delete" onClick={onDeleteClick}>Delete</button></td>
        </tr>
    )
}