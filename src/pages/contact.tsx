import * as React from "react";
import Layout from "../components/layout";
import name from "../images/callumcheshire.png";
import developer from "../images/developer.png";
import { navigate } from "gatsby";
import Button from "../components/button";

const App = () => {
  return (
    <Layout>
      <header className="pb-8">
        <p>To get in touch:</p>
      </header>
      <div className="flex pb-8">
        <p className="pr-4">Drop me an</p>
        <p className="pr-4">-&gt;</p>
        <a
          href="mailto:callum-cheshire@hotmail.co.uk?subject=Opportunity&body=Hello"
          className="font-lekton text-tech-blue text-xl"
        >
          email
        </a>
      </div>
      <div className="flex pb-8">
        <p className="pr-4">Also, let's connect on</p>
        <p className="pr-4">-&gt;</p>
        <a
          href="https://www.linkedin.com/in/callum-cheshire-46033216a/"
          target="_blank"
          className="font-lekton text-tech-blue text-xl"
        >
          LinkedIn
        </a>
        <p className="pl-4 pr-4">&</p>
        <a
          href="https://www.linkedin.com/in/callum-cheshire-46033216a/"
          target="_blank"
          className="font-lekton text-tech-blue text-xl"
        >
          GitHub
        </a>
      </div>
      <div className="flex pb-8">
        <p className="pr-4">Looking forward to hearing from you!</p>
      </div>
    </Layout>
  );
};

export const Head = () => <title>Callum Cheshire</title>;

export default App;
