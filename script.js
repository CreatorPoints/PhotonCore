/* ========================================
   PHOTON CORE — Photon Studios Hub
   ======================================== */

// ========================================
// AI MODELS DATABASE
// ========================================
const AI_MODELS = {
    'gpt-4o': { name: 'GPT-4o', provider: 'OpenAI', logo: '🟢', description: 'Best for general tasks, conversations, content generation, and coding.', badge: 'General Purpose, Fast & Smart' },
    'gpt-4o-mini': { name: 'GPT-4o Mini', provider: 'OpenAI', logo: '🟢', description: 'Lightweight and fast. Great for quick questions and simple tasks.', badge: 'Lightweight, Quick Responses' },
    'gpt-4-turbo': { name: 'GPT-4 Turbo', provider: 'OpenAI', logo: '🟢', description: 'Advanced reasoning for complex analysis and detailed outputs.', badge: 'Advanced Reasoning, Complex Tasks' },
    'gpt-4': { name: 'GPT-4', provider: 'OpenAI', logo: '🟢', description: 'Deep analytical thinking for research and accuracy.', badge: 'Deep Analysis, Detailed Outputs' },
    'gpt-3.5-turbo': { name: 'GPT-3.5 Turbo', provider: 'OpenAI', logo: '🟢', description: 'Fast and cost-effective for drafts and simple tasks.', badge: 'Fast, Budget-Friendly' },
    'o3-mini': { name: 'o3-Mini', provider: 'OpenAI', logo: '🟢', description: 'Specialized in reasoning, math, and logic.', badge: 'Reasoning, Math & Logic' },
    'claude-3-5-sonnet': { name: 'Claude 3.5 Sonnet', provider: 'Anthropic', logo: '🟣', description: 'Excellent at writing, analysis, and coding.', badge: 'Writing, Analysis, Code' },
    'claude-3-opus': { name: 'Claude 3 Opus', provider: 'Anthropic', logo: '🟣', description: 'Most capable Claude for complex tasks.', badge: 'Most Capable, Complex Tasks' },
    'claude-3-sonnet': { name: 'Claude 3 Sonnet', provider: 'Anthropic', logo: '🟣', description: 'Balanced performance for everyday tasks.', badge: 'Balanced, Versatile' },
    'claude-3-haiku': { name: 'Claude 3 Haiku', provider: 'Anthropic', logo: '🟣', description: 'Ultra fast for quick answers.', badge: 'Ultra Fast, Simple Tasks' },
    'gemini-2.0-flash': { name: 'Gemini 2.0 Flash', provider: 'Google', logo: '🔵', description: 'Fast multimodal model.', badge: 'Fast, Multimodal' },
    'gemini-1.5-pro': { name: 'Gemini 1.5 Pro', provider: 'Google', logo: '🔵', description: 'Long context for research and deep dives.', badge: 'Long Context, Research' },
    'gemini-1.5-flash': { name: 'Gemini 1.5 Flash', provider: 'Google', logo: '🔵', description: 'Quick and efficient.', badge: 'Quick, Efficient' },
    'llama-3.1-70b': { name: 'LLaMA 3.1 70B', provider: 'Meta', logo: '🟠', description: 'Powerful open-source for code and text.', badge: 'Open Source, Code & Text' },
    'llama-3.1-8b': { name: 'LLaMA 3.1 8B', provider: 'Meta', logo: '🟠', description: 'Lightweight open-source model.', badge: 'Lightweight, Fast' },
    'mistral-large': { name: 'Mistral Large', provider: 'Mistral', logo: '🟡', description: 'Strong reasoning and multilingual.', badge: 'Reasoning, Multilingual' },
    'mistral-medium': { name: 'Mistral Medium', provider: 'Mistral', logo: '🟡', description: 'Balanced performance.', badge: 'Balanced Performance' },
    'mistral-small': { name: 'Mistral Small', provider: 'Mistral', logo: '🟡', description: 'Fast and efficient.', badge: 'Fast, Efficient' },
    'mixtral-8x7b': { name: 'Mixtral 8x7B', provider: 'Mistral', logo: '🟡', description: 'Excellent at code and math.', badge: 'Code, Math, Open Source' },
    'deepseek-chat': { name: 'DeepSeek Chat', provider: 'DeepSeek', logo: '🔴', description: 'Strong code generation.', badge: 'Code Generation, Reasoning' },
    'deepseek-reasoner': { name: 'DeepSeek Reasoner', provider: 'DeepSeek', logo: '🔴', description: 'Advanced logical reasoning.', badge: 'Advanced Logic, Math' },
    'codellama-70b': { name: 'CodeLlama 70B', provider: 'Meta', logo: '🟠', description: 'Specialized for code.', badge: 'Code Specialized' }
};

