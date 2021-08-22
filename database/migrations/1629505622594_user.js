module.exports = {
    "up": "CREATE TABLE user (id bigint unsigned NOT NULL AUTO_INCREMENT, name varchar(100) NOT NULL, username varchar(60) NOT NULL, email varchar(100) NOT NULL, password varchar(255) NOT NULL, role_id varchar(1) NOT NULL, is_active enum('1','0') NOT NULL DEFAULT '1', created_at timestamp NULL DEFAULT NULL, updated_at timestamp NULL DEFAULT NULL, PRIMARY KEY (id), UNIQUE KEY users_email_unique (email)) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;",
    "down": "DROP TABLE IF EXISTS `user`;"
}