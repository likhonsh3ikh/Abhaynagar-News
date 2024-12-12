document.getElementById('newsForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const author = document.getElementById('author').value;
    const banner = document.getElementById('banner').value;

    const response = await fetch('/api/news/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            title,
            description,
            author,
            banner,
        }),
    });

    const data = await response.json();

    if (data.success) {
        alert('News created successfully!');
        window.location.href = '/';
    } else {
        alert('Error creating news.');
    }
});
