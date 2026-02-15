/* ========================================
   PHOTON CORE — Photon Studios Hub
   Main Application Script (Puter.js)
   ======================================== */

// ========================================
// AI MODELS DATABASE
// ========================================
const AI_MODELS = {
    'gpt-4o': {
        name: 'GPT-4o',
        provider: 'OpenAI',
        logo: '🟢',
        description: 'Best for general tasks, conversations, content generation, and coding.',
        badge: 'General Purpose, Fast & Smart'
    },
    'gpt-4o-mini': {
        name: 'GPT-4o Mini',
        provider: 'OpenAI',
        logo: '🟢',
        description: 'Lightweight and fast. Great for quick questions and simple tasks.',
        badge: 'Lightweight, Quick Responses'
    },
    'gpt-4-turbo': {
        name: 'GPT-4 Turbo',
        provider: 'OpenAI',
        logo: '🟢',
        description: 'Advanced reasoning for complex analysis, long documents, and detailed outputs.',
        badge: 'Advanced Reasoning, Complex Tasks'
    },
    'gpt-4': {
        name: 'GPT-4',
        provider: 'OpenAI',
        logo: '🟢',
        description: 'Deep analytical thinking. Best for research, detailed explanations, and accuracy.',
        badge: 'Deep Analysis, Detailed Outputs'
    },
    'gpt-3.5-turbo': {
        name: 'GPT-3.5 Turbo',
        provider: 'OpenAI',
        logo: '🟢',
        description: 'Fast and cost-effective. Good for drafts, brainstorming, and simple tasks.',
        badge: 'Fast, Budget-Friendly'
    },
    'o3-mini': {
        name: 'o3-Mini',
        provider: 'OpenAI',
        logo: '🟢',
        description: 'Specialized in reasoning, math, logic puzzles, and structured problem solving.',
        badge: 'Reasoning, Math & Logic'
    },
    'claude-3-5-sonnet': {
        name: 'Claude 3.5 Sonnet',
        provider: 'Anthropic',
        logo: '🟣',
        description: 'Excellent at writing, analysis, coding, and nuanced conversations.',
        badge: 'Writing, Analysis, Code'
    },
    'claude-3-opus': {
        name: 'Claude 3 Opus',
        provider: 'Anthropic',
        logo: '🟣',
        description: 'Most capable Claude model. Best for complex creative and technical tasks.',
        badge: 'Most Capable, Complex Tasks'
    },
    'claude-3-sonnet': {
        name: 'Claude 3 Sonnet',
        provider: 'Anthropic',
        logo: '🟣',
        description: 'Balanced performance for everyday tasks, writing, and coding.',
        badge: 'Balanced, Versatile'
    },
    'claude-3-haiku': {
        name: 'Claude 3 Haiku',
        provider: 'Anthropic',
        logo: '🟣',
        description: 'Ultra fast responses. Perfect for quick answers and simple queries.',
        badge: 'Ultra Fast, Simple Tasks'
    },
    'gemini-2.0-flash': {
        name: 'Gemini 2.0 Flash',
        provider: 'Google',
        logo: '🔵',
        description: 'Fast multimodal model. Great for quick analysis and content generation.',
        badge: 'Fast, Multimodal'
    },
    'gemini-1.5-pro': {
        name: 'Gemini 1.5 Pro',
        provider: 'Google',
        logo: '🔵',
        description: 'Long context window. Best for research, document analysis, and deep dives.',
        badge: 'Long Context, Research'
    },
    'gemini-1.5-flash': {
        name: 'Gemini 1.5 Flash',
        provider: 'Google',
        logo: '🔵',
        description: 'Quick and efficient for everyday tasks and rapid prototyping.',
        badge: 'Quick, Efficient'
    },
    'llama-3.1-70b': {
        name: 'LLaMA 3.1 70B',
        provider: 'Meta',
        logo: '🟠',
        description: 'Powerful open-source model. Great for code generation and text tasks.',
        badge: 'Open Source, Code & Text'
    },
    'llama-3.1-8b': {
        name: 'LLaMA 3.1 8B',
        provider: 'Meta',
        logo: '🟠',
        description: 'Lightweight open-source model. Fast responses for simple tasks.',
        badge: 'Lightweight, Fast'
    },
    'mistral-large': {
        name: 'Mistral Large',
        provider: 'Mistral',
        logo: '🟡',
        description: 'Strong reasoning and multilingual capabilities. Good for complex tasks.',
        badge: 'Reasoning, Multilingual'
    },
    'mistral-medium': {
        name: 'Mistral Medium',
        provider: 'Mistral',
        logo: '🟡',
        description: 'Balanced performance across reasoning, writing, and coding tasks.',
        badge: 'Balanced Performance'
    },
    'mistral-small': {
        name: 'Mistral Small',
        provider: 'Mistral',
        logo: '🟡',
        description: 'Fast and efficient for everyday conversations and quick tasks.',
        badge: 'Fast, Efficient'
    },
    'mixtral-8x7b': {
        name: 'Mixtral 8x7B',
        provider: 'Mistral',
        logo: '🟡',
        description: 'Mixture-of-experts model. Excellent at code, math, and open-source tasks.',
        badge: 'Code, Math, Open Source'
    },
    'deepseek-chat': {
        name: 'DeepSeek Chat',
        provider: 'DeepSeek',
        logo: '🔴',
        description: 'Strong code generation and reasoning. Good for programming tasks.',
        badge: 'Code Generation, Reasoning'
    },
    'deepseek-reasoner': {
        name: 'DeepSeek Reasoner',
        provider: 'DeepSeek',
        logo: '🔴',
        description: 'Advanced logical reasoning, math, and step-by-step problem solving.',
        badge: 'Advanced Logic, Math'
    },
    'codellama-70b': {
        name: 'CodeLlama 70B',
        provider: 'Meta',
        logo: '🟠',
        description: 'Specialized for code. Best for writing, debugging, and explaining code.',
        badge: 'Code Specialized'
    }
};