// ========================================
// STATE
// ========================================
const state = {
    user: null,
    discussions: [],
    files: [],
    aiQueryCount: 0,
    currentFilter: 'all',
    selectedModel: 'gpt-4o',
    memories: [],
    chatSessions: [],
    currentChatId: null,
    currentChatMessages: [],
    filesReady: false,
    attachedFile: null,
    attachedFileContent: null,
    attachedFileName: '',
    isTyping: false
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
    memoryCount: document.getElementById('memory-count'),
    memoryList: document.getElementById('memory-list'),
    btnToggleMemory: document.getElementById('btn-toggle-memory'),
    btnClearMemory: document.getElementById('btn-clear-memory'),
    btnDismissTip: document.getElementById('btn-dismiss-tip'),
    memoryTipBanner: document.getElementById('memory-tip-banner'),
    btnAiAttach: document.getElementById('btn-ai-attach'),
    aiFileInput: document.getElementById('ai-file-input'),
    aiAttachmentPreview: document.getElementById('ai-attachment-preview'),
    attachmentIcon: document.getElementById('attachment-icon'),
    attachmentName: document.getElementById('attachment-name'),
    attachmentSize: document.getElementById('attachment-size'),
    btnRemoveAttachment: document.getElementById('btn-remove-attachment'),
    membersGrid: document.getElementById('members-grid'),
    profileName: document.getElementById('profile-name'),
    profileRole: document.getElementById('profile-role'),
    profileStatus: document.getElementById('profile-status'),
    btnSaveProfile: document.getElementById('btn-save-profile'),
    recentActivity: document.getElementById('recent-activity'),
    toastContainer: document.getElementById('toast-container')
};

// ========================================
// TOAST
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
    } catch (e) { console.log('Not signed in.'); }
}

dom.btnSignIn.addEventListener('click', async () => {
    try {
        await puter.auth.signIn();
        const user = await puter.auth.getUser();
        handleSignIn(user);
    } catch (e) { showToast('Sign in failed.', 'error'); }
});

dom.btnSignOut.addEventListener('click', async () => {
    try {
        await puter.auth.signOut();
        state.user = null;
        dom.app.classList.add('hidden');
        dom.authScreen.classList.remove('hidden');
        showToast('Signed out.', 'info');
    } catch (e) {}
});

function handleSignIn(user) {
    state.user = user;
    const name = user.username || 'Member';
    dom.userName.textContent = name;
    dom.userAvatar.textContent = name.substring(0, 2).toUpperCase();
    dom.welcomeName.textContent = name;
    dom.authScreen.classList.add('hidden');
    dom.app.classList.remove('hidden');
    showToast(`Welcome back, ${name}! ⚡`, 'success');
    initAppData();
}

// ========================================
// INIT
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
    try { await puter.fs.mkdir('PhotonCore', { dedupeName: false }); } catch (e) {}
    try { await puter.fs.mkdir('PhotonCore/files', { dedupeName: false }); } catch (e) {}
    state.filesReady = true;
}

// ========================================
// NAVIGATION
// ========================================
const tabTitles = { dashboard: 'Dashboard', discussions: 'Discussions', files: 'File Storage', ai: 'AI Assistant', members: 'Members' };

document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => switchTab(item.dataset.tab));
});

function switchTab(tab) {
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    document.querySelector(`.nav-item[data-tab="${tab}"]`)?.classList.add('active');
    document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
    document.getElementById(`tab-${tab}`)?.classList.add('active');
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
    document.querySelector('.sidebar-overlay')?.classList.remove('active');
}

// ========================================
// MODEL SELECTOR
// ========================================
dom.aiModelSelect.addEventListener('change', () => {
    state.selectedModel = dom.aiModelSelect.value;
    updateBotIdentity(state.selectedModel);
    puter.kv.set('photon_selected_model', state.selectedModel).catch(() => {});
    showToast(`Switched to ${AI_MODELS[state.selectedModel]?.name} ✨`, 'success');
});

function updateBotIdentity(id) {
    const m = AI_MODELS[id];
    if (!m) return;
    dom.modelActiveBadge.textContent = m.name;
    dom.modelInfoText.textContent = m.description;
    dom.botLogo.textContent = m.logo;
    dom.botName.textContent = m.name;
    dom.botProvider.textContent = `by ${m.provider}`;
    dom.botBadge.textContent = m.badge;
}

async function loadSavedModel() {
    try {
        const saved = await puter.kv.get('photon_selected_model');
        if (saved && AI_MODELS[saved]) { state.selectedModel = saved; dom.aiModelSelect.value = saved; }
    } catch (e) {}
    updateBotIdentity(state.selectedModel);
}

// ========================================
// SMART MEMORY SYSTEM
// ========================================
async function loadMemories() {
    try {
        const data = await puter.kv.get('photon_memories');
        state.memories = data ? JSON.parse(data) : [];
    } catch (e) { state.memories = []; }
    renderMemories();
}

async function saveMemories() {
    await puter.kv.set('photon_memories', JSON.stringify(state.memories)).catch(() => {});
}

