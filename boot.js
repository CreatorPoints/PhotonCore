/* ========================================
   PHOTON CORE — boot.js
   Initialization & Event Listeners
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {
    initDom();
    createParticles();
    initAuth();

    // Sign In
    if (dom.btnSignIn) {
        dom.btnSignIn.addEventListener('click', async () => {
            try {
                await puter.auth.signIn();
                const u = await puter.auth.getUser();
                if (u) handleSignIn(u);
            } catch (e) {
                showToast('Failed.', 'error');
            }
        });
    }

    // Sign Out — redirect to index.html
    if (dom.btnSignOut) {
        dom.btnSignOut.addEventListener('click', async () => {
            const uid = state.user?.username;
            if (uid) {
                rtdb.ref('presence/' + uid).set({
                    online: false,
                    lastSeen: firebase.database.ServerValue.TIMESTAMP
                });
            }
            try { await puter.auth.signOut(); } catch (e) {}
            state.user = null;
            window.location.href = 'index.html';
        });
    }

    // Sidebar Navigation — supports both <a> links and <button> tabs
    document.querySelectorAll('.nav-item').forEach(i => {
        i.addEventListener('click', (e) => {
            // If it's an <a> tag linking to another page, let browser navigate
            if (i.tagName === 'A' && i.getAttribute('href')) return;
            // Otherwise handle as tab switch (backward compat)
            e.preventDefault();
            switchTab(i.dataset.tab);
        });
    });

    // Mobile Menu
    if (dom.mobileMenuBtn) {
        dom.mobileMenuBtn.addEventListener('click', () => {
            document.querySelector('.sidebar')?.classList.toggle('open');
            let o = document.querySelector('.sidebar-overlay');
            if (!o) {
                o = document.createElement('div');
                o.className = 'sidebar-overlay';
                o.addEventListener('click', closeMobileSidebar);
                document.body.appendChild(o);
            }
            o.classList.toggle('active');
        });
    }

    // AI Model Selector
    if (dom.aiModelSelect) {
        dom.aiModelSelect.addEventListener('change', () => {
            state.selectedModel = dom.aiModelSelect.value;
            updateBotIdentity();
            puter.kv.set('photon_selected_model', state.selectedModel).catch(() => {});
            showToast('Switched to ' + AI_MODELS[state.selectedModel]?.name + ' ✨', 'success');
        });
    }

    // Memory Toggle
    if (dom.btnToggleMemory) {
        dom.btnToggleMemory.addEventListener('click', () => {
            if (dom.memoryList) {
                dom.memoryList.classList.toggle('hidden');
                dom.btnToggleMemory.textContent = dom.memoryList.classList.contains('hidden') ? 'Show' : 'Hide';
            }
        });
    }

    // Memory Clear
    if (dom.btnClearMemory) {
        dom.btnClearMemory.addEventListener('click', async () => {
            if (!confirm('Clear ALL?')) return;
            const snap = await db.collection('memories').get();
            const batch = db.batch();
            snap.forEach(doc => batch.delete(doc.ref));
            await batch.commit();
            showToast('Cleared.', 'info');
        });
    }

    // Tip Dismiss
    if (dom.btnDismissTip) {
        dom.btnDismissTip.addEventListener('click', () => {
            if (dom.memoryTipBanner) dom.memoryTipBanner.classList.add('dismissed');
            puter.kv.set('photon_tip_dismissed', 'true').catch(() => {});
        });
    }

    // New Chat
    if (dom.btnNewChat) dom.btnNewChat.addEventListener('click', createNewChat);

    // AI Send
    if (dom.btnAiSend) dom.btnAiSend.addEventListener('click', sendAiMessage);

    // AI Input Enter Key
    if (dom.aiInput) {
        dom.aiInput.addEventListener('keydown', e => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                sendAiMessage();
            }
        });
    }

    // AI Presets
    document.querySelectorAll('.preset-btn').forEach(b => {
        b.addEventListener('click', () => {
            if (dom.aiInput) {
                dom.aiInput.value = b.dataset.prompt;
                sendAiMessage();
            }
        });
    });

    // AI File Attach
    if (dom.btnAiAttach) dom.btnAiAttach.addEventListener('click', () => dom.aiFileInput?.click());
    if (dom.aiFileInput) dom.aiFileInput.addEventListener('change', handleFileAttach);
    if (dom.btnRemoveAttachment) dom.btnRemoveAttachment.addEventListener('click', clearAttachment);

    // Post Discussion
    if (dom.btnPostDiscussion) dom.btnPostDiscussion.addEventListener('click', postDiscussion);

    // Discussion Filters
    document.querySelectorAll('.filter-btn').forEach(b => {
        b.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(x => x.classList.remove('active'));
            b.classList.add('active');
            state.currentFilter = b.dataset.filter;
            renderDiscussions();
        });
    });

    // File Browse Button
    if (dom.btnBrowse) dom.btnBrowse.addEventListener('click', () => dom.fileInput?.click());

    // Upload Zone
    if (dom.uploadZone) {
        dom.uploadZone.addEventListener('click', e => {
            if (e.target !== dom.btnBrowse) dom.fileInput?.click();
        });
        dom.uploadZone.addEventListener('dragover', e => {
            e.preventDefault();
            dom.uploadZone.classList.add('drag-over');
        });
        dom.uploadZone.addEventListener('dragleave', () => dom.uploadZone.classList.remove('drag-over'));
        dom.uploadZone.addEventListener('drop', e => {
            e.preventDefault();
            dom.uploadZone.classList.remove('drag-over');
            uploadFiles(e.dataTransfer.files);
        });
    }

    // File Input Change
    if (dom.fileInput) dom.fileInput.addEventListener('change', e => uploadFiles(e.target.files));

    // Refresh Files
    if (dom.btnRefreshFiles) dom.btnRefreshFiles.addEventListener('click', loadFiles);

    // New Folder
    if (dom.btnNewFolder) {
        dom.btnNewFolder.addEventListener('click', async () => {
            const n = prompt('Folder name:');
            if (!n?.trim()) return;
            try {
                await puter.fs.mkdir('PhotonCore/files/' + n.trim(), { dedupeName: false });
                showToast('Created!', 'success');
                loadFiles();
            } catch (e) {
                showToast('Failed.', 'error');
            }
        });
    }

    // Save Profile
    if (dom.btnSaveProfile) dom.btnSaveProfile.addEventListener('click', saveProfile);
});