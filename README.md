# Order Tracking Screen (Frontend Practical Assessment)

A modern, professional mobile-first order tracking screen built as part of the Frontend Developer Practical Assessment.

## 🚀 Features
- **Mobile-First Design:** Fully responsive and optimized for mobile viewports (360px - 430px width).
- **Clear Visual Timeline:** Displays distinct order stages (Processing, Shipped, Out for Delivery, Delivered) with clean hierarchy.
- **Robust Edge Case Handling:** Gracefully handles and displays critical order scenarios required by the assessment:
  1. *Normal / Out for Delivery* (Standard progression and estimated arrival)
  2. *Delayed Order* (Warning banners and status explanation)
  3. *Delivered but Not Received* (Issue reporting and support action)
  4. *Tracking Not Available Yet* (Clean fallback state preventing broken UI)
- **Interactive Testing Switcher:** Includes an easy-to-use scenario switcher so evaluators can test all order states instantly.

## 🛠️ Tech Stack & Architecture
- **Framework:** Next.js (JavaScript / App Router)
- **Styling:** Tailwind CSS
- **Data Architecture:** Separated static mock data (`data/orders.js`) to keep components clean and maintainable.

---

## 📦 Local Setup & Run Instructions

To run this project locally on your machine, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone <https://github.com/taniashahida-dev/Order-Tracking.git>
   cd <repository-folder-name>
   Install dependencies:

Bash
npm install
Run the development server:

Bash
npm run dev
Open in browser:
Open http://localhost:3000 to view the live application.

🌐 Live Demo
Deployed URL: https://order-tracking-tan-nine.vercel.app

📄 AI Prompt History
As required by the assessment guidelines, all AI interaction prompts used during the development of this task are recorded and documented in the accompanying AI_PROMPT_HISTORY.txt file.
