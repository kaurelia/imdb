import { DatePicker, Select } from "antd";
import dayjs from "dayjs";
import TypeOfMovie from "~frontend/src/constants/type-of-movie/type-of-movie";
import { Wrapper } from "./filters.styles";
import type { FiltersProperties } from "./filters.types";

const { Option } = Select;

const Filters = ({
  setTypeOfMovie,
  setYearOfRelease,
  typeOfMovie,
  yearOfRelease,
}: FiltersProperties) => {
  return (
    <Wrapper>
      <Select
        allowClear
        onClear={() => {
          setTypeOfMovie(null);
        }}
        onSelect={(value) => {
          setTypeOfMovie(value);
        }}
        placeholder="Type of movie"
        value={typeOfMovie}
      >
        {Object.values(TypeOfMovie).map((value) => {
          return (
            <Option key={value} value={value}>
              {value}
            </Option>
          );
        })}
      </Select>
      <DatePicker
        allowClear
        onChange={(date) => {
          setYearOfRelease(date ? date.year() : null);
        }}
        picker="year"
        value={yearOfRelease ? dayjs().year(yearOfRelease) : null}
      />
    </Wrapper>
  );
};

export default Filters;
