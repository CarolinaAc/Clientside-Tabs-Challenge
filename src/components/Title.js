import React from "react";

const Title = ({ title, url, id }) => {
  return (
    <li title={title} className="list-item">
      <span>{id}</span> <a href={url} >{title}</a>
    </li>
  );
};

export default Title;