function shouldRemember(message) {
    const lower = message.toLowerCase();

    // Explicit remember keywords
    const rememberKeywords = [
        'remember', 'don\'t forget', 'keep in mind', 'note that', 'take note',
        'important:', 'fyi', 'heads up', 'make sure to remember', 'save this',
        'store this', 'keep this', 'note this', 'memorize'
    ];

    for (const kw of rememberKeywords) {
        if (lower.includes(kw)) return true;
    }

    // Auto-detect important topics
    const importantPatterns = [
        /our game is called/i,
        /the game name is/i,
        /the project is/i,
        /my name is/i,
        /i('m| am) the/i,
        /the deadline is/i,
        /due (date|by)/i,
        /the art style (is|should|will)/i,
        /we('re| are) using/i,
        /the engine is/i,
        /our target (platform|audience)/i,
        /the budget is/i,
        /we decided/i,
        /the plan is/i,
        /the team (agreed|decided)/i,
        /from now on/i,
        /always use/i,
        /never use/i,
        /the password is/i,
        /the (api|key|token|secret) is/i,
        /our (studio|company|team) (name|is)/i,
        /the genre is/i,
        /we('re| are) making/i,
        /the release (date|window)/i,
        /the main character/i,
        /the story is about/i,
        /the theme is/i
    ];

    for (const pattern of importantPatterns) {
        if (pattern.test(message)) return true;
    }

    return false;
}

function extractMemoryContent(message) {
    // Try explicit patterns first
    const explicitPatterns = [
        /remember\s+that\s+(.+)/i,
        /remember\s*:\s*(.+)/i,
        /remember\s+(.+)/i,
        /don't forget\s+that\s+(.+)/i,
        /don't forget\s*:\s*(.+)/i,
        /don't forget\s+(.+)/i,
        /keep in mind\s+that\s+(.+)/i,
        /keep in mind\s*:\s*(.+)/i,
        /note that\s+(.+)/i,
        /take note\s*:\s*(.+)/i,
        /important:\s*(.+)/i,
        /fyi\s*:?\s*(.+)/i,
        /save this\s*:\s*(.+)/i,
        /memorize\s*:?\s*(.+)/i
    ];

    for (const pattern of explicitPatterns) {
        const match = message.match(pattern);
        if (match) return match[1].trim();
    }

    // For auto-detected important topics, save the full message
    return message.trim();
}

async function addMemory(text, user) {
    // Don't duplicate
    const isDuplicate = state.memories.some(m =>
        m.text.toLowerCase() === text.toLowerCase()
    );
    if (isDuplicate) return;

    state.memories.push({
        id: Date.now().toString(),
        text, user,
        timestamp: new Date().toISOString()
    });

    // Keep max 100 memories
    if (state.memories.length > 100) {
        state.memories = state.memories.slice(-100);
    }

    await saveMemories();
    renderMemories();
    showToast('🧠 Memory saved!', 'success');
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
        dom.memoryList.innerHTML = '<div class="empty-state small"><p>No memories yet.</p></div>';
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
    const memStr = state.memories.map(m => `- ${m.text} (by ${m.user})`).join('\n');
    return `\n\nYou have these MEMORIES from the team. Always reference and use them:\n${memStr}\n\n`;
}

dom.btnToggleMemory.addEventListener('click', () => {
    dom.memoryList.classList.toggle('hidden');
    dom.btnToggleMemory.textContent = dom.memoryList.classList.contains('hidden') ? 'Show' : 'Hide';
});

dom.btnClearMemory.addEventListener('click', async () => {
    if (!confirm('Clear ALL memories?')) return;
    state.memories = [];
    await saveMemories();
    renderMemories();
    showToast('Memories cleared.', 'info');
});

function loadTipState() {
    puter.kv.get('photon_tip_dismissed').then(val => {
        if (val === 'true') dom.memoryTipBanner.classList.add('dismissed');
    }).catch(() => {});
}

dom.btnDismissTip.addEventListener('click', () => {
    dom.memoryTipBanner.classList.add('dismissed');
    puter.kv.set('photon_tip_dismissed', 'true').catch(() => {});
});

// ========================================
// FILE ATTACHMENT FOR AI
// ========================================
dom.btnAiAttach.addEventListener('click', () => dom.aiFileInput.click());

dom.aiFileInput.addEventListener('change', async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    state.attachedFile = file;
    state.attachedFileName = file.name;

    // Read file content
    try {
        if (file.type.startsWith('text/') || file.name.match(/\.(js|ts|py|cs|cpp|html|css|json|xml|md|txt|csv|yaml|yml|ini|cfg|log|sh|bat)$/i)) {
            state.attachedFileContent = await file.text();
        } else if (file.type.startsWith('image/')) {
            state.attachedFileContent = `[Image file: ${file.name}, Size: ${formatFileSize(file.size)}, Type: ${file.type}]`;
        } else {
            state.attachedFileContent = `[Binary file: ${file.name}, Size: ${formatFileSize(file.size)}, Type: ${file.type || 'unknown'}]`;
        }
    } catch (err) {
        state.attachedFileContent = `[File: ${file.name}, Size: ${formatFileSize(file.size)}]`;
    }

    // Show preview
    dom.attachmentIcon.textContent = getFileIcon(file.name, false);
    dom.attachmentName.textContent = file.name;
    dom.attachmentSize.textContent = formatFileSize(file.size);
    dom.aiAttachmentPreview.classList.remove('hidden');

    dom.aiFileInput.value = '';
    showToast(`📎 ${file.name} attached`, 'info');
});

dom.btnRemoveAttachment.addEventListener('click', () => {
    clearAttachment();
});

function clearAttachment() {
    state.attachedFile = null;
    state.attachedFileContent = null;
    state.attachedFileName = '';
    dom.aiAttachmentPreview.classList.add('hidden');
}

// ========================================
// CHAT SESSIONS
// ========================================
async function loadChatSessions() {
    try {
        const data = await puter.kv.get('photon_chat_sessions');
        state.chatSessions = data ? JSON.parse(data) : [];
        renderChatHistory();
        if (state.chatSessions.length === 0) createNewChat();
        else loadChat(state.chatSessions[0].id);
    } catch (e) { state.chatSessions = []; createNewChat(); }
}

async function saveChatSessions() {
    await puter.kv.set('photon_chat_sessions', JSON.stringify(state.chatSessions)).catch(() => {});
}

function createNewChat() {
    const id = Date.now().toString();
    state.chatSessions.unshift({
        id, title: 'New Chat', model: state.selectedModel,
        messages: [],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    });
    state.currentChatId = id;
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
        appendMessageStatic(msg.text, msg.sender, msg.modelName, msg.author, msg.memorySaved, msg.fileName);
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
        const first = state.currentChatMessages.find(m => m.sender === 'user');
        if (first) chat.title = first.text.substring(0, 50) + (first.text.length > 50 ? '...' : '');
    }
    await saveChatSessions();
    renderChatHistory();
}

async function deleteChat(chatId) {
    if (!confirm('Delete this chat?')) return;
    state.chatSessions = state.chatSessions.filter(c => c.id !== chatId);
    await saveChatSessions();
    if (state.currentChatId === chatId) {
        state.chatSessions.length > 0 ? loadChat(state.chatSessions[0].id) : createNewChat();
    }
    renderChatHistory();
    showToast('Chat deleted.', 'info');
}

function cleanOldChats() {
    const cutoff = new Date();
    cutoff.setDate(cutoff.getDate() - 30);
    const before = state.chatSessions.length;
    state.chatSessions = state.chatSessions.filter(c => new Date(c.createdAt) > cutoff);
    const removed = before - state.chatSessions.length;
    if (removed > 0) {
        saveChatSessions();
        renderChatHistory();
        showToast(`🗑️ ${removed} old chat(s) auto-deleted.`, 'info');
    }
}

function renderChatHistory() {
    if (state.chatSessions.length === 0) {
        dom.chatHistoryList.innerHTML = '<div class="empty-state small"><p>No chats</p></div>';
        return;
    }
    dom.chatHistoryList.innerHTML = state.chatSessions.map(c => {
        const active = c.id === state.currentChatId;
        const model = AI_MODELS[c.model]?.name || c.model;
        return `
            <div class="chat-history-item ${active ? 'active' : ''}" onclick="loadChat('${c.id}')">
                <div class="chat-history-item-title">${escapeHtml(c.title)}</div>
                <div class="chat-history-item-meta">
                    <span class="chat-history-item-date">${formatDate(c.updatedAt)}</span>
                    <span class="chat-history-item-model">${model}</span>
                    <button class="chat-history-item-delete" onclick="event.stopPropagation(); deleteChat('${c.id}')">🗑️</button>
                </div>
            </div>`;
    }).join('');
}

function clearChatUI() {
    dom.aiChat.innerHTML = `
        <div class="ai-message ai-welcome">
            <div class="ai-avatar">🤖</div>
            <div class="ai-bubble">
                <p>Hey Photon Studios! 👋 This is a <strong>group chat</strong> — everyone can see and participate.</p>
                <p>📎 <strong>Attach files</strong> for analysis. Say <strong>"save to cloud"</strong> to store them.</p>
                <p>🧠 I <strong>automatically remember</strong> important things — names, deadlines, decisions, and more!</p>
            </div>
        </div>`;
}

dom.btnNewChat.addEventListener('click', createNewChat);

// ========================================
// DISCUSSIONS
// ========================================
dom.btnPostDiscussion.addEventListener('click', postDiscussion);

async function postDiscussion() {
    const title = dom.discussionTitle.value.trim();
    const body = dom.discussionBody.value.trim();
    if (!title || !body) { showToast('Fill in both fields.', 'error'); return; }
    const discussion = {
        id: Date.now().toString(), title, body,
        category: dom.discussionCategory.value,
        author: state.user?.username || 'Anon',
        timestamp: new Date().toISOString(), likes: 0
    };
    try {
        let list = [];
        try { const d = await puter.kv.get('photon_discussions'); if (d) list = JSON.parse(d); } catch (e) {}
        list.unshift(discussion);
        await puter.kv.set('photon_discussions', JSON.stringify(list));
        addActivity(`💬 ${discussion.author} posted: "${title}"`);
        dom.discussionTitle.value = ''; dom.discussionBody.value = '';
        showToast('Posted! 💬', 'success');
        loadDiscussions();
    } catch (e) { showToast('Failed.', 'error'); }
}

async function loadDiscussions() {
    try {
        const d = await puter.kv.get('photon_discussions');
        state.discussions = d ? JSON.parse(d) : [];
        renderDiscussions();
        dom.statDiscussions.textContent = state.discussions.length;
    } catch (e) {}
}

function renderDiscussions() {
    const filtered = state.currentFilter === 'all' ? state.discussions : state.discussions.filter(d => d.category === state.currentFilter);
    if (!filtered.length) {
        dom.discussionsList.innerHTML = '<div class="empty-state"><span class="empty-icon">💬</span><p>No discussions yet.</p></div>';
        return;
    }
    const labels = { general: '💭 General', 'game-design': '🎮 Game Design', art: '🎨 Art', code: '💻 Code', marketing: '📢 Marketing', bugs: '🐛 Bugs' };
    dom.discussionsList.innerHTML = filtered.map(d => `
        <div class="discussion-post">
            <div class="discussion-post-header">
                <div class="discussion-author-avatar">${(d.author || '?').substring(0, 2).toUpperCase()}</div>
                <div class="discussion-meta">
                    <span class="discussion-author">${escapeHtml(d.author)}</span>
                    <span class="discussion-date">${formatDate(d.timestamp)}</span>
                </div>
                <span class="discussion-category-tag">${labels[d.category] || d.category}</span>
            </div>
            <div class="discussion-title">${escapeHtml(d.title)}</div>
            <div class="discussion-body">${escapeHtml(d.body)}</div>
            <div class="discussion-actions">
                <button class="discussion-action-btn" onclick="likeDiscussion('${d.id}')">❤️ ${d.likes || 0}</button>
                <button class="discussion-action-btn" onclick="deleteDiscussion('${d.id}')">🗑️ Delete</button>
            </div>
        </div>`).join('');
}

async function likeDiscussion(id) {
    const d = state.discussions.find(x => x.id === id);
    if (d) { d.likes = (d.likes || 0) + 1; await puter.kv.set('photon_discussions', JSON.stringify(state.discussions)); renderDiscussions(); }
}

async function deleteDiscussion(id) {
    if (!confirm('Delete?')) return;
    state.discussions = state.discussions.filter(x => x.id !== id);
    await puter.kv.set('photon_discussions', JSON.stringify(state.discussions));
    showToast('Deleted.', 'info');
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
// FILES
// ========================================
dom.btnBrowse.addEventListener('click', () => dom.fileInput.click());
dom.uploadZone.addEventListener('click', (e) => { if (e.target !== dom.btnBrowse) dom.fileInput.click(); });
dom.uploadZone.addEventListener('dragover', (e) => { e.preventDefault(); dom.uploadZone.classList.add('drag-over'); });
dom.uploadZone.addEventListener('dragleave', () => dom.uploadZone.classList.remove('drag-over'));
dom.uploadZone.addEventListener('drop', (e) => { e.preventDefault(); dom.uploadZone.classList.remove('drag-over'); uploadFiles(e.dataTransfer.files); });
dom.fileInput.addEventListener('change', (e) => uploadFiles(e.target.files));

async function uploadFiles(fileList) {
    if (!fileList?.length) return;
    if (!state.filesReady) await ensureBaseFolder();
    for (const file of fileList) {
        try {
            showToast(`Uploading ${file.name}...`, 'info');
            await puter.fs.write(`PhotonCore/files/${file.name}`, file, { dedupeName: false, overwrite: true });
            addActivity(`📁 ${state.user?.username} uploaded: ${file.name}`);
            showToast(`${file.name} uploaded!`, 'success');
        } catch (e) { showToast(`Failed: ${file.name}`, 'error'); }
    }
    loadFiles();
    dom.fileInput.value = '';
}

async function saveFileToCloud(file, name) {
    if (!state.filesReady) await ensureBaseFolder();
    try {
        await puter.fs.write(`PhotonCore/files/${name}`, file, { dedupeName: false, overwrite: true });
        showToast(`☁️ ${name} saved to cloud!`, 'success');
        addActivity(`☁️ AI saved file: ${name}`);
        loadFiles();
    } catch (e) { showToast('Failed to save to cloud.', 'error'); }
}

dom.btnRefreshFiles.addEventListener('click', loadFiles);

dom.btnNewFolder.addEventListener('click', async () => {
    const name = prompt('Folder name:');
    if (!name?.trim()) return;
    try {
        await puter.fs.mkdir(`PhotonCore/files/${name.trim()}`, { dedupeName: false });
        showToast(`Folder "${name}" created!`, 'success');
        loadFiles();
    } catch (e) { showToast('Failed.', 'error'); }
});

async function loadFiles() {
    try {
        const items = await puter.fs.readdir('PhotonCore/files');
        state.files = items || [];
        renderFiles();
        dom.statFiles.textContent = state.files.length;
    } catch (e) { state.files = []; renderFiles(); dom.statFiles.textContent = 0; if (!state.filesReady) ensureBaseFolder(); }
}

function renderFiles() {
    if (!state.files.length) {
        dom.filesList.innerHTML = '<div class="empty-state" style="grid-column:1/-1"><span class="empty-icon">📂</span><p>No files yet.</p></div>';
        return;
    }
    dom.filesList.innerHTML = state.files.map(f => {
        const icon = getFileIcon(f.name, f.is_dir);
        const size = f.is_dir ? 'Folder' : formatFileSize(f.size);
        const safe = escapeHtml(f.name).replace(/'/g, "\\'");
        return `<div class="file-card">
            <div class="file-icon">${icon}</div>
            <div class="file-name">${escapeHtml(f.name)}</div>
            <div class="file-size">${size}</div>
            <div class="file-actions">
                ${!f.is_dir ? `<button class="file-action-btn" onclick="downloadFile('${safe}')">⬇️</button>` : ''}
                <button class="file-action-btn danger" onclick="deleteFile('${safe}', ${f.is_dir})">🗑️</button>
            </div></div>`;
    }).join('');
}

async function downloadFile(name) {
    try {
        const blob = await puter.fs.read(`PhotonCore/files/${name}`);
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url; a.download = name; document.body.appendChild(a); a.click(); document.body.removeChild(a);
        URL.revokeObjectURL(url);
    } catch (e) { showToast('Download failed.', 'error'); }
}

async function deleteFile(name, isDir) {
    if (!confirm(`Delete "${name}"?`)) return;
    try {
        await puter.fs.delete(`PhotonCore/files/${name}`, { recursive: isDir });
        showToast(`"${name}" deleted.`, 'info');
        loadFiles();
    } catch (e) { showToast('Failed.', 'error'); }
}

function getFileIcon(name, isDir) {
    if (isDir) return '📁';
    const ext = name.split('.').pop().toLowerCase();
    return { png:'🖼️',jpg:'🖼️',jpeg:'🖼️',gif:'🖼️',svg:'🖼️',webp:'🖼️',mp3:'🎵',wav:'🎵',ogg:'🎵',mp4:'🎬',avi:'🎬',mov:'🎬',webm:'🎬',pdf:'📄',doc:'📝',docx:'📝',txt:'📝',zip:'📦',rar:'📦','7z':'📦',js:'💻',ts:'💻',py:'💻',cs:'💻',cpp:'💻',html:'🌐',css:'🎨',json:'⚙️',xml:'⚙️',psd:'🎨',blend:'🎨',unity:'🎮',godot:'🎮' }[ext] || '📄';
}

// ========================================
// AI — TYPEWRITER + FILE ATTACH + SMART MEMORY
// ========================================
dom.btnAiSend.addEventListener('click', sendAiMessage);
dom.aiInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendAiMessage(); }
});

