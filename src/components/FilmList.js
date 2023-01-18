import React from "react";
import Film from "./Film";

const FilmList = ({ films }) => {
  const filmNodes = films.map((film) => {
    return (
      <li key={film.id}>
        <a href={film.url}>
          <Film name={film.name}>{film.url}</Film>
        </a>
      </li>
    );
  });

  return <>{filmNodes}</>;
};

export default FilmList;
