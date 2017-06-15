TRUNCATE TABLE APARTMENTS;
TRUNCATE TABLE OFFICES;
TRUNCATE TABLE STOREFRONTS;

ALTER SEQUENCE apartments_id_seq RESTART WITH 1;
ALTER SEQUENCE offices_id_seq RESTART WITH 1;
ALTER SEQUENCE storefronts_id_seq RESTART WITH 1;

INSERT INTO apartments (apt_number, bedrooms, bathrooms, address, tenant, occupied, sq_footage, price) VALUES (126, 1, 1, '004 OConner Hollow', 'Jude Fay', true, 900, 1300);
INSERT INTO apartments (apt_number, bedrooms, bathrooms, address, occupied, sq_footage, price) VALUES (436, 2, 1, '23551 Oren Fields', false, 1100, 1600);

INSERT INTO offices (office_number, floors, sq_footage, cubicles, bathrooms, address, company_name, occupied,  price) VALUES (1032, 1, 3500, 25, 3,'79561 Raven Summit', 'Sawayn - Hudson', true, 9000);
INSERT INTO offices (office_number, floors, sq_footage, cubicles, bathrooms, address, company_name, occupied,  price) VALUES (1033, 2, 4200, 45, 4,'79562 Raven Summit Dr', 'Heidenreich, Blick and Sipes', true, 10000);
INSERT INTO offices (office_number, floors, sq_footage, cubicles, bathrooms, address, company_name, occupied,  price) VALUES (2030, 1, 2200, 18, 2,'79562 Raven Summit Lane', 'Vandelay Industries', true, 7000);


INSERT INTO storefronts (address, occupied, price, has_kitchen, sq_footage, owner, has_outdoor_seating) VALUES ('888 Pagac Lake', false, 5000, false, 1500,'Annamae Feil', false);
INSERT INTO storefronts (address, occupied, price, has_kitchen, sq_footage, owner, has_outdoor_seating) VALUES ('64993 Frami Squares', true, 8000, true, 2500,'Christophe Rau', true);
