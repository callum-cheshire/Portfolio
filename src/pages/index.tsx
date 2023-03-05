import * as React from "react";
import Layout from "../components/layout";
import name from "../images/callumcheshire.png";
import developer from "../images/developer.png";
import { navigate } from "gatsby";
import Button from "../components/button";

const App = () => {
  return (
    <Layout>
      <div className="pb-2">
        <p className="pb-4">Hi, my name is</p>
        <img
          src={name}
          alt=""
          className="cursor-pointer"
          onClick={() => navigate("/about")}
        ></img>
      </div>
      <div className="flex items-end">
        <p className="">and I'm a</p>
        <img
          src={developer}
          alt=""
          className="pt-2 pl-4 cursor-pointer"
          onClick={() => navigate("/projects")}
        ></img>
      </div>
      <p className="pt-16 pb-16">
        As a recent School of Code bootcamp graduate with an electrical testing
        background, I'm looking to apply my combined practical and soft skills
        to a new role in the tech industry.
        <br></br>
        <br></br>I have a love of problem solving as well as a strong desire for
        personal and professional growth and development, and I am continually
        striving to improve upon and add to my current skillset.
      </p>
      <div className="flex flex-row items-center">
        <p className="pr-8">Check out my</p>
        <p className="pr-8">-&gt;</p>
        <Button title="Projects" onClick={() => navigate("/projects")} />
      </div>
    </Layout>
  );
};

export const Head = () => <title>Callum Cheshire</title>;

export default App;
