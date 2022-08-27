import NewsItem from "./NewsItem";
import classes from "./NewsList.module.css";

function NewsList(props) {

  function deleteNewsHandler(newsData) {
    fetch(
      process.env.REACT_APP_FIREBASE_REALTIME_DATABASE_URL+`/news/${newsData.id}.json`,
      {
        method: "DELETE",
      }
    ).then(() => {
      window.location.reload()
    });
  }

  return (
    <div className={classes.container}>
      {props.news.map((newsItem) => (
        <NewsItem
          key={newsItem.id}
          id={newsItem.id}
          title={newsItem.title}
          image={newsItem.image}
          category={newsItem.category}
          description={newsItem.description}
          onDeleteNews={deleteNewsHandler}
        />
      ))}
    </div>
  );
}

export default NewsList;
