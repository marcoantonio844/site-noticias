const news = [
  {
    title: "Nova tecnologia revoluciona o mercado",
    description: "Pesquisadores desenvolvem um chip que promete acelerar computadores em 10x.",
    image: "images/tecnologia.jpg",
    category: "Tecnologia"
  },
  {
    title: "Clima extremo atinge o sul do Brasil",
    description: "Chuvas intensas causam alagamentos em várias cidades.",
    image: "images/clima.jpg",
    category: "Clima"
  },
  {
    title: "Brasil vence na estreia",
    description: "Seleção brasileira de vôlei vence Argentina por 3 sets a 0.",
    image: "images/esportes.jpg",
    category: "Esportes"
  },
  {
    title: "Startup lança app de saúde mental",
    description: "Aplicativo promete ajudar usuários a lidar com ansiedade e estresse.",
    image: "images/saude.jpg",
    category: "Tecnologia"
  }
];


const container = document.getElementById("news-container");
const searchInput = document.getElementById("search");
const themeBtn = document.getElementById("toggle-theme");

function renderNews(filteredNews) {
  container.innerHTML = "";
  filteredNews.forEach(item => {
    const card = document.createElement("div");
    card.className = "news-card";
    card.innerHTML = `
      <img src="${item.image}" alt="${item.title}" />
      <div class="content">
        <h2>${item.title}</h2>
        <p>${item.description}</p>
      </div>
    `;
    container.appendChild(card);
  });
}

// Filtro por busca
searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  const filtered = news.filter(n => n.title.toLowerCase().includes(query));
  renderNews(filtered);
});

// Filtro por categoria
document.querySelectorAll("#categories button").forEach(btn => {
  btn.addEventListener("click", () => {
    const category = btn.dataset.category;
    const filtered = category === "Todos" ? news : news.filter(n => n.category === category);
    renderNews(filtered);
  });
});

// Alternar tema
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// Render inicial
renderNews(news);

const headlines = [
  "Últimas manchetes",
  "Análise política",
  "Economia em foco",
  "Cultura e sociedade"
];
let index = 0;

function rotateHeadline() {
  document.getElementById("headline").textContent = headlines[index];
  index = (index + 1) % headlines.length;
}
setInterval(rotateHeadline, 6000);
rotateHeadline();

function updateDateTime() {
  const now = new Date();
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  };
  document.getElementById("datetime").textContent = now.toLocaleDateString('pt-BR', options);
}
setInterval(updateDateTime, 60000);
updateDateTime();