// ========================================
// STATE
// ========================================
const state = {
    user: null,
    discussions: [],
    files: [],
    aiMessages: [],
    aiQueryCount: 0,
    currentFilter: 'all',
    selectedModel: 'gpt-4o',
    memories: [],
    chatSessions: [],
    currentChatId: null,
    currentChatMessages: [],
    tipDismissed: false,
    filesReady: false
};

// ========================================
// DOM REFERENCES
// ========================================
const dom = {
    authScreen: document.getElementById('auth-screen'),
    app: document.getElementById('app'),
    btnSignIn: document.getElementById('btn-sign-in'),
    btnSignOut: document.getElementById('btn-sign-out'),
    userName: document.getElementById('user-name'),
    userAvatar: document.getElementById('user-avatar'),
    welcomeName: document.getElementById('welcome-name'),
    pageTitle: document.getElementById('page-title'),
    mobileMenuBtn: document.getElementById('mobile-menu-btn'),

    statDiscussions: document.getElementById('stat-discussions'),
    statFiles: document.getElementById('stat-files'),
    statAi: document.getElementById('stat-ai'),

    discussionTitle: document.getElementById('discussion-title'),
    discussionBody: document.getElementById('discussion-body'),
    discussionCategory: document.getElementById('discussion-category'),
    btnPostDiscussion: document.getElementById('btn-post-discussion'),
    discussionsList: document.getElementById('discussions-list'),

    uploadZone: document.getElementById('upload-zone'),
    fileInput: document.getElementById('file-input'),
    btnBrowse: document.getElementById('btn-browse'),
    btnNewFolder: document.getElementById('btn-new-folder'),
    btnRefreshFiles: document.getElementById('btn-refresh-files'),
    filesList: document.getElementById('files-list'),
    currentPath: document.getElementById('current-path'),

    aiChat: document.getElementById('ai-chat'),
    aiInput: document.getElementById('ai-input'),
    btnAiSend: document.getElementById('btn-ai-send'),
    aiSendText: document.getElementById('ai-send-text'),
    aiLoading: document.getElementById('ai-loading'),
    aiModelSelect: document.getElementById('ai-model-select'),
    modelActiveBadge: document.getElementById('model-active-badge'),
    modelInfoText: document.getElementById('model-info-text'),

    botLogo: document.getElementById('bot-logo'),
    botName: document.getElementById('bot-name'),
    botProvider: document.getElementById('bot-provider'),
    botBadge: document.getElementById('bot-badge'),

    typingIndicator: document.getElementById('typing-indicator'),
    typingUser: document.getElementById('typing-user'),

    btnNewChat: document.getElementById('btn-new-chat'),
    chatHistoryList: document.getElementById('chat-history-list'),

    memoryPanel: document.getElementById('memory-panel'),
    memoryCount: document.getElementById('memory-count'),
    memoryList: document.getElementById('memory-list'),
    btnToggleMemory: document.getElementById('btn-toggle-memory'),
    btnClearMemory: document.getElementById('btn-clear-memory'),
    btnDismissTip: document.getElementById('btn-dismiss-tip'),

    membersGrid: document.getElementById('members-grid'),
    profileName: document.getElementById('profile-name'),
    profileRole: document.getElementById('profile-role'),
    profileStatus: document.getElementById('profile-status'),
    btnSaveProfile: document.getElementById('btn-save-profile'),

    recentActivity: document.getElementById('recent-activity'),
    toastContainer: document.getElementById('toast-container')
};

// ========================================
// TOAST NOTIFICATIONS
// ========================================
function showToast(message, type = 'info') {
    const icons = { success: '✅', error: '❌', info: 'ℹ️' };
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `<span>${icons[type] || 'ℹ️'}</span><span>${message}</span>`;
    dom.toastContainer.appendChild(toast);
    setTimeout(() => {
        toast.style.animation = 'toastOut 0.3s ease forwards';
        setTimeout(() => toast.remove(), 300);
    }, 3500);
}

// ========================================
// AUTH
// ========================================
async function initAuth() {
    try {
        const user = await puter.auth.getUser();
        if (user) handleSignIn(user);
    } catch (e) {
        console.log('User not signed in yet.');
    }
}

dom.btnSignIn.addEventListener('click', async () => {
    try {
        await puter.auth.signIn();
        const user = await puter.auth.getUser();
        handleSignIn(user);
    } catch (e) {
        showToast('Sign in failed. Please try again.', 'error');
    }
});

dom.btnSignOut.addEventListener('click', async () => {
    try {
        await puter.auth.signOut();
        state.user = null;
        dom.app.classList.add('hidden');
        dom.authScreen.classList.remove('hidden');
        showToast('Signed out successfully.', 'info');
    } catch (e) {
        console.error(e);
    }
});

