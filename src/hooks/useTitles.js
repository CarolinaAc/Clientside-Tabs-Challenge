import useState from 'react'
import { initialFootball, initialTravel, initialUkNews } from "../constants";

export const useTitles = () => {
    const [ukNews, setUkNews] = useState(initialUkNews);
  const [football, setFootball] = useState(initialFootball);
  const [travel, setTravel] = useState(initialTravel);

  return [ukNews, setUkNews, football, setFootball, travel, setTravel]
}