document.querySelectorAll('.preset-btn').forEach(btn => {
    btn.addEventListener('click', () => { dom.aiInput.value = btn.dataset.prompt; sendAiMessage(); });
});

async function sendAiMessage() {
    const message = dom.aiInput.value.trim();
    if (!message && !state.attachedFile) return;
    if (state.isTyping) return;

    const modelId = state.selectedModel;
    const modelData = AI_MODELS[modelId];
    const modelName = modelData?.name || modelId;
    const username = state.user?.username || 'Anonymous';

    // Smart memory detection
    let memorySaved = false;
    if (message && shouldRemember(message)) {
        const memContent = extractMemoryContent(message);
        if (memContent) {
            await addMemory(memContent, username);
            memorySaved = true;
        }
    }

    // Build display message
    let displayMessage = message;
    let fileContext = '';
    let fileName = '';

    if (state.attachedFile) {
        fileName = state.attachedFileName;
        displayMessage = message || `Analyze this file: ${fileName}`;

        if (state.attachedFileContent && state.attachedFileContent.length < 50000) {
            fileContext = `\n\n--- ATTACHED FILE: ${fileName} ---\n${state.attachedFileContent}\n--- END FILE ---\n`;
        } else {
            fileContext = `\n\n[Attached file: ${fileName}, Size: ${formatFileSize(state.attachedFile.size)}]`;
        }

        // Check if user wants to save to cloud
        const lower = message.toLowerCase();
        if (lower.includes('save to cloud') || lower.includes('store this') || lower.includes('upload this') || lower.includes('save this file')) {
            await saveFileToCloud(state.attachedFile, fileName);
        }
    }

    // Add user message
    const userMsg = {
        text: displayMessage, sender: 'user', author: username,
        modelName: '', memorySaved, fileName,
        timestamp: new Date().toISOString()
    };
    state.currentChatMessages.push(userMsg);
    appendMessageStatic(displayMessage, 'user', '', username, memorySaved, fileName);
    dom.aiInput.value = '';

    const attachedFileForContext = fileContext;
    clearAttachment();

    // Show typing
    state.isTyping = true;
    dom.typingIndicator.classList.remove('hidden');
    dom.typingUser.textContent = modelName;
    dom.aiSendText.classList.add('hidden');
    dom.aiLoading.classList.remove('hidden');
    dom.btnAiSend.disabled = true;

    try {
        const memoryContext = getMemoryContext();
        const systemPrompt = `You are a helpful AI assistant for Photon Studios, an indie game dev team of 6. Be friendly, creative, helpful. This is a group chat. ${memoryContext}

If the user attaches a file, analyze it thoroughly and help with whatever they need — review code, summarize documents, extract data, convert formats, suggest improvements, etc.

If the user asks to "save to cloud" or "store" or "upload" a file, confirm that it has been saved to PhotonCore cloud storage.

Always be aware of memories and reference them naturally in conversation.`;

        const history = state.currentChatMessages
            .filter(m => m.sender === 'user' || m.sender === 'ai')
            .slice(-10)
            .map(m => ({
                role: m.sender === 'user' ? 'user' : 'assistant',
                content: m.sender === 'user' ? `[${m.author}]: ${m.text}` : m.text
            }));

        const lastUserContent = `[${username}]: ${displayMessage}${attachedFileForContext}`;
        history[history.length - 1] = { role: 'user', content: lastUserContent };

        const messages = [{ role: 'system', content: systemPrompt }, ...history];

        const response = await puter.ai.chat(messages, { model: modelId });
        const aiText = response?.message?.content || response?.toString() || 'Sorry, could not respond.';

        const aiMsg = {
            text: aiText, sender: 'ai', author: modelName,
            modelName, timestamp: new Date().toISOString()
        };
        state.currentChatMessages.push(aiMsg);

        // Typewriter effect
        await typewriterAppend(aiText, modelName);

        state.aiQueryCount++;
        dom.statAi.textContent = state.aiQueryCount;
        await puter.kv.set('photon_ai_count', state.aiQueryCount.toString());
        addActivity(`🤖 ${username} chatted with ${modelName}`);
        await saveCurrentChat();

    } catch (e) {
        const err = `Sorry, ${modelName} failed. Try another model!`;
        appendMessageStatic(err, 'ai', modelName, modelName);
        showToast(`Failed with ${modelName}.`, 'error');
        console.error(e);
    }

    state.isTyping = false;
    dom.typingIndicator.classList.add('hidden');
    dom.aiSendText.classList.remove('hidden');
    dom.aiLoading.classList.add('hidden');
    dom.btnAiSend.disabled = false;
}

