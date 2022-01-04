import dayjs from "dayjs";
import { monthDiff } from "../../utils/helpers/date";
import { TYPE_OF_JOB } from "./constants";
import image from "../../images/companies-logo/batelec.png";

import { Job } from "./models/Job.model";

export const batelec: Job = {
  date: {
    start: dayjs("2004-09-02T00:00:00.000Z"),
    end: dayjs(),
    durationIntoMonth: monthDiff("01-09-2004", "01-06-2009"),
  },
  name: "Batelec",
  subtitle: TYPE_OF_JOB.DEVELOPER,
  description: "",
  missions: [
    "Maintenance siége sociale mc donald",
    "manutention general mills",
  ],
  imageUrl: image,
  backgroundUrl: "background-atelec",
};
