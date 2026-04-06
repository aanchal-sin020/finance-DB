# 💰 Finance Dashboard Backend
A backend system for managing financial records with role-based access control and dashboard analytics.

## 📂 Features
1. User Management (Admin, Analyst, Viewer)
2. Role-Based Access Control
3. Financial Records (Income & Expense)
4. Dashboard Analytics:
   * Total Income
   * Total Expenses
   * Net Balance
   * Category-wise Breakdown

## 🛠️ Tech Stack
1. Node.js
2. Express.js
3. MongoDB 

## 🔐 Roles
1. *Admin* - Full access
2. *User* - Can create & view records
3. *Viewer* - Can only view

## 📊 API Endpoints
### Users
1. POST /api/users
2. GET /api/users

### Records
1. POST /api/records (Admin/Analyst only)
2. GET /api/records

### Dashboard
1. GET /api/dashboard/summary
2. GET /api/dashboard/categories


## ⚙️ Setup
npm install
npm start




