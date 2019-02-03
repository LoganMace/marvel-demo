import React from "react";

export default function ComicModal(props) {
  console.log("props: ", props);
  return props.comic ? (
    <div className="comic-modal">
      <button className="x">X</button>
      <div className="comic-modal-title">
        <h3>{props.comic.title}</h3>
        <img
          className="comic-modal-img"
          src={`${props.comic.thumbnail.path}.${
            props.comic.thumbnail.extension
          }`}
          alt={props.comic.title}
        />
      </div>
      <p>{props.comic.description}</p>
    </div>
  ) : (
    <>
      <p>test</p>
    </>
  );
}
