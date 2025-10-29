    const express = require('express');
    const app = express();
    const PORT = 8080;

    app.listen(PORT, () => {
      console.log(`Express server running at http://localhost:${PORT}/`);
    });

async function getGithubRepos(username) {
  const response = await fetch(`https://api.github.com/users/KaleeHoward/repos`);
  const data = await response.json();
  return data;
}

function createRepoCard(repo) {
  const card = document.createElement('div');
  card.classList.add('repo-card'); 

  const repoName = document.createElement('h3');
  repoName.textContent = repo.name;

  const repoDescription = document.createElement('p');
  repoDescription.textContent = repo.description || 'No description available.';

  const repoLink = document.createElement('a');
  repoLink.href = repo.html_url;
  repoLink.textContent = 'View on GitHub';
  repoLink.target = '_blank'; 

  card.appendChild(repoName);
  card.appendChild(repoDescription);
  card.appendChild(repoLink);

  return card;
}

async function displayGithubRepos(username, containerId) {
  const repos = await getGithubRepos(username);
  const container = document.getElementById(repo-container);

  if (repos && repos.length > 0) {
    repos.forEach(repo => {
      const card = createRepoCard(repo);
      container.appendChild(card);
    });
  } else {
    container.textContent = 'No repositories found for this user.';
  }
}

displayGithubRepos('your-github-username', 'repo-container');


// const username = 'KaleeHoward';

// getRepo();

// async function getRepo(){

//     try{

//         const response = await fetch(`https://api.github.com/repos/${username}/${repo.name}`);

//         if(!response.ok){
//             throw new Error("Could not fetch repo");
//         }

//         const data = await response.json();
//         return data;
//     }
//     catch(error){
//         console.error(error);
//     }
// }

//    function createCard(item) {
//         const card = document.createElement('div');
//         card.classList.add('card'); // Add a CSS class for styling

//         const title = document.createElement('h2');
//         title.textContent = item.title; // Assuming 'title' is a property in your API data

//         const description = document.createElement('p');
//         description.textContent = item.description; // Assuming 'description' is a property

//         const link = document.createElement('a');
//         link.href = item.url; // Assuming 'url' is the link in your API data
//         link.textContent = 'Learn More'; // Or use item.linkText, etc.
//         link.target = '_blank'; // Open link in a new tab

//         card.appendChild(title);
//         card.appendChild(description);
//         card.appendChild(link);

//         return card;
//     }