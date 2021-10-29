import Card from "../ui/Card";
import classes from "./NewsItem.module.css";

function NewsItem(props) {
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <p>{props.description}</p>
        </div>
      </Card>
    </li>
  );
}

export default NewsItem;