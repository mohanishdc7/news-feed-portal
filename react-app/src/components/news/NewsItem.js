import Card from "../ui/Card";
import classes from "./NewsItem.module.css";

function NewsItem(props) {

  function deleteHandler(event) {
    event.preventDefault();

    const newsData = {
      key: props.id,
      id: props.id,
      title: props.title,
      image: props.image,
      category: props.category,
      description: props.description,
    };

    props.onDeleteNews(newsData); // deleteNewsHandler(newsData)
  }

  return (
    <div>
      <div className={classes.card}>
        <Card>
          <div className={classes.image}>
            <img src={props.image} alt={props.title}/>
          </div>
          <div className={classes.cardBody}>
            <div>
              <h3>{props.title}</h3>
              <p>{props.description}</p>
            </div>
            <button onClick={deleteHandler}>
              <i className='fas fa-trash'></i>
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default NewsItem;
