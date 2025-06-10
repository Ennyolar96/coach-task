<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

require_once("../path.php");
require_once(ROOT_PATH . '/src/config/db.php');
require_once(ROOT_PATH . '/src/controllers/moodController.php');
Mood::createTable($db);

try {
    $method = $_SERVER['REQUEST_METHOD'];
    if ($method !== 'POST') {
        throw new Exception("Request method not allowed!", 405);
    }

    MoodController::postMood($db);
} catch (Exception $e) {
    $statusCode = $e->getCode();
    $statusCode = ($statusCode >= 400 && $statusCode < 600) ? $statusCode : 500;
    http_response_code($statusCode);
    echo json_encode(["success" => false, "message" => $e->getMessage()]);
}
