/* ========================================
   PHOTON CORE — Photon Studios Hub
   85+ AI Models | Real Streaming | Smart Memory
   ======================================== */

const AI_MODELS = {
    // OpenAI GPT-5 Series
    'gpt-5.2':{name:'GPT-5.2',provider:'OpenAI',logo:'🟢',badge:'Latest, Most Powerful',desc:'The most advanced OpenAI model. Best for everything.'},
    'gpt-5.2-chat':{name:'GPT-5.2 Chat',provider:'OpenAI',logo:'🟢',badge:'Chat Optimized',desc:'Optimized for conversations and chat.'},
    'gpt-5.1':{name:'GPT-5.1',provider:'OpenAI',logo:'🟢',badge:'Previous Gen',desc:'Powerful previous generation model.'},
    'gpt-5.1-chat-latest':{name:'GPT-5.1 Chat',provider:'OpenAI',logo:'🟢',badge:'Chat',desc:'Chat-optimized GPT-5.1.'},
    'gpt-5':{name:'GPT-5',provider:'OpenAI',logo:'🟢',badge:'Base',desc:'GPT-5 base model.'},
    'gpt-5-mini':{name:'GPT-5 Mini',provider:'OpenAI',logo:'🟢',badge:'Lightweight',desc:'Lighter GPT-5 for quick tasks.'},
    'gpt-5-nano':{name:'GPT-5 Nano',provider:'OpenAI',logo:'🟢',badge:'Ultra Light',desc:'Fastest GPT-5 variant.'},
    'gpt-5-chat-latest':{name:'GPT-5 Chat',provider:'OpenAI',logo:'🟢',badge:'Chat',desc:'GPT-5 chat optimized.'},
    // OpenAI GPT-4 Series
    'gpt-4.5-preview':{name:'GPT-4.5 Preview',provider:'OpenAI',logo:'🟢',badge:'Preview',desc:'GPT-4.5 preview model.'},
    'gpt-4.1':{name:'GPT-4.1',provider:'OpenAI',logo:'🟢',badge:'Stable',desc:'Stable GPT-4.1.'},
    'gpt-4.1-mini':{name:'GPT-4.1 Mini',provider:'OpenAI',logo:'🟢',badge:'Mini',desc:'Lightweight GPT-4.1.'},
    'gpt-4.1-nano':{name:'GPT-4.1 Nano',provider:'OpenAI',logo:'🟢',badge:'Nano',desc:'Ultra light GPT-4.1.'},
    'gpt-4o':{name:'GPT-4o',provider:'OpenAI',logo:'🟢',badge:'Fast & Smart',desc:'Fast multimodal model.'},
    'gpt-4o-mini':{name:'GPT-4o Mini',provider:'OpenAI',logo:'🟢',badge:'Mini',desc:'Lightweight GPT-4o.'},
    // OpenAI Reasoning
    'o4-mini':{name:'o4-Mini',provider:'OpenAI',logo:'🟢',badge:'Latest Reasoning',desc:'Latest reasoning model.'},
    'o3':{name:'o3',provider:'OpenAI',logo:'🟢',badge:'Advanced Reasoning',desc:'Advanced reasoning.'},
    'o3-mini':{name:'o3-Mini',provider:'OpenAI',logo:'🟢',badge:'Reasoning Light',desc:'Lighter reasoning model.'},
    'o1':{name:'o1',provider:'OpenAI',logo:'🟢',badge:'Reasoning',desc:'Original reasoning model.'},
    'o1-mini':{name:'o1-Mini',provider:'OpenAI',logo:'🟢',badge:'Reasoning Mini',desc:'Mini reasoning.'},
    'o1-pro':{name:'o1-Pro',provider:'OpenAI',logo:'🟢',badge:'Reasoning Pro',desc:'Pro reasoning model.'},
    // OpenAI Codex
    'openai/gpt-5.2-codex':{name:'GPT-5.2 Codex',provider:'OpenAI',logo:'🟢',badge:'Latest Code Gen',desc:'Best code generation model.'},
    'openai/gpt-5.1-codex':{name:'GPT-5.1 Codex',provider:'OpenAI',logo:'🟢',badge:'Code Gen',desc:'Code generation.'},
    'openai/gpt-5.1-codex-max':{name:'GPT-5.1 Codex Max',provider:'OpenAI',logo:'🟢',badge:'Code Max',desc:'Maximum code performance.'},
    'openai/gpt-5.1-codex-mini':{name:'GPT-5.1 Codex Mini',provider:'OpenAI',logo:'🟢',badge:'Code Mini',desc:'Fast code generation.'},
    'openai/gpt-5-codex':{name:'GPT-5 Codex',provider:'OpenAI',logo:'🟢',badge:'Code',desc:'GPT-5 code model.'},
    'openai/codex-mini':{name:'Codex Mini',provider:'OpenAI',logo:'🟢',badge:'Code Light',desc:'Lightweight code model.'},
    // OpenAI OSS
    'openrouter:openai/gpt-oss-120b':{name:'GPT-OSS 120B',provider:'OpenAI',logo:'🟢',badge:'Open Source 120B',desc:'Open source 120B model.'},
    'openrouter:openai/gpt-oss-20b':{name:'GPT-OSS 20B',provider:'OpenAI',logo:'🟢',badge:'Open Source 20B',desc:'Open source 20B model.'},
    // Anthropic Claude
    'claude-opus-4-6':{name:'Claude Opus 4.6',provider:'Anthropic',logo:'🟣',badge:'Most Capable',desc:'Most capable Claude model.'},
    'claude-opus-4-5':{name:'Claude Opus 4.5',provider:'Anthropic',logo:'🟣',badge:'Highly Capable',desc:'Advanced Claude model.'},
    'claude-opus-4-1':{name:'Claude Opus 4.1',provider:'Anthropic',logo:'🟣',badge:'Capable',desc:'Strong Claude model.'},
    'claude-opus-4':{name:'Claude Opus 4',provider:'Anthropic',logo:'🟣',badge:'Base Opus',desc:'Claude Opus base.'},
    'claude-sonnet-4-5':{name:'Claude Sonnet 4.5',provider:'Anthropic',logo:'🟣',badge:'Writing & Code',desc:'Great for writing and coding.'},
    'claude-sonnet-4':{name:'Claude Sonnet 4',provider:'Anthropic',logo:'🟣',badge:'Balanced',desc:'Balanced Claude model.'},
    'claude-haiku-4-5':{name:'Claude Haiku 4.5',provider:'Anthropic',logo:'🟣',badge:'Ultra Fast',desc:'Fastest Claude model.'},
    // Google Gemini
    'gemini-3-pro-preview':{name:'Gemini 3 Pro',provider:'Google',logo:'🔵',badge:'Latest Pro',desc:'Latest Google AI model.'},
    'gemini-3-flash-preview':{name:'Gemini 3 Flash',provider:'Google',logo:'🔵',badge:'Latest Flash',desc:'Fast latest Gemini.'},
    'gemini-2.5-pro':{name:'Gemini 2.5 Pro',provider:'Google',logo:'🔵',badge:'Pro Stable',desc:'Stable pro model.'},
    'gemini-2.5-pro-preview':{name:'Gemini 2.5 Pro Preview',provider:'Google',logo:'🔵',badge:'Pro Preview',desc:'Preview pro model.'},
    'gemini-2.5-flash':{name:'Gemini 2.5 Flash',provider:'Google',logo:'🔵',badge:'Flash',desc:'Fast Gemini.'},
    'gemini-2.5-flash-lite':{name:'Gemini 2.5 Flash Lite',provider:'Google',logo:'🔵',badge:'Lite',desc:'Ultra light Gemini.'},
    'gemini-2.0-flash':{name:'Gemini 2.0 Flash',provider:'Google',logo:'🔵',badge:'Stable Flash',desc:'Stable fast model.'},
    'gemini-2.0-flash-lite':{name:'Gemini 2.0 Flash Lite',provider:'Google',logo:'🔵',badge:'Lite',desc:'Lightweight Gemini.'},
    // xAI Grok
    'x-ai/grok-4-1-fast':{name:'Grok 4.1 Fast',provider:'xAI',logo:'⚫',badge:'Latest Fast',desc:'Latest Grok model.'},
    'x-ai/grok-4':{name:'Grok 4',provider:'xAI',logo:'⚫',badge:'Base',desc:'Grok 4 base.'},
    'x-ai/grok-4-fast':{name:'Grok 4 Fast',provider:'xAI',logo:'⚫',badge:'Fast',desc:'Fast Grok 4.'},
    'x-ai/grok-code-fast-1':{name:'Grok Code Fast',provider:'xAI',logo:'⚫',badge:'Code',desc:'Code specialized Grok.'},
    'x-ai/grok-3':{name:'Grok 3',provider:'xAI',logo:'⚫',badge:'V3',desc:'Grok 3.'},
    'x-ai/grok-3-fast':{name:'Grok 3 Fast',provider:'xAI',logo:'⚫',badge:'V3 Fast',desc:'Fast Grok 3.'},
    'x-ai/grok-3-mini':{name:'Grok 3 Mini',provider:'xAI',logo:'⚫',badge:'Mini',desc:'Mini Grok.'},
    'x-ai/grok-3-mini-fast':{name:'Grok 3 Mini Fast',provider:'xAI',logo:'⚫',badge:'Mini Fast',desc:'Fastest mini Grok.'},
    'x-ai/grok-2':{name:'Grok 2',provider:'xAI',logo:'⚫',badge:'V2',desc:'Grok 2.'},
    'x-ai/grok-2-vision':{name:'Grok 2 Vision',provider:'xAI',logo:'⚫',badge:'Vision',desc:'Vision capable Grok.'},
    // Meta LLaMA
    'meta-llama/llama-4-maverick':{name:'LLaMA 4 Maverick',provider:'Meta',logo:'🟠',badge:'Latest',desc:'Most powerful LLaMA.'},
    'meta-llama/llama-4-scout':{name:'LLaMA 4 Scout',provider:'Meta',logo:'🟠',badge:'Vision',desc:'Vision capable LLaMA.'},
    'meta-llama/llama-3.3-70b-instruct':{name:'LLaMA 3.3 70B',provider:'Meta',logo:'🟠',badge:'70B',desc:'Large LLaMA model.'},
    'meta-llama/llama-3.2-11b-vision-instruct':{name:'LLaMA 3.2 11B Vision',provider:'Meta',logo:'🟠',badge:'Vision',desc:'Vision LLaMA.'},
    'meta-llama/llama-3.2-3b-instruct':{name:'LLaMA 3.2 3B',provider:'Meta',logo:'🟠',badge:'Light',desc:'Lightweight LLaMA.'},
    'meta-llama/llama-3.1-405b-instruct':{name:'LLaMA 3.1 405B',provider:'Meta',logo:'🟠',badge:'Massive',desc:'Largest open model.'},
    'meta-llama/llama-3.1-70b-instruct':{name:'LLaMA 3.1 70B',provider:'Meta',logo:'🟠',badge:'Large',desc:'Large LLaMA.'},
    'meta-llama/llama-3.1-8b-instruct':{name:'LLaMA 3.1 8B',provider:'Meta',logo:'🟠',badge:'Fast',desc:'Fast lightweight LLaMA.'}
};

