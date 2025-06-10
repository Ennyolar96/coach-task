<?php
require_once __DIR__ . '/../models/mood.php';

class MoodController
{
    public static function postMood($db)
    {
        $data = json_decode(file_get_contents('php://input'), true);
        if (!isset($data['emoji'])) {
            http_response_code(400);
            echo json_encode(['error' => 'Emoji required']);
            exit;
        }

        $allowed_moods = ['happy', 'neutral', 'sad'];
        if (!in_array($data['emoji'], $allowed_moods)) {
            http_response_code(400);
            echo json_encode(['error' => 'Emoji type not allow']);
            exit;
        }
        Mood::insert($db, $data['emoji']);
        echo json_encode(['success' => true]);
    }
    public static function getMoods($db)
    {
        $date = $_GET['date'] ?? date('Y-m-d');
        $summary = Mood::getSummary($db, $date);
        echo json_encode(["success" => true, "data" => $summary]);
    }
}
