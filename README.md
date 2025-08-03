
# 📦 AI-Powered Cloud-Based Inventory & Sales Management System

This project is a **Flask + MongoDB** based inventory management system with AI-powered sales prediction.  
It allows adding products, selling products, updating stock, and predicting next-day sales using **Linear Regression**.

---

## 🚀 Features
- **Add Products** – Store product details (name, price, stock).
- **Sell Products** – Deduct stock when a sale happens and record it.
- **Update Stock** – Manually update stock quantity.
- **View Products** – Display all available products in a table format.
- **Sales Prediction** – Predict next-day sales based on past data.
- **MongoDB Integration** – Store and retrieve products and sales records.
- **Frontend Integration** – HTML + JavaScript UI with API calls to Flask.

---

## 🛠 Tech Stack
- **Backend:** Flask, Flask-CORS
- **Frontend:** HTML, CSS, JavaScript
- **Database:** MongoDB Atlas / MongoDB Compass
- **AI Model:** scikit-learn (Linear Regression)
- **Others:** pandas, numpy

---

## 📂 Project Structure
```

inventory-system/
│── app.py                  # Flask backend
│── sales\_predictor.py      # (Optional) Sales prediction script
│── frontend/
│   ├── index.html          # Main UI
│   ├── script.js           # API calls & frontend logic
│   └── style.css           # Styling
│── requirements.txt        # Python dependencies
│── README.md               # Project documentation

````

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/yourusername/inventory-system.git
cd inventory-system
````

### 2️⃣ Create Virtual Environment & Install Dependencies

```bash
# Create venv
python -m venv venv
# Activate venv
venv\Scripts\activate  # Windows
source venv/bin/activate  # Mac/Linux
# Install packages
pip install -r requirements.txt
```

### 3️⃣ Start the Flask Server

```bash
python app.py
```

### 4️⃣ Run the Frontend

Using Python’s HTTP server:

```bash
cd frontend
python -m http.server 5500
```

Open [http://127.0.0.1:5500/index.html](http://127.0.0.1:5500/index.html)

---

## 📊 API Endpoints

| Method | Endpoint         | Description                  |
| ------ | ---------------- | ---------------------------- |
| POST   | `/add_product`   | Add a new product            |
| POST   | `/sell_product`  | Record a sale & update stock |
| POST   | `/update_stock`  | Update product stock         |
| GET    | `/products`      | Get all available products   |
| GET    | `/predict_sales` | Predict next-day sales       |

---

## 📌 Notes

* Ensure **MongoDB** is running locally or connect to **MongoDB Atlas**.
* For CORS issues, make sure `flask_cors` is enabled in `app.py`:

```python
from flask_cors import CORS
CORS(app)
```