// Response parser per provider
function parseResponse(response, modelId) {
    if (!response) return 'No response received.';
    // Claude format
    if (modelId.startsWith('claude')) {
        return response?.message?.content?.[0]?.text || response?.message?.content || String(response);
    }
    // Grok/LLaMA format
    if (modelId.startsWith('x-ai/') || modelId.startsWith('meta-llama/')) {
        return response?.message?.content || String(response);
    }
    // OpenAI/Gemini — direct
    if (typeof response === 'string') return response;
    if (response?.message?.content) return response.message.content;
    return String(response);
}

const state = {
    user:null,discussions:[],files:[],aiQueryCount:0,currentFilter:'all',
    selectedModel:'gpt-5.2',memories:[],chatSessions:[],currentChatId:null,
    currentChatMessages:[],filesReady:false,attachedFile:null,
    attachedFileContent:null,attachedFileName:'',isTyping:false
};

const dom = {};
function initDom() {
    const ids = ['auth-screen','app','btn-sign-in','btn-sign-out','user-name','user-avatar',
    'welcome-name','page-title','mobile-menu-btn','stat-discussions','stat-files','stat-ai',
    'discussion-title','discussion-body','discussion-category','btn-post-discussion',
    'discussions-list','upload-zone','file-input','btn-browse','btn-new-folder',
    'btn-refresh-files','files-list','current-path','ai-chat','ai-input','btn-ai-send',
    'ai-send-text','ai-loading','ai-model-select','model-active-badge','model-info-text',
    'bot-logo','bot-name','bot-provider','bot-badge','typing-indicator','typing-user',
    'btn-new-chat','chat-history-list','memory-count','memory-list','btn-toggle-memory',
    'btn-clear-memory','btn-dismiss-tip','memory-tip-banner','btn-ai-attach','ai-file-input',
    'ai-attachment-preview','attachment-icon','attachment-name','attachment-size',
    'btn-remove-attachment','members-grid','profile-name','profile-role','profile-status',
    'btn-save-profile','recent-activity','toast-container'];
    ids.forEach(id => { dom[id.replace(/-([a-z])/g,(_,c)=>c.toUpperCase())] = document.getElementById(id); });
}

