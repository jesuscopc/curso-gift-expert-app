import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ categorie }) => {

  const { data: imgs, loading } = useFetchGifs( categorie );

  return (
    <>
      <h3 className="card animate__animated animate__fadeIn">{ categorie }</h3>
      { loading && <p className="card animate__animated animate__flash">loading...</p> }
      <div className="card-grid">
          {imgs.map( img =>
            (
              <GifGridItem
                key={ img.id }
                { ...img } 
              />
            )
          )}
      </div>
    </>
  )
}