function handleSignIn(user) {
    state.user = user;
    const displayName = user.username || 'Member';
    const initials = displayName.substring(0, 2).toUpperCase();
    dom.userName.textContent = displayName;
    dom.userAvatar.textContent = initials;
    dom.welcomeName.textContent = displayName;
    dom.authScreen.classList.add('hidden');
    dom.app.classList.remove('hidden');
    showToast(`Welcome back, ${displayName}! ⚡`, 'success');
    initAppData();
}

// ========================================
// APP INITIALIZATION
// ========================================
async function initAppData() {
    await ensureBaseFolder();
    loadDiscussions();
    loadFiles();
    loadStats();
    loadMembers();
    loadProfile();
    loadSavedModel();
    loadMemories();
    loadChatSessions();
    cleanOldChats();
    loadTipState();
}

async function ensureBaseFolder() {
    // Puter filesystem — use puter.fs.mkdir with dedupeName false
    // Folders are created under the user's home directory
    try {
        await puter.fs.mkdir('PhotonCore', { dedupeName: false });
    } catch (e) {
        // Folder exists or other error — safe to ignore
    }

    try {
        await puter.fs.mkdir('PhotonCore/files', { dedupeName: false });
    } catch (e) {
        // Folder exists — safe to ignore
    }

    state.filesReady = true;
}

// ========================================
// NAVIGATION
// ========================================
const tabTitles = {
    dashboard: 'Dashboard',
    discussions: 'Discussions',
    files: 'File Storage',
    ai: 'AI Assistant',
    members: 'Members'
};

document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => switchTab(item.dataset.tab));
});

function switchTab(tab) {
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    const activeNav = document.querySelector(`.nav-item[data-tab="${tab}"]`);
    if (activeNav) activeNav.classList.add('active');
    document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
    const activeTab = document.getElementById(`tab-${tab}`);
    if (activeTab) activeTab.classList.add('active');
    dom.pageTitle.textContent = tabTitles[tab] || 'Photon Core';
    closeMobileSidebar();
}

dom.mobileMenuBtn.addEventListener('click', () => {
    document.querySelector('.sidebar').classList.toggle('open');
    let overlay = document.querySelector('.sidebar-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'sidebar-overlay';
        overlay.addEventListener('click', closeMobileSidebar);
        document.body.appendChild(overlay);
    }
    overlay.classList.toggle('active');
});

function closeMobileSidebar() {
    document.querySelector('.sidebar').classList.remove('open');
    const overlay = document.querySelector('.sidebar-overlay');
    if (overlay) overlay.classList.remove('active');
}

// ========================================
// AI MODEL SELECTOR + BOT IDENTITY
// ========================================
dom.aiModelSelect.addEventListener('change', () => {
    const modelId = dom.aiModelSelect.value;
    state.selectedModel = modelId;
    updateBotIdentity(modelId);
    puter.kv.set('photon_selected_model', modelId).catch(() => {});
    const modelData = AI_MODELS[modelId];
    showToast(`Switched to ${modelData?.name || modelId} ✨`, 'success');
});

function updateBotIdentity(modelId) {
    const modelData = AI_MODELS[modelId];
    if (!modelData) return;
    dom.modelActiveBadge.textContent = modelData.name;
    dom.modelInfoText.textContent = modelData.description;
    dom.botLogo.textContent = modelData.logo;
    dom.botName.textContent = modelData.name;
    dom.botProvider.textContent = `by ${modelData.provider}`;
    dom.botBadge.textContent = modelData.badge;
}

async function loadSavedModel() {
    try {
        const savedModel = await puter.kv.get('photon_selected_model');
        if (savedModel && AI_MODELS[savedModel]) {
            state.selectedModel = savedModel;
            dom.aiModelSelect.value = savedModel;
        }
    } catch (e) {}
    updateBotIdentity(state.selectedModel);
}

// ========================================
// MEMORY SYSTEM
// ========================================
async function loadMemories() {
    try {
        const data = await puter.kv.get('photon_memories');
        state.memories = data ? JSON.parse(data) : [];
        renderMemories();
    } catch (e) {
        state.memories = [];
        renderMemories();
    }
}

async function saveMemories() {
    try {
        await puter.kv.set('photon_memories', JSON.stringify(state.memories));
    } catch (e) {
        console.error('Failed to save memories:', e);
    }
}

function extractMemory(message) {
    const lower = message.toLowerCase();
    if (!lower.includes('remember')) return null;

    const patterns = [
        /remember\s+that\s+(.+)/i,
        /remember\s*:\s*(.+)/i,
        /remember\s+(.+)/i
    ];

    for (const pattern of patterns) {
        const match = message.match(pattern);
        if (match) return match[1].trim();
    }
    return null;
}

async function addMemory(text, user) {
    const memory = {
        id: Date.now().toString(),
        text: text,
        user: user,
        timestamp: new Date().toISOString()
    };
    state.memories.push(memory);
    await saveMemories();
    renderMemories();
    showToast('🧠 Memory saved! I\'ll remember this.', 'success');
}

async function deleteMemory(id) {
    state.memories = state.memories.filter(m => m.id !== id);
    await saveMemories();
    renderMemories();
    showToast('Memory removed.', 'info');
}

