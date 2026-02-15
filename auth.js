/* ========================================
   PHOTON CORE — auth.js
   Puter Authentication + Page Redirect
   ======================================== */

// Detect which page we're on
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
const isAuthPage = (currentPage === 'index.html' || currentPage === '');
const appPages = ['dashboard.html', 'discussions.html', 'files.html', 'ai.html', 'members.html'];
const isAppPage = appPages.includes(currentPage);

async function initAuth() {
    try {
        const u = await puter.auth.getUser();
        if (u) {
            handleSignIn(u);
        } else {
            // Not logged in — if on an app page, kick back to login
            if (isAppPage) {
                window.location.href = 'index.html';
            }
        }
    } catch (e) {
        // Auth check failed — if on app page, go to login
        if (isAppPage) {
            window.location.href = 'index.html';
        }
    }
}

function handleSignIn(user) {
    state.user = user;
    const n = user.username || 'Member';

    // If we're on the AUTH page → redirect to dashboard
    if (isAuthPage) {
        // Store a flag so dashboard knows to show welcome toast
        sessionStorage.setItem('photon_just_signed_in', n);
        window.location.href = 'dashboard.html';
        return; // Stop here — page is redirecting
    }

    // If we're already on an app page → just populate UI
    if (dom.userName) dom.userName.textContent = n;
    if (dom.userAvatar) dom.userAvatar.textContent = n.substring(0, 2).toUpperCase();
    if (dom.welcomeName) dom.welcomeName.textContent = n;
    if (dom.app) dom.app.classList.remove('hidden');

    // Show welcome toast if just redirected from login
    const justSignedIn = sessionStorage.getItem('photon_just_signed_in');
    if (justSignedIn) {
        showToast('Welcome, ' + justSignedIn + '! ⚡', 'success');
        sessionStorage.removeItem('photon_just_signed_in');
    }

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