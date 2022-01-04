import dayjs from "dayjs";
import { monthDiff } from "../../utils/helpers/date";
import { TYPE_OF_JOB } from "./constants";
import image from "../../images/companies-logo/ravimo.png";

import { Job } from "./models/Job.model";

export const ravimoShark: Job = {
  date: {
    start: dayjs("2011-10-01T00:00:00.000Z"),
    end: dayjs(),
    durationIntoMonth: monthDiff("01-10-2011", "01-09-2016"),
  },
  name: "Ravimo Shark",
  subtitle: TYPE_OF_JOB.ELECTROMECANICIAN,
  description: "Men of the British Expeditionary Force (BEF) wade out to..",
  missions: [
    "Installation",
    "Conseil",
    "Depannage",
    "Gestion du palace bristol",
  ],
  imageUrl: image,
  backgroundUrl: "background-ravimo-shark",
};
