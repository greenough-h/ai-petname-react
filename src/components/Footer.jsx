import React from "react";

export default function Footer() {
  return (
    <div className="Footer">
      <footer>
        Coded by <strong>Hayley Greenough</strong>, open-sourced on{" "}
        <a
          href="https://github.com/greenough-h/ai-petname-react"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>{" "}
        and hosted on{" "}
        <a
          href="https://ai-petname-generator.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Netlify
        </a>
      </footer>
    </div>
  );
}
