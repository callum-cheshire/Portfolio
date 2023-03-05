import * as React from "react";
import Layout from "../components/layout";
import image from "../images/Pro Profile Pic.png";
import cv from "../assets/CV Junior Dev 2023 Updated.pdf";

const AboutPage = () => {
  return (
    <Layout>
      <main className="flex flex-col items-center overflow-hidden sm:flex-row">
        <article className="flex flex-col overflow-y-auto max-h-full mr-8 mb-4">
          <p className="pb-8">
            Hi there, I'm Callum, a Junior Full Stack Developer.
          </p>
          <p className="pb-8 w-4/5">
            I recently graduated from the School of Code Full Stack Development
            Bootcamp, where I learned a great variety of skills, the details of
            which can be found on my{" "}
            <a href={cv} className="text-tech-blue">
              CV
            </a>
            .
          </p>
          <p className="w-4/5 pb-8">
            I began to self-teach the basics of front end development in 2021,
            in an attempt to build my way out of a comfortable, yet ultimately
            dead end job. I first completed the freeCodeCamp responsive web
            design course and then took my GCSE qualification in computer
            science (which I thankfully passed, A*), in order to gain a good
            foundational understanding of the general subject. Python was my
            chosen language for the exam, and so that was my introduction to
            programming.
          </p>
          <p className="w-4/5">
            My journey with the School of Code has accelerated my progress
            exponentially, and I'm now looking to apply my combined practical
            and soft skills to a new role in the tech industry.
          </p>
        </article>
        <img
          src={image}
          alt=""
          className="rounded float-right w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64"
        ></img>
      </main>
    </Layout>
  );
};

export const Head = () => <title>About Me</title>;

export default AboutPage;
