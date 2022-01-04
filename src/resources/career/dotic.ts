import dayjs from "dayjs";
import { TYPE_OF_JOB } from "./constants";
import { monthDiff } from "../../utils/helpers/date";
import { Job } from "./models/Job.model";
import image from "../../images/companies-logo/dotic.png";

export const dotic: Job = {
  date: {
    start: dayjs("2020-09-01T00:00:00.000Z"),
    end: dayjs(),
    durationIntoMonth: monthDiff("01-09-2020", dayjs().format("DD-MM-YYYY")),
  },
  name: "Dotic",
  subtitle: TYPE_OF_JOB.DEVELOPER,
  description: "Men of the British Expeditionary Force (BEF) wade out to..",
  missions: ["CC", "FG"],
  imageUrl: image,
  backgroundUrl: "background-dotic",
};
