import dayjs from "dayjs";
import "dayjs/locale/en-gb.js";

dayjs.locale("en-gb"); // en-gb starts week on monday, en does not
const yyyymmdd = "YYYY-MM-DD"; // useful for simple .format(yyyymmdd)

const timeHelper = ({ startDate, endDate }) => {
  const mvalue = dayjs(startDate, endDate).format("MMMM, YYYY");
  const yvalue = dayjs(endDate).format("MMMM, YYYY");
  return `${mvalue}  ${yvalue};`;
};

console.log(timeHelper({ startDate: "2021-08-01", endDate: "2033-11-31" }));
console.log(timeHelper({ startDate: "2021-09-01", endDate: "20241-09-31" }));
console.log(timeHelper({ startDate: "2021-10-01", endDate: "2031-10-31" }));
