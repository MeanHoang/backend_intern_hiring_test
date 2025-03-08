USE hiring_test;

-- 1.Get all users who have made at least 3 orders.
SELECT u.id, u.name, u.email, COUNT(o.id) AS total_orders
FROM Users u
JOIN Orders o ON u.id = o.user_id
GROUP BY u.id
HAVING total_orders >= 3;

-- 2.Find the top 5 products (by total sales amount).
SELECT 
    p.id, 
    p.name, 
    SUM(o.amount * p.price) AS total_sales
FROM Products p
JOIN Orders o ON p.id = o.product_id
GROUP BY p.id, p.name
ORDER BY total_sales DESC
LIMIT 5;

-- 3.Calculate the average order amount for each month in 2023.
SELECT 
    MONTH(o.order_date) AS month,
    AVG(o.amount) AS avg_order_amount
FROM Orders AS o
JOIN Products AS p ON o.product_id = p.id
WHERE YEAR(o.order_date) = 2023
GROUP BY MONTH(o.order_date)
ORDER BY month;

-- 4.Find users who have purchased products from all available categories.
SELECT u.id, u.name, u.email, u.signup_date
FROM Users u
JOIN Orders o ON u.id = o.user_id
JOIN Products p ON o.product_id = p.id
GROUP BY u.id, u.name
HAVING COUNT(DISTINCT p.category) = 
(SELECT COUNT(DISTINCT category) FROM Products);


