## **Amazon Connect Regions Viewer**  

This is a simple web application that fetches and displays **Amazon Connect Regions** using an **Express.js** backend with a **MariaDB** database.  

---

## **📌 Features**
✅ Fetches region data from a backend API.  
✅ Displays data in a table format.  
✅ Uses **HTML, CSS, and JavaScript** for the frontend.  
✅ Connects to an **Express.js + MariaDB** backend.  

---

## **🛠️ Setup Instructions**  

### **1️⃣ Backend Setup (Express.js + MariaDB)**  

#### **📌 Install Dependencies**
```sh
npm install express mariadb cors dotenv
```

#### **📌 Start the Backend**
```sh
npx nodemon server.js
```
or  
```sh
node server.js
```
> **Make sure your MariaDB server is running!**  

---

### **2️⃣ Frontend Setup (Simple HTML + JS)**  

#### **📌 Open `index.html` in a browser**
- Just **double-click** on `index.html`, or  
- Use **Live Server** in VS Code.

---

## **🔗 API Endpoints**  

| Method | Endpoint                 | Description          |
|--------|--------------------------|----------------------|
| `GET`  | `/api/regions`           | Fetch all regions   |
| `POST` | `/api/regions` (Body: JSON) | Add a new region |

#### **Example Request (POST)**
```json
{
    "region_name": "South America",
    "sub_region": "Brazil"
}
```

---

## **📸 Screenshot**  
![Screenshot](screenshot.png)  
_(Add a screenshot of your website here)_

---

## **📌 Next Steps**
🔹 Add a **form** to add new regions.  
🔹 Improve UI with **Bootstrap/Tailwind**.  
🔹 Deploy using **Vercel/Netlify**.  

---

