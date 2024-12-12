import { getNews } from '../config';

export default async function handler(req, res) {
    const newsArticles = await getNews();
    
    res.status(200).json(newsArticles);
}
