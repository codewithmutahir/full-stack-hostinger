# 🚀 Full Stack React + Express Dockerized Application

Welcome! This is a professional full stack application boilerplate built with **React** (client) and **Express** (server), all containerized with **Docker Compose** for easy local development and production deployment.

---

## 🗂️ Project Structure

```
/
├─ client/         # React frontend application
├─ server/         # Express backend API
├─ docker-compose.yml
├─ README.md
```

---

## 🌐 Features

- ⚡ Modern **React** SPA frontend (Vite, production build)
- 🔥 Robust **Express** REST API backend
- 📦 Easy multi-container orchestration with Docker Compose
- 🔒 CORS & security best practices
- 🏗️ Ready for local development & deployment

---

## 🚀 Quick Start

### 1. Prerequisites

- [Docker](https://www.docker.com/get-started) & [Docker Compose](https://docs.docker.com/compose/) installed

### 2. Clone This Repository

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

### 3. Build & Run All Services

```bash
docker-compose up --build
```

- The **client** will be available at [http://localhost:5174](http://localhost:5174)
- The **server** API runs at [http://localhost:4000/api/message](http://localhost:4000/api/message)

---

## 🧩 Project Details

### Client (`/client`)

- Built with **React** and bundled by Vite
- Production build served by [`serve`](https://github.com/vercel/serve)
- Source code located in the `client/` directory

### Server (`/server`)

- **Express** API with CORS enabled for client communication
- Simple endpoint: `/api/message`
- Easily extensible for more API routes

---

## 🐳 Dockerized Workflow

- **Hot Reload** in development by running React locally (outside Docker)
- **Production workflow:** runs fully containerized using multi-stage builds for smallest image size

---

## 🛠️ Environment Variables

- Client and server can be configured via `.env` files (see `.env.example` templates in respective folders)
- Add your own API keys or secrets as needed

---

## 🧹 Common Commands

### For Docker Compose

```bash
docker-compose up --build   # Build and run services
docker-compose down         # Stop and clean up
```

### For Local Development (without Docker)

#### Client
```bash
cd client
npm install
npm run dev
```

#### Server
```bash
cd server
npm install
npm run start
```

---

## 📦 Production Build

Build and run **everything** optimized in Dockerized containers with:

```bash
docker-compose up --build
```

---

## ✨ Credit & License

- Created by Mutahir Hussain, 2025
- MIT License

---

## 🤝 Contributing

PRs welcome! For major changes, open an issue first to discuss what you’d like to change.

---

## 📞 Contact

Questions? [mutharsoomro13@gmail.com](mailto:mutharsoomro13@gmail.com)

---

