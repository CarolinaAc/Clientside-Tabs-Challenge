/**IE 9 and 11 support, in theory all other modern browsers are compatible, however will need to check CSS compatibility */
import "react-app-polyfill/ie9";

import React from "react";
import Title from "./Title";

const List = ({ tab, articles }) => {
  return (
    <ul title={tab} className="tab-panel">
      {articles.map((article, key) => (
        <Title
          key={key}
          id={key + 1}
          title={article.webTitle}
          url={article.webUrl}
        />
      ))}
    </ul>
  );
};

export default List;
