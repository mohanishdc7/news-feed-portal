import NewsItem from "./NewsItem";
import classes from "./NewsList.module.css";

function NewsList(props) {
  return (
    <ul className={classes.list}>
      {props.news.map((newsItem) => (
        <NewsItem
          key={newsItem.id}
          id={newsItem.id}
          title={newsItem.title}
          image={newsItem.image}
          description={newsItem.description}
        />
      ))}
    </ul>
  );
}

export default NewsList;