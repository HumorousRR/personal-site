import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description="Ricky's personal website. A software engineer with a passion for technology. "
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2>
            <Link to="/">About this site</Link>
          </h2>
          <p>
            A beautiful, responsive, statically-generated, react application
            written with modern Javascript.
          </p>
        </div>
      </header>
      <p>Welcome to my personal site!</p>
      <p>
        Please feel free to read more <Link to="/about">about me</Link>, or you
        can check out my <Link to="/articles">articles</Link>,{' '}
        <Link to="/projects">projects</Link>, view{' '}
        <Link to="/stats">site statistics</Link>, or{' '}
        <Link to="/contact">contact</Link> me.
      </p>
      <p>
        Source available{' '}
        <a href="https://github.com/HumorousRR/personal-site">here</a>.
      </p>
    </article>
  </Main>
);

export default Index;
