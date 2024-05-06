import Meta from "antd/es/card/Meta";
import { upperFirst } from "lodash";
import { Card, Link, MoviePoster } from "./preview-card.styles";
import type { PreviewCardProperties } from "./preview-card.types";

const splitterSymbol = "–";

const PreviewCard = ({
  year,
  title,
  imdbID,
  type,
  poster,
}: PreviewCardProperties) => {
  const includesMinus = year.includes(splitterSymbol);
  const isEndDateUnknown = year.at(-1) === splitterSymbol;
  const transformedYear = includesMinus
    ? year.split(splitterSymbol).join(` ${splitterSymbol} `)
    : year;
  const yearToDisplay = isEndDateUnknown
    ? `${transformedYear} unknown`
    : transformedYear;
  return (
    <Link title={title} to={`/movie/${imdbID}`}>
      <Card
        hoverable
        cover={
          <MoviePoster
            src={
              poster !== "N/A"
                ? poster
                : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/240px-No-Image-Placeholder.svg.png"
            }
          />
        }
      >
        <Meta
          title={title}
          description={
            <>
              <p>{yearToDisplay}</p>
              <p>{upperFirst(type)}</p>
            </>
          }
        />
      </Card>
    </Link>
  );
};

export default PreviewCard;
