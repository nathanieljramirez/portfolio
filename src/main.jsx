import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <h1>Looking for a developer?</h1>
    <button>Contact</button>
    <h2>About</h2>
    <p>
      I am a high school student with a goal to replace as many outdated tools &
      software as possible for free and as efficiently as possible. Come check
      out my work!
    </p>
    <h2>Projects</h2>
    <div className="projects">
      <a href="https://github.com/vivaejs">Vivae.js</a>
      <a href="https://github.com/nathanieljramirez/tornado">Tornado</a>
      <a href="https://github.com/mcserverkit">MCServerKit</a>
    </div>
    <h2>Sponsored By</h2>
    <p>No sponsors yet</p>
    <h2>Contact</h2>
    <form
      action="https://send.pageclip.co/YcbPEtibmagtLxHKKVIs1zGMd4aOBnxm"
      className="pageclip-form"
      method="post"
    >
      <input type="text" name="name" id="name" placeholder="Name" required />
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        required
      />
      <textarea
        id="message"
        name="message"
        placeholder="Message"
        required
      ></textarea>
      <button type="submit" className="pageclip-form__submit">
        <span>Submit</span>
      </button>
    </form>
  </StrictMode>,
);