// ========================================
// TYPEWRITER EFFECT
// ========================================
async function typewriterAppend(text, modelName) {
    const modelData = AI_MODELS[state.selectedModel];
    const div = document.createElement('div');
    div.className = 'ai-message';

    const avatarContent = modelData?.logo || '🤖';
    const authorTag = `<div class="ai-message-author">${escapeHtml(modelName)}</div>`;

    div.innerHTML = `
        <div class="ai-avatar">${avatarContent}</div>
        <div class="ai-bubble">
            ${authorTag}
            <p class="typewriter-target"></p>
        </div>
    `;

    dom.aiChat.appendChild(div);

    const target = div.querySelector('.typewriter-target');
    const cursor = document.createElement('span');
    cursor.className = 'typewriter-cursor';
    target.appendChild(cursor);

    // Type character by character
    const chars = text.split('');
    let i = 0;
    const speed = Math.max(8, Math.min(25, 3000 / chars.length)); // Adaptive speed

    await new Promise((resolve) => {
        function typeNext() {
            if (i < chars.length) {
                const char = chars[i];
                const textNode = document.createTextNode(char);
                target.insertBefore(textNode, cursor);

                // Handle newlines
                if (char === '\n') {
                    const br = document.createElement('br');
                    target.insertBefore(br, cursor);
                }

                i++;
                dom.aiChat.scrollTop = dom.aiChat.scrollHeight;

                // Vary speed for natural feel
                let delay = speed;
                if (char === '.' || char === '!' || char === '?') delay = speed * 4;
                else if (char === ',') delay = speed * 2;
                else if (char === '\n') delay = speed * 3;

                setTimeout(typeNext, delay);
            } else {
                // Done typing — remove cursor, add model tag
                cursor.remove();

                // Format the final text
                const formatted = formatAiText(text);
                target.outerHTML = formatted;

                // Add model tag
                const modelTag = document.createElement('span');
                modelTag.className = 'ai-model-tag';
                modelTag.textContent = `${modelData?.logo || '⚡'} ${modelName}`;
                div.querySelector('.ai-bubble').appendChild(modelTag);

                dom.aiChat.scrollTop = dom.aiChat.scrollHeight;
                resolve();
            }
        }
        typeNext();
    });
}

