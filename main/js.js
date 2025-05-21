const container = document.getElementById('articles');
const API_KEY = "I2n0KrtxcraB58YSF2XeE7mrk1EodYy7"; 

async function fetchArticles() {
  try {
    const res = await fetch(
      `https://api.nytimes.com/svc/mostpopular/v2/viewed/30.json?api-key=${API_KEY}`
    );
    const data = await res.json();

    if (!data.results) throw new Error("Нет данных в ответе");

    displayArticles(data.results.slice(0, 3));
  } catch (err) {
    console.error("Ошибка при загрузке статей:", err);
    container.innerHTML = "<p>Не удалось загрузить статьи</p>";
  }
}

function displayArticles(articles) {
  container.innerHTML = "";
  articles.forEach(article => {
    const el = document.createElement('div');
    el.className = 'article';

    el.addEventListener('click', () => {
      localStorage.setItem('selectedArticle', JSON.stringify(article));
      window.location.href = `addition.html`
    })

    el.innerHTML = `
    <div class="text-article">
      <h2>${article.title}</h2>
      <p>${article.abstract}</p>
    </div>
      ${article.media && article.media[0] ? `<img src="${article.media[0]['media-metadata'][2].url}" alt="" class='img-article'>` : ''}
    `;
    container.appendChild(el);
    const block_container = document.createElement('div')
    block_container.className = 'block_container'
    block_container.innerHTML = `
        <div class='square'></div>
        <div class='square'></div>
        <div class='square'></div>
    `
    container.appendChild(block_container)
    const divisor = document.createElement('hr')
    divisor.className = 'divide-articles'
    container.appendChild(divisor)
    
  });
}

fetchArticles();
