# candidate-00X-powerofaum-module-referral

🌟	Referral Code Engine – Alatree Tech Assessment (Module C)

This project is part of the Phase 1 technical assessment for Alatree Ventures.  
It implements a basic Referral Code Engine with 3 main API endpoints.

You can:
- Generate unique referral codes tied to an email
- Apply a referral code when someone signs up
- Track the number of signups and total credits earned by a referrer <br>
There are few examples and steps listed below to test the APIs on postman (This is backend only)

🌟	API Endpoints

• 📌	Create Referral Code  
POST: /api/create-referral`  
Generate a referral code for a user’s email.
Request Body: -> raw  -> JSON
{
  "email": "user@example.com"
}
Response:
{
  "code": "REF-ABC123" (Example random code)
}

• 📌	Apply Referral Code
POST : /api/apply-referral
Apply a referral code when a friend signs up.
Request Body: -> raw  -> JSON
{
  "code": "REF-ABC123",
 "email": "friend@example.com"
}
Response:
{
  "applied": true
}

• 📌	Get Referral Stats
GET:  /api/referral-stats?code=REF-ABC123
Get the number of successful referrals and the total credits earned.
Sample Request (cURL):
curl "https://your-backend-url.com/api/referral-stats?code=REF-ABC123"
Response:
{
  "signups": 2,
  "credits": 300
}

⚙️ How to Test:
You can test the endpoints using:
-	Postman
-	cURL commands (examples above)
-	Or create your own simple HTML fetch tester (optional)
No frontend is needed—this is backend-only.

🛠️ Tech Stack
-	Node.js + Express
-	MongoDB + Mongoose
-	Deployed on Render, GitHub, Vercel
  
(The emojis are added to ensure readability please don't mind)
When the link is opened on render or vercel it might show 'cannot GET/', since its only backend. Make Sure to use postman or a html page.