function renderMemories() {
    dom.memoryCount.textContent = state.memories.length;
    if (state.memories.length === 0) {
        dom.memoryList.innerHTML = '<div class="empty-state small"><p>No memories stored yet. Use "remember" to save info!</p></div>';
        return;
    }
    dom.memoryList.innerHTML = state.memories.map(m => `
        <div class="memory-item">
            <span class="memory-item-text">🧠 ${escapeHtml(m.text)}</span>
            <span class="memory-item-user">${escapeHtml(m.user)}</span>
            <button class="memory-item-delete" onclick="deleteMemory('${m.id}')">🗑️</button>
        </div>
    `).join('');
}

function getMemoryContext() {
    if (state.memories.length === 0) return '';
    const memoryStr = state.memories.map(m => `- ${m.text} (noted by ${m.user})`).join('\n');
    return `\n\nIMPORTANT — You have these memories stored by the team. Always use and reference them when relevant:\n${memoryStr}\n\n`;
}

dom.btnToggleMemory.addEventListener('click', () => {
    const list = dom.memoryList;
    list.classList.toggle('hidden');
    dom.btnToggleMemory.textContent = list.classList.contains('hidden') ? 'Show' : 'Hide';
});

dom.btnClearMemory.addEventListener('click', async () => {
    if (!confirm('Clear ALL AI memories? This cannot be undone.')) return;
    state.memories = [];
    await saveMemories();
    renderMemories();
    showToast('All memories cleared.', 'info');
});

function loadTipState() {
    puter.kv.get('photon_tip_dismissed').then(val => {
        if (val === 'true') {
            document.querySelector('.memory-tip-banner').classList.add('dismissed');
        }
    }).catch(() => {});
}

dom.btnDismissTip.addEventListener('click', () => {
    document.querySelector('.memory-tip-banner').classList.add('dismissed');
    puter.kv.set('photon_tip_dismissed', 'true').catch(() => {});
});

// ========================================
// CHAT SESSIONS (History + 30 Day Auto-Delete)
// ========================================
async function loadChatSessions() {
    try {
        const data = await puter.kv.get('photon_chat_sessions');
        state.chatSessions = data ? JSON.parse(data) : [];
        renderChatHistory();
        if (state.chatSessions.length === 0) {
            createNewChat();
        } else {
            loadChat(state.chatSessions[0].id);
        }
    } catch (e) {
        state.chatSessions = [];
        createNewChat();
    }
}

async function saveChatSessions() {
    try {
        await puter.kv.set('photon_chat_sessions', JSON.stringify(state.chatSessions));
    } catch (e) {
        console.error('Failed to save chat sessions:', e);
    }
}

function createNewChat() {
    const chatId = Date.now().toString();
    const newChat = {
        id: chatId,
        title: 'New Chat',
        model: state.selectedModel,
        messages: [],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };
    state.chatSessions.unshift(newChat);
    state.currentChatId = chatId;
    state.currentChatMessages = [];
    saveChatSessions();
    renderChatHistory();
    clearChatUI();
    showToast('New chat started! 💬', 'success');
}

function loadChat(chatId) {
    const chat = state.chatSessions.find(c => c.id === chatId);
    if (!chat) return;
    state.currentChatId = chatId;
    state.currentChatMessages = chat.messages || [];
    clearChatUI();
    chat.messages.forEach(msg => {
        appendAiMessage(msg.text, msg.sender, msg.modelName, msg.author, false, msg.memorySaved || false);
    });
    renderChatHistory();
}

async function saveCurrentChat() {
    const chat = state.chatSessions.find(c => c.id === state.currentChatId);
    if (!chat) return;
    chat.messages = state.currentChatMessages;
    chat.updatedAt = new Date().toISOString();
    chat.model = state.selectedModel;
    if (chat.title === 'New Chat' && state.currentChatMessages.length > 0) {
        const firstUserMsg = state.currentChatMessages.find(m => m.sender === 'user');
        if (firstUserMsg) {
            chat.title = firstUserMsg.text.substring(0, 50) + (firstUserMsg.text.length > 50 ? '...' : '');
        }
    }
    await saveChatSessions();
    renderChatHistory();
}

async function deleteChat(chatId) {
    if (!confirm('Delete this chat?')) return;
    state.chatSessions = state.chatSessions.filter(c => c.id !== chatId);
    await saveChatSessions();
    if (state.currentChatId === chatId) {
        if (state.chatSessions.length > 0) {
            loadChat(state.chatSessions[0].id);
        } else {
            createNewChat();
        }
    }
    renderChatHistory();
    showToast('Chat deleted.', 'info');
}

function cleanOldChats() {
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    const before = state.chatSessions.length;
    state.chatSessions = state.chatSessions.filter(c => new Date(c.createdAt) > thirtyDaysAgo);
    const removed = before - state.chatSessions.length;
    if (removed > 0) {
        saveChatSessions();
        renderChatHistory();
        showToast(`🗑️ ${removed} old chat(s) auto-deleted (30+ days).`, 'info');
    }
}

