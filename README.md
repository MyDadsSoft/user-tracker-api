# User Tracker API

A simple Node.js Express server to track how many users are online.

## Endpoints

- `POST /user-online` – Call this when a user is active. They stay "online" for 60 seconds.
- `GET /online-users` – Returns `{ "count": <number> }`.

## Deploy on Render

1. Upload this to a GitHub repo.
2. On Render, create a new Web Service:
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
3. Done!