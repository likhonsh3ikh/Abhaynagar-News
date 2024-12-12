document.addEventListener('DOMContentLoaded', async () => {
    const newsList = document.getElementById('newsList');

    const response = await fetch('/api/news');
    const newsArticles = await response.json();

    newsArticles.forEach((article) => {
        const newsItem = document.createElement('div');
        newsItem.classList.add('bg-white', 'p-4', 'rounded', 'shadow-lg');

        newsItem.innerHTML = `
            <h2 class="text-xl font-semibold">${article.title}</h2>
            <p>${article.description}</p>
            <img src="${article.banner}" alt="${article.title}" class="w-full h-auto mt-4 mb-4 rounded" />
            <p class="text-gray-500 text-sm">By: ${article.author}</p>
            <a href="/news/${article.id}.html" class="text-blue-500 hover:underline">Read more</a>
        `;

        newsList.appendChild(newsItem);
    });
});