function renderChatHistory() {
    if (state.chatSessions.length === 0) {
        dom.chatHistoryList.innerHTML = '<div class="empty-state small"><p>No previous chats</p></div>';
        return;
    }
    dom.chatHistoryList.innerHTML = state.chatSessions.map(c => {
        const isActive = c.id === state.currentChatId;
        const modelData = AI_MODELS[c.model];
        const modelLabel = modelData ? modelData.name : c.model;
        return `
            <div class="chat-history-item ${isActive ? 'active' : ''}" onclick="loadChat('${c.id}')">
                <div class="chat-history-item-title">${escapeHtml(c.title)}</div>
                <div class="chat-history-item-meta">
                    <span class="chat-history-item-date">${formatDate(c.updatedAt)}</span>
                    <span class="chat-history-item-model">${modelLabel}</span>
                    <button class="chat-history-item-delete" onclick="event.stopPropagation(); deleteChat('${c.id}')">🗑️</button>
                </div>
            </div>
        `;
    }).join('');
}

function clearChatUI() {
    dom.aiChat.innerHTML = `
        <div class="ai-message ai-welcome">
            <div class="ai-avatar">🤖</div>
            <div class="ai-bubble">
                <p>Hey Photon Studios! 👋 I'm your AI assistant. This is a <strong>group chat</strong> — everyone on the team can see and participate.</p>
                <p>💡 <strong>Tip:</strong> Use the word <strong>"remember"</strong> in your message to save important info to my memory. I'll recall it in future conversations!</p>
            </div>
        </div>
    `;
}

dom.btnNewChat.addEventListener('click', createNewChat);

// ========================================
// DISCUSSIONS
// ========================================
dom.btnPostDiscussion.addEventListener('click', postDiscussion);

async function postDiscussion() {
    const title = dom.discussionTitle.value.trim();
    const body = dom.discussionBody.value.trim();
    const category = dom.discussionCategory.value;
    if (!title || !body) {
        showToast('Please fill in both title and body.', 'error');
        return;
    }
    const discussion = {
        id: Date.now().toString(),
        title, body, category,
        author: state.user?.username || 'Anonymous',
        timestamp: new Date().toISOString(),
        likes: 0
    };
    try {
        let discussions = [];
        try {
            const data = await puter.kv.get('photon_discussions');
            if (data) discussions = JSON.parse(data);
        } catch (e) {}
        discussions.unshift(discussion);
        await puter.kv.set('photon_discussions', JSON.stringify(discussions));
        addActivity(`💬 ${discussion.author} posted: "${title}"`);
        dom.discussionTitle.value = '';
        dom.discussionBody.value = '';
        showToast('Discussion posted! 💬', 'success');
        loadDiscussions();
    } catch (e) {
        showToast('Failed to post discussion.', 'error');
    }
}

async function loadDiscussions() {
    try {
        const data = await puter.kv.get('photon_discussions');
        state.discussions = data ? JSON.parse(data) : [];
        renderDiscussions();
        dom.statDiscussions.textContent = state.discussions.length;
    } catch (e) {}
}

function renderDiscussions() {
    const filtered = state.currentFilter === 'all'
        ? state.discussions
        : state.discussions.filter(d => d.category === state.currentFilter);
    if (filtered.length === 0) {
        dom.discussionsList.innerHTML = `
            <div class="empty-state">
                <span class="empty-icon">💬</span>
                <p>No discussions yet. Start the conversation!</p>
            </div>`;
        return;
    }
    const categoryLabels = {
        general: '💭 General', 'game-design': '🎮 Game Design',
        art: '🎨 Art', code: '💻 Code', marketing: '📢 Marketing', bugs: '🐛 Bugs'
    };
    dom.discussionsList.innerHTML = filtered.map(d => `
        <div class="discussion-post" data-id="${d.id}">
            <div class="discussion-post-header">
                <div class="discussion-author-avatar">${(d.author || '?').substring(0, 2).toUpperCase()}</div>
                <div class="discussion-meta">
                    <span class="discussion-author">${escapeHtml(d.author)}</span>
                    <span class="discussion-date">${formatDate(d.timestamp)}</span>
                </div>
                <span class="discussion-category-tag">${categoryLabels[d.category] || d.category}</span>
            </div>
            <div class="discussion-title">${escapeHtml(d.title)}</div>
            <div class="discussion-body">${escapeHtml(d.body)}</div>
            <div class="discussion-actions">
                <button class="discussion-action-btn" onclick="likeDiscussion('${d.id}')">❤️ ${d.likes || 0}</button>
                <button class="discussion-action-btn" onclick="deleteDiscussion('${d.id}')">🗑️ Delete</button>
            </div>
        </div>
    `).join('');
}

async function likeDiscussion(id) {
    const d = state.discussions.find(x => x.id === id);
    if (d) {
        d.likes = (d.likes || 0) + 1;
        await puter.kv.set('photon_discussions', JSON.stringify(state.discussions));
        renderDiscussions();
    }
}

async function deleteDiscussion(id) {
    if (!confirm('Delete this discussion?')) return;
    state.discussions = state.discussions.filter(x => x.id !== id);
    await puter.kv.set('photon_discussions', JSON.stringify(state.discussions));
    showToast('Discussion deleted.', 'info');
    renderDiscussions();
    dom.statDiscussions.textContent = state.discussions.length;
}

document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.currentFilter = btn.dataset.filter;
        renderDiscussions();
    });
});

// ========================================
// FILES (Fixed Puter.js Paths)
// ========================================
dom.btnBrowse.addEventListener('click', () => dom.fileInput.click());
dom.uploadZone.addEventListener('click', (e) => {
    if (e.target !== dom.btnBrowse) dom.fileInput.click();
});

