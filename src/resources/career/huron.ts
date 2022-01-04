import dayjs from "dayjs";
import { monthDiff } from "../../utils/helpers/date";
import { TYPE_OF_JOB } from "./constants";
import image from "../../images/companies-logo/huron.png";

import { Job } from "./models/Job.model";

export const huron: Job = {
  date: {
    start: dayjs("2009-06-01T00:00:00.000Z"),
    end: dayjs(),
    durationIntoMonth: monthDiff("01-06-2009", "01-05-2011"),
  },
  name: "Huron & cie",
  subtitle: TYPE_OF_JOB.ELECTROMECANICIAN,
  description: "Men of the British Expeditionary Force (BEF) wade out to..",
  missions: ["Depannage", "Installation"],
  imageUrl: image,
  backgroundUrl: "background-huron",
};
