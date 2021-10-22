import React from 'react'

function Recipe({recipe}) {
    return (
        <div>
                  
                <img  src={recipe["recipe"]["image"]} alt="" />
                  <p>{recipe["recipe"]["label"]}</p>  
                 
                  </div>
    )
}

export default Recipe
