import dayjs from "dayjs";
import { TYPE_OF_JOB } from "./constants";
import { monthDiff } from "../../utils/helpers/date";
import { Job } from "./models/Job.model";
import image from "../../images/companies-logo/nordique-france.jpeg";

export const nordiqueFrance: Job = {
  date: {
    start: dayjs("2018-09-01T00:00:00.000Z"),
    end: dayjs(),
    durationIntoMonth: monthDiff("01-09-2018", "01-06-2019"),
  },
  name: "Nordique France",
  subtitle: TYPE_OF_JOB.FORMATION,
  description:
    "La Wild Code School m'a permit d'apprendre la programmation informatique de manière innovante, en réalisant des projets pour de vrais clients. Bordeaux dispose d’un écosystème numérique hors-pair dans lequel la Wild Code School est bien intégrée, avec des acteurs comme Bordeaux Technowest, Aquitaine Europe Communication et La Cité Numérique.",
  missions: [],
  imageUrl: image,
  backgroundUrl: "background-nordique-france",
};
