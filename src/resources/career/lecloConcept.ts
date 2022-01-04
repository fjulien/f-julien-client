import dayjs from "dayjs";
import { monthDiff } from "../../utils/helpers/date";
import { TYPE_OF_JOB } from "./constants";
import image from "../../images/companies-logo/leclo.jpeg";

import { Job } from "./models/Job.model";

export const leclo: Job = {
  date: {
    start: dayjs("2011-05-01T00:00:00.000Z"),
    end: dayjs(),
    durationIntoMonth: monthDiff("01-05-2011", "01-10-2011"),
  },
  name: "Leclo-Concept",
  subtitle: TYPE_OF_JOB.ELECTROMECANICIAN,
  description: "Men of the British Expeditionary Force (BEF) wade out to..",
  missions: ["Maintenance"],
  imageUrl: image,
  backgroundUrl: "background-leclo",
};
