1. realty=# SELECT AVG(sq_footage) FROM offices;
2. realty=# SELECT COUNT(id) FROM apartments;
3. realty=# SELECT * FROM apartments WHERE occupied = false;
4. realty=# SELECT * FROM apartments WHERE occupied = false;
5. realty=# SELECT cubicles, bathrooms FROM offices LIMIT 1 OFFSET 2;
6. realty=# SELECT * FROM storefronts WHERE has_kitchen = true;
7. realty=# SELECT * FROM storefronts WHERE has_outdoor_seating = true ORDER BY sq_footage LIMIT 1;
8. realty=# SELECT * FROM offices ORDER BY cubicles ASC LIMIT 1;
9.
