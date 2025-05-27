# candidate-00X-powerofaum-module-referral

**🌟	Referral Code Engine – Alatree Tech Assessment (Module C)**

This project is part of the Phase 1 technical assessment for Alatree Ventures.  
It implements a basic Referral Code Engine with 3 main API endpoints.

You can:
- Generate unique referral codes tied to an email
- Apply a referral code when someone signs up
- Track the number of signups and total credits earned by a referrer <br>
There are few examples and steps listed below to test the APIs on postman (This is backend only)

**🌟	API Endpoints** <br> 

• **📌	Create Referral Code** <br>
<br> 
POST: /api/create-referral` <br> 
Generate a referral code for a user’s email. <br> 
Request Body: -> raw  -> JSON <br> 
{ <br>
  &nbsp;&nbsp;&nbsp;"email": "user@example.com" <br>
} <br>
Response: <br> 
{ <br> 
  &nbsp;&nbsp;&nbsp;"code": "REF-ABC123" (Example random code) <br> 
} <br> 

• **📌	Apply Referral Code <br>**
<br> 
POST : /api/apply-referral <br> 
Apply a referral code when a friend signs up. <br> 
Request Body: -> raw  -> JSON <br> 
{ <br> 
  "code": "REF-ABC123", <br> 
 "email": "friend@example.com" <br> 
} <br> 
Response: <br> 
{ <br> 
  "applied": true <br> 
} <br> 

• **📌	Get Referral Stats** <br> 
<br> 
GET:  /api/referral-stats?code=REF-ABC123 <br> 
Get the number of successful referrals and the total credits earned. <br> 
Sample Request (cURL): <br> 
curl "https://your-backend-url.com/api/referral-stats?code=REF-ABC123" <br> 
Response: <br> 
{ <br> 
  "signups": 2, <br> 
  "credits": 300 <br> 
} <br> 

**⚙️ How to Test:** <br>
<br> 
You can test the endpoints using: 
-	Postman
-	cURL commands (examples above)
-	Or create your own simple HTML fetch tester (optional)
No frontend is needed—this is backend-only.

**🛠️ Tech Stack**
-	Node.js + Express
-	MongoDB + Mongoose
-	Deployed on Render, GitHub, Vercel
  
(The emojis are added to ensure readability please don't mind)
When the link is opened on render or vercel it might show 'cannot GET/', since its only backend. Make Sure to use postman or a html page.
