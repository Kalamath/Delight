
DROP DATABASE IF EXISTS delightdb;
CREATE DATABASE delightdb;
USE delightdb;

CREATE TABLE user_info
(
        id INT NOT NULL
        AUTO_INCREMENT,
    username VARCHAR
        (10) NOT NULL,
    password VARCHAR
        (10) NOT NULL,
    fk_category_id INT NOT NULL,
    PRIMARY KEY
        (id)
   
);

        CREATE TABLE lkp_interests
        (
                id INT NOT NULL
                AUTO_INCREMENT,
        interest_name VARCHAR
                (10) NOT NULL,
        fk_category_id INT NOT NULL,
        PRIMARY KEY
                (id)
);

                CREATE TABLE lkp_category
                (
                        id INT NOT NULL
                        AUTO_INCREMENT,
    category_name VARCHAR
                        (10) NOT NULL,
    PRIMARY KEY
                        (id)
);