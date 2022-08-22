import { useHistory } from "react-router-dom";

import AddNewsItem from "../components/news/AddNewsItem";

function AddNewsItemPage() {
  const history = useHistory();

  function addNewsHandler(newsData) {
    fetch(
      // "./news.db/news.json",
      'https://alpine-myth-306809-default-rtdb.firebaseio.com/news.json',
      {
        method: "POST",
        body: JSON.stringify(newsData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then(() => {
      history.replace("/");
    });
  }

  return (
    <section>
      <h1>Add News</h1>
      <AddNewsItem onAddNews={addNewsHandler} />
    </section>
  );
}

export default AddNewsItemPage;