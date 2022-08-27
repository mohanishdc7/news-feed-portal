import { useNavigate } from "react-router-dom";

import AddNewsItem from "../components/news/AddNewsItem";

function AddNewsItemPage() {
  const navigate = useNavigate();

  function addNewsHandler(newsData) {
    fetch(process.env.REACT_APP_FIREBASE_REALTIME_DATABASE_URL + "/news.json", {
      method: "POST",
      body: JSON.stringify(newsData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      navigate("/");
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
