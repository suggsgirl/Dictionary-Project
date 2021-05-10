import "./App.css";
import wordsworth from "./wordsworth.png";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img
            src={wordsworth}
            className="wordsworthLogo img-fluid"
            alt="Wordsworth"
          />{" "}
          <br />
          Wordsworths <br />
          <div className="quote">  
            "What we need is not the will to believe, but the wish to find out."{" "}
          </div>
        </header>
        
        <main>
          {" "}
          <Dictionary defaultKeyword="sunset" />{" "}
        </main>
        <footer className="App-footer">
          <small>
            {" "}
            Coded by Claire Phillips and is {""}
            <a
              href="https://github.com/suggsgirl/Dictionary-Project"
              target="_blank"
              rel="noreferrer"
            >
              open-sourced on GitHub
            </a>{" "}
          </small>
        </footer>
      </div>
    </div>
  );
}
