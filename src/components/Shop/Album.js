import React from 'react';

function Album({ album, onClick }) {
  return (
    <div className="album" onClick={onClick}>
      <img src={album.image} alt={album.imageALT}></img>
      <div className="overlay" />
      <div className="caption">
        <h3 className="album-title">{album.title}</h3>
        <p className="album-info">{album.info}</p>
        {album.infoSub && (
          <p className="album-info-sub">{album.infoSub}</p>
        )}
      </div>
    </div>
  );
}

export default Album;