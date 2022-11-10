import React from 'react';
import Layout from '../components/Layout';

export const Portfolio = (): JSX.Element => {
  return (
    <Layout
      customMeta={{
        title: 'Portfolio - Alex Swan',
      }}
    >
      <h1>Alex&apos;s Personal Portfolio</h1>
      <div className="title">
        <a
          href="https://boldbigflank.itch.io/beast-for-playdate"
          target="_blank"
          rel="noreferrer"
        >
          Beast
        </a>{' '}
        (Playdate)
      </div>
      <p>
        <div>
          <img className="half" src="/images/beast-title.png"></img>
          <img className="half" src="/images/beast-gameplay.png"></img>
        </div>
        <div>
          You play a diamond against a room full of monsters. You can move
          orthogonally, and the monsters can move diagonally. Don&apos;t let the
          monsters get to you. You can defeat monsters by squishing them between
          walls.{' '}
        </div>
      </p>
      <h2>
        <a href="https://js13kgames.com/" target="_blank" rel="noreferrer">
          JS13k
        </a>{' '}
        - Annual Game Jam with a 13KB limit
      </h2>
      <p>
        <div className="title">
          <a
            href="https://js13kgames.com/entries/tuts-tomb"
            target="_blank"
            rel="noreferrer"
          >
            2022
          </a>{' '}
          - Tut&apos;s Tomb (Desktop/WebXR)
        </div>
        <video controls width="560" loop>
          <source
            src="/media/tuts-tomb-capture.webm"
            type="video/webm"
          ></source>
        </video>
        <div>
          You are tasked with preparing King Tut to make the journey from death
          to the afterlife. Solve the two puzzles to complete the task.
        </div>
      </p>
      <p>
        <div className="title">
          <a
            href="https://js13kgames.com/entries/sculpting-done-quick"
            target="_blank"
            rel="noreferrer"
          >
            2020
          </a>{' '}
          - Sculpting Done Quick (WebXR)
        </div>
        <video controls width="560" loop>
          <source
            src="/media/sculpting-done-quick-capture.webm"
            type="video/webm"
          ></source>
        </video>
        <div>
          Create sculptures from a model as fast as possible. After reaching
          100%, try to do it without making mistakes. Share screenshots of your
          scoreboard to show off your achievements.
        </div>
      </p>
      <p>
        <div className="title">
          <a
            href="https://js13kgames.com/entries/backlit-treasure-escape"
            target="_blank"
            rel="noreferrer"
          >
            2019
          </a>{' '}
          - Backlit - Treasure Escape (WebXR)
        </div>
        <div>
          The moon is lined up perfectly to solve the puzzles and bring back an
          ancient treasure, the Golden Scarab!
        </div>
      </p>
      <p>
        <div className="title">
          <a
            href="https://js13kgames.com/entries/close-to-me"
            target="_blank"
            rel="noreferrer"
          >
            2018
          </a>{' '}
          - Close To Me (Desktop)
        </div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube-nocookie.com/embed/DF-QUmwBhcE"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div>
          Heavily inspired by{' '}
          <a
            href="https://www.justshapesandbeats.com/"
            target="_blank"
            rel="noreferrer"
          >
            Just Shapes and Beats.
          </a>
          Avoid the lines, or anything pink.
        </div>
      </p>
      <p>
        <div className="title">
          <a
            href="https://js13kgames.com/entries/polyhedron-runner"
            target="_blank"
            rel="noreferrer"
          >
            2017
          </a>{' '}
          - Polyhedron Runner (WebXR)
        </div>
        <video controls width="560" loop>
          <source
            src="/media/polyhedron-runner-capture.webm"
            type="video/webm"
          ></source>
        </video>
        <div>
          You are flying into ever expanding polyhedrons. Move your body around
          to line up with the holes in each before you collide.
        </div>
      </p>
    </Layout>
  );
};

export default Portfolio;