// Static message append (for loading history)
function appendMessageStatic(text, sender, modelName = '', author = '', memorySaved = false, fileName = '') {
    const div = document.createElement('div');
    div.className = `ai-message ${sender === 'user' ? 'user-message' : ''}`;

    const modelData = sender === 'ai' ? AI_MODELS[state.selectedModel] : null;
    let avatar = sender === 'user' ? (author || '??').substring(0, 2).toUpperCase() : (modelData?.logo || '🤖');

    const formatted = sender === 'ai' ? formatAiText(text) : escapeHtml(text);
    const modelTag = sender === 'ai' && modelName ? `<span class="ai-model-tag">${modelData?.logo || '⚡'} ${modelName}</span>` : '';
    const authorTag = author ? `<div class="ai-message-author">${sender === 'user' ? '👤 ' : ''}${escapeHtml(author)}</div>` : '';
    const memTag = memorySaved ? '<span class="memory-saved-indicator">🧠 Memory saved</span>' : '';
    const fileTag = fileName ? `<div class="ai-file-bubble"><span class="ai-file-bubble-icon">${getFileIcon(fileName, false)}</span><span class="ai-file-bubble-name">${escapeHtml(fileName)}</span></div>` : '';

    div.innerHTML = `
        <div class="ai-avatar">${avatar}</div>
        <div class="ai-bubble">
            ${authorTag}${fileTag}${formatted}${modelTag}${memTag}
        </div>`;

    dom.aiChat.appendChild(div);
    dom.aiChat.scrollTop = dom.aiChat.scrollHeight;
}

