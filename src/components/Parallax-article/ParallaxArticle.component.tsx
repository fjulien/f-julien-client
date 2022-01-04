import { Job } from "../../resources/career/models/Job.model";
import ParallaxBackground from "../Parallax-header/ParallaxHeader.component";
import ParallaxContent from "../Parallax-body/ParallaxBody.component";
import "./ParallaxArticle.style.scss";
export default function ParallaxArticle({ job }: { job: Job }) {
  return (
    <div className="ParallaxArticle">
      <ParallaxBackground {...job} />
      <ParallaxContent {...job} />
    </div>
  );
}