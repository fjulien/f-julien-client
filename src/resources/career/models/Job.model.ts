import { Dayjs } from "dayjs";
import { TYPE_OF_JOB } from "../constants";

type JobDate = {
  start: Dayjs;
  end: Dayjs;
  durationIntoMonth: number;
};

export interface Job {
  date: JobDate;
  name: string;
  subtitle: TYPE_OF_JOB;
  description: string;
  missions: string[];
  imageUrl: string;
  backgroundUrl: string;
}
