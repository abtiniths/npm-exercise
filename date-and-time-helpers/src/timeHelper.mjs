import dayjs from "dayjs";
import "dayjs/locale/en-gb.js";

dayjs.locale("en-gb"); // en-gb starts week on monday, en does not
const yyyymmdd = "YYYY-MM-DD"; // useful for simple .format(yyyymmdd)

const timeHelper = ({ startDate, endDate }) => {
  if (
    dayjs(startDate).date() !== 1 ||
    dayjs(startDate).month() !== dayjs(endDate).month() ||
    dayjs(startDate).endOf("month").date() !== dayjs(endDate).date()
  ) {
    return "no valid period";
  } else {
    return dayjs(startDate).format("MMMM");
  }
};

console.log(timeHelper({ startDate: "2021-08-01", endDate: "2033-08-31" }));
console.log(timeHelper({ startDate: "2021-02-01", endDate: "20241-02-28" }));
console.log(timeHelper({ startDate: "2021-10-01", endDate: "2031-12-31" }));

export default timeHelper;
