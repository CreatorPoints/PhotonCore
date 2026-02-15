/* ========================================
   PHOTON CORE — auth.js
   Puter Authentication
   ======================================== */

async function initAuth() {
    try {
        const u = await puter.auth.getUser();
        if (u) handleSignIn(u);
    } catch (e) {}
}

function handleSignIn(user) {
    state.user = user;
    const n = user.username || 'Member';
    if (dom.userName) dom.userName.textContent = n;
    if (dom.userAvatar) dom.userAvatar.textContent = n.substring(0, 2).toUpperCase();
    if (dom.welcomeName) dom.welcomeName.textContent = n;
    if (dom.authScreen) dom.authScreen.classList.add('hidden');
    if (dom.app) dom.app.classList.remove('hidden');
    showToast('Welcome, ' + n + '! ⚡', 'success');
    initAppData();
}

async function initAppData() {
    await ensureBaseFolder();
    loadSavedModel();
    setupPresence();
    listenDiscussions();
    listenMemories();
    listenActivity();
    listenChatSessions();
    loadFiles();
    loadProfile();
    setupPresenceListener();
    loadTipState();
}

async function ensureBaseFolder() {
    try { await puter.fs.mkdir('PhotonCore', { dedupeName: false }); } catch (e) {}
    try { await puter.fs.mkdir('PhotonCore/files', { dedupeName: false }); } catch (e) {}
    state.filesReady = true;
}