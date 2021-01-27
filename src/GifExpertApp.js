import React, { useState } from 'react'
import { GifGrid } from './components/GifGrid';
import { AddCategory } from './components/AddCategory';

const GifExpertApp = ({ defaultCategories = []}) => {

  const [categories, setCategories] = useState(defaultCategories);

  return (
    <>
      <h2>GifEXpertApp</h2>
      <AddCategory
        setCategorie= { setCategories }
      />
      <hr/>
        {/* <button onClick={ handleAdd }>Agregar</button> */}
      <ol>
        { categories.map( categorie => (
            <GifGrid
              key={ categorie } 
              categorie={ categorie }
            />
          ))
        }
      </ol>
    </>
  )
}

export default GifExpertApp;