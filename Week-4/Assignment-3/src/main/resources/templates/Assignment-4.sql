-- @block 1. Write an SQL statement to select all articles with their author’s email.
SELECT articles.id, title, content, email  FROM
(articles
LEFT JOIN user
ON articles.author_id = user.id)

-- @block 2. Write another SQL statement to select articles from 7th to 12th sorted by id.
SELECT * FROM articles
ORDER BY id
LIMIT 6 OFFSET 6;