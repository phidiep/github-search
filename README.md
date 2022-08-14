# Introduction
This is a Responsive Github simple search project using bootstrapped, TypeScript , React and Next.js

Document : [`Github Search API`](https://docs.github.com/en/rest/search).

## Getting Started

First, install and  run the development server:

```bash
npm install 
npm run dev
```
#How to use

You can use some sample below here or just enter some text and search.

```bash
  const codeQuery = "addClass+in:file+language:js+repo:jquery/jquery";
  const commitQuery = "repo:octocat/Spoon-Knife+css";
  const issueQuery ="windows+label:bug+language:python+state:open&sort=created order=asc";
  const labelQuery = "bug+defect+enhancement&repository_id=64778136";
  const repositoriesQuery ="tetris+language:assembly&sort=stars&order=desc";
  const topicQuery = "ruby+is:featured";
  const userQuey = "tom+repos:%3E42+followers:%3E1000";
```
## License

MIT
Made by fendy