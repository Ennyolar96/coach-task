<?php
class Mood
{
    public static function createTable($db)
    {
        try {
            $sql = "CREATE TABLE IF NOT EXISTS moods (
            id INT AUTO_INCREMENT PRIMARY KEY,
            emoji TEXT NOT NULL,
            createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )";

            $db->exec($sql);
        } catch (PDOException $e) {
            exit("Error creating table: " . $e->getMessage());
        }
    }
    public static function insert($db, $emoji)
    {
        $stmt = $db->prepare("INSERT INTO moods (emoji) VALUES (:emoji)");
        $stmt->execute([':emoji' => $emoji]);
    }
    public static function getSummary($db, $date)
    {
        $stmt = $db->prepare("SELECT emoji, COUNT(*) as count FROM moods WHERE DATE(createdAt) = :date GROUP BY emoji");
        $stmt->execute([':date' => $date]);
        $result = ['happy' => 0, 'neutral' => 0, 'sad' => 0];
        foreach ($stmt as $row) {
            $result[$row['emoji']] = (int)$row['count'];
        }
        return $result;
    }
}
