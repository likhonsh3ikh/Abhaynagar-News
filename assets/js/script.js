// Show loader before fetching
const loader = document.querySelector('.loader');
const newsContainer = document.getElementById('news-container');

// Show popup for errors or no news
const popup = document.querySelector('.popup');
const popupContent = popup.querySelector('.popup-content');

// Function to fetch news
async function fetchNews() {
    loader.style.display = 'block'; // Show loader
    try {
        const response = await fetch('/api/news');
        const news = await response.json();

        if (news.length === 0) {
            showPopup('No news found!', 'Please try again later.');
        } else {
            renderNews(news);
        }
    } catch (error) {
        showPopup('Error fetching news!', 'Please try again later.');
    } finally {
        loader.style.display = 'none'; // Hide loader
    }
}

// Function to render the news dynamically
function renderNews(newsArticles) {
    newsContainer.innerHTML = ''; // Clear existing news
    newsArticles.forEach((article) => {
        const articleElement = document.createElement('article');
        articleElement.innerHTML = `
            <img src="${article.banner}" alt="${article.title}">
            <h3>${article.title}</h3>
            <p>${article.description}</p>
            <a href="/news/${article.id}.html">Read more</a>
        `;
        newsContainer.appendChild(articleElement);
    });
}

// Show popup
function showPopup(title, message) {
    popupContent.innerHTML = `<h3>${title}</h3><p>${message}</p>`;
    popup.classList.add('show');
}

// Close popup
popup.querySelector('button').addEventListener('click', () => {
    popup.classList.remove('show');
});

// Fetch news on page load
fetchNews();
