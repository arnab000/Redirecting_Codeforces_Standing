


const url = document.URL;

const contestId = url.split('/')[4];

const a = document.querySelector(
  `a[href="/contest/${contestId}/standings"]`
);

a.setAttribute('href', '#');
