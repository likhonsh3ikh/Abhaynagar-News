// Fetch news data from Vercel API
fetch('/api/news')
    .then(response => response.json())
    .then(newsArticles => {
        const newsContainer = document.getElementById('news-container');
        newsArticles.forEach(article => {
            const articleCard = document.createElement('div');
            articleCard.classList.add('bg-white', 'rounded-lg', 'shadow-lg', 'overflow-hidden');
            articleCard.innerHTML = `
                <img src="${article.ogImage}" alt="News Image" class="w-full h-48 object-cover">
                <div class="p-4">
                    <h3 class="text-xl font-semibold mb-2">${article.title}</h3>
                    <p class="text-gray-600 mb-4">${article.description}</p>
                    <a href="${article.url}" class="text-blue-600 hover:text-blue-500">আরও পড়ুন &rarr;</a>
                </div>
            `;
            newsContainer.appendChild(articleCard);
        });
    })
    .catch(error => console.error('Error loading news:', error));
