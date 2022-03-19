import React, {useState} from 'react';

export default function Recipe({idx,editRecipe,recipes,setRecipes,recipe,onDeleteClick}){
    const {name,cuisine,photo,ingredients,preparation} = recipe;
    
    
    const [edit, setEdit] = useState(false);
    
    const [editedRecipe,setEditedRecipe] =useState({...recipe})
    const handleChange = ({target}) => setEditedRecipe({...editedRecipe,[target.name]:target.value})
    
    const editSwitchHandler = () => setEdit(!edit);
    const editSubmitHandler = () => editRecipe([idx,editedRecipe])
    return(
        !edit?(
        <tr key={idx}>
            <td className='content_td'><p>{name}</p></td>
            <td className='content_td'><p>{cuisine}</p></td>
            <td className='content_td'><img src={photo} alt=""/></td>
            <td className='content_td'><p>{ingredients}</p></td>
            <td className='content_td'><p>{preparation}</p></td>
            
            <td className='actionButtons content_td' style={{display:"flex",flexWrap:"wrap",flexDirection:"column", width:"100%",alignItems:"center",margin:"auto"}} >
                <button name="edit" id={idx} onClick={editSwitchHandler}>Edit</button>
                <button name="delete" onClick={onDeleteClick}>Delete</button>    
            </td>
                
                    
            
        </tr>)
        :
        (   
            <tr key={idx}>
                <td className='content_td'><input name="name" value={editedRecipe.name} onChange={handleChange}/></td>
                <td className='content_td'><input name="cuisine" value={editedRecipe.cuisine} onChange={handleChange}/></td>
                <td className='content_td'><input name="photo" value={editedRecipe.photo} onChange={handleChange} /></td>
                <td className='content_td'><textarea name="ingredients" onChange={handleChange} value={editedRecipe.ingredients}/></td>
                <td className='content_td'><textarea name="preparation" value={editedRecipe.preparation} onChange={handleChange}/></td>
                <td className='content_td' style={{display:"flex",flexWrap:"wrap",flexDirection:"column", width:"100%",alignItems:"center",margin:"auto"}} >
                    <button name="submit" id={idx} onClick={(e)=>{
                     
                        editSwitchHandler(e)
                        editSubmitHandler(idx,editedRecipe)
                        }}>Submit</button>
                      
                </td>
                    
                        
                
            </tr>
            
            )

    )
}