function showToast(msg,type='info'){
    const t=document.createElement('div');t.className=`toast ${type}`;
    t.innerHTML=`<span>${{success:'✅',error:'❌',info:'ℹ️'}[type]||'ℹ️'}</span><span>${msg}</span>`;
    dom.toastContainer.appendChild(t);
    setTimeout(()=>{t.style.animation='toastOut 0.3s ease forwards';setTimeout(()=>t.remove(),300)},3500);
}

// Auth
async function initAuth(){try{const u=await puter.auth.getUser();if(u)handleSignIn(u)}catch(e){}}

function handleSignIn(user){
    state.user=user;const n=user.username||'Member';
    dom.userName.textContent=n;dom.userAvatar.textContent=n.substring(0,2).toUpperCase();
    dom.welcomeName.textContent=n;dom.authScreen.classList.add('hidden');dom.app.classList.remove('hidden');
    showToast(`Welcome back, ${n}! ⚡`,'success');initAppData();
}

async function initAppData(){
    await ensureBaseFolder();loadDiscussions();loadFiles();loadStats();loadMembers();
    loadProfile();loadSavedModel();loadMemories();loadChatSessions();cleanOldChats();loadTipState();
}

async function ensureBaseFolder(){
    try{await puter.fs.mkdir('PhotonCore',{dedupeName:false})}catch(e){}
    try{await puter.fs.mkdir('PhotonCore/files',{dedupeName:false})}catch(e){}
    state.filesReady=true;
}

// Nav
const tabTitles={dashboard:'Dashboard',discussions:'Discussions',files:'File Storage',ai:'AI Assistant',members:'Members'};
document.addEventListener('DOMContentLoaded',()=>{
    initDom();createParticles();initAuth();

    dom.btnSignIn.addEventListener('click',async()=>{try{await puter.auth.signIn();handleSignIn(await puter.auth.getUser())}catch(e){showToast('Sign in failed.','error')}});
    dom.btnSignOut.addEventListener('click',async()=>{try{await puter.auth.signOut();state.user=null;dom.app.classList.add('hidden');dom.authScreen.classList.remove('hidden');showToast('Signed out.','info')}catch(e){}});

    document.querySelectorAll('.nav-item').forEach(i=>i.addEventListener('click',()=>switchTab(i.dataset.tab)));
    dom.mobileMenuBtn.addEventListener('click',()=>{document.querySelector('.sidebar').classList.toggle('open');let o=document.querySelector('.sidebar-overlay');if(!o){o=document.createElement('div');o.className='sidebar-overlay';o.addEventListener('click',closeMobileSidebar);document.body.appendChild(o)}o.classList.toggle('active')});

    // Model selector
    dom.aiModelSelect.addEventListener('change',()=>{state.selectedModel=dom.aiModelSelect.value;updateBotIdentity();puter.kv.set('photon_selected_model',state.selectedModel).catch(()=>{});showToast(`Switched to ${AI_MODELS[state.selectedModel]?.name} ✨`,'success')});

    // Memory
    dom.btnToggleMemory.addEventListener('click',()=>{dom.memoryList.classList.toggle('hidden');dom.btnToggleMemory.textContent=dom.memoryList.classList.contains('hidden')?'Show':'Hide'});
    dom.btnClearMemory.addEventListener('click',async()=>{if(!confirm('Clear ALL memories?'))return;state.memories=[];await saveMemories();renderMemories();showToast('Cleared.','info')});
    dom.btnDismissTip.addEventListener('click',()=>{dom.memoryTipBanner.classList.add('dismissed');puter.kv.set('photon_tip_dismissed','true').catch(()=>{})});

    // Chat
    dom.btnNewChat.addEventListener('click',createNewChat);
    dom.btnAiSend.addEventListener('click',sendAiMessage);
    dom.aiInput.addEventListener('keydown',(e)=>{if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();sendAiMessage()}});
    document.querySelectorAll('.preset-btn').forEach(b=>b.addEventListener('click',()=>{dom.aiInput.value=b.dataset.prompt;sendAiMessage()}));

    // File attach
    dom.btnAiAttach.addEventListener('click',()=>dom.aiFileInput.click());
    dom.aiFileInput.addEventListener('change',handleFileAttach);
    dom.btnRemoveAttachment.addEventListener('click',clearAttachment);

    // Discussions
    dom.btnPostDiscussion.addEventListener('click',postDiscussion);
    document.querySelectorAll('.filter-btn').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('.filter-btn').forEach(x=>x.classList.remove('active'));b.classList.add('active');state.currentFilter=b.dataset.filter;renderDiscussions()}));

    // Files
    dom.btnBrowse.addEventListener('click',()=>dom.fileInput.click());
    dom.uploadZone.addEventListener('click',(e)=>{if(e.target!==dom.btnBrowse)dom.fileInput.click()});
    dom.uploadZone.addEventListener('dragover',(e)=>{e.preventDefault();dom.uploadZone.classList.add('drag-over')});
    dom.uploadZone.addEventListener('dragleave',()=>dom.uploadZone.classList.remove('drag-over'));
    dom.uploadZone.addEventListener('drop',(e)=>{e.preventDefault();dom.uploadZone.classList.remove('drag-over');uploadFiles(e.dataTransfer.files)});
    dom.fileInput.addEventListener('change',(e)=>uploadFiles(e.target.files));
    dom.btnRefreshFiles.addEventListener('click',loadFiles);
    dom.btnNewFolder.addEventListener('click',async()=>{const n=prompt('Folder name:');if(!n?.trim())return;try{await puter.fs.mkdir(`PhotonCore/files/${n.trim()}`,{dedupeName:false});showToast(`Folder created!`,'success');loadFiles()}catch(e){showToast('Failed.','error')}});

    // Profile
    dom.btnSaveProfile.addEventListener('click',async()=>{const p={name:dom.profileName.value.trim()||state.user?.username,role:dom.profileRole.value,status:dom.profileStatus.value.trim()};try{await puter.kv.set('photon_profile_'+state.user?.username,JSON.stringify(p));showToast('Saved! ✅','success')}catch(e){showToast('Failed.','error')}});
});

