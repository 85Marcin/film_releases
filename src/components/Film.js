import React from "react";

const Film = ({ name, url }) => {
  return (
    <>
      <h1>{url}</h1>
      <h2>{name}</h2>
    </>
  );
};

export default Film;
