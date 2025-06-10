# Player Mood Board – Backend

This is the PHP backend for the Player Mood Board project.

## 🚀 Getting Started

### 1. Requirements

- PHP 7.4+ (with PDO and MySQL extensions enabled)
- MySQL server (e.g., XAMPP, Laragon, MAMP, or standalone)
- Apache or Nginx (for running PHP with `htdocs`)

### 2. Setup

1. **Copy the backend folder to your web server's `htdocs` directory.**  
   For example:

   ```
   C:\xampp\htdocs\backend
   ```

   or

   ```
   /var/www/html/backend
   ```

2. **Create a MySQL database and user:**

   - Create a database, e.g. `player_mood`.
   - Create a user and grant privileges, or use `root` for local development.

3. **Import the database table:**  
   Run this SQL in your MySQL client:

   ```sql
   CREATE TABLE IF NOT EXISTS moods (
     id INT AUTO_INCREMENT PRIMARY KEY,
     emoji VARCHAR(10) NOT NULL,
     timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
   );
   ```

4. **Configure your database connection:**  
   Edit `/src/config/db.php` (or similar) with your MySQL credentials:

   ```php
   // Example db.php
   $db = new PDO('mysql:host=localhost;dbname=player_mood;charset=utf8', 'your_user', 'your_password');
   $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
   ```

5. **Start your Apache server** (using XAMPP, Laragon, etc.).

6. **Visit the API in your browser or with your frontend:**
   ```
   http://localhost/backend
   ```

### 3. API Endpoints

- **POST `/backend/mood`**  
  Body:

  ```json
  { "emoji": "happy" | "neutral" | "sad" }
  ```

- **GET `/backend/moods?date=YYYY-MM-DD`**  
  Returns:
  ```json
  { "happy": 4, "neutral": 2, "sad": 1 }
  ```

### 4. Database

- Uses MySQL (`moods` table as shown above).
- Table columns: `id`, `emoji`, `timestamp`.

---

## 📝 Notes

- Make sure your frontend `.env` uses the correct API base, e.g.:
  ```
  VITE_API_BASE=http://localhost/backend
  ```
- If you use a different folder name, update the URL accordingly.
- CORS headers are enabled for local development.
- For production, use secure database credentials and proper environment management.

---
