# 🎯 Developer Task: **Player Mood Board**

## 📝 Overview

Build a **mobile-friendly web app** that lets soccer players submit their **mood after training** (😃 😐 😞), and shows the coach a live dashboard of team sentiment.

This project is focused on **clean code**, **mobile-first UX**, and **simple full-stack integration** using **React** (frontend) and **PHP** (backend).


## 🧩 Features

### 🟢 Player View (Mobile)

* Page with **3 emoji buttons**: 😃 😐 😞
* When a player taps an emoji:

  * Send it to the server
  * Show a short thank-you message or animation
* No login required

### 🔵 Coach View (Desktop or Mobile)

* A page that shows **today's mood summary**:

  * Count of each emoji (e.g. 4 😃, 2 😐, 1 😞)
  * Update every 10 seconds (simulate live data)
* Optional: show data from past days


## 🛠 Tech Requirements

### **Frontend**

* Use **React.js**
* Must be **mobile-friendly**
* Use emoji or icons as input
* Keep UI simple and beautiful

### **Backend**

* Use **PHP** with any lightweight framework (Laravel, Slim, or plain PHP)
* Save each mood with:

  * Emoji selected
  * Timestamp (server time)
* Provide 2 endpoints:

  ```
  POST /mood       → body: { emoji: "happy" | "neutral" | "sad" }
  GET  /moods?date=YYYY-MM-DD → returns: { happy: 4, neutral: 2, sad: 1 }
  ```

### **Database**

* Use **MySQL** or **SQLite** to store:

  * `id`, `emoji`, `timestamp`


## ✅ Deliverables

* Frontend and backend code (in `/frontend` and `/backend` folders)
* Clear instructions to run locally (in `README.md`)
* Optional: deploy to Vercel / Netlify / Render / Railway


## ⭐ Bonus Points

* Add cute emoji animations or transitions on vote
* Auto-refresh coach view without reload
* Let coach select a past date to view older mood summaries


## 💡 Evaluation Criteria

* Clean, modular code (React components, API structure)
* Mobile-first UX
* RESTful API implementation
* Creativity in UX or data display
* Simplicity – keep it elegant and focused
# coach-task
