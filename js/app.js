const projectsListhtml = document.querySelector("#projects");

// fetch and display data

const fetchData = async () => {
  try {
    const resp = await fetch("/js/sites.json");
    const data = await resp.json();
    return data;
  } catch (error) {
    console.error("error loading json file", error);
  }
};

const showcaseProjects = (projects) => {
  console.log(projectsListhtml);
  console.log(projects);
  const projectList = projects.map((project) => {
    const {projectName, link, description, image} = project;
    return `<div class="project-card"><a href="${link}" target="_blank">
    <img src="${image}" alt="Project 1">
    <h3>${projectName}</h3>
    <p>${description}</p>
    </a>
  </div>`
  }).join('');
  projectsListhtml.innerHTML = projectList;
};

const start = async () => {
  const data = await fetchData();
  showcaseProjects(data);
};

start();
