# 🚀 Full Stack React + Express Dockerized Application

Welcome! This is a professional full stack application built with **React** (client) and **Express** (server), containerized with **Docker Compose** for local development and deployed on **Railway.app** for production.

---

## 🌐 Live Demo

- **Frontend (Client):** [View Live Application](https://your-client-url.up.railway.app) *(Update with your client Railway URL)*
- **Backend (API):** [https://endearing-comfort-production-a291.up.railway.app](https://endearing-comfort-production-a291.up.railway.app)
- **API Endpoint:** [https://endearing-comfort-production-a291.up.railway.app/api/message](https://endearing-comfort-production-a291.up.railway.app/api/message)

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
- 🚂 Deployed on **Railway.app** for production
- 🔒 CORS & security best practices
- 🏗️ Ready for local development & production deployment
- 🔄 Automatic environment detection (localhost in dev, Railway URL in production)

---

## 🚀 Quick Start

### 1. Prerequisites

- [Docker](https://www.docker.com/get-started) & [Docker Compose](https://docs.docker.com/compose/) installed

### 2. Clone This Repository

```bash
git clone https://github.com/codewithmutahir/full-stack-hostinger.git
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

### Local Development
- Client and server can be configured via `.env` files (see `.env.example` templates in respective folders)
- Add your own API keys or secrets as needed

### Production (Railway.app)
- **Server Environment Variables:**
  - `CLIENT_URL` - Your client's Railway URL (e.g., `https://your-client.up.railway.app`)
  - `PORT` - Automatically set by Railway

- **Client Environment Variables:**
  - The client automatically detects the environment and uses the appropriate API URL
  - In production, it uses the Railway server URL
  - In development, it uses `http://localhost:4000`

For detailed Railway deployment instructions, see [RAILWAY_DEPLOYMENT.md](./RAILWAY_DEPLOYMENT.md)

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

### Local Production Build

Build and run **everything** optimized in Dockerized containers with:

```bash
docker-compose up --build
```

### Railway Deployment

This application is deployed on **Railway.app**:

- **Server:** Deployed as a separate service with Root Directory set to `server`
- **Client:** Deployed as a separate service with Root Directory set to `client`
- Both services are automatically deployed from GitHub on every push
- Environment variables are configured in Railway's dashboard

**Deployment Status:** ✅ Both services are live and running

For step-by-step Railway deployment instructions, see [RAILWAY_DEPLOYMENT.md](./RAILWAY_DEPLOYMENT.md)

---

## 🚂 Deployment

This application is deployed on **Railway.app**:

- ✅ **Server:** Live and running
- ✅ **Client:** Live and running
- 🔄 **Auto-deploy:** Enabled (deploys on every git push)

### Deployment URLs
- **Server API:** `https://endearing-comfort-production-a291.up.railway.app`
- **Client App:** *(Update with your client Railway URL)*

### How It Works
- The client automatically detects if it's running in production or development
- In production (Railway), it connects to the Railway server URL
- In development (localhost), it connects to `http://localhost:4000`
- CORS is configured to allow requests from the client's Railway URL

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

