import React from 'react';
import Album from './Album';

export default function Albums({ albums, onAlbumClick }) {
  return (
    <div className="albums-container">
      {albums.map((album, index) => (
      <Album  
        key={album.id} 
        album={album} 
        onClick={() => onAlbumClick(index)}
      />))}
    </div>
  );
}