import React from "react";
import {
  cgi,
  dotic,
  mrg,
  ravimoShark,
  huron,
  batelec,
  leclo,
  nordiqueFrance,
} from "../../resources/career";
import { Helmet } from "react-helmet";
import ParallaxArticle from "../../components/Parallax-article/ParallaxArticle.component";

export default function ProfessionalPage() {
  return (
    <section className="time-line page">
      <Helmet>
        <title>Professionel</title>
      </Helmet>
      <ParallaxArticle job={dotic} />
      <ParallaxArticle job={cgi} />
      <ParallaxArticle job={mrg} />
      <ParallaxArticle job={ravimoShark} />
      <ParallaxArticle job={nordiqueFrance} />
      <ParallaxArticle job={leclo} />
      <ParallaxArticle job={huron} />
      <ParallaxArticle job={batelec} />
    </section>
  );
}