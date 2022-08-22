import { useRef } from "react";

import Card from "../ui/Card";
import classes from "./AddNewsItem.module.css";

function AddNewsItem(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const categoryInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const newsData = {
      title: titleInputRef.current.value,
      image: imageInputRef.current.value,
      category: categoryInputRef.current.value,
      description: descriptionInputRef.current.value,
    };

    // console.log(newsData);
    props.onAddNews(newsData); // addNewsHandler(newsData)
  }

  return (
    <div className={classes.container}>
      <Card>
        <form className={classes.form} onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor='title'>News Title</label>
            <input type='text' id='title' required ref={titleInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor='image'>News Image</label>
            <input type='url' id='image' required ref={imageInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor='image'>News Category</label>
            <select
              name='category'
              id='category'
              required
              ref={categoryInputRef}
            >
              <option disabled selected></option>
              <option value='placements'>Placements</option>
              <option value='research-academics'>Research and Academics</option>
              <option value='sports'>Sports</option>
              <option value='upcoming-events'>Upcoming events</option>
            </select>
          </div>
          <div className={classes.control}>
            <label htmlFor='description'>News Description</label>
            <textarea
              id='description'
              required
              rows='5'
              ref={descriptionInputRef}
            />
          </div>
          <div className={classes.actions}>
            <button>Add News</button>
          </div>
        </form>
      </Card>
    </div>
  );
}

export default AddNewsItem;
