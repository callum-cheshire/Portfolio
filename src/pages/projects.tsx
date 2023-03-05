import React from "react";
import Layout from "../components/layout";
import projects from "../images/projects.png";
import Card from "../components/card";
import ticket from "../images/JTT1.png";
import frumo from "../images/Frumo1.png";

const Projects = () => {
  return (
    <Layout>
      <div className="items-center flex flex-col">
        <img src={projects} alt="" className="pt-8 pr-4"></img>
      </div>
      <div className="flex flex-col justify-between md:flex-row sm:flex-row">
        <Card
          image={frumo}
          text="Frumo - Full Stack App"
          link="https://frumo.co.uk"
        />
        <Card
          image={ticket}
          text="Just The Ticket - Front End"
          link="https://week-9-project-frontend-just-the-ticket-fc44.vercel.app/"
        />
        <Card
          image={ticket}
          text="Just The Ticket - Back End"
          link="https://github.com/callum-cheshire/Week_9_Project-Backend-Just-The-Ticket"
        />
      </div>
    </Layout>
  );
};

export default Projects;
