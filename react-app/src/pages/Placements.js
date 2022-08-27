import { useState, useEffect } from "react";

import NewsList from "../components/news/NewsList";

// Recall that the state updating function(2nd parameter) re-executes the component function whenever it is called

function Placements() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedNews, setLoadedNews] = useState([]);

  // Javascript does not wait to execute further code until this is promise is completely executed so we need to incorporate a loading state
  // useEffect(function, external dependancies array)
  useEffect(() => {
    setIsLoading(true);
    fetch(
      // "./news.db/placements.json"
      process.env.REACT_APP_FIREBASE_REALTIME_DATABASE_URL+"/news.json"
    )
      .then((response) => {
        return response.json(); // json() returns a promise whether it was successful in converting the json format into plain text
      })
      .then((data) => {
        const news = [];

        for (const key in data) {
          const newsItem = {
            id: key,
            ...data[key],
          };

          if (newsItem.category === "placements") news.push(newsItem);
        }

        setIsLoading(false);
        setLoadedNews(news);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All News</h1>
      {loadedNews.length === 0 ? (
        <p>Nothing to show!</p>
      ) : (
        <NewsList news={loadedNews} />
      )}
    </section>
  );
}

export default Placements;
