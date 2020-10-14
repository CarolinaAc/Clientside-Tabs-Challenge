import React, { useEffect, useState } from "react";
//* Constants
import {
 
  initialFootball,
  initialTravel,
  initialUkNews,
  tabList,
} from "../constants";
//* Components
import Navbar from "./Navbar";
import List from "./List";
import {  getArticles, } from "../util";

function Tabs() {
  //* Initial states
  const [tab, setTab] = useState(tabList[0]);
  const [ukNews, setUkNews] = useState(initialUkNews);
  const [football, setFootball] = useState(initialFootball);
  const [travel, setTravel] = useState(initialTravel);
  const [articles, setArticles] = useState(ukNews);

  useEffect(() => {
  
    // * Calling the fetch function for each of the states we want to update
    getArticles("football", setFootball).catch((err) => {
      console.log(err);
      setFootball(initialFootball);
    });
    getArticles("uk-news", setUkNews).catch((err) => {
      console.log(err);
      setUkNews(initialUkNews);
    });
    getArticles("travel", setTravel).catch((err) => {
      console.log(err);
      setTravel(initialUkNews);
    });
    return () => {
      //cleanup
    };
  }, []);

  //* Changing articles displayed state only when needed
  useEffect(() => {
    tab === "UK News"
      ? setArticles(ukNews)
      : tab === "Football"
      ? setArticles(football)
      : setArticles(travel);
    return () => {
      //cleanup
    };
  }, [tab, football, travel, ukNews]);

  return (
    <div className="main-container">
      <Navbar activeTab={tab} setTab={setTab} />
      <List tab={tab} articles={articles} />
    </div>
  );
}

export default Tabs;
