<sub>Credits to [dona.ai](https://dona.ai/) for their amazing product.</sub>

#### About
This project is a clone of [dona.ai,](https://dona.ai/) which is a to-do list focused on user experience I enjoy - in early access for a while now. I've always liked their design and, therefore, decided to recreate it with Typescript and React.

This current version is a refactor of one I finished mid-2022, which in its turn is a refactor of my first to-do apps [(somewhere around here).](https://github.com/antoniopataro/my-sandbox)

Feel free to open issues, make suggestions, and get in contact with me.

#### Instructions
If you want to run it locally, you can follow these steps:

1. Clone the repository w/ `git clone git@github.com:antoniopataro/dona-clone.git`;
2. Install its dependencies w/ `npm install` or other package manager you might wanna use;
3. Either run `npm run dev` for a development version or `npm run build && npm run preview` for a production preview version.

<sub>Fun fact: I've not only used [bun](https://github.com/oven-sh/bun) in development mode, but also in the app's deploy for gh-pages (dependencies install and build proccess) - if you wanna use it locally, install bun with `curl https://bun.sh/install | bash` and run the scripts above with `bun` instead of `npm` - if you're interested in the workflow, check its [deploy.yml.](https://github.com/antoniopataro/dona-clone/blob/main/.github/workflows/deploy.yml)</sub>

#### Tech
- bun;
- heroicons;
- lordicon;
- react.js;
- react-beautiful-dnd;
- react-calendar;
- react-markdown w/ remark-gfm plugin;
- react-router-dom;
- redux saga;
- redux w/ react-redux and reduxjs/toolkit;
- tailwindcss w/ postcss;
- typescript;
- vite.