dom.uploadZone.addEventListener('dragover', (e) => { e.preventDefault(); dom.uploadZone.classList.add('drag-over'); });
dom.uploadZone.addEventListener('dragleave', () => { dom.uploadZone.classList.remove('drag-over'); });
dom.uploadZone.addEventListener('drop', (e) => {
    e.preventDefault();
    dom.uploadZone.classList.remove('drag-over');
    uploadFiles(e.dataTransfer.files);
});
dom.fileInput.addEventListener('change', (e) => uploadFiles(e.target.files));

async function uploadFiles(fileList) {
    if (!fileList || fileList.length === 0) return;

    // Make sure folder exists before uploading
    if (!state.filesReady) {
        await ensureBaseFolder();
    }

    for (const file of fileList) {
        try {
            showToast(`Uploading ${file.name}...`, 'info');
            // Use puter.fs.write — writes to user's home/PhotonCore/files/
            await puter.fs.write(`PhotonCore/files/${file.name}`, file, { dedupeName: false, overwrite: true });
            addActivity(`📁 ${state.user?.username} uploaded: ${file.name}`);
            showToast(`${file.name} uploaded! 📁`, 'success');
        } catch (e) {
            showToast(`Failed to upload ${file.name}`, 'error');
            console.error('Upload error:', e);
        }
    }
    loadFiles();
    dom.fileInput.value = '';
}

dom.btnRefreshFiles.addEventListener('click', loadFiles);

dom.btnNewFolder.addEventListener('click', async () => {
    const name = prompt('Folder name:');
    if (!name || !name.trim()) return;
    try {
        await puter.fs.mkdir(`PhotonCore/files/${name.trim()}`, { dedupeName: false });
        showToast(`Folder "${name}" created! 📂`, 'success');
        loadFiles();
    } catch (e) {
        showToast('Failed to create folder.', 'error');
        console.error('Mkdir error:', e);
    }
});

async function loadFiles() {
    try {
        const items = await puter.fs.readdir('PhotonCore/files');
        state.files = items || [];
        renderFiles();
        dom.statFiles.textContent = state.files.length;
    } catch (e) {
        // If folder doesn't exist yet, show empty
        state.files = [];
        renderFiles();
        dom.statFiles.textContent = 0;

        // Try to create the folder for next time
        if (!state.filesReady) {
            await ensureBaseFolder();
        }
    }
}

function renderFiles() {
    if (state.files.length === 0) {
        dom.filesList.innerHTML = `
            <div class="empty-state" style="grid-column: 1 / -1;">
                <span class="empty-icon">📂</span>
                <p>No files yet. Upload something!</p>
            </div>`;
        return;
    }
    dom.filesList.innerHTML = state.files.map(f => {
        const icon = getFileIcon(f.name, f.is_dir);
        const size = f.is_dir ? 'Folder' : formatFileSize(f.size);
        const safeName = escapeHtml(f.name).replace(/'/g, "\\'");
        return `
            <div class="file-card">
                <div class="file-icon">${icon}</div>
                <div class="file-name">${escapeHtml(f.name)}</div>
                <div class="file-size">${size}</div>
                <div class="file-actions">
                    ${!f.is_dir ? `<button class="file-action-btn" onclick="downloadFile('${safeName}')">⬇️</button>` : ''}
                    <button class="file-action-btn danger" onclick="deleteFile('${safeName}', ${f.is_dir})">🗑️</button>
                </div>
            </div>
        `;
    }).join('');
}

async function downloadFile(name) {
    try {
        const blob = await puter.fs.read(`PhotonCore/files/${name}`);
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = name;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        showToast(`Downloading ${name}...`, 'info');
    } catch (e) {
        showToast('Failed to download file.', 'error');
        console.error('Download error:', e);
    }
}

async function deleteFile(name, isDir) {
    if (!confirm(`Delete "${name}"?`)) return;
    try {
        await puter.fs.delete(`PhotonCore/files/${name}`, { recursive: isDir });
        showToast(`"${name}" deleted.`, 'info');
        loadFiles();
    } catch (e) {
        showToast('Failed to delete.', 'error');
        console.error('Delete error:', e);
    }
}

function getFileIcon(name, isDir) {
    if (isDir) return '📁';
    const ext = name.split('.').pop().toLowerCase();
    const icons = {
        png: '🖼️', jpg: '🖼️', jpeg: '🖼️', gif: '🖼️', svg: '🖼️', webp: '🖼️',
        mp3: '🎵', wav: '🎵', ogg: '🎵',
        mp4: '🎬', avi: '🎬', mov: '🎬', webm: '🎬',
        pdf: '📄', doc: '📝', docx: '📝', txt: '📝',
        zip: '📦', rar: '📦', '7z': '📦',
        js: '💻', ts: '💻', py: '💻', cs: '💻', cpp: '💻', html: '🌐', css: '🎨',
        json: '⚙️', xml: '⚙️',
        psd: '🎨', ai: '🎨', blend: '🎨',
        unity: '🎮', godot: '🎮'
    };
    return icons[ext] || '📄';
}

// ========================================
// AI ASSISTANT (Group Chat + Memory)
// ========================================
dom.btnAiSend.addEventListener('click', sendAiMessage);

dom.aiInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendAiMessage();
    }
});

