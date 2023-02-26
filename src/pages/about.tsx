// Step 1: Import React
import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="About Page">
      <main>
        <p>Hi there, I'm Callum, a web developer.</p>
      </main>
    </Layout>
  );
};

// Add page title to page
export const Head = () => <title>About Me</title>;

// Step 3: Export component
export default AboutPage;
