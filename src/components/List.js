import React from "react";
import Title from "./Title";

const List = ({ tab, articles, labelby}) => {
  return (
    <ul role='tabpanel' id='titles-list' title={tab} className="tab-panel" tabIndex={-1}>
      {articles.map((article, key) => (
        <Title
          key={key}
          id={key + 1}
          title={article.webTitle}
          url={article.webUrl}
          labelby={labelby}
        />
      ))}
    </ul>
  );
};

export default List;