function switchTab(tab){document.querySelectorAll('.nav-item').forEach(n=>n.classList.remove('active'));document.querySelector(`.nav-item[data-tab="${tab}"]`)?.classList.add('active');document.querySelectorAll('.tab-content').forEach(t=>t.classList.remove('active'));document.getElementById(`tab-${tab}`)?.classList.add('active');dom.pageTitle.textContent=tabTitles[tab]||'Photon Core';closeMobileSidebar()}
function closeMobileSidebar(){document.querySelector('.sidebar').classList.remove('open');document.querySelector('.sidebar-overlay')?.classList.remove('active')}

function updateBotIdentity(){const m=AI_MODELS[state.selectedModel];if(!m)return;dom.modelActiveBadge.textContent=m.name;dom.modelInfoText.textContent=m.desc;dom.botLogo.textContent=m.logo;dom.botName.textContent=m.name;dom.botProvider.textContent=`by ${m.provider}`;dom.botBadge.textContent=m.badge}
async function loadSavedModel(){try{const s=await puter.kv.get('photon_selected_model');if(s&&AI_MODELS[s]){state.selectedModel=s;dom.aiModelSelect.value=s}}catch(e){}updateBotIdentity()}

// Memory
async function loadMemories(){try{const d=await puter.kv.get('photon_memories');state.memories=d?JSON.parse(d):[]}catch(e){state.memories=[]}renderMemories()}
async function saveMemories(){await puter.kv.set('photon_memories',JSON.stringify(state.memories)).catch(()=>{})}

