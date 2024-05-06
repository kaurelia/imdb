/*import Meta from "antd/es/card/Meta";
import { MovieCard, MoviePoster } from "./card.styles";

type CardProps = {
  imageUrl: string;
  title: string;
  year: string;
  type: TypeOfMovie;
  description?: string;
};
const Card = ({ imageUrl, title, year, type }: CardProps) => {
  return (
    <MovieCard
      hoverable
      cover={imageUrl ? <MoviePoster src={imageUrl} /> : "placeholder"}
    >
      <Meta
        title={title}
        description={
          <>
            {year && (
              <>
                <label>Year</label>
                <span>{year}</span>
              </>
            )}
            {type && (
              <>
                <label>Type</label>
                <span>{type}</span>
              </>
            )}
          </>
        }
      />
    </MovieCard>
  );
};

export default Card;
*/

export {};
