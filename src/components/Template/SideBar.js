import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Ricky Liu</h2>
        <p>
          <a href="mailto:liuruirui577@gmail.com">liuruirui577@gmail.com</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Ricky. I am a software engineer who loves learning new technologies.
        I am skilled in Android app development and am currently continuously learning
        front-end technologies, with the aspiration to become a full-stack engineer.
      </p>
      <ul className="actions">
        <li>
          <Link to="/about" className="button">
            Learn More
          </Link>
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; Michael D&apos;Angelo <Link to="/">ricky577.com</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
