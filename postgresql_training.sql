-- CREATING A SIMPLE TABLE
CREATE TABLE customers(
    first_name VARCHAR(30) NOT NULL,
    state CHAR(2) NOT NULL,
    birth_date DATE NOT NULL,
    date_created TIMESTAMP NOT NULL,
    gender CHAR(1) NOT NULL,
    id SERIAL PRIMARY KEY
);

-- INSERTING AN ENTRY IN THE TABLE
INSERT INTO customers(
    first_name, state, birth_date, date_created, gender
) VALUES (
    'Mauricio', 'GA', '12-22-1998', CURRENT_TIMESTAMP, 'M'
);

-- RETRIEVING CUSTOMERS ORDERED BY ID AND ASCENDING
SELECT * from customers ORDER BY id ASC;

-- CREATING A NEW TYPE
CREATE TYPE gender_type as enum('M', 'F');

-- ALTERING TABLE COLUMN TO USE A NEW TYPE
ALTER TABLE customers
ALTER COLUMN gender TYPE gender_type USING gender::gender_type;

-- FOREIGN KEY EXPLANATION/INTUITION
-- A customer can have many orders
-- An order can belong to only ONE customer.
CREATE TABLE customers(
    customer_id SERIAL PRIMARY KEY, -- The parent table! The PK of the parent table.
    customer_name VARCHAR(100) NOT NULL
)

CREATE TABLE orders(
    order_id SERIAL PRIMARY KEY, -- The child table! The PK of the child table.
    order_date DATE NOT NULL,
    customer_id INT, -- Foreign key that references customer_id in the customers table
    FOREIGN KEY (customer_id) -- Declaring the foreign key relationship
        REFERENCES customers(customer_id)
        ON DELETE CASCADE -- Optional: If a customer is deleted, delete their orders too
)

-- WHERE
SELECT * FROM products WHERE discount > .15;

-- OR: WHERE time_order_taken BETWEEN date1 AND date2
SELECT time_order_taken, product_name
FROM PRODUCT 
WHERE time_order_taken > '12-22-1998' AND time_order_taken < '12-31-2024';

SELECT * FROM customers WHERE customer_name = 'Alice';

SELECT * FROM customers
WHERE customer_name = 'Alice' OR customer_name = 'Bob';

SELECT * FROM customers
WHERE NOT customer_name = 'Alice';

-- WHERE + LIKE
-- RETRIEVE CUSTOMERS WHOSE NAME START WITH A
SELECT * FROM customers
WHERE customer_name LIKE 'A%';

-- RETRIEVE CUSTOMERS WHOSE NAME CONTAIN "LI"
SELECT * FROM customers
WHERE customer_name LIKE '%li%';

-- WHERE + IN
SELECT * FROM customers
WHERE city IN ('New York', 'Los Angeles');

-- GROUP BY
-- COUNT: COUNTING THE NUMBER OF ORDERS EACH CUSTOMER HAS PLACED
SELECT customer_id, COUNT(order_id) AS order_count
FROM orders
GROUP BY customer_id;

-- SUM: FINDING THE TOTAL ORDER AMOUNT FOR EACH CUSTOMERS
SELECT customer_id, SUM(order_amount) AS total_spent
FROM orders
GROUP BY customer_id;

-- AVG: CALCULATING THE AVERAGE ORDER AMOUNT FOR EACH CUSTOMER
SELECT customer_id, AVG(order_amount) AS average_order_amount
FROM orders
GROUP BY customer_id

-- GROUPING BY MULTIPLE COLUMNS
SELECT customer_id, order_date, SUM(order_amount) AS daily_spent
FROM orders
GROUP BY customer_id, order_date;

-- HAVING + GROUP BY
-- HAVING filters groups based on a condition whereas
-- WHERE filters rows.
SELECT customer_id, SUM(order_amount) AS total_spent
FROM orders
GROUP BY customer_id
HAVING SUM(order_amount) > 200;