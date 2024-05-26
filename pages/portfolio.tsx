import React from 'react';
import Layout from '../components/Layout';
import Image from 'next/image';

export const Portfolio = (): JSX.Element => {
  return (
    <Layout
      customMeta={{
        title: 'Portfolio - Alex Swan',
      }}
    >
      <h1>Alex&apos;s Personal Portfolio</h1>
      <div className="portfolio-item">
        <div className="meta">
          <div className="title">
            <a
              href="https://boldbigflank.itch.io/one-man-threat-ops"
              target="_blank"
              rel="noreferrer"
            >
              One Man Threat Ops
            </a>
          </div>
          <div className="subtitle">
            Uncrank&apos;d Game Jam Entry (Theme: Reflector and/or Float)
          </div>
          <div>Platform: Playdate</div>
          <div>
            Framework:{' '}
            <a href="https://play.date/dev/" target="_blank" rel="noreferrer">
              Playdate SDK
            </a>
          </div>
        </div>
        <div>
          <div className="playdate">
            <Image
              src="/images/onemanthreatops.gif"
              alt="a 3d model of Glamis Castle"
              style={{
                width: '100%',
                maxWidth: '400px',
                height: 'auto',
              }}
              width={400}
              height={240}
            ></Image>
          </div>
          <div className="description">
            <div>Top Down Shooter for Playdate</div>
            <div>
              Use the crank to aim your character, and go toe to toe against
              alien bugs and humanoids.
            </div>
          </div>
        </div>
      </div>
      <div className="portfolio-item">
        <div className="meta">
          <div className="title">
            <a
              href="https://alexswan.io/js13k-2023/"
              target="_blank"
              rel="noreferrer"
            >
              The Mystery at Glamis Castle
            </a>
          </div>
          <div className="subtitle">
            JS13kGames 2023 Entry (Theme: 13th Century)
          </div>
          <div>Platform: Web/WebXR</div>
          <div>
            Framework:{' '}
            <a
              href="https://www.babylonjs.com/"
              target="_blank"
              rel="noreferrer"
            >
              babylon.js
            </a>
          </div>
        </div>
        <div>
          <div className="relative">
            <Image
              src="/images/js13k2023-scene.png"
              alt="a 3d model of Glamis Castle"
              style={{
                width: '100%',
                maxWidth: '400px',
                height: 'auto',
              }}
              width={640}
              height={360}
            ></Image>
          </div>
          <div className="description">
            <div>
              Solve puzzles to earn the spot of King in 13th century Scotland
            </div>

            <div>
              <strong>Note:</strong> As a part of the JS13k Games Jam, submitted
              code must be less than 13 kilobytes (excluding the babylon.js
              library)
            </div>
          </div>
        </div>
      </div>
      <div className="portfolio-item">
        <div className="meta">
          <div className="title">
            <a
              href="https://boldbigflank.itch.io/harvest-puzzle-box"
              target="_blank"
              rel="noreferrer"
            >
              Harvest Puzzle Box
            </a>
          </div>
          <div className="subtitle">LDJam 52 Entry (Theme: harvest)</div>
          <div>Platform: Web</div>
          <div>
            Framework:{' '}
            <a href="https://unity.com" target="_blank" rel="noreferrer">
              Unity v2021
            </a>
          </div>
        </div>
        <div>
          <div className="relative">
            <Image
              src="/images/harvestpuzzle.png"
              alt="The Harvest Puzzle Box"
              style={{
                width: '100%',
                maxWidth: '400px',
                height: 'auto',
              }}
              width={703}
              height={703}
            ></Image>
          </div>
          <div className="description">
            Prepare for harvest by solving puzzles related to Seed, Dirt, Water
            and Sun.
          </div>
        </div>
      </div>
      <div className="portfolio-item">
        <div className="meta">
          <div className="title">
            <a
              href="https://boldbigflank.itch.io/beast-for-playdate"
              target="_blank"
              rel="noreferrer"
            >
              Beast
            </a>
          </div>
          <div>Platform: Playdate</div>
          <div>
            Framework:{' '}
            <a href="https://play.date/pulp/" target="_blank" rel="noreferrer">
              Playdate Pulp
            </a>
          </div>
        </div>
        <div>
          <div className="relative">
            <Image
              alt="Beast title screen"
              className="half"
              src="/images/beast-title.png"
              style={{
                width: '100%',
                maxWidth: '400px',
                height: 'auto',
              }}
              width={423}
              height={271}
            ></Image>
            <Image
              alt="Beast gameplay screen"
              className="half"
              src="/images/beast-gameplay.png"
              style={{
                width: '100%',
                maxWidth: '400px',
                height: 'auto',
              }}
              width={423}
              height={271}
            ></Image>
          </div>
          <div className="description">
            You play a diamond against a room full of monsters. You can move
            orthogonally, and the monsters can move diagonally. Don&apos;t let
            the monsters get to you. You can defeat monsters by squishing them
            between walls.{' '}
          </div>
        </div>
      </div>
      <div className="portfolio-item">
        <div className="meta">
          <div className="title">
            <a
              href="https://js13kgames.com/entries/tuts-tomb"
              target="_blank"
              rel="noreferrer"
            >
              Tut&apos;s Tomb
            </a>{' '}
          </div>
          <div className="subtitle">JS13k 2022 Entry (Theme: death)</div>
          <div>Platform: Web/WebXR</div>
          <div>
            Framework:{' '}
            <a
              href="https://www.babylonjs.com/"
              target="_blank"
              rel="noreferrer"
            >
              babylon.js
            </a>
          </div>
        </div>
        <video controls width="560" loop>
          <source
            src="/media/tuts-tomb-capture.webm"
            type="video/webm"
          ></source>
        </video>
        <div className="description">
          <div>
            You are tasked with preparing King Tut to make the journey from
            death to the afterlife. Solve the two puzzles to complete the task.
          </div>
          <div>
            <strong>Note:</strong> As a part of the JS13k Games Jam, submitted
            code must be less than 13 kilobytes (excluding the babylon.js
            library)
          </div>
        </div>
      </div>
      <div className="portfolio-item">
        <div className="meta">
          <div className="title">
            <a
              href="https://js13kgames.com/entries/sculpting-done-quick"
              target="_blank"
              rel="noreferrer"
            >
              Sculpting Done Quick
            </a>
          </div>
          <div className="subtitle">JS13k 2020 Entry (Theme: 404)</div>
          <div>Platform: WebXR</div>
          <div>
            Framework:{' '}
            <a
              href="https://www.babylonjs.com/"
              target="_blank"
              rel="noreferrer"
            >
              babylon.js
            </a>
          </div>
        </div>
        <video controls width="560" loop>
          <source
            src="/media/sculpting-done-quick-capture.webm"
            type="video/webm"
          ></source>
        </video>
        <div className="description">
          <div>
            Create sculptures from a model as fast as possible. After reaching
            100%, try to do it without making mistakes. Share screenshots of
            your scoreboard to show off your achievements.
          </div>
          <div>
            <strong>Note:</strong> As a part of the JS13k Games Jam, submitted
            code must be less than 13 kilobytes (excluding the babylon.js
            library)
          </div>
        </div>
      </div>
      <div className="portfolio-item">
        <div className="meta">
          <div className="title">
            <a
              href="https://js13kgames.com/entries/backlit-treasure-escape"
              target="_blank"
              rel="noreferrer"
            >
              Backlit - Treasure Escape
            </a>
          </div>
          <div className="subtitle">JS13k 2019 Entry (Theme: back)</div>
          <div>Platform: WebXR</div>
          <div>
            Framework:{' '}
            <a
              href="https://www.babylonjs.com/"
              target="_blank"
              rel="noreferrer"
            >
              babylon.js
            </a>
          </div>
        </div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube-nocookie.com/embed/byXN4rrITcM"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div className="description">
          The moon is lined up perfectly to solve the puzzles and bring back an
          ancient treasure, the Golden Scarab!
        </div>
      </div>
      <div className="portfolio-item">
        <div className="meta">
          <div className="title">
            <a
              href="https://js13kgames.com/entries/close-to-me"
              target="_blank"
              rel="noreferrer"
            >
              Close To Me
            </a>
          </div>
          <div className="subtitle">JS13k 2018 Entry (Theme: offline)</div>
          <div>Platform: Web</div>
          <div>
            Framework:{' '}
            <a
              href="https://straker.github.io/kontra"
              target="_blank"
              rel="noreferrer"
            >
              kontra.js
            </a>
          </div>
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
        <div className="description">
          Heavily inspired by{' '}
          <a
            href="https://www.justshapesandbeats.com/"
            target="_blank"
            rel="noreferrer"
          >
            Just Shapes and Beats.
          </a>
          <br />
          Avoid the lines, or anything pink.
          <div>
            <strong>Note:</strong> As a part of the JS13k Games Jam, submitted
            code must be less than 13 kilobytes
          </div>
        </div>
      </div>
      <div className="portfolio-item">
        <div className="meta">
          <div className="title">
            <a
              href="https://js13kgames.com/entries/polyhedron-runner"
              target="_blank"
              rel="noreferrer"
            >
              Polyhedron Runner - Demake
            </a>
          </div>
          <div className="subtitle">JS13k 2017 Entry (Theme: lost)</div>
          <div>Platform: Web/WebXR</div>
          <div>
            Framework:{' '}
            <a href="https://aframe.io" target="_blank" rel="noreferrer">
              A-Frame
            </a>
          </div>
        </div>
        <video controls width="560" loop>
          <source
            src="/media/polyhedron-runner-capture.webm"
            type="video/webm"
          ></source>
        </video>
        <div className="description">
          <div>
            You are flying into ever expanding polyhedrons. Move your body
            around to line up with the holes in each before you collide.
          </div>
          <div>
            <strong>Note:</strong> As a part of the JS13k Games Jam, submitted
            code must be less than 13 kilobytes (excluding the A-Frame library)
          </div>
        </div>
      </div>
      <div className="portfolio-item">
        <div className="meta">
          <div className="title">
            <a
              href="https://play.google.com/store/apps/details?id=com.alexboldit.hexagon&hl=en_US&gl=US"
              target="_blank"
              rel="noreferrer"
            >
              Hyper Tiles
            </a>
          </div>
          <div className="subtitle">One Game A Month entry</div>
          <div>Platform: Android/iOS</div>
          <div>
            Framework:{' '}
            <a href="https://unity.com" target="_blank" rel="noreferrer">
              Unity3d 5
            </a>
          </div>
        </div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube-nocookie.com/embed/WWhYro5_sGI"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div className="description">
          Tap the tiles as fast as you can. Missing is an instant loss. Compete
          against friends for the best score.
          <br />
          Hyper Tiles is an even more challenging but brutally fair tile tapping
          game. Perfect for short bursts or long bus rides.
        </div>
      </div>
      <div className="portfolio-item">
        <div className="meta">
          <div className="title">
            <a
              href="https://play.google.com/store/apps/details?id=com.alexboldit.onethreeeight&hl=en_US&gl=US"
              target="_blank"
              rel="noreferrer"
            >
              138 Polyhedron Runner
            </a>
          </div>
          <div className="subtitle">One Game A Month entry</div>
          <div>Platform: Android/iOS</div>
          <div>
            Framework:{' '}
            <a href="https://unity.com" target="_blank" rel="noreferrer">
              Unity3d 5
            </a>
          </div>
        </div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube-nocookie.com/embed/sJYXTYaWGgs"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div className="description">
          Fly through an endless assault of polyhedrons at breakneck speed.
          Rotate shapes to find the gaps, or get sent hurtling back to oblivion.
        </div>
      </div>
      <div className="portfolio-item">
        <div className="meta">
          <div className="title">
            <a
              href="https://play.google.com/store/apps/details?id=com.alexboldit.cyclone&hl=en_US&gl=US&pli=1"
              target="_blank"
              rel="noreferrer"
            >
              Spheroid Cyclone
            </a>
          </div>
          <div className="subtitle">One Game A Month entry</div>
          <div>Platform: Android/iOS</div>
          <div>
            Framework:{' '}
            <a href="https://unity.com" target="_blank" rel="noreferrer">
              Unity3d 5
            </a>
          </div>
        </div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube-nocookie.com/embed/phSSBvi52jE"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div className="description">
          Dash down the endless tunnel and avoid obstacles in this wicked
          awesome psychedelic adventure.
        </div>
      </div>
    </Layout>
  );
};

export default Portfolio;