function formatAiText(text) {
    let f = escapeHtml(text);
    f = f.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    f = f.replace(/\*(.*?)\*/g, '<em>$1</em>');
    f = f.replace(/`(.*?)`/g, '<code style="background:rgba(108,92,231,0.2);padding:2px 6px;border-radius:4px;font-family:var(--font-mono);font-size:0.85em;">$1</code>');
    f = f.replace(/\n/g, '<br>');
    return `<p>${f}</p>`;
}

// ========================================
// MEMBERS
// ========================================
async function loadMembers() {
    try {
        const d = await puter.kv.get('photon_members');
        renderMembers(d ? JSON.parse(d) : []);
    } catch (e) { renderMembers([]); }
}

function renderMembers(members) {
    const defaults = [
        { name: 'Member 1', role: 'Team Lead', status: '⚡' },
        { name: 'Member 2', role: 'Developer', status: '💻' },
        { name: 'Member 3', role: 'Artist', status: '🎨' },
        { name: 'Member 4', role: 'Designer', status: '🎮' },
        { name: 'Member 5', role: 'Sound', status: '🎵' },
        { name: 'Member 6', role: 'Writer', status: '✍️' }
    ];
    dom.membersGrid.innerHTML = defaults.map((def, i) => {
        const m = members[i] || def;
        return `<div class="member-card">
            <div class="member-avatar">${(m.name || '?').substring(0, 2).toUpperCase()}</div>
            <div class="member-info">
                <span class="member-name">${escapeHtml(m.name)}</span>
                <span class="member-role-badge">${escapeHtml(m.role)}</span>
                <span class="member-status">${escapeHtml(m.status || '')}</span>
            </div></div>`;
    }).join('');
}

