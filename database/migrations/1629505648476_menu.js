module.exports = {
    "up": "CREATE TABLE `menu` ( `id` int unsigned NOT NULL AUTO_INCREMENT, `parent` int NOT NULL, `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL, `icon` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL, `url` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL, `sort` int NOT NULL DEFAULT '100', `display` enum('1','0') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '1', `created_at` timestamp NULL DEFAULT NULL, `updated_at` timestamp NULL DEFAULT NULL, `is_active` enum('1','0') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '1', `created_by` int DEFAULT NULL, `updated_by` int DEFAULT NULL, PRIMARY KEY (`id`) ) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;",
    "down": "DROP TABLE IF EXISTS `menu`;"
}