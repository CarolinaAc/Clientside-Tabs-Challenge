// Refactored fetchData
export const fetchData = async (content, key = 'test') => {
    const response = await fetch(
        `https://content.guardianapis.com/search?q=${content}&api-key=${key}`
      );
      console.log('fetching')
      const data = await response.json();
      return    data.response.results;
}

