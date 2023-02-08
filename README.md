# NextJS - Typescript - MDX - Blog

A Next.js starter for your next blog or personal site. Built with:

- [Typescript](https://www.typescriptlang.org/)
- Write posts with [MDX](https://mdxjs.com/)
- Style with [Tailwind CSS](https://tailwindcss.com/)
- Linting with [ESLint](https://eslint.org/)
- Formatting with [Prettier](https://prettier.io/)
- Linting, typechecking and formatting on by default using [`husky`](https://github.com/typicode/husky) for commit hooks
- Testing with [Jest](https://jestjs.io/) and [`react-testing-library`](https://testing-library.com/docs/react-testing-library/intro)

This Starter is **heavily** inspired by [Lee Robinson](https://github.com/leerob/leerob.io) and [Anson Lichtfuss](https://github.com/ansonlichtfuss/website).

👀 [View the Live Demo](https://nextjs-typescript-mdx-blog.vercel.app/)

## Getting Started

```bash
git clone https://github.com/ChangoMan/nextjs-typescript-mdx-blog.git
cd nextjs-typescript-mdx-blog

yarn install
# or
npm install

yarn dev
# or
npm run dev
```

Your new site will be up at http://localhost:3030/


#### Connections per chain
Then for each first panel of a chain there is a set of
(R1, G1, B1, R2, G2, B2) that you have to connect to the corresponding pins.
They are marked `[1]`, `[2]` and `[3]` for chain 1, 2, and 3 below.

If you only connect one panel or have one chain, connect it to
`[1]` (:smile:); if you use parallel chains, add the other `[2]` and `[3]`.

To make things quicker to navigate visually, each chain is marked with a
separate icon:

`[1]`=:smile:, `[2]`=:boom: and `[3]`=:droplet: ; signals that go to all
chains have all icons.

|Connection                        | Pin | Pin |  Connection
|---------------------------------:|:---:|:---:|:-----------------------------
|                             -    |   1 |   2 | -
|                             -    |   3 |   4 | -
|                             -    |   5 |   6 | **GND**
|                       **strobe** |   7 |   8 | -
|                          **GND** |   9 |  10 | -
|                       **clock**  |  11 |  12 | **OE-** 
|                       **[1] G1** |  13 |  14 | **GND**
|                            **A** |  15 |  16 | **B**    
|                             -    |  17 |  18 | **C**    
|                       **[1] B2** |  19 |  20 | **GND**
|                       **[1] G2** |  21 |  22 | -
|                       **[1] R1** |  23 |  24 | **[1] R2** 
|                          **GND** |  25 |  26 | **[1] B1** 
|                             -    |  27 |  28 | -
|                              -   |  29 |  30 | **GND**
|                              -   |  31 |  32 | -
|                              -   |  33 |  34 | **GND**
|                              -   |  35 |  36 | -
|                              -   |  37 |  38 | -
|                              -   |  39 |  40 | -
