import React from "react";

const Title = ({ title, url, id, labelby}) => {
  return (
    <li aria-labelledby={labelby} title={title} className="list-item">
      <span>{id}</span> <a href={url} target='_blank' rel='noopener noreferrer'>{title}</a>
    </li>
  );
};

export default Title;
