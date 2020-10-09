import React from "react";
import ArticlePreview from "./components/Article-preview";
import Credits from "./components/Credits";
import "./css/site.scss";

function App() {
  return (
    <main className="App">
      <ArticlePreview />
      <Credits />
    </main>
  );
}

export default App;
