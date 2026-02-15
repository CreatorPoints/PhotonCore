/* ========================================
   PHOTON CORE — Photon Studios Hub
   Main Application Script (Puter.js)
   ======================================== */

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
    basePath: '/PhotonCore'
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

    // Stats
    statDiscussions: document.getElementById('stat-discussions'),
    statFiles: document.getElementById('stat-files'),
    statAi: document.getElementById('stat-ai'),

    // Discussions
    discussionTitle: document.getElementById('discussion-title'),
    discussionBody: document.getElementById('discussion-body'),
    discussionCategory: document.getElementById('discussion-category'),
    btnPostDiscussion: document.getElementById('btn-post-discussion'),
    discussionsList: document.getElementById('discussions-list'),

    // Files
    uploadZone: document.getElementById('upload-zone'),
    fileInput: document.getElementById('file-input'),
    btnBrowse: document.getElementById('btn-browse'),
    btnNewFolder: document.getElementById('btn-new-folder'),
    btnRefreshFiles: document.getElementById('btn-refresh-files'),
    filesList: document.getElementById('files-list'),
    currentPath: document.getElementById('current-path'),

    // AI
    aiChat: document.getElementById('ai-chat'),
    aiInput: document.getElementById('ai-input'),
    btnAiSend: document.getElementById('btn-ai-send'),
    aiSendText: document.getElementById('ai-send-text'),
    aiLoading: document.getElementById('ai-loading'),

    // Members
    membersGrid: document.getElementById('members-grid'),
    profileName: document.getElementById('profile-name'),
    profileRole: document.getElementById('profile-role'),
    profileStatus: document.getElementById('profile-status'),
    btnSaveProfile: document.getElementById('btn-save-profile'),

    // Activity
    recentActivity: document.getElementById('recent-activity'),

    // Toast
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
        // Check if user is already signed in
        const user = await puter.auth.getUser();
        if (user) {
            handleSignIn(user);
        }
    } catch (e) {
        // Not signed in — show auth screen
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
        console.error(e);
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

    // Initialize app data
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
}

async function ensureBaseFolder() {
    try {
        await puter.fs.mkdir(state.basePath, { createMissingParents: true });
    } catch (e) {
        // Folder might already exist
    }
    try {
        await puter.fs.mkdir(state.basePath + '/files', { createMissingParents: true });
    } catch (e) {}
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
    item.addEventListener('click', () => {
        const tab = item.dataset.tab;
        switchTab(tab);
    });
});

function switchTab(tab) {
    // Update nav
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    const activeNav = document.querySelector(`.nav-item[data-tab="${tab}"]`);
    if (activeNav) activeNav.classList.add('active');

    // Update content
    document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
    const activeTab = document.getElementById(`tab-${tab}`);
    if (activeTab) activeTab.classList.add('active');

    // Update title
    dom.pageTitle.textContent = tabTitles[tab] || 'Photon Core';

    // Close mobile sidebar
    closeMobileSidebar();
}

// Mobile sidebar
dom.mobileMenuBtn.addEventListener('click', () => {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('open');

    // Create or toggle overlay
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
        title,
        body,
        category,
        author: state.user?.username || 'Anonymous',
        timestamp: new Date().toISOString(),
        likes: 0
    };

    try {
        // Load existing discussions
        let discussions = [];
        try {
            const data = await puter.kv.get('photon_discussions');
            if (data) discussions = JSON.parse(data);
        } catch (e) {}

        discussions.unshift(discussion);
        await puter.kv.set('photon_discussions', JSON.stringify(discussions));

        // Update activity
        addActivity(`💬 ${discussion.author} posted: "${title}"`);

        dom.discussionTitle.value = '';
        dom.discussionBody.value = '';
        showToast('Discussion posted! 💬', 'success');
        loadDiscussions();
    } catch (e) {
        showToast('Failed to post discussion.', 'error');
        console.error(e);
    }
}

async function loadDiscussions() {
    try {
        const data = await puter.kv.get('photon_discussions');
        state.discussions = data ? JSON.parse(data) : [];
        renderDiscussions();
        dom.statDiscussions.textContent = state.discussions.length;
    } catch (e) {
        console.error('Failed to load discussions:', e);
    }
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
        general: '💭 General',
        'game-design': '🎮 Game Design',
        art: '🎨 Art',
        code: '💻 Code',
        marketing: '📢 Marketing',
        bugs: '🐛 Bugs'
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

// Discussion filters
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
dom.uploadZone.addEventListener('click', (e) => {
    if (e.target !== dom.btnBrowse) dom.fileInput.click();
});

// Drag and drop
dom.uploadZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dom.uploadZone.classList.add('drag-over');
});

dom.uploadZone.addEventListener('dragleave', () => {
    dom.uploadZone.classList.remove('drag-over');
});

dom.uploadZone.addEventListener('drop', (e) => {
    e.preventDefault();
    dom.uploadZone.classList.remove('drag-over');
    const files = e.dataTransfer.files;
    uploadFiles(files);
});

dom.fileInput.addEventListener('change', (e) => {
    uploadFiles(e.target.files);
});

async function uploadFiles(fileList) {
    if (!fileList || fileList.length === 0) return;

    for (const file of fileList) {
        try {
            showToast(`Uploading ${file.name}...`, 'info');
            await puter.fs.write(`${state.basePath}/files/${file.name}`, file);
            addActivity(`📁 ${state.user?.username} uploaded: ${file.name}`);
            showToast(`${file.name} uploaded! 📁`, 'success');
        } catch (e) {
            showToast(`Failed to upload ${file.name}`, 'error');
            console.error(e);
        }
    }

    loadFiles();
    dom.fileInput.value = '';
}

