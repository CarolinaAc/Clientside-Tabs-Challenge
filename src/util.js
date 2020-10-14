
import { fetchData } from "./http"

// refactoring 
export const getArticles = (content, callback) => {
    return fetchData(content).then(extractedData => {
      //destructured to get only title and url
        const articles = extractedData.map( article => {
            const {webTitle, webUrl} = article
            return {webTitle, webUrl}
        })
        console.log(articles)
        callback(articles) 
    })
  } 