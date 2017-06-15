TRUNCATE TABLE APARTMENTS;
TRUNCATE TABLE OFFICES;
TRUNCATE TABLE STOREFRONTS;

ALTER SEQUENCE apartments_id_seq RESTART WITH 1;
ALTER SEQUENCE offices_id_seq RESTART WITH 1;
ALTER SEQUENCE storefronts_id_seq RESTART WITH 1;

INSERT INTO apartments (apt_number, bedrooms, bathrooms, address, tenant, occupied, sq_footage, price) VALUES (126, 1, 1, '004 OConner Hollow', 'Jude Fay', true, 900, 1300);

INSERT INTO apartments (apt_number, bedrooms, bathrooms, address, occupied, sq_footage, price) VALUES (436, 2, 1, '23551 Oren Fields', false, 1100, 1600);

INSERT INTO offices (office_number, floors, sq_footage, cubicles, bathrooms, address, company_name, occupied,  price) VALUES (1032, 1, 3500, 25, 4,'79561 Raven Summit', 'Sawayn - Hudson', true, 9000);
