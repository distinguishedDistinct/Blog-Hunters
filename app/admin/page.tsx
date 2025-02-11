"use client"; // Required since we are using fetch

import { useEffect, useState } from "react";

export default function ArticlesPage() {
  const [articles, setArticles] = useState<any[]>([]);

  useEffect(() => {
    async function fetchArticles() {
      const res = await fetch("/api/articles");
      const data = await res.json();
      setArticles(data);
    }
    fetchArticles();
  }, []);

  return (
    <div>
      <h1>Articles</h1>
      {articles.length > 0 ? (
        <ul>
          {articles.map((article) => (
            <li key={article._id}>{article.title} </li>
          ))}
        </ul>
      ) : (
        <p>No articles found.</p>
      )}
    </div>
  );
}
