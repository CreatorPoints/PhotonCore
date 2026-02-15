<div align="center">

# ⚡ Photon Core

### The Internal Collaboration Hub for Photon Studios

![Status](https://img.shields.io/badge/status-private-informational)
![Architecture](https://img.shields.io/badge/architecture-client--side-success)
![Backend](https://img.shields.io/badge/backend-none-brightgreen)
![Built With](https://img.shields.io/badge/built%20with-Puter.js-purple)
![License](https://img.shields.io/badge/license-internal-lightgrey)

A private, browser-based collaboration platform combining discussions, cloud storage, AI multi-model chat, and team management — all running with **zero backend infrastructure**.

</div>

---

# 📌 Overview

Photon Core is an all-in-one internal platform designed specifically for Photon Studios.

It provides:

- Team communication
- Cloud file management
- Persistent AI assistance (20+ models)
- Structured team roles
- Activity tracking
- Memory-aware AI collaboration

All powered entirely client-side using Puter.js.

---

# 🧠 Core Philosophy

> No servers.  
> No build pipeline.  
> No backend complexity.  
> Just three files and a cloud API.

Photon Core demonstrates that modern collaborative platforms can be built entirely in the browser using:

- Cloud filesystem APIs  
- Key-Value storage  
- Unified AI model routing  
- Built-in authentication  

---

# 🚀 Getting Started

## Prerequisites

- Modern browser (Chrome, Edge, Firefox, Safari)
- Internet connection

---

## Installation

```bash
git clone https://github.com/your-org/photon-core.git
cd photon-core
```

Project structure:

```
photon-core/
├── index.html
├── style.css
├── script.js
└── README.md
```

Open:

```
index.html
```

No:

- npm install  
- node_modules  
- build step  
- server setup  

---

# ☁ Deployment (Puter)

1. Visit https://puter.com  
2. Open File Manager  
3. Upload:
   - index.html  
   - style.css  
   - script.js  
4. Host directly  

Deployment time: under 2 minutes.

---

# ✨ Feature Set

---

## 🏠 Dashboard

- Personalized greeting
- Live statistics (discussions, files, AI queries, members)
- Quick navigation actions
- Real-time activity feed

---

## 💬 Discussions

Structured team communication system.

**Categories:**
- General  
- Game Design  
- Art & Assets  
- Code & Tech  
- Marketing  
- Bugs & Issues  

Features:
- Topic creation
- Category filtering
- Like system
- Deletion controls
- Persistent storage (KV store)

---

## 📁 Cloud File Storage

- Drag & drop upload
- Folder organization
- Download & delete
- Smart file icons
- Stored at:

```
/PhotonCore/files/
```

---

# 🤖 AI Assistant System

## Multi-Model Architecture

Supports 20+ AI models across major providers:

| Provider | Example Models | Primary Strength |
|----------|----------------|-----------------|
| OpenAI | GPT-4o, GPT-4 Turbo | General reasoning |
| Anthropic | Claude 3.5 Sonnet | Writing, analysis |
| Google | Gemini 1.5 Pro | Long context |
| Meta | LLaMA 3.1 | Open source code |
| Mistral | Mixtral 8x7B | Multilingual |
| DeepSeek | DeepSeek Reasoner | Advanced logic |

---

## Group Chat

- Shared team conversation
- Model identity display
- Typing indicators
- Timestamped messages
- Single active sender control

---

## 🧠 Persistent AI Memory System

Teach the AI project knowledge using:

```
Remember that our game is called StarForge
Remember the art style is neon pixel art
Remember the deadline is March 15
```

Capabilities:

- Cross-session persistence
- Model-agnostic memory injection
- Dedicated memory management panel
- Automatic context inclusion

---

## 📜 Chat History

- Auto-saved sessions
- Sidebar browsing
- Auto-generated titles
- Model metadata tagging
- Automatic deletion after 30 days

---

## ⚡ Quick Dev Presets

One-click templates:

- Game Idea Generator
- Store Page Description
- Game Name Suggestions
- GDD Outline
- NPC Dialogue Writer
- Art Direction Advisor

---

# 👥 Team Management

- 6 member system
- Editable profiles
- Role assignment

Available roles:

- Developer  
- Artist  
- Game Designer  
- Sound Designer  
- Writer  
- Producer  
- Team Lead  

All profiles persist in cloud storage.

---

# 🛠 Technical Architecture

| Layer | Technology |
|-------|------------|
| Structure | HTML5 |
| Styling | CSS3 |
| Logic | Vanilla JavaScript |
| Cloud & Auth | Puter.js |
| Storage | Puter KV + Cloud Filesystem |
| Typography | Google Fonts |

---

# 📊 Data Storage Map

| Data Type | Storage Method | Key |
|------------|----------------|-----|
| Discussions | KV Store | photon_discussions |
| AI Memories | KV Store | photon_memories |
| Chat Sessions | KV Store | photon_chat_sessions |
| AI Count | KV Store | photon_ai_count |
| Activity Log | KV Store | photon_activity |
| Selected Model | KV Store | photon_selected_model |
| Profiles | KV Store | photon_profile_{username} |
| Members | KV Store | photon_members |
| Files | Cloud FS | /PhotonCore/files/ |

---

# 🧹 Automated Maintenance

- Chats older than 30 days deleted
- Activity capped at 50 entries
- Manual AI memory clearing
- Stateless frontend design

---

# 🎨 UI Design System

- Dark theme
- Purple gradient accent
- Glassmorphism panels
- Smooth hover animations
- Responsive layout
- Mobile-optimized navigation
- Custom scrollbars
- Login particle effects

---

# 🔐 Authentication Model

Uses Puter built-in authentication.

All data is stored securely within each user's Puter cloud environment.

No credentials stored manually.  
No custom auth logic required.

---

# 📱 Mobile Optimization

- Collapsible sidebar
- Touch-friendly inputs
- Responsive grids
- Stacked chat layout
- Optimized typography

---

# 🏗 Architectural Highlights

- 100% client-side
- No backend server
- No build process
- No database server
- Unified AI routing
- Modular architecture

Photon Core is effectively a lightweight SaaS platform running entirely in the browser.

---

# 🤝 About Photon Studios

Photon Core is developed for internal use by Photon Studios — a 6-member indie game development team focused on collaborative creative production.

---

# 📄 License

Private internal software.  
Not licensed for public distribution.

---

<div align="center">

Built with ⚡ by Photon Studios  
Powered by Puter.js  

</div>
