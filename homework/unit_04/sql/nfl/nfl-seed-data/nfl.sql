1. nfl=# SELECT name FROM teams;
2. nfl=# SELECT stadium, head_coach FROM teams WHERE conference  = 'NFC';
3. nfl=# SELECT head_coach FROM teams WHERE conference  = 'AFC' AND division = 'South';
4. nfl=# SELECT COUNT(id) FROM players;
5. nfl=# SELECT name, head_coach FROM teams WHERE conference = 'NFC' AND division = 'North' OR conference = 'AFC' AND division = 'East';
6. nfl=# SELECT * FROM players ORDER BY salary DESC LIMIT 50;
7. nfl=# SELECT AVG(salary) FROM players;
8. nfl=# SELECT name, position FROM players WHERE salary > 10000000;