function shouldRemember(msg){
    const l=msg.toLowerCase();
    const kw=['remember','don\'t forget','keep in mind','note that','take note','important:','fyi','heads up','save this','memorize'];
    for(const k of kw)if(l.includes(k))return true;
    const patterns=[/our game is/i,/game name is/i,/project is called/i,/my name is/i,/i('m| am) the/i,/deadline is/i,/due (date|by)/i,/art style/i,/we('re| are) using/i,/engine is/i,/target (platform|audience)/i,/budget is/i,/we decided/i,/the plan is/i,/team (agreed|decided)/i,/from now on/i,/always use/i,/never use/i,/our (studio|company|team)/i,/genre is/i,/we('re| are) making/i,/release (date|window)/i,/main character/i,/story is about/i,/theme is/i];
    return patterns.some(p=>p.test(msg));
}

function extractMemoryContent(msg){
    const pats=[/remember\s+that\s+(.+)/i,/remember\s*:\s*(.+)/i,/remember\s+(.+)/i,/don't forget\s+(.+)/i,/note that\s+(.+)/i,/important:\s*(.+)/i,/fyi\s*:?\s*(.+)/i,/memorize\s*:?\s*(.+)/i];
    for(const p of pats){const m=msg.match(p);if(m)return m[1].trim()}
    return msg.trim();
}

async function addMemory(text,user){
    if(state.memories.some(m=>m.text.toLowerCase()===text.toLowerCase()))return;
    state.memories.push({id:Date.now().toString(),text,user,timestamp:new Date().toISOString()});
    if(state.memories.length>100)state.memories=state.memories.slice(-100);
    await saveMemories();renderMemories();showToast('🧠 Memory saved!','success');
}

async function deleteMemory(id){state.memories=state.memories.filter(m=>m.id!==id);await saveMemories();renderMemories();showToast('Removed.','info')}

function renderMemories(){
    dom.memoryCount.textContent=state.memories.length;
    if(!state.memories.length){dom.memoryList.innerHTML='<div class="empty-state small"><p>No memories yet.</p></div>';return}
    dom.memoryList.innerHTML=state.memories.map(m=>`<div class="memory-item"><span class="memory-item-text">🧠 ${esc(m.text)}</span><span class="memory-item-user">${esc(m.user)}</span><button class="memory-item-delete" onclick="deleteMemory('${m.id}')">🗑️</button></div>`).join('');
}

function getMemoryContext(){
    if(!state.memories.length)return'';
    return'\n\nIMPORTANT MEMORIES from the team:\n'+state.memories.map(m=>`- ${m.text} (by ${m.user})`).join('\n')+'\n\nAlways reference these memories when relevant.\n';
}

function loadTipState(){puter.kv.get('photon_tip_dismissed').then(v=>{if(v==='true')dom.memoryTipBanner.classList.add('dismissed')}).catch(()=>{})}

// File Attachment
async function handleFileAttach(e){
    const file=e.target.files[0];if(!file)return;
    state.attachedFile=file;state.attachedFileName=file.name;
    try{
        if(file.type.startsWith('text/')||file.name.match(/\.(js|ts|py|cs|cpp|html|css|json|xml|md|txt|csv|yaml|yml|log|sh|bat|ini|cfg|gd|gdscript)$/i))
            state.attachedFileContent=await file.text();
        else state.attachedFileContent=`[File: ${file.name}, Size: ${fmtSize(file.size)}, Type: ${file.type||'unknown'}]`;
    }catch(err){state.attachedFileContent=`[File: ${file.name}]`}
    dom.attachmentIcon.textContent=fileIcon(file.name,false);dom.attachmentName.textContent=file.name;
    dom.attachmentSize.textContent=fmtSize(file.size);dom.aiAttachmentPreview.classList.remove('hidden');
    dom.aiFileInput.value='';showToast(`📎 ${file.name} attached`,'info');
}

function clearAttachment(){state.attachedFile=null;state.attachedFileContent=null;state.attachedFileName='';dom.aiAttachmentPreview.classList.add('hidden')}

async function saveFileToCloud(file,name){
    if(!state.filesReady)await ensureBaseFolder();
    try{const blob=new Blob([await file.arrayBuffer()],{type:file.type});await puter.fs.write(`PhotonCore/files/${name}`,blob,{dedupeName:false,overwrite:true});showToast(`☁️ ${name} saved to cloud!`,'success');addActivity(`☁️ File saved: ${name}`);loadFiles()}catch(e){showToast('Cloud save failed.','error');console.error(e)}
}

// Chat Sessions
async function loadChatSessions(){try{const d=await puter.kv.get('photon_chat_sessions');state.chatSessions=d?JSON.parse(d):[];renderChatHistory();state.chatSessions.length?loadChat(state.chatSessions[0].id):createNewChat()}catch(e){state.chatSessions=[];createNewChat()}}
async function saveChatSessions(){await puter.kv.set('photon_chat_sessions',JSON.stringify(state.chatSessions)).catch(()=>{})}

function createNewChat(){const id=Date.now().toString();state.chatSessions.unshift({id,title:'New Chat',model:state.selectedModel,messages:[],createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()});state.currentChatId=id;state.currentChatMessages=[];saveChatSessions();renderChatHistory();clearChatUI();showToast('New chat! 💬','success')}

function loadChat(chatId){const c=state.chatSessions.find(x=>x.id===chatId);if(!c)return;state.currentChatId=chatId;state.currentChatMessages=c.messages||[];clearChatUI();c.messages.forEach(m=>appendStatic(m.text,m.sender,m.modelName,m.author,m.memorySaved,m.fileName));renderChatHistory()}

async function saveCurrentChat(){const c=state.chatSessions.find(x=>x.id===state.currentChatId);if(!c)return;c.messages=state.currentChatMessages;c.updatedAt=new Date().toISOString();c.model=state.selectedModel;if(c.title==='New Chat'){const f=state.currentChatMessages.find(m=>m.sender==='user');if(f)c.title=f.text.substring(0,50)+(f.text.length>50?'...':'')}await saveChatSessions();renderChatHistory()}

async function deleteChat(chatId){if(!confirm('Delete?'))return;state.chatSessions=state.chatSessions.filter(c=>c.id!==chatId);await saveChatSessions();state.currentChatId===chatId?(state.chatSessions.length?loadChat(state.chatSessions[0].id):createNewChat()):renderChatHistory();showToast('Deleted.','info')}

function cleanOldChats(){const cut=new Date();cut.setDate(cut.getDate()-30);const b=state.chatSessions.length;state.chatSessions=state.chatSessions.filter(c=>new Date(c.createdAt)>cut);const r=b-state.chatSessions.length;if(r>0){saveChatSessions();renderChatHistory();showToast(`🗑️ ${r} old chat(s) removed.`,'info')}}

function renderChatHistory(){
    if(!state.chatSessions.length){dom.chatHistoryList.innerHTML='<div class="empty-state small"><p>No chats</p></div>';return}
    dom.chatHistoryList.innerHTML=state.chatSessions.map(c=>{const a=c.id===state.currentChatId;const m=AI_MODELS[c.model]?.name||c.model;return`<div class="chat-history-item ${a?'active':''}" onclick="loadChat('${c.id}')"><div class="chat-history-item-title">${esc(c.title)}</div><div class="chat-history-item-meta"><span class="chat-history-item-date">${fmtDate(c.updatedAt)}</span><span class="chat-history-item-model">${m}</span><button class="chat-history-item-delete" onclick="event.stopPropagation();deleteChat('${c.id}')">🗑️</button></div></div>`}).join('');
}

function clearChatUI(){dom.aiChat.innerHTML=`<div class="ai-message ai-welcome"><div class="ai-avatar">🤖</div><div class="ai-bubble"><p>Hey Photon Studios! 👋 Group chat — everyone can see.</p><p>📎 Attach files | 🧠 Auto-memory | ⚡ 85+ AI models</p></div></div>`}

// AI Send with REAL STREAMING
async function sendAiMessage(){
    const msg=dom.aiInput.value.trim();if(!msg&&!state.attachedFile)return;if(state.isTyping)return;
    const modelId=state.selectedModel,modelData=AI_MODELS[modelId],modelName=modelData?.name||modelId,username=state.user?.username||'Anon';
    let memorySaved=false;
    if(msg&&shouldRemember(msg)){await addMemory(extractMemoryContent(msg),username);memorySaved=true}

    let displayMsg=msg,fileCtx='',fileName='';
    if(state.attachedFile){
        fileName=state.attachedFileName;displayMsg=msg||`Analyze: ${fileName}`;
        if(state.attachedFileContent&&state.attachedFileContent.length<50000)fileCtx=`\n\n--- FILE: ${fileName} ---\n${state.attachedFileContent}\n--- END ---\n`;
        else fileCtx=`\n\n[Attached: ${fileName}, ${fmtSize(state.attachedFile.size)}]`;
        const l=msg.toLowerCase();
        if(l.includes('save to cloud')||l.includes('store this')||l.includes('upload this')||l.includes('save this file'))
            await saveFileToCloud(state.attachedFile,fileName);
    }

    state.currentChatMessages.push({text:displayMsg,sender:'user',author:username,modelName:'',memorySaved,fileName,timestamp:new Date().toISOString()});
    appendStatic(displayMsg,'user','',username,memorySaved,fileName);
    dom.aiInput.value='';const savedFileCtx=fileCtx;clearAttachment();

    state.isTyping=true;dom.typingIndicator.classList.remove('hidden');dom.typingUser.textContent=modelName;
    dom.aiSendText.classList.add('hidden');dom.aiLoading.classList.remove('hidden');dom.btnAiSend.disabled=true;

    try{
        const memCtx=getMemoryContext();
        const sysPr=`You are a helpful AI assistant for Photon Studios, an indie game dev team of 6. Be friendly and creative. Group chat — all members see this.${memCtx}\nIf a file is attached, analyze it thoroughly. If asked to save to cloud, confirm it's saved.`;
        const hist=state.currentChatMessages.filter(m=>m.sender==='user'||m.sender==='ai').slice(-10).map(m=>({role:m.sender==='user'?'user':'assistant',content:m.sender==='user'?`[${m.author}]: ${m.text}`:m.text}));
        hist[hist.length-1]={role:'user',content:`[${username}]: ${displayMsg}${savedFileCtx}`};
        const messages=[{role:'system',content:sysPr},...hist];

        // REAL STREAMING
        const response=await puter.ai.chat(messages,{model:modelId,stream:true});
        let fullText='';
        const{div,target,cursor}=createStreamingBubble(modelName);

        for await(const part of response){
            const chunk=part?.text||'';
            if(chunk){fullText+=chunk;const tn=document.createTextNode(chunk);target.insertBefore(tn,cursor);dom.aiChat.scrollTop=dom.aiChat.scrollHeight}
        }

        cursor.remove();
        target.innerHTML=formatAi(fullText);
        const tag=document.createElement('span');tag.className='ai-model-tag';tag.textContent=`${modelData?.logo||'⚡'} ${modelName}`;
        div.querySelector('.ai-bubble').appendChild(tag);
        dom.aiChat.scrollTop=dom.aiChat.scrollHeight;

        state.currentChatMessages.push({text:fullText,sender:'ai',author:modelName,modelName,timestamp:new Date().toISOString()});
        state.aiQueryCount++;dom.statAi.textContent=state.aiQueryCount;
        await puter.kv.set('photon_ai_count',state.aiQueryCount.toString());
        addActivity(`🤖 ${username} → ${modelName}`);await saveCurrentChat();

    }catch(e){
        console.error('AI Error:',e);
        // Fallback: try non-streaming
        try{
            const memCtx=getMemoryContext();
            const sysPr=`You are a helpful AI for Photon Studios game dev team.${memCtx}`;
            const hist=state.currentChatMessages.filter(m=>m.sender==='user'||m.sender==='ai').slice(-10).map(m=>({role:m.sender==='user'?'user':'assistant',content:m.sender==='user'?`[${m.author}]: ${m.text}`:m.text}));
            hist[hist.length-1]={role:'user',content:`[${username}]: ${displayMsg}${savedFileCtx}`};
            const messages=[{role:'system',content:sysPr},...hist];
            const resp=await puter.ai.chat(messages,{model:modelId});
            const text=parseResponse(resp,modelId);
            appendStatic(text,'ai',modelName,modelName);
            state.currentChatMessages.push({text,sender:'ai',author:modelName,modelName,timestamp:new Date().toISOString()});
            state.aiQueryCount++;dom.statAi.textContent=state.aiQueryCount;
            await puter.kv.set('photon_ai_count',state.aiQueryCount.toString());
            await saveCurrentChat();
        }catch(e2){
            appendStatic(`Sorry, ${modelName} failed. Try another model!`,'ai',modelName,modelName);
            showToast(`${modelName} failed.`,'error');console.error(e2);
        }
    }

    state.isTyping=false;dom.typingIndicator.classList.add('hidden');
    dom.aiSendText.classList.remove('hidden');dom.aiLoading.classList.add('hidden');dom.btnAiSend.disabled=false;
}

function createStreamingBubble(modelName){
    const div=document.createElement('div');div.className='ai-message';
    const md=AI_MODELS[state.selectedModel];
    div.innerHTML=`<div class="ai-avatar">${md?.logo||'🤖'}</div><div class="ai-bubble"><div class="ai-message-author">${esc(modelName)}</div><p class="typewriter-target"></p></div>`;
    dom.aiChat.appendChild(div);
    const target=div.querySelector('.typewriter-target');
    const cursor=document.createElement('span');cursor.className='typewriter-cursor';target.appendChild(cursor);
    dom.aiChat.scrollTop=dom.aiChat.scrollHeight;
    return{div,target,cursor};
}

function appendStatic(text,sender,modelName='',author='',memorySaved=false,fileName=''){
    const div=document.createElement('div');div.className=`ai-message ${sender==='user'?'user-message':''}`;
    const md=sender==='ai'?AI_MODELS[state.selectedModel]:null;
    const av=sender==='user'?(author||'??').substring(0,2).toUpperCase():(md?.logo||'🤖');
    const fmt=sender==='ai'?formatAi(text):esc(text);
    const mt=sender==='ai'&&modelName?`<span class="ai-model-tag">${md?.logo||'⚡'} ${modelName}</span>`:'';
    const at=author?`<div class="ai-message-author">${sender==='user'?'👤 ':''}${esc(author)}</div>`:'';
    const mem=memorySaved?'<span class="memory-saved-indicator">🧠 Memory saved</span>':'';
    const ft=fileName?`<div class="ai-file-bubble"><span>${fileIcon(fileName,false)}</span><span>${esc(fileName)}</span></div>`:'';
    div.innerHTML=`<div class="ai-avatar">${av}</div><div class="ai-bubble">${at}${ft}${fmt}${mt}${mem}</div>`;
    dom.aiChat.appendChild(div);dom.aiChat.scrollTop=dom.aiChat.scrollHeight;
}

function formatAi(t){let f=esc(t);f=f.replace(/\*\*(.*?)\*\*/g,'<strong>$1</strong>');f=f.replace(/\*(.*?)\*/g,'<em>$1</em>');f=f.replace(/`(.*?)`/g,'<code style="background:rgba(108,92,231,0.2);padding:2px 6px;border-radius:4px;font-family:var(--font-mono);font-size:0.85em">$1</code>');f=f.replace(/\n/g,'<br>');return`<p>${f}</p>`}

// Discussions
async function postDiscussion(){const t=dom.discussionTitle.value.trim(),b=dom.discussionBody.value.trim();if(!t||!b){showToast('Fill both fields.','error');return}const d={id:Date.now().toString(),title:t,body:b,category:dom.discussionCategory.value,author:state.user?.username||'Anon',timestamp:new Date().toISOString(),likes:0};try{let l=[];try{const x=await puter.kv.get('photon_discussions');if(x)l=JSON.parse(x)}catch(e){}l.unshift(d);await puter.kv.set('photon_discussions',JSON.stringify(l));addActivity(`💬 ${d.author}: "${t}"`);dom.discussionTitle.value='';dom.discussionBody.value='';showToast('Posted!','success');loadDiscussions()}catch(e){showToast('Failed.','error')}}
async function loadDiscussions(){try{const d=await puter.kv.get('photon_discussions');state.discussions=d?JSON.parse(d):[];renderDiscussions();dom.statDiscussions.textContent=state.discussions.length}catch(e){}}
function renderDiscussions(){const f=state.currentFilter==='all'?state.discussions:state.discussions.filter(d=>d.category===state.currentFilter);if(!f.length){dom.discussionsList.innerHTML='<div class="empty-state"><span class="empty-icon">💬</span><p>No discussions.</p></div>';return}const lb={general:'💭 General','game-design':'🎮 Game Design',art:'🎨 Art',code:'💻 Code',marketing:'📢 Marketing',bugs:'🐛 Bugs'};dom.discussionsList.innerHTML=f.map(d=>`<div class="discussion-post"><div class="discussion-post-header"><div class="discussion-author-avatar">${(d.author||'?').substring(0,2).toUpperCase()}</div><div class="discussion-meta"><span class="discussion-author">${esc(d.author)}</span><span class="discussion-date">${fmtDate(d.timestamp)}</span></div><span class="discussion-category-tag">${lb[d.category]||d.category}</span></div><div class="discussion-title">${esc(d.title)}</div><div class="discussion-body">${esc(d.body)}</div><div class="discussion-actions"><button class="discussion-action-btn" onclick="likeDiscussion('${d.id}')">❤️ ${d.likes||0}</button><button class="discussion-action-btn" onclick="deleteDiscussion('${d.id}')">🗑️ Delete</button></div></div>`).join('')}
async function likeDiscussion(id){const d=state.discussions.find(x=>x.id===id);if(d){d.likes=(d.likes||0)+1;await puter.kv.set('photon_discussions',JSON.stringify(state.discussions));renderDiscussions()}}
async function deleteDiscussion(id){if(!confirm('Delete?'))return;state.discussions=state.discussions.filter(x=>x.id!==id);await puter.kv.set('photon_discussions',JSON.stringify(state.discussions));showToast('Deleted.','info');renderDiscussions();dom.statDiscussions.textContent=state.discussions.length}

// Files
async function uploadFiles(fl){if(!fl?.length)return;if(!state.filesReady)await ensureBaseFolder();for(const f of fl){try{showToast(`Uploading ${f.name}...`,'info');const blob=new Blob([await f.arrayBuffer()],{type:f.type});await puter.fs.write(`PhotonCore/files/${f.name}`,blob,{dedupeName:false,overwrite:true});addActivity(`📁 ${state.user?.username}: ${f.name}`);showToast(`${f.name} uploaded!`,'success')}catch(e){showToast(`Failed: ${f.name}`,'error');console.error(e)}}loadFiles();dom.fileInput.value=''}
async function loadFiles(){try{const i=await puter.fs.readdir('PhotonCore/files');state.files=i||[];renderFiles();dom.statFiles.textContent=state.files.length}catch(e){state.files=[];renderFiles();dom.statFiles.textContent=0}}
function renderFiles(){if(!state.files.length){dom.filesList.innerHTML='<div class="empty-state" style="grid-column:1/-1"><span class="empty-icon">📂</span><p>No files.</p></div>';return}dom.filesList.innerHTML=state.files.map(f=>{const ic=fileIcon(f.name,f.is_dir),sz=f.is_dir?'Folder':fmtSize(f.size),s=esc(f.name).replace(/'/g,"\\'");return`<div class="file-card"><div class="file-icon">${ic}</div><div class="file-name">${esc(f.name)}</div><div class="file-size">${sz}</div><div class="file-actions">${!f.is_dir?`<button class="file-action-btn" onclick="downloadFile('${s}')">⬇️</button>`:''}<button class="file-action-btn danger" onclick="deleteFile('${s}',${f.is_dir})">🗑️</button></div></div>`}).join('')}
async function downloadFile(n){try{const b=await puter.fs.read(`PhotonCore/files/${n}`);const u=URL.createObjectURL(b);const a=document.createElement('a');a.href=u;a.download=n;document.body.appendChild(a);a.click();document.body.removeChild(a);URL.revokeObjectURL(u)}catch(e){showToast('Failed.','error')}}
async function deleteFile(n,d){if(!confirm(`Delete "${n}"?`))return;try{await puter.fs.delete(`PhotonCore/files/${n}`,{recursive:d});showToast('Deleted.','info');loadFiles()}catch(e){showToast('Failed.','error')}}
function fileIcon(n,d){if(d)return'📁';const e=n.split('.').pop().toLowerCase();return{png:'🖼️',jpg:'🖼️',jpeg:'🖼️',gif:'🖼️',svg:'🖼️',webp:'🖼️',mp3:'🎵',wav:'🎵',ogg:'🎵',mp4:'🎬',avi:'🎬',mov:'🎬',webm:'🎬',pdf:'📄',doc:'📝',docx:'📝',txt:'📝',zip:'📦',rar:'📦','7z':'📦',js:'💻',ts:'💻',py:'💻',cs:'💻',cpp:'💻',html:'🌐',css:'🎨',json:'⚙️',xml:'⚙️',psd:'🎨',blend:'🎨',unity:'🎮',godot:'🎮',gd:'🎮'}[e]||'📄'}

// Members
async function loadMembers(){try{const d=await puter.kv.get('photon_members');renderMembers(d?JSON.parse(d):[])}catch(e){renderMembers([])}}
function renderMembers(members){const defs=[{name:'Member 1',role:'Team Lead',status:'⚡'},{name:'Member 2',role:'Developer',status:'💻'},{name:'Member 3',role:'Artist',status:'🎨'},{name:'Member 4',role:'Designer',status:'🎮'},{name:'Member 5',role:'Sound',status:'🎵'},{name:'Member 6',role:'Writer',status:'✍️'}];dom.membersGrid.innerHTML=defs.map((d,i)=>{const m=members[i]||d;return`<div class="member-card"><div class="member-avatar">${(m.name||'?').substring(0,2).toUpperCase()}</div><div class="member-info"><span class="member-name">${esc(m.name)}</span><span class="member-role-badge">${esc(m.role)}</span><span class="member-status">${esc(m.status||'')}</span></div></div>`}).join('')}
async function loadProfile(){try{const d=await puter.kv.get('photon_profile_'+state.user?.username);if(d){const p=JSON.parse(d);dom.profileName.value=p.name||'';dom.profileRole.value=p.role||'Developer';dom.profileStatus.value=p.status||''}else dom.profileName.value=state.user?.username||''}catch(e){}}

// Stats & Activity
async function loadStats(){try{const c=await puter.kv.get('photon_ai_count');state.aiQueryCount=c?parseInt(c):0;dom.statAi.textContent=state.aiQueryCount}catch(e){}}
async function addActivity(msg){try{let l=[];const d=await puter.kv.get('photon_activity');if(d)l=JSON.parse(d);l.unshift({message:msg,timestamp:new Date().toISOString()});l=l.slice(0,50);await puter.kv.set('photon_activity',JSON.stringify(l));renderActivity(l)}catch(e){}}
function renderActivity(l){if(!l?.length){dom.recentActivity.innerHTML='<p class="empty-state">No activity.</p>';return}dom.recentActivity.innerHTML=l.slice(0,10).map(a=>`<div class="activity-item"><span>${esc(a.message)}</span><span class="activity-time">${fmtDate(a.timestamp)}</span></div>`).join('')}

// Utils
function esc(t){const d=document.createElement('div');d.textContent=t||'';return d.innerHTML}
function fmtDate(iso){const d=new Date(iso),n=new Date(),ms=n-d,min=Math.floor(ms/60000),hr=Math.floor(ms/3600000),day=Math.floor(ms/86400000);if(min<1)return'Now';if(min<60)return`${min}m`;if(hr<24)return`${hr}h`;if(day<7)return`${day}d`;return d.toLocaleDateString()}
function fmtSize(b){if(!b)return'0 B';const s=['B','KB','MB','GB'];const i=Math.floor(Math.log(b)/Math.log(1024));return(b/Math.pow(1024,i)).toFixed(1)+' '+s[i]}

// Particles
function createParticles(){const c=document.getElementById('particles');if(!c)return;for(let i=0;i<30;i++){const p=document.createElement('div');p.style.cssText=`position:absolute;width:${Math.random()*4+1}px;height:${Math.random()*4+1}px;background:rgba(108,92,231,${Math.random()*0.5+0.1});border-radius:50%;top:${Math.random()*100}%;left:${Math.random()*100}%;animation:pf ${Math.random()*10+5}s ease-in-out infinite ${Math.random()*5}s`;c.appendChild(p)}const s=document.createElement('style');s.textContent=`@keyframes pf{0%,100%{transform:translate(0,0);opacity:.5}50%{transform:translate(${Math.random()*60-30}px,${Math.random()*60-30}px);opacity:.3}}`;document.head.appendChild(s)}