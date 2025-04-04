import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Projects/Cell';
import articles from '../data/articles';

const Articles = () => (
  <Main title="Articles" description="Learn about Rickys's articles.">
    <article className="post" id="articles">
      <header>
        <div className="title">
          <h2>
            <Link to="/articles">Articles</Link>
          </h2>
          <p>A series of articles summarizing personal learning</p>
        </div>
      </header>
      {articles.map((article) => (
        <Cell data={article} key={article.title} />
      ))}
    </article>
  </Main>
);

export default Articles;
