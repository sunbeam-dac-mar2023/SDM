create database dac2023;

use dac2023;

create table products(
    id INTEGER PRIMARY KEY auto_increment,
    title VARCHAR(100),
    description VARCHAR(1024),
    price FLOAT
);

insert into products(title, description, price) values ('product 1', 'this is very nice product', 1000);
insert into products(title, description, price) values ('product 2', 'this is very nice product', 2000);
insert into products(title, description, price) values ('product 3', 'this is very nice product', 3000);
insert into products(title, description, price) values ('product 4', 'this is very nice product', 4000);