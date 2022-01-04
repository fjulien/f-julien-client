import dayjs from "dayjs";
import { monthDiff } from "../../utils/helpers/date";
import { TYPE_OF_JOB } from "./constants";
import { Job } from "./models/Job.model";
import image from "../../images/companies-logo/mrg.jpeg";

export const mrg: Job = {
  date: {
    start: dayjs("2016-09-01T00:00:00.000Z"),
    end: dayjs(),
    durationIntoMonth: monthDiff("01-09-2016", "01-09-2018"),
  },
  name: "MRG",
  subtitle: TYPE_OF_JOB.ELECTROMECANICIAN,
  description: "Men of the British Expeditionary Force (BEF) wade out to..",
  missions: ["Depannage", "maintenance"],
  imageUrl: image,
  backgroundUrl: "background-mrg",
};