document.querySelectorAll('.preset-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        dom.aiInput.value = btn.dataset.prompt;
        sendAiMessage();
    });
});

async function sendAiMessage() {
    const message = dom.aiInput.value.trim();
    if (!message) return;

    const modelId = state.selectedModel;
    const modelData = AI_MODELS[modelId];
    const modelName = modelData?.name || modelId;
    const username = state.user?.username || 'Anonymous';

    // Check for memory keyword
    const memoryContent = extractMemory(message);
    let memorySaved = false;
    if (memoryContent) {
        await addMemory(memoryContent, username);
        memorySaved = true;
    }

    // Add user message
    const userMsg = {
        text: message,
        sender: 'user',
        author: username,
        modelName: '',
        memorySaved: memorySaved,
        timestamp: new Date().toISOString()
    };
    state.currentChatMessages.push(userMsg);
    appendAiMessage(message, 'user', '', username, true, memorySaved);
    dom.aiInput.value = '';

    // Show typing
    dom.typingIndicator.classList.remove('hidden');
    dom.typingUser.textContent = modelName;
    dom.aiSendText.classList.add('hidden');
    dom.aiLoading.classList.remove('hidden');
    dom.btnAiSend.disabled = true;

    try {
        const memoryContext = getMemoryContext();
        const systemPrompt = `You are a helpful AI assistant for Photon Studios, an indie game development team of 6 members. Be friendly, creative, and helpful. You are in a group chat where all team members can see the conversation.${memoryContext}`;

        const conversationHistory = state.currentChatMessages
            .filter(m => m.sender === 'user' || m.sender === 'ai')
            .slice(-10)
            .map(m => ({
                role: m.sender === 'user' ? 'user' : 'assistant',
                content: m.sender === 'user' ? `[${m.author}]: ${m.text}` : m.text
            }));

        const history = conversationHistory.slice(0, -1);

        const messages = [
            { role: 'system', content: systemPrompt },
            ...history,
            { role: 'user', content: `[${username}]: ${message}` }
        ];

        const response = await puter.ai.chat(messages, { model: modelId });
        const aiText = response?.message?.content || response?.toString() || 'Sorry, I could not generate a response.';

        const aiMsg = {
            text: aiText,
            sender: 'ai',
            author: modelName,
            modelName: modelName,
            timestamp: new Date().toISOString()
        };
        state.currentChatMessages.push(aiMsg);
        appendAiMessage(aiText, 'ai', modelName, modelName, true);

        state.aiQueryCount++;
        dom.statAi.textContent = state.aiQueryCount;
        await puter.kv.set('photon_ai_count', state.aiQueryCount.toString());
        addActivity(`🤖 ${username} chatted with ${modelName}`);
        await saveCurrentChat();

    } catch (e) {
        const errorMsg = `Sorry, something went wrong with ${modelName}. The model might not be available. Try a different one!`;
        appendAiMessage(errorMsg, 'ai', modelName, modelName, true);
        showToast(`AI request failed with ${modelName}.`, 'error');
        console.error('AI error:', e);
    }

    dom.typingIndicator.classList.add('hidden');
    dom.aiSendText.classList.remove('hidden');
    dom.aiLoading.classList.add('hidden');
    dom.btnAiSend.disabled = false;
}

function appendAiMessage(text, sender, modelName = '', author = '', save = true, memorySaved = false) {
    const div = document.createElement('div');
    div.className = `ai-message ${sender === 'user' ? 'user-message' : ''}`;

    const modelData = sender === 'ai' ? AI_MODELS[state.selectedModel] : null;

    let avatarContent;
    if (sender === 'user') {
        avatarContent = (author || '??').substring(0, 2).toUpperCase();
    } else {
        avatarContent = modelData?.logo || '🤖';
    }

    const formattedText = sender === 'ai' ? formatAiText(text) : escapeHtml(text);
    const modelTag = sender === 'ai' && modelName
        ? `<span class="ai-model-tag">${modelData?.logo || '⚡'} ${modelName}</span>`
        : '';
    const authorTag = author
        ? `<div class="ai-message-author">${sender === 'user' ? '👤 ' : ''}${escapeHtml(author)}</div>`
        : '';
    const memoryTag = memorySaved
        ? `<span class="memory-saved-indicator">🧠 Memory saved</span>`
        : '';

    div.innerHTML = `
        <div class="ai-avatar">${avatarContent}</div>
        <div class="ai-bubble">
            ${authorTag}
            ${formattedText}
            ${modelTag}
            ${memoryTag}
        </div>
    `;

    dom.aiChat.appendChild(div);
    dom.aiChat.scrollTop = dom.aiChat.scrollHeight;
}

function formatAiText(text) {
    let formatted = escapeHtml(text);
    formatted = formatted.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    formatted = formatted.replace(/\*(.*?)\*/g, '<em>$1</em>');
    formatted = formatted.replace(/`(.*?)`/g, '<code style="background:rgba(108,92,231,0.2);padding:2px 6px;border-radius:4px;font-family:var(--font-mono);font-size:0.85em;">$1</code>');
    formatted = formatted.replace(/\n/g, '<br>');
    return `<p>${formatted}</p>`;
}

// ========================================
// MEMBERS
// ========================================
async function loadMembers() {
    try {
        const data = await puter.kv.get('photon_members');
        const members = data ? JSON.parse(data) : [];
        renderMembers(members);
    } catch (e) {
        renderMembers([]);
    }
}

