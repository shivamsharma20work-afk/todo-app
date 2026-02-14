# 🚀 Dockerized Full-Stack Todo App

This project is a full-stack Todo application built with **React** and **Node.js**. The entire ecosystem is orchestrated using **Docker Compose**, allowing you to spin up the complete environment with a single command.

## 🏗️ Architecture Overview

The application is split into two microservices managed by Docker:

1.  **Frontend (React):** A modern UI running on port `3000`.
2.  **Backend (Node.js/Express):** A RESTful API running on port `5000`.

Using **Docker Compose**, we handle container networking, port mapping, and service dependencies automatically.

## 🛠️ Tech Stack
- **Frontend:** React.js (Functional Components & Hooks)
- **Backend:** Node.js & Express
- **Containerization:** Docker & Docker Compose

## 📦 Docker Compose Workflow

This project uses `docker-compose.yml` to:
- **Build Images:** Automatically creates images using the local `Dockerfile` in each service folder.
- **Service Dependency:** Ensures the backend starts before the frontend using `depends_on`.
- **Networking:** Creates a dedicated bridge network so services can communicate.
- **Port Mapping:** Maps container ports to your host machine (`3000` for UI, `5000` for API).

## 🚀 How to Run

### 1. Prerequisites
Make sure you have **Docker Desktop** installed and running.

### 2. Up and Running
Navigate to the root directory and run:
```bash
docker-compose up --build
