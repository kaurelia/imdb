import Meta from "antd/es/card/Meta";
import { upperFirst } from "lodash";
import { useLocation } from "react-router-dom";
import isDevelopment from "~frontend/src/constants/is-development/is-development";
import getPoster from "../utils/get-poster/get-poster";
import { Card, Link, MoviePoster } from "./preview-card.styles";
import type { PreviewCardProperties } from "./preview-card.types";

const splitterSymbol = "–";

const PreviewCard = ({
  year,
  title,
  imdbID,
  type,
  poster,
  linkState,
}: PreviewCardProperties) => {
  const { state } = useLocation();
  const includesMinus = year.includes(splitterSymbol);
  const isEndDateUnknown = year.at(-1) === splitterSymbol;
  const transformedYear = includesMinus
    ? year.split(splitterSymbol).join(` ${splitterSymbol} `)
    : year;
  const yearToDisplay = isEndDateUnknown
    ? `${transformedYear} unknown`
    : transformedYear;
  return (
    <Link
      onClick={() => {
        window.scrollTo(0, 0);
      }}
      title={title}
      state={linkState ?? state}
      to={`/movie/${imdbID}`}
    >
      <Card
        data-testid={isDevelopment ? "preview-card" : undefined}
        hoverable
        cover={<MoviePoster src={getPoster(poster)} />}
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
