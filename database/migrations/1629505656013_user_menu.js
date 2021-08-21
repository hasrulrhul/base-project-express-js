module.exports = {
    "up":"CREATE TABLE `user_menu` ( `id` bigint unsigned NOT NULL AUTO_INCREMENT, `role_id` int unsigned NOT NULL, `menu_id` int unsigned NOT NULL, `read` char(1) COLLATE utf8mb4_unicode_ci DEFAULT NULL, `create` char(1) COLLATE utf8mb4_unicode_ci DEFAULT NULL, `edit` char(1) COLLATE utf8mb4_unicode_ci DEFAULT NULL, `delete` char(1) COLLATE utf8mb4_unicode_ci DEFAULT NULL, `export` char(1) COLLATE utf8mb4_unicode_ci DEFAULT NULL, `print` char(1) COLLATE utf8mb4_unicode_ci DEFAULT NULL, `created_at` timestamp NULL DEFAULT NULL, `updated_at` timestamp NULL DEFAULT NULL, `active` enum('1','0') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '1', `created_by` int DEFAULT NULL, `updated_by` int DEFAULT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;",
    "down": "DROP TABLE IF EXISTS `user_menu`;"
}