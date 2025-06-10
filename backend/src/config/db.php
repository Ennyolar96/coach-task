<?php
// $db = new PDO('sqlite:' . __DIR__ . '/../../moods.db');
// $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

define("DB_HOST", getenv("DB_SERVER"));
define("DB_USERNAME", getenv("DB_USER"));
define("DB_PASSWORD", getenv("DB_PASS"));
define("DB_NAME", getenv("DB_NAME"));

$options = [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
];

try {
    $db = new PDO('mysql:host=' . DB_HOST . '; dbname=' . DB_NAME . '', DB_USERNAME, DB_PASSWORD, $options);
    if (!$db) {
        exit("Unable to connect with database");
    }
} catch (PDOException $e) {
    exit("Error: " . $e->getMessage());
}
