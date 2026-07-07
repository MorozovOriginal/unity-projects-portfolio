// Все проекты находятся здесь.
// Чтобы добавить проект — скопируй один блок и измени данные.
// Чтобы удалить проект — удали весь блок проекта из массива.

const projects = [
  {
    title: "Project 1",
    description: "2D-платформер в стиле Geometry Dash.",
    cover: "https://i.imgur.com/OPHkdFj.gif",
    images: [
      "https://i.imgur.com/hiTGI6b.jpeg",
      "https://i.imgur.com/EfznfpP.jpeg",
      "https://i.imgur.com/V8umTIH.jpeg"
    ]
  },
  {
    title: "Project 2",
    description: "Краткое описание второго проекта. Например: игра с видом сверху, системой очков и улучшениями персонажа.",
    cover: "assets/project-2-cover.gif",
    images: [
      "assets/project-2-screen-1.png",
      "assets/project-2-screen-2.png"
    ]
  },
  {
    title: "Project 3",
    description: "Краткое описание третьего проекта. Например: прототип гонки, где игрок управляет машиной и избегает препятствий.",
    cover: "assets/project-3-cover.gif",
    images: [
      "assets/project-3-screen-1.png",
      "assets/project-3-screen-2.png",
      "assets/project-3-screen-3.png",
      "assets/project-3-screen-4.png"
    ]
  },
  {
    title: "Project 4",
    description: "Краткое описание четвёртого проекта. Например: 3D-игра с исследованием локации и сбором предметов.",
    cover: "assets/project-4-cover.gif",
    images: [
      "assets/project-4-screen-1.png"
    ]
  },
  {
    title: "Project 5",
    description: "Краткое описание пятого проекта. Например: survival-прототип с волнами врагов и системой здоровья.",
    cover: "assets/project-5-cover.gif",
    images: [
      "assets/project-5-screen-1.png",
      "assets/project-5-screen-2.png",
      "assets/project-5-screen-3.png"
    ]
  },
  {
    title: "Project 6",
    description: "Краткое описание шестого проекта. Например: мини-игра с простой механикой, меню и экраном победы.",
    cover: "assets/project-6-cover.gif",
    images: [
      "assets/project-6-screen-1.png",
      "assets/project-6-screen-2.png"
    ]
  }
];

const projectsGrid = document.querySelector("#projectsGrid");
const modal = document.querySelector("#projectModal");
const modalTitle = document.querySelector("#modalTitle");
const modalDescription = document.querySelector("#modalDescription");
const modalGallery = document.querySelector("#modalGallery");
const modalClose = document.querySelector("#modalClose");
const modalBackdrop = document.querySelector("#modalBackdrop");

function createProjectCard(project, index) {
  const card = document.createElement("article");
  card.className = "project-card";

  card.innerHTML = `
    <img
      class="project-cover"
      src="${project.cover}"
      alt="${project.title}"
      onerror="this.src='assets/placeholder.svg'"
    />

    <div class="project-info">
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <button class="open-gallery" type="button">
        Открыть галерею
      </button>
    </div>
  `;

  const cover = card.querySelector(".project-cover");
  const button = card.querySelector(".open-gallery");

  cover.addEventListener("click", () => openModal(index));
  button.addEventListener("click", () => openModal(index));

  return card;
}

function renderProjects() {
  projectsGrid.innerHTML = "";

  projects.forEach((project, index) => {
    const card = createProjectCard(project, index);
    projectsGrid.appendChild(card);
  });
}

function openModal(index) {
  const project = projects[index];

  modalTitle.textContent = project.title;
  modalDescription.textContent = project.description;
  modalGallery.innerHTML = "";

  const galleryImages = project.images.length > 0 ? project.images : [project.cover];

  galleryImages.forEach((imagePath) => {
    const image = document.createElement("img");
    image.src = imagePath;
    image.alt = project.title;
    image.onerror = () => {
      image.src = "assets/placeholder.svg";
    };

    modalGallery.appendChild(image);
  });

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.classList.remove("active");
  document.body.style.overflow = "";
}

modalClose.addEventListener("click", closeModal);
modalBackdrop.addEventListener("click", closeModal);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
});

renderProjects();
