# Abhaynagar News

Abhaynagar News is a local news portal showcasing the latest updates from Abhaynagar. The website is built using HTML, JavaScript, and Supabase for dynamic content loading.

## Features

- Automatically fetches news articles from Supabase.
- Responsive and modern UI using Tailwind CSS.
- Easy-to-use backend with Supabase for managing news.

## Setup

1. **Vercel Deployment**
   - Clone this repository.
   - Create a Vercel project and link it to the repository.
   - Add the following environment variables in Vercel:
     - `SUPABASE_URL`: Your Supabase URL.
     - `SUPABASE_ANON_KEY`: Your Supabase anon key.

2. **Supabase Setup**
   - Create a Supabase project.
   - Set up a table called `news` with the following columns:
     - `title` (Text)
     - `description` (Text)
     - `ogImage` (Text)
     - `url` (Text)
     - `created_at` (Timestamp)

3. **Deploy to Vercel**
   - Push your project to GitHub and deploy it on Vercel.