async function loadProfile() {
    try {
        const d = await puter.kv.get('photon_profile_' + state.user?.username);
        if (d) {
            const p = JSON.parse(d);
            dom.profileName.value = p.name || '';
            dom.profileRole.value = p.role || 'Developer';
            dom.profileStatus.value = p.status || '';
        } else { dom.profileName.value = state.user?.username || ''; }
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
    } catch (e) { showToast('Failed.', 'error'); }
});

// ========================================
// STATS & ACTIVITY
// ========================================
async function loadStats() {
    try {
        const c = await puter.kv.get('photon_ai_count');
        state.aiQueryCount = c ? parseInt(c) : 0;
        dom.statAi.textContent = state.aiQueryCount;
    } catch (e) {}
}

async function addActivity(message) {
    try {
        let list = [];
        const d = await puter.kv.get('photon_activity');
        if (d) list = JSON.parse(d);
        list.unshift({ message, timestamp: new Date().toISOString() });
        list = list.slice(0, 50);
        await puter.kv.set('photon_activity', JSON.stringify(list));
        renderActivity(list);
    } catch (e) {}
}

function renderActivity(list) {
    if (!list?.length) { dom.recentActivity.innerHTML = '<p class="empty-state">No activity yet.</p>'; return; }
    dom.recentActivity.innerHTML = list.slice(0, 10).map(a => `
        <div class="activity-item">
            <span>${escapeHtml(a.message)}</span>
            <span class="activity-time">${formatDate(a.timestamp)}</span>
        </div>`).join('');
}

// ========================================
// UTILITIES
// ========================================
function escapeHtml(t) { const d = document.createElement('div'); d.textContent = t || ''; return d.innerHTML; }

function formatDate(iso) {
    const d = new Date(iso), now = new Date(), ms = now - d;
    const min = Math.floor(ms / 60000), hr = Math.floor(ms / 3600000), day = Math.floor(ms / 86400000);
    if (min < 1) return 'Just now';
    if (min < 60) return `${min}m ago`;
    if (hr < 24) return `${hr}h ago`;
    if (day < 7) return `${day}d ago`;
    return d.toLocaleDateString();
}

function formatFileSize(b) {
    if (!b) return '0 B';
    const s = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(b) / Math.log(1024));
    return (b / Math.pow(1024, i)).toFixed(1) + ' ' + s[i];
}

// ========================================
// PARTICLES
// ========================================
function createParticles() {
    const c = document.getElementById('particles');
    if (!c) return;
    for (let i = 0; i < 30; i++) {
        const p = document.createElement('div');
        p.style.cssText = `position:absolute;width:${Math.random()*4+1}px;height:${Math.random()*4+1}px;background:rgba(108,92,231,${Math.random()*0.5+0.1});border-radius:50%;top:${Math.random()*100}%;left:${Math.random()*100}%;animation:particleFloat ${Math.random()*10+5}s ease-in-out infinite;animation-delay:${Math.random()*5}s;`;
        c.appendChild(p);
    }
    const s = document.createElement('style');
    s.textContent = `@keyframes particleFloat{0%,100%{transform:translate(0,0) scale(1);opacity:0.5}25%{transform:translate(${Math.random()*60-30}px,${Math.random()*60-30}px) scale(1.2);opacity:1}50%{transform:translate(${Math.random()*80-40}px,${Math.random()*80-40}px) scale(0.8);opacity:0.3}75%{transform:translate(${Math.random()*60-30}px,${Math.random()*60-30}px) scale(1.1);opacity:0.8}}`;
    document.head.appendChild(s);
}

// ========================================
// BOOT
// ========================================
document.addEventListener('DOMContentLoaded', () => { createParticles(); initAuth(); });