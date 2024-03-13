CREATE USER 'crm'@'localhost' IDENTIFIED BY 'password';
create database crm;
GRANT SELECT, INSERT, UPDATE, DELETE ON crm.* TO 'crm'@'localhost';
FLUSH PRIVILEGES;