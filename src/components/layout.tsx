import * as React from "react";
import "../styles/global.css";
import NavBar from "./navbar";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="bg-background-grey min-h-screen overflow-y-scroll">
      <NavBar />
      <main className="bg-background-grey h-screen align-middle flex flex-col justify-center items-center pt-16">
        <div className="w-4/5 h-4/5 flex flex-col text-text-white font-gowun text-lg">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
