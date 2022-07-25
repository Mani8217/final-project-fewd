import { Gallery } from "./Gallery";
import "./Article.css";

// its a simple article component includes another component within itself,
function Article() {
  return (
    <>
      <div className="article-container">
        <h2>Who Is A Cat</h2>
        <p>
          Agreeableness traits include affectionateness, friendliness to people,
          and gentleness. Extraversion traits include being active, vigilant..
        </p>
        <br />
        <Gallery />
      </div>
    </>
  );
}
export default Article;
