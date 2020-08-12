const url = document.URL;

const contestId = url.split('/')[4];

const as = document.querySelectorAll(
  `a[href="/contest/${contestId}/standings"]`
);

as.forEach((a) => a.setAttribute('href', '#'));
