/* eslint-disable no-unused-vars */
import React from "react";
import "../components/App.js";
import "../stylesheet/App.css";

const data = {
  image:
    "https://ucarecdn.com/f8cf81eb-3bab-4bba-9431-668884eab174/-/resize/300x/",
  cardTitle: "Bob Dylan",
  cardDate: "May 24, 1941",
  cardDescription:
    "Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer/songwriter, author, and artist who has been an influential figure in popular music and culture for more than five decades.",
  button: {
    url: "https://en.wikipedia.org/wiki/Bob_Dylan",
    label: "Go to wikipedia",
  },
};

const Header = (
  <header className="App-header">
    <img src={data.image} className="App-foto" alt="foto" />
    <div className="App-header-title">
      <h1 className="App-header-maintitle">{data.cardTitle}</h1>
      <h3 className="App-header-subtitle">{data.cardDate}</h3>
    </div>
  </header>
);
const Main = (
  <main className="App-main">
    <p className="App-main-paragraph">{data.cardDescription}</p>
  </main>
);

const Footer = (
  <footer className="App-footer">
    <p className="App-footer-paragraph">{data.button.label}</p>
    <div className="App-footer-container">
      <p className="App-footer-paragraph">37</p>
    </div>
  </footer>
);

const appRoot = (
  <div className="App">
    {Header}
    {Main}
    {Footer}
  </div>
);
function App() {
  return appRoot;
}

export default App;