dom.btnRefreshFiles.addEventListener('click', loadFiles);

dom.btnNewFolder.addEventListener('click', async () => {
    const name = prompt('Folder name:');
    if (!name) return;
    try {
        await puter.fs.mkdir(`${state.basePath}/files/${name}`);
        showToast(`Folder "${name}" created! 📂`, 'success');
        loadFiles();
    } catch (e) {
        showToast('Failed to create folder.', 'error');
    }
});

async function loadFiles() {
    try {
        const items = await puter.fs.readdir(`${state.basePath}/files`);
        state.files = items || [];
        renderFiles();
        dom.statFiles.textContent = state.files.length;
    } catch (e) {
        state.files = [];
        renderFiles();
        console.error('Failed to load files:', e);
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
        return `
            <div class="file-card">
                <div class="file-icon">${icon}</div>
                <div class="file-name">${escapeHtml(f.name)}</div>
                <div class="file-size">${size}</div>
                <div class="file-actions">
                    ${!f.is_dir ? `<button class="file-action-btn" onclick="downloadFile('${escapeHtml(f.name)}')">⬇️</button>` : ''}
                    <button class="file-action-btn danger" onclick="deleteFile('${escapeHtml(f.name)}', ${f.is_dir})">🗑️</button>
                </div>
            </div>
        `;
    }).join('');
}

async function downloadFile(name) {
    try {
        const file = await puter.fs.read(`${state.basePath}/files/${name}`);
        const url = URL.createObjectURL(file);
        const a = document.createElement('a');
        a.href = url;
        a.download = name;
        a.click();
        URL.revokeObjectURL(url);
        showToast(`Downloading ${name}...`, 'info');
    } catch (e) {
        showToast('Failed to download file.', 'error');
        console.error(e);
    }
}

async function deleteFile(name, isDir) {
    if (!confirm(`Delete "${name}"?`)) return;
    try {
        await puter.fs.delete(`${state.basePath}/files/${name}`, { recursive: isDir });
        showToast(`"${name}" deleted.`, 'info');
        loadFiles();
    } catch (e) {
        showToast('Failed to delete.', 'error');
        console.error(e);
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
// AI ASSISTANT
// ========================================
dom.btnAiSend.addEventListener('click', sendAiMessage);

dom.aiInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendAiMessage();
    }
});

// Preset buttons
document.querySelectorAll('.preset-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        dom.aiInput.value = btn.dataset.prompt;
        sendAiMessage();
    });
});

async function sendAiMessage() {
    const message = dom.aiInput.value.trim();
    if (!message) return;

    // Add user message
    appendAiMessage(message, 'user');
    dom.aiInput.value = '';

    // Show loading
    dom.aiSendText.classList.add('hidden');
    dom.aiLoading.classList.remove('hidden');
    dom.btnAiSend.disabled = true;

    try {
        const response = await puter.ai.chat(message);
        const aiText = response?.message?.content || response?.toString() || 'Sorry, I could not generate a response.';
        appendAiMessage(aiText, 'ai');

        state.aiQueryCount++;
        dom.statAi.textContent = state.aiQueryCount;
        await puter.kv.set('photon_ai_count', state.aiQueryCount.toString());

        addActivity(`🤖 ${state.user?.username} used AI Assistant`);
    } catch (e) {
        appendAiMessage('Sorry, something went wrong. Please try again.', 'ai');
        showToast('AI request failed.', 'error');
        console.error(e);
    }

    // Hide loading
    dom.aiSendText.classList.remove('hidden');
    dom.aiLoading.classList.add('hidden');
    dom.btnAiSend.disabled = false;
}

function appendAiMessage(text, sender) {
    const div = document.createElement('div');
    div.className = `ai-message ${sender === 'user' ? 'user-message' : ''}`;

    const avatar = sender === 'user'
        ? (state.user?.username?.substring(0, 2).toUpperCase() || '??')
        : '🤖';

    const formattedText = sender === 'ai' ? formatAiText(text) : escapeHtml(text);

    div.innerHTML = `
        <div class="ai-avatar">${avatar}</div>
        <div class="ai-bubble">${formattedText}</div>
    `;

    dom.aiChat.appendChild(div);
    dom.aiChat.scrollTop = dom.aiChat.scrollHeight;
}

function formatAiText(text) {
    // Basic markdown-ish formatting
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
    // Default team display
    const defaultMembers = [
        { name: 'Member 1', role: 'Team Lead', status: 'Leading the charge ⚡' },
        { name: 'Member 2', role: 'Developer', status: 'Writing code 💻' },
        { name: 'Member 3', role: 'Artist', status: 'Creating assets 🎨' },
        { name: 'Member 4', role: 'Designer', status: 'Designing gameplay 🎮' },
        { name: 'Member 5', role: 'Sound', status: 'Making music 🎵' },
        { name: 'Member 6', role: 'Writer', status: 'Crafting stories ✍️' }
    ];

    // Merge saved members with defaults
    const displayMembers = defaultMembers.map((def, i) => {
        const saved = members[i];
        return saved || def;
    });

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

// Profile
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

        activities.unshift({
            message,
            timestamp: new Date().toISOString()
        });

        // Keep last 50
        activities = activities.slice(0, 50);
        await puter.kv.set('photon_activity', JSON.stringify(activities));
        renderActivity(activities);
    } catch (e) {
        console.error('Activity log error:', e);
    }
}

async function loadActivity() {
    try {
        const data = await puter.kv.get('photon_activity');
        const activities = data ? JSON.parse(data) : [];
        renderActivity(activities);
    } catch (e) {}
}

function renderActivity(activities) {
    if (activities.length === 0) {
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
// PARTICLES (Auth Screen Background)
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

    // Add keyframes
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