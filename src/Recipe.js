import React from 'react';

export default function Recipe({recipe,onDeleteClick}){
    return(
        <tr key={recipe.key}>
            <td className='content_td'><p>{recipe.name}</p></td>
            <td className='content_td'><p>{recipe.cuisine}</p></td>
            <td className='content_td'><img src={recipe.photo} alt=""/></td>
            <td className='content_td'><p>{recipe.ingredients}</p></td>
            <td className='content_td'><p>{recipe.preparation}</p></td>
            <td className='content_td'><button name="delete" onClick={onDeleteClick}>Delete</button></td>
        </tr>
    )
}