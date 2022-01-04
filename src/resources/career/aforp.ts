import dayjs from "dayjs";
import { TYPE_OF_JOB } from "./constants";
import { monthDiff } from "../../utils/helpers/date";
import { Job } from "./models/Job.model";
import image from "../../images/companies-logo/aforp.jpeg";

export const aforp: Job = {
  date: {
    start: dayjs("2004-09-01T00:00:00.000Z"),
    end: dayjs(),
    durationIntoMonth: monthDiff("01-09-2004", "01-09-2004"),
  },
  name: "AFORP",
  subtitle: TYPE_OF_JOB.FORMATION,
  description:
    "Le technicien supérieur en électrotechnique exerce ses activités dans l'étude, la mise en œuvre, l’utilisation, la maintenance des équipements électriques qui utilisent aussi bien des courants forts que des courants faibles. Ces équipements, de plus en plus sophistiqués en raison de l'évolution des technologies de l'informatique et de l'électronique, peuvent faire intervenir des procédés d'hydraulique, de pneumatique, d'optique... Il intervient dans les secteurs de la production industrielle, du tertiaire, de l’habitat, du transport et de la distribution de l'énergie électrique. Il doit également développer des compétences prenant en compte l’impact de ces équipements sur l’environnement ainsi que la recherche d’une performance énergétique optimale. Dans l'habitat/tertiaire,l'électrotechnicien intervient majoritairement sur les installations électriques des maisons et bureaux (matériel d'éclairage, de chauffage, matériels utilisant des courants faibles pour les réseaux informatiques et de télécommunications). Dans le secteur industriel,l'électrotechnicien intervient majoritairement sur les installations électriques de haute tension et basse tension (transformateurs, machines-outils, moteurs électriques ).",
  missions: ["BAC PRO electrotechnique", "BTS Electrotechnique"],
  imageUrl: image,
  backgroundUrl: "background-aforp",
};
