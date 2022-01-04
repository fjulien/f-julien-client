import dayjs from "dayjs";
import { monthDiff } from "../../utils/helpers/date";
import { TYPE_OF_JOB } from "./constants";
import image from "../../images/companies-logo/cgi.png";

import { Job } from "./models/Job.model";

export const cgi: Job = {
  date: {
    start: dayjs("2019-06-01T00:00:00.000Z"),
    end: dayjs(),
    durationIntoMonth: monthDiff("01-06-2019", "01-09-2020"),
  },
  name: "CGI",
  subtitle: TYPE_OF_JOB.DEVELOPER,
  description: "Men of the British Expeditionary Force (BEF) wade out to..",
  missions: ["Maintenance", "moodle", "compétance"],
  imageUrl: image,

  backgroundUrl: "background-cgi",
};
