

export const initialUkNews = [
    {
      title: "Uk News General Page",
      link: "https://www.theguardian.com/uk-news",
    },
  ];
export const initialFootball = [
    {
      title: "Football General Page",
      link: "https://www.theguardian.com/football",
    },
  ];
export const initialTravel = [
    {
      title: "Travel General Page",
      link: "https://www.theguardian.com/uk/travel",
    },
  ];
export const tabList = ["UK News", "Football", "Travel"];

// * Async fetch function for obtaining all the needed articles, to be imported from constants when refactoring

// Refactored in fetchdata (in http.js) and getArticles(in utils.js)
// export const fetchData = async (content, callback, key = "test") => {
//   const response = await fetch(
//     `https://content.guardianapis.com/search?q=${content}&api-key=${key}`
//   );
//   const data = await response.json();
//   callback(data.response.results);
// };

