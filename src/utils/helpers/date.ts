import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";

dayjs.extend(duration);

export function monthDiff(start: string, end: string): number {
  const diff = dayjs.duration(
    dayjs(start, "DD-MM-YYYY").diff(dayjs(end, "DD-MM-YYYY"))
  );
  return -diff.years() * 12 + diff.months();
}
