

document.addEventListener("DOMContentLoaded", () => {
    const saved = localStorage.getItem('selectedArticle');
    const article = JSON.parse(saved)
    const main_text = document.querySelector('.main-text')
    main_text.textContent = article.title;
    const add_text = document.querySelector('.main-items p');
    add_text.textContent = article.abstract;
    const img = document.querySelector('.main-items img')
    const imgURL = article.media[0]['media-metadata'][2].url;
    img.src = imgURL;
})

const back = document.querySelector('.image-back img')
back.addEventListener('click', () => {
    window.location.href = 'main.html'
})