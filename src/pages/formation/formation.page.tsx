import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import ParallaxArticle from "../../components/Parallax-article/ParallaxArticle.component";
import { aforp, college, wildCodeSchool } from "../../resources";

export default function FormationPage() {
  const [title, setTitle] = useState("Formation ~ ");
  useEffect(() => {
    setTimeout(() => {
      const newTitle = title.split("");
      let firstLetter = newTitle.shift();

      setTitle(() => [...newTitle, firstLetter].join(""));
    }, 1000);
  });

  return (
    <section className="time-line page">
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <ParallaxArticle job={wildCodeSchool} />
      <ParallaxArticle job={aforp} />
      <ParallaxArticle job={college} />
    </section>
  );
}