function renderMembers(members) {
    const defaultMembers = [
        { name: 'Member 1', role: 'Team Lead', status: 'Leading the charge ⚡' },
        { name: 'Member 2', role: 'Developer', status: 'Writing code 💻' },
        { name: 'Member 3', role: 'Artist', status: 'Creating assets 🎨' },
        { name: 'Member 4', role: 'Designer', status: 'Designing gameplay 🎮' },
        { name: 'Member 5', role: 'Sound', status: 'Making music 🎵' },
        { name: 'Member 6', role: 'Writer', status: 'Crafting stories ✍️' }
    ];
    const displayMembers = defaultMembers.map((def, i) => members[i] || def);
    dom.membersGrid.innerHTML = displayMembers.map(m => `
        <div class="member-card">
            <div class="member-avatar">${(m.name || '?').substring(0, 2).toUpperCase()}</div>
            <div class="member-info">
                <span class="member-name">${escapeHtml(m.name)}</span>
                <span class="member-role-badge">${escapeHtml(m.role)}</span>
                <span class="member-status">${escapeHtml(m.status || '')}</span>
            </div>
        </div>
    `).join('');
}

async function loadProfile() {
    try {
        const data = await puter.kv.get('photon_profile_' + state.user?.username);
        if (data) {
            const profile = JSON.parse(data);
            dom.profileName.value = profile.name || '';
            dom.profileRole.value = profile.role || 'Developer';
            dom.profileStatus.value = profile.status || '';
        } else {
            dom.profileName.value = state.user?.username || '';
        }
    } catch (e) {}
}

dom.btnSaveProfile.addEventListener('click', async () => {
    const profile = {
        name: dom.profileName.value.trim() || state.user?.username,
        role: dom.profileRole.value,
        status: dom.profileStatus.value.trim()
    };
    try {
        await puter.kv.set('photon_profile_' + state.user?.username, JSON.stringify(profile));
        showToast('Profile saved! ✅', 'success');
    } catch (e) {
        showToast('Failed to save profile.', 'error');
    }
});

// ========================================
// STATS
// ========================================
async function loadStats() {
    try {
        const aiCount = await puter.kv.get('photon_ai_count');
        state.aiQueryCount = aiCount ? parseInt(aiCount) : 0;
        dom.statAi.textContent = state.aiQueryCount;
    } catch (e) {}
}

// ========================================
// ACTIVITY LOG
// ========================================
async function addActivity(message) {
    try {
        let activities = [];
        const data = await puter.kv.get('photon_activity');
        if (data) activities = JSON.parse(data);
        activities.unshift({ message, timestamp: new Date().toISOString() });
        activities = activities.slice(0, 50);
        await puter.kv.set('photon_activity', JSON.stringify(activities));
        renderActivity(activities);
    } catch (e) {}
}

function renderActivity(activities) {
    if (!activities || activities.length === 0) {
        dom.recentActivity.innerHTML = '<p class="empty-state">No recent activity yet.</p>';
        return;
    }
    dom.recentActivity.innerHTML = activities.slice(0, 10).map(a => `
        <div class="activity-item">
            <span>${escapeHtml(a.message)}</span>
            <span class="activity-time">${formatDate(a.timestamp)}</span>
        </div>
    `).join('');
}

// ========================================
// UTILITY FUNCTIONS
// ========================================
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text || '';
    return div.innerHTML;
}

function formatDate(isoString) {
    const date = new Date(isoString);
    const now = new Date();
    const diffMs = now - date;
    const diffMin = Math.floor(diffMs / 60000);
    const diffHr = Math.floor(diffMs / 3600000);
    const diffDay = Math.floor(diffMs / 86400000);
    if (diffMin < 1) return 'Just now';
    if (diffMin < 60) return `${diffMin}m ago`;
    if (diffHr < 24) return `${diffHr}h ago`;
    if (diffDay < 7) return `${diffDay}d ago`;
    return date.toLocaleDateString();
}

function formatFileSize(bytes) {
    if (!bytes) return '0 B';
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return (bytes / Math.pow(1024, i)).toFixed(1) + ' ' + sizes[i];
}

// ========================================
// PARTICLES
// ========================================
function createParticles() {
    const container = document.getElementById('particles');
    if (!container) return;
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 4 + 1}px;
            height: ${Math.random() * 4 + 1}px;
            background: rgba(108, 92, 231, ${Math.random() * 0.5 + 0.1});
            border-radius: 50%;
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
            animation: particleFloat ${Math.random() * 10 + 5}s ease-in-out infinite;
            animation-delay: ${Math.random() * 5}s;
        `;
        container.appendChild(particle);
    }
    const style = document.createElement('style');
    style.textContent = `
        @keyframes particleFloat {
            0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.5; }
            25% { transform: translate(${Math.random() * 60 - 30}px, ${Math.random() * 60 - 30}px) scale(1.2); opacity: 1; }
            50% { transform: translate(${Math.random() * 80 - 40}px, ${Math.random() * 80 - 40}px) scale(0.8); opacity: 0.3; }
            75% { transform: translate(${Math.random() * 60 - 30}px, ${Math.random() * 60 - 30}px) scale(1.1); opacity: 0.8; }
        }
    `;
    document.head.appendChild(style);
}

// ========================================
// INIT
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    initAuth();
});