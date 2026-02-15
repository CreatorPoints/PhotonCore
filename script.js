/* ========================================
   PHOTON CORE — Firebase + Puter.js
   Shared real-time | 85+ AI Models | File Tools
   ======================================== */

// Firebase Config
const firebaseConfig = {
    apiKey: "AIzaSyCUNuQNPgQ8P8PPTworUPZ1NFcTAUd2ueU",
    authDomain: "photon-core.firebaseapp.com",
    databaseURL: "https://photon-core-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "photon-core",
    storageBucket: "photon-core.firebasestorage.app",
    messagingSenderId: "353688925540",
    appId: "1:353688925540:web:ec18a3ef1573034bfab671",
    measurementId: "G-3DT2FW953X"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const rtdb = firebase.database();

// AI Models
const AI_MODELS = {
    'gpt-5.2':{name:'GPT-5.2',provider:'OpenAI',logo:'🟢',badge:'Latest',desc:'Most advanced OpenAI.'},
    'gpt-5.2-chat':{name:'GPT-5.2 Chat',provider:'OpenAI',logo:'🟢',badge:'Chat',desc:'Chat optimized.'},
    'gpt-5.1':{name:'GPT-5.1',provider:'OpenAI',logo:'🟢',badge:'Previous',desc:'Previous gen.'},
    'gpt-5':{name:'GPT-5',provider:'OpenAI',logo:'🟢',badge:'Base',desc:'GPT-5 base.'},
    'gpt-5-mini':{name:'GPT-5 Mini',provider:'OpenAI',logo:'🟢',badge:'Light',desc:'Lightweight.'},
    'gpt-5-nano':{name:'GPT-5 Nano',provider:'OpenAI',logo:'🟢',badge:'Nano',desc:'Ultra fast.'},
    'gpt-4.5-preview':{name:'GPT-4.5',provider:'OpenAI',logo:'🟢',badge:'Preview',desc:'Preview.'},
    'gpt-4.1':{name:'GPT-4.1',provider:'OpenAI',logo:'🟢',badge:'Stable',desc:'Stable.'},
    'gpt-4o':{name:'GPT-4o',provider:'OpenAI',logo:'🟢',badge:'Fast',desc:'Multimodal.'},
    'gpt-4o-mini':{name:'GPT-4o Mini',provider:'OpenAI',logo:'🟢',badge:'Mini',desc:'Light.'},
    'o4-mini':{name:'o4-Mini',provider:'OpenAI',logo:'🟢',badge:'Reasoning',desc:'Latest reasoning.'},
    'o3':{name:'o3',provider:'OpenAI',logo:'🟢',badge:'Reasoning',desc:'Advanced.'},
    'o3-mini':{name:'o3-Mini',provider:'OpenAI',logo:'🟢',badge:'Light',desc:'Lighter reasoning.'},
    'o1':{name:'o1',provider:'OpenAI',logo:'🟢',badge:'Reasoning',desc:'Original reasoning.'},
    'o1-pro':{name:'o1-Pro',provider:'OpenAI',logo:'🟢',badge:'Pro',desc:'Pro reasoning.'},
    'openai/gpt-5.2-codex':{name:'GPT-5.2 Codex',provider:'OpenAI',logo:'🟢',badge:'Code',desc:'Best code gen.'},
    'openai/gpt-5.1-codex':{name:'GPT-5.1 Codex',provider:'OpenAI',logo:'🟢',badge:'Code',desc:'Code gen.'},
    'openai/gpt-5.1-codex-max':{name:'Codex Max',provider:'OpenAI',logo:'🟢',badge:'Max',desc:'Max code.'},
    'openai/codex-mini':{name:'Codex Mini',provider:'OpenAI',logo:'🟢',badge:'Mini',desc:'Fast code.'},
    'claude-opus-4-6':{name:'Claude Opus 4.6',provider:'Anthropic',logo:'🟣',badge:'Best',desc:'Most capable.'},
    'claude-opus-4-5':{name:'Claude Opus 4.5',provider:'Anthropic',logo:'🟣',badge:'Advanced',desc:'Advanced.'},
    'claude-opus-4':{name:'Claude Opus 4',provider:'Anthropic',logo:'🟣',badge:'Base',desc:'Base opus.'},
    'claude-sonnet-4-5':{name:'Claude Sonnet 4.5',provider:'Anthropic',logo:'🟣',badge:'Writing',desc:'Writing & code.'},
    'claude-sonnet-4':{name:'Claude Sonnet 4',provider:'Anthropic',logo:'🟣',badge:'Balanced',desc:'Balanced.'},
    'claude-haiku-4-5':{name:'Claude Haiku 4.5',provider:'Anthropic',logo:'🟣',badge:'Fast',desc:'Ultra fast.'},
    'gemini-3-pro-preview':{name:'Gemini 3 Pro',provider:'Google',logo:'🔵',badge:'Latest',desc:'Latest Google.'},
    'gemini-3-flash-preview':{name:'Gemini 3 Flash',provider:'Google',logo:'🔵',badge:'Flash',desc:'Fast.'},
    'gemini-2.5-pro':{name:'Gemini 2.5 Pro',provider:'Google',logo:'🔵',badge:'Pro',desc:'Stable pro.'},
    'gemini-2.5-flash':{name:'Gemini 2.5 Flash',provider:'Google',logo:'🔵',badge:'Flash',desc:'Fast.'},
    'gemini-2.0-flash':{name:'Gemini 2.0 Flash',provider:'Google',logo:'🔵',badge:'Stable',desc:'Stable.'},
    'x-ai/grok-4-1-fast':{name:'Grok 4.1 Fast',provider:'xAI',logo:'⚫',badge:'Latest',desc:'Latest Grok.'},
    'x-ai/grok-4':{name:'Grok 4',provider:'xAI',logo:'⚫',badge:'Base',desc:'Grok 4.'},
    'x-ai/grok-code-fast-1':{name:'Grok Code',provider:'xAI',logo:'⚫',badge:'Code',desc:'Code Grok.'},
    'x-ai/grok-3':{name:'Grok 3',provider:'xAI',logo:'⚫',badge:'V3',desc:'Grok 3.'},
    'x-ai/grok-3-mini':{name:'Grok 3 Mini',provider:'xAI',logo:'⚫',badge:'Mini',desc:'Mini.'},
    'meta-llama/llama-4-maverick':{name:'LLaMA 4 Maverick',provider:'Meta',logo:'🟠',badge:'Latest',desc:'Most powerful.'},
    'meta-llama/llama-4-scout':{name:'LLaMA 4 Scout',provider:'Meta',logo:'🟠',badge:'Vision',desc:'Vision.'},
    'meta-llama/llama-3.3-70b-instruct':{name:'LLaMA 3.3 70B',provider:'Meta',logo:'🟠',badge:'70B',desc:'Large.'},
    'meta-llama/llama-3.1-405b-instruct':{name:'LLaMA 3.1 405B',provider:'Meta',logo:'🟠',badge:'Massive',desc:'Largest.'},
    'meta-llama/llama-3.1-8b-instruct':{name:'LLaMA 3.1 8B',provider:'Meta',logo:'🟠',badge:'Fast',desc:'Fast.'}
};

function parseResponse(r,m){if(!r)return'No response.';if(m.startsWith('claude'))return r?.message?.content?.[0]?.text||r?.message?.content||String(r);if(m.startsWith('x-ai/')||m.startsWith('meta-llama/'))return r?.message?.content||String(r);if(typeof r==='string')return r;if(r?.message?.content)return r.message.content;return String(r)}

const state={user:null,discussions:[],files:[],aiQueryCount:0,currentFilter:'all',selectedModel:'gpt-5.2',memories:[],chatSessions:[],currentChatId:null,currentChatMessages:[],filesReady:false,attachedFile:null,attachedFileContent:null,attachedFileName:'',isTyping:false,onlineUsers:{}};

let dom={};
function initDom(){['auth-screen','app','btn-sign-in','btn-sign-out','user-name','user-avatar','welcome-name','page-title','mobile-menu-btn','stat-discussions','stat-files','stat-ai','stat-online','online-count','discussion-title','discussion-body','discussion-category','btn-post-discussion','discussions-list','upload-zone','file-input','btn-browse','btn-new-folder','btn-refresh-files','files-list','current-path','ai-chat','ai-input','btn-ai-send','ai-send-text','ai-loading','ai-model-select','model-active-badge','model-info-text','bot-logo','bot-name','bot-provider','bot-badge','typing-indicator','typing-user','btn-new-chat','chat-history-list','memory-count','memory-list','btn-toggle-memory','btn-clear-memory','btn-dismiss-tip','memory-tip-banner','btn-ai-attach','ai-file-input','ai-attachment-preview','attachment-icon','attachment-name','attachment-size','btn-remove-attachment','members-grid','profile-name','profile-role','profile-status','btn-save-profile','recent-activity','toast-container'].forEach(id=>{dom[id.replace(/-([a-z])/g,(_,c)=>c.toUpperCase())]=document.getElementById(id)})}

function showToast(m,t='info'){const e=document.createElement('div');e.className=`toast ${t}`;e.innerHTML=`<span>${{success:'✅',error:'❌',info:'ℹ️'}[t]||'ℹ️'}</span><span>${m}</span>`;dom.toastContainer.appendChild(e);setTimeout(()=>{e.style.animation='to .3s ease forwards';setTimeout(()=>e.remove(),300)},3500)}
function esc(t){const d=document.createElement('div');d.textContent=t||'';return d.innerHTML}
function fmtDate(iso){const d=new Date(iso),n=new Date(),ms=n-d,min=Math.floor(ms/60000),hr=Math.floor(ms/3600000),day=Math.floor(ms/86400000);if(min<1)return'Now';if(min<60)return min+'m';if(hr<24)return hr+'h';if(day<7)return day+'d';return d.toLocaleDateString()}
function fmtSize(b){if(!b)return'0 B';const s=['B','KB','MB','GB'];const i=Math.floor(Math.log(b)/Math.log(1024));return(b/Math.pow(1024,i)).toFixed(1)+' '+s[i]}
function fileIcon(n,d){if(d)return'📁';const e=n.split('.').pop().toLowerCase();return{png:'🖼️',jpg:'🖼️',jpeg:'🖼️',gif:'🖼️',svg:'🖼️',webp:'🖼️',mp3:'🎵',wav:'🎵',ogg:'🎵',mp4:'🎬',pdf:'📄',doc:'📝',docx:'📝',txt:'📝',zip:'📦',rar:'📦',js:'💻',ts:'💻',py:'💻',cs:'💻',cpp:'💻',html:'🌐',css:'🎨',json:'⚙️',md:'📝',gd:'🎮',godot:'🎮',unity:'🎮',blend:'🎨',psd:'🎨'}[e]||'📄'}
function formatAi(t){let f=esc(t);f=f.replace(/\*\*(.*?)\*\*/g,'<strong>$1</strong>');f=f.replace(/\*(.*?)\*/g,'<em>$1</em>');f=f.replace(/`(.*?)`/g,'<code style="background:rgba(108,92,231,.2);padding:2px 6px;border-radius:4px;font-family:var(--font-mono);font-size:.85em">$1</code>');f=f.replace(/\n/g,'<br>');return'<p>'+f+'</p>'}

// === AUTH ===
async function initAuth(){try{const u=await puter.auth.getUser();if(u)handleSignIn(u)}catch(e){}}
function handleSignIn(user){state.user=user;const n=user.username||'Member';dom.userName.textContent=n;dom.userAvatar.textContent=n.substring(0,2).toUpperCase();dom.welcomeName.textContent=n;dom.authScreen.classList.add('hidden');dom.app.classList.remove('hidden');showToast('Welcome, '+n+'! ⚡','success');initAppData()}

async function initAppData(){await ensureBaseFolder();loadSavedModel();setupPresence();listenDiscussions();listenMemories();listenActivity();listenChatSessions();loadFiles();loadProfile();setupPresenceListener();loadTipState()}
async function ensureBaseFolder(){try{await puter.fs.mkdir('PhotonCore',{dedupeName:false})}catch(e){}try{await puter.fs.mkdir('PhotonCore/files',{dedupeName:false})}catch(e){}state.filesReady=true}

// === PRESENCE (Realtime DB) ===
function setupPresence(){const uid=state.user?.username;if(!uid)return;const ref=rtdb.ref('presence/'+uid);const connRef=rtdb.ref('.info/connected');
connRef.on('value',snap=>{if(snap.val()){ref.onDisconnect().set({online:false,lastSeen:firebase.database.ServerValue.TIMESTAMP});ref.set({online:true,lastSeen:firebase.database.ServerValue.TIMESTAMP})}});
setInterval(()=>ref.update({lastSeen:firebase.database.ServerValue.TIMESTAMP}),30000)}

function setupPresenceListener(){rtdb.ref('presence').on('value',snap=>{state.onlineUsers=snap.val()||{};const count=Object.values(state.onlineUsers).filter(u=>u.online).length;dom.onlineCount.textContent=count;dom.statOnline.textContent=count;renderMembers()})}

// === MEMBERS (Firestore) ===
async function saveProfile(){const p={name:dom.profileName.value.trim()||state.user?.username,role:dom.profileRole.value,status:dom.profileStatus.value.trim(),username:state.user?.username,updatedAt:new Date().toISOString()};try{await db.collection('members').doc(state.user.username).set(p,{merge:true});showToast('Profile saved! ✅','success')}catch(e){showToast('Failed.','error');console.error(e)}}

async function loadProfile(){try{const doc=await db.collection('members').doc(state.user?.username).get();if(doc.exists){const p=doc.data();dom.profileName.value=p.name||'';dom.profileRole.value=p.role||'💻 Developer';dom.profileStatus.value=p.status||''}else{dom.profileName.value=state.user?.username||''}}catch(e){dom.profileName.value=state.user?.username||''}}

function renderMembers(){db.collection('members').get().then(snap=>{const members=[];snap.forEach(doc=>members.push(doc.data()));if(!members.length){dom.membersGrid.innerHTML='<div class="empty-state"><p>No members yet. Save your profile!</p></div>';return}
dom.membersGrid.innerHTML=members.map(m=>{const presence=state.onlineUsers[m.username];const isOnline=presence?.online===true;const lastSeen=presence?.lastSeen?fmtDate(new Date(presence.lastSeen).toISOString()):'Never';
return`<div class="member-card ${isOnline?'is-online':''}"><div class="member-online-dot ${isOnline?'online':''}"></div><div class="member-avatar">${(m.name||'?').substring(0,2).toUpperCase()}</div><div class="member-info"><span class="member-name">${esc(m.name||m.username)}</span><span class="member-role-badge">${esc(m.role||'Member')}</span><span class="member-status">${esc(m.status||'')}</span><span class="member-last-seen">${isOnline?'🟢 Online':'Last seen: '+lastSeen}</span></div></div>`}).join('')}).catch(()=>{})}

// === DISCUSSIONS (Firestore real-time) ===
function listenDiscussions(){db.collection('discussions').orderBy('timestamp','desc').limit(100).onSnapshot(snap=>{state.discussions=[];snap.forEach(doc=>state.discussions.push({id:doc.id,...doc.data()}));renderDiscussions();dom.statDiscussions.textContent=state.discussions.length})}

async function postDiscussion(){const t=dom.discussionTitle.value.trim(),b=dom.discussionBody.value.trim();if(!t||!b){showToast('Fill both fields.','error');return}
await db.collection('discussions').add({title:t,body:b,category:dom.discussionCategory.value,author:state.user?.username||'Anon',timestamp:new Date().toISOString(),likes:0});addActivity('💬 '+state.user?.username+': "'+t+'"');dom.discussionTitle.value='';dom.discussionBody.value='';showToast('Posted!','success')}

function renderDiscussions(){const f=state.currentFilter==='all'?state.discussions:state.discussions.filter(d=>d.category===state.currentFilter);if(!f.length){dom.discussionsList.innerHTML='<div class="empty-state"><span class="empty-icon">💬</span><p>No discussions.</p></div>';return}
const lb={general:'💭',['game-design']:'🎮',art:'🎨',code:'💻',marketing:'📢',bugs:'🐛'};dom.discussionsList.innerHTML=f.map(d=>`<div class="discussion-post"><div class="discussion-post-header"><div class="discussion-author-avatar">${(d.author||'?').substring(0,2).toUpperCase()}</div><div class="discussion-meta"><span class="discussion-author">${esc(d.author)}</span><span class="discussion-date">${fmtDate(d.timestamp)}</span></div><span class="discussion-category-tag">${lb[d.category]||'💭'} ${d.category}</span></div><div class="discussion-title">${esc(d.title)}</div><div class="discussion-body">${esc(d.body)}</div><div class="discussion-actions"><button class="discussion-action-btn" onclick="likeDisc('${d.id}')">❤️ ${d.likes||0}</button><button class="discussion-action-btn" onclick="deleteDisc('${d.id}')">🗑️</button></div></div>`).join('')}

async function likeDisc(id){await db.collection('discussions').doc(id).update({likes:firebase.firestore.FieldValue.increment(1)})}
async function deleteDisc(id){if(!confirm('Delete?'))return;await db.collection('discussions').doc(id).delete();showToast('Deleted.','info')}

// === SHARED MEMORIES (Firestore) ===
function listenMemories(){db.collection('memories').orderBy('timestamp','desc').limit(100).onSnapshot(snap=>{state.memories=[];snap.forEach(doc=>state.memories.push({id:doc.id,...doc.data()}));renderMemories()})}

function shouldRemember(msg){const l=msg.toLowerCase();const kw=['remember','don\'t forget','keep in mind','note that','important:','fyi','save this','memorize'];for(const k of kw)if(l.includes(k))return true;const pats=[/our game is/i,/game name is/i,/project is called/i,/my name is/i,/deadline is/i,/art style/i,/we('re| are) using/i,/engine is/i,/we decided/i,/the plan is/i,/from now on/i,/always use/i,/our (studio|company|team)/i,/genre is/i,/we('re| are) making/i,/release (date|window)/i,/main character/i,/story is about/i];return pats.some(p=>p.test(msg))}

function extractMemory(msg){const pats=[/remember\s+that\s+(.+)/i,/remember\s*:\s*(.+)/i,/remember\s+(.+)/i,/don't forget\s+(.+)/i,/note that\s+(.+)/i,/important:\s*(.+)/i,/fyi\s*:?\s*(.+)/i];for(const p of pats){const m=msg.match(p);if(m)return m[1].trim()}return msg.trim()}

async function addMemory(text,user){const exists=state.memories.some(m=>m.text.toLowerCase()===text.toLowerCase());if(exists)return;await db.collection('memories').add({text,user,timestamp:new Date().toISOString()});showToast('🧠 Memory saved!','success')}

async function deleteMemory(id){await db.collection('memories').doc(id).delete();showToast('Removed.','info')}

function renderMemories(){dom.memoryCount.textContent=state.memories.length;if(!state.memories.length){dom.memoryList.innerHTML='<div class="empty-state small"><p>No memories.</p></div>';return}dom.memoryList.innerHTML=state.memories.map(m=>`<div class="memory-item"><span class="memory-item-text">🧠 ${esc(m.text)}</span><span class="memory-item-user">${esc(m.user)}</span><button class="memory-item-delete" onclick="deleteMemory('${m.id}')">🗑️</button></div>`).join('')}

function getMemoryContext(){if(!state.memories.length)return'';return'\n\nTEAM MEMORIES:\n'+state.memories.map(m=>'- '+m.text+' (by '+m.user+')').join('\n')+'\n\nAlways reference these.\n'}

// === ACTIVITY (Firestore) ===
function listenActivity(){db.collection('activity').orderBy('timestamp','desc').limit(20).onSnapshot(snap=>{const list=[];snap.forEach(doc=>list.push(doc.data()));renderActivity(list)})}

async function addActivity(msg){await db.collection('activity').add({message:msg,timestamp:new Date().toISOString()}).catch(()=>{})}

function renderActivity(list){if(!list?.length){dom.recentActivity.innerHTML='<p class="empty-state">No activity.</p>';return}dom.recentActivity.innerHTML=list.slice(0,10).map(a=>`<div class="activity-item"><span>${esc(a.message)}</span><span class="activity-time">${fmtDate(a.timestamp)}</span></div>`).join('')}

// === CHAT SESSIONS (Firestore shared) ===
function listenChatSessions(){db.collection('chatSessions').orderBy('updatedAt','desc').limit(50).onSnapshot(snap=>{state.chatSessions=[];snap.forEach(doc=>state.chatSessions.push({id:doc.id,...doc.data()}));renderChatHistory();if(!state.currentChatId&&state.chatSessions.length)loadChat(state.chatSessions[0].id)})}

async function createNewChat(){const ref=await db.collection('chatSessions').add({title:'New Chat',model:state.selectedModel,messages:[],createdAt:new Date().toISOString(),updatedAt:new Date().toISOString(),createdBy:state.user?.username});state.currentChatId=ref.id;state.currentChatMessages=[];clearChatUI();showToast('New chat! 💬','success')}

function loadChat(id){const c=state.chatSessions.find(x=>x.id===id);if(!c)return;state.currentChatId=id;state.currentChatMessages=c.messages||[];clearChatUI();c.messages.forEach(m=>appendStatic(m.text,m.sender,m.modelName,m.author,m.memorySaved,m.fileName));renderChatHistory()}

async function saveCurrentChat(){if(!state.currentChatId)return;const data={messages:state.currentChatMessages,updatedAt:new Date().toISOString(),model:state.selectedModel};const first=state.currentChatMessages.find(m=>m.sender==='user');if(first)data.title=first.text.substring(0,50)+(first.text.length>50?'...':'');await db.collection('chatSessions').doc(state.currentChatId).update(data).catch(()=>{})}

async function deleteChat(id){if(!confirm('Delete?'))return;await db.collection('chatSessions').doc(id).delete();if(state.currentChatId===id){state.currentChatId=null;state.currentChatMessages=[];clearChatUI()}showToast('Deleted.','info')}

function renderChatHistory(){if(!state.chatSessions.length){dom.chatHistoryList.innerHTML='<div class="empty-state small"><p>No chats</p></div>';return}dom.chatHistoryList.innerHTML=state.chatSessions.map(c=>`<div class="chat-history-item ${c.id===state.currentChatId?'active':''}" onclick="loadChat('${c.id}')"><div class="chat-history-item-title">${esc(c.title||'Chat')}</div><div class="chat-history-item-meta"><span class="chat-history-item-date">${fmtDate(c.updatedAt)}</span><span class="chat-history-item-model">${AI_MODELS[c.model]?.name||c.model}</span><button class="chat-history-item-delete" onclick="event.stopPropagation();deleteChat('${c.id}')">🗑️</button></div></div>`).join('')}

function clearChatUI(){dom.aiChat.innerHTML=`<div class="ai-message ai-welcome"><div class="ai-avatar">🤖</div><div class="ai-bubble"><p>👋 Shared group chat. 📂 File tools. 🧠 Auto-memory. ⚡ 85+ models.</p></div></div>`}

// === FILES (Puter) ===
async function uploadFiles(fl){if(!fl?.length)return;if(!state.filesReady)await ensureBaseFolder();for(const f of fl){try{showToast('Uploading '+f.name+'...','info');const blob=new Blob([await f.arrayBuffer()],{type:f.type});await puter.fs.write('PhotonCore/files/'+f.name,blob,{dedupeName:false,overwrite:true});addActivity('📁 '+state.user?.username+': '+f.name);showToast(f.name+' uploaded!','success')}catch(e){showToast('Failed: '+f.name,'error')}}loadFiles();dom.fileInput.value=''}
async function loadFiles(){try{const i=await puter.fs.readdir('PhotonCore/files');state.files=i||[];renderFiles();dom.statFiles.textContent=state.files.length}catch(e){state.files=[];renderFiles();dom.statFiles.textContent=0}}
function renderFiles(){if(!state.files.length){dom.filesList.innerHTML='<div class="empty-state" style="grid-column:1/-1"><span class="empty-icon">📂</span><p>No files.</p></div>';return}dom.filesList.innerHTML=state.files.map(f=>{const s=esc(f.name).replace(/'/g,"\\'");return`<div class="file-card"><div class="file-icon">${fileIcon(f.name,f.is_dir)}</div><div class="file-name">${esc(f.name)}</div><div class="file-size">${f.is_dir?'Folder':fmtSize(f.size)}</div><div class="file-actions">${!f.is_dir?`<button class="file-action-btn" onclick="downloadFile('${s}')">⬇️</button>`:''}<button class="file-action-btn danger" onclick="deleteFile('${s}',${f.is_dir})">🗑️</button></div></div>`}).join('')}
async function downloadFile(n){try{const b=await puter.fs.read('PhotonCore/files/'+n);const u=URL.createObjectURL(b);const a=document.createElement('a');a.href=u;a.download=n;document.body.appendChild(a);a.click();document.body.removeChild(a);URL.revokeObjectURL(u)}catch(e){showToast('Failed.','error')}}
async function deleteFile(n,d){if(!confirm('Delete "'+n+'"?'))return;try{await puter.fs.delete('PhotonCore/files/'+n,{recursive:d});showToast('Deleted.','info');loadFiles()}catch(e){showToast('Failed.','error')}}

// === AI FILE TOOLS ===
async function aiListFiles(){try{const items=await puter.fs.readdir('PhotonCore/files');if(!items?.length)return'No files in cloud storage.';return'Files in cloud:\n'+items.map(f=>'- '+(f.is_dir?'📁':'📄')+' '+f.name+(f.is_dir?'':' ('+fmtSize(f.size)+')')).join('\n')}catch(e){return'Error listing files: '+e.message}}

async function aiReadFile(name){try{const blob=await puter.fs.read('PhotonCore/files/'+name);const text=await blob.text();return'Content of '+name+':\n\n'+text}catch(e){return'Error reading '+name+': '+e.message}}

async function aiWriteFile(name,content){try{const blob=new Blob([content],{type:'text/plain'});await puter.fs.write('PhotonCore/files/'+name,blob,{dedupeName:false,overwrite:true});loadFiles();addActivity('🤖 AI saved: '+name);return'✅ File "'+name+'" saved to cloud successfully!'}catch(e){return'Error saving '+name+': '+e.message}}

async function aiDeleteFile(name){try{await puter.fs.delete('PhotonCore/files/'+name);loadFiles();addActivity('🤖 AI deleted: '+name);return'✅ File "'+name+'" deleted from cloud.'}catch(e){return'Error deleting '+name+': '+e.message}}

function detectFileOperation(msg){const l=msg.toLowerCase();if(l.match(/list\s*(my\s*)?(cloud\s*)?files/i)||l.match(/show\s*(my\s*)?(cloud\s*)?files/i)||l.match(/what('s| is) in my (cloud|storage|files)/i))return{op:'list'};
const readMatch=msg.match(/(?:read|open|show|get|fetch|load|display)\s+(?:the\s+)?(?:file\s+)?['""]?([a-zA-Z0-9_\-\.]+)['""]?/i);if(readMatch)return{op:'read',name:readMatch[1]};
const writeMatch=msg.match(/(?:save|write|create|store)\s+(?:this\s+)?(?:as|to|file)?\s*['""]?([a-zA-Z0-9_\-\.]+)['""]?/i);if(writeMatch)return{op:'write',name:writeMatch[1]};
const delMatch=msg.match(/(?:delete|remove)\s+(?:the\s+)?(?:file\s+)?['""]?([a-zA-Z0-9_\-\.]+)['""]?/i);if(delMatch)return{op:'delete',name:delMatch[1]};
return null}

// === AI SEND ===
async function handleFileAttach(e){const file=e.target.files[0];if(!file)return;state.attachedFile=file;state.attachedFileName=file.name;try{if(file.type.startsWith('text/')||file.name.match(/\.(js|ts|py|cs|cpp|html|css|json|xml|md|txt|csv|yaml|yml|log|sh|gd)$/i))state.attachedFileContent=await file.text();else state.attachedFileContent='[File: '+file.name+', '+fmtSize(file.size)+']'}catch(err){state.attachedFileContent='[File: '+file.name+']'}dom.attachmentIcon.textContent=fileIcon(file.name,false);dom.attachmentName.textContent=file.name;dom.attachmentSize.textContent=fmtSize(file.size);dom.aiAttachmentPreview.classList.remove('hidden');dom.aiFileInput.value='';showToast('📎 '+file.name+' attached','info')}
function clearAttachment(){state.attachedFile=null;state.attachedFileContent=null;state.attachedFileName='';dom.aiAttachmentPreview.classList.add('hidden')}

async function sendAiMessage(){const msg=dom.aiInput.value.trim();if(!msg&&!state.attachedFile)return;if(state.isTyping)return;
const modelId=state.selectedModel,md=AI_MODELS[modelId],modelName=md?.name||modelId,username=state.user?.username||'Anon';
let memorySaved=false;
if(msg&&shouldRemember(msg)){await addMemory(extractMemory(msg),username);memorySaved=true}

let displayMsg=msg,fileCtx='',fileName='';
if(state.attachedFile){fileName=state.attachedFileName;displayMsg=msg||'Analyze: '+fileName;if(state.attachedFileContent&&state.attachedFileContent.length<50000)fileCtx='\n\n--- FILE: '+fileName+' ---\n'+state.attachedFileContent+'\n--- END ---\n';else fileCtx='\n\n[Attached: '+fileName+', '+fmtSize(state.attachedFile.size)+']';
const l=msg.toLowerCase();if(l.includes('save to cloud')||l.includes('store this')||l.includes('upload this')){const blob=new Blob([await state.attachedFile.arrayBuffer()],{type:state.attachedFile.type});try{await puter.fs.write('PhotonCore/files/'+fileName,blob,{dedupeName:false,overwrite:true});showToast('☁️ '+fileName+' saved!','success');addActivity('☁️ Saved: '+fileName);loadFiles()}catch(e){showToast('Save failed.','error')}}}

state.currentChatMessages.push({text:displayMsg,sender:'user',author:username,modelName:'',memorySaved,fileName,timestamp:new Date().toISOString()});
appendStatic(displayMsg,'user','',username,memorySaved,fileName);dom.aiInput.value='';const savedCtx=fileCtx;clearAttachment();

// Check for file operations
const fileOp=detectFileOperation(msg);let toolResult='';
if(fileOp){if(fileOp.op==='list')toolResult=await aiListFiles();else if(fileOp.op==='read')toolResult=await aiReadFile(fileOp.name);else if(fileOp.op==='delete')toolResult=await aiDeleteFile(fileOp.name)}

state.isTyping=true;dom.typingIndicator.classList.remove('hidden');dom.typingUser.textContent=modelName;dom.aiSendText.classList.add('hidden');dom.aiLoading.classList.remove('hidden');dom.btnAiSend.disabled=true;

try{const memCtx=getMemoryContext();
let sysPr='You are a helpful AI for Photon Studios (6-person indie game dev team). Group chat. Be friendly.'+memCtx;
if(toolResult)sysPr+='\n\nFILE OPERATION RESULT:\n'+toolResult+'\n\nReport this result to the user naturally.';
sysPr+='\n\nYou can help users manage cloud files. If they ask to save content as a file, include the content in your response and confirm it was saved.';

const hist=state.currentChatMessages.filter(m=>m.sender==='user'||m.sender==='ai').slice(-10).map(m=>({role:m.sender==='user'?'user':'assistant',content:m.sender==='user'?'['+m.author+']: '+m.text:m.text}));
hist[hist.length-1]={role:'user',content:'['+username+']: '+displayMsg+savedCtx};
const messages=[{role:'system',content:sysPr},...hist];

// Check if AI wants to write a file
const writeOp=!fileOp&&msg.match(/(?:save|write|create)\s+(?:this\s+)?(?:as|to)\s+['""]?([a-zA-Z0-9_\-\.]+)['""]?/i);

const response=await puter.ai.chat(messages,{model:modelId,stream:true});
let fullText='';const{div,target,cursor}=createStreamBubble(modelName);
for await(const part of response){const chunk=part?.text||'';if(chunk){fullText+=chunk;target.insertBefore(document.createTextNode(chunk),cursor);dom.aiChat.scrollTop=dom.aiChat.scrollHeight}}
cursor.remove();target.innerHTML=formatAi(fullText);
const tag=document.createElement('span');tag.className='ai-model-tag';tag.textContent=(md?.logo||'⚡')+' '+modelName;div.querySelector('.ai-bubble').appendChild(tag);
if(toolResult){const tr=document.createElement('div');tr.className='tool-result';tr.textContent='📂 '+toolResult.substring(0,200);div.querySelector('.ai-bubble').appendChild(tr)}
dom.aiChat.scrollTop=dom.aiChat.scrollHeight;

// If write operation detected, extract and save
if(writeOp){const fname=writeOp[1];const result=await aiWriteFile(fname,fullText);showToast(result,'success')}

state.currentChatMessages.push({text:fullText,sender:'ai',author:modelName,modelName,timestamp:new Date().toISOString()});
state.aiQueryCount++;dom.statAi.textContent=state.aiQueryCount;
addActivity('🤖 '+username+' → '+modelName);await saveCurrentChat();

}catch(e){console.error(e);try{const resp=await puter.ai.chat(msg,{model:modelId});const text=parseResponse(resp,modelId);appendStatic(text+(toolResult?'\n\n📂 '+toolResult:''),'ai',modelName,modelName);state.currentChatMessages.push({text,sender:'ai',author:modelName,modelName,timestamp:new Date().toISOString()});await saveCurrentChat()}catch(e2){appendStatic('Failed. Try another model!','ai',modelName,modelName);showToast('Failed.','error')}}

state.isTyping=false;dom.typingIndicator.classList.add('hidden');dom.aiSendText.classList.remove('hidden');dom.aiLoading.classList.add('hidden');dom.btnAiSend.disabled=false}

function createStreamBubble(name){const div=document.createElement('div');div.className='ai-message';const md=AI_MODELS[state.selectedModel];div.innerHTML=`<div class="ai-avatar">${md?.logo||'🤖'}</div><div class="ai-bubble"><div class="ai-message-author">${esc(name)}</div><p class="tw-target"></p></div>`;dom.aiChat.appendChild(div);const target=div.querySelector('.tw-target');const cursor=document.createElement('span');cursor.className='typewriter-cursor';target.appendChild(cursor);dom.aiChat.scrollTop=dom.aiChat.scrollHeight;return{div,target,cursor}}

function appendStatic(text,sender,modelName='',author='',memorySaved=false,fileName=''){const div=document.createElement('div');div.className='ai-message '+(sender==='user'?'user-message':'');const md=sender==='ai'?AI_MODELS[state.selectedModel]:null;const av=sender==='user'?(author||'??').substring(0,2).toUpperCase():(md?.logo||'🤖');div.innerHTML=`<div class="ai-avatar">${av}</div><div class="ai-bubble">${author?'<div class="ai-message-author">'+(sender==='user'?'👤 ':'')+esc(author)+'</div>':''}${fileName?'<div class="ai-file-bubble"><span>'+fileIcon(fileName,false)+'</span> '+esc(fileName)+'</div>':''}${sender==='ai'?formatAi(text):esc(text)}${sender==='ai'&&modelName?'<span class="ai-model-tag">'+(md?.logo||'⚡')+' '+modelName+'</span>':''}${memorySaved?'<span class="memory-saved-indicator">🧠 Saved</span>':''}</div>`;dom.aiChat.appendChild(div);dom.aiChat.scrollTop=dom.aiChat.scrollHeight}

// === NAV & UI ===
const tabTitles={dashboard:'Dashboard',discussions:'Discussions',files:'Files',ai:'AI Assistant',members:'Members'};
function switchTab(t){document.querySelectorAll('.nav-item').forEach(n=>n.classList.remove('active'));document.querySelector('.nav-item[data-tab="'+t+'"]')?.classList.add('active');document.querySelectorAll('.tab-content').forEach(x=>x.classList.remove('active'));document.getElementById('tab-'+t)?.classList.add('active');dom.pageTitle.textContent=tabTitles[t]||'';closeMobileSidebar();if(t==='members')renderMembers()}
function closeMobileSidebar(){document.querySelector('.sidebar').classList.remove('open');document.querySelector('.sidebar-overlay')?.classList.remove('active')}
function updateBotIdentity(){const m=AI_MODELS[state.selectedModel];if(!m)return;dom.modelActiveBadge.textContent=m.name;dom.modelInfoText.textContent=m.desc;dom.botLogo.textContent=m.logo;dom.botName.textContent=m.name;dom.botProvider.textContent='by '+m.provider;dom.botBadge.textContent=m.badge}
async function loadSavedModel(){try{const s=await puter.kv.get('photon_selected_model');if(s&&AI_MODELS[s]){state.selectedModel=s;dom.aiModelSelect.value=s}}catch(e){}updateBotIdentity()}
function loadTipState(){puter.kv.get('photon_tip_dismissed').then(v=>{if(v==='true')dom.memoryTipBanner.classList.add('dismissed')}).catch(()=>{})}

function createParticles(){const c=document.getElementById('particles');if(!c)return;for(let i=0;i<30;i++){const p=document.createElement('div');p.style.cssText='position:absolute;width:'+((Math.random()*4+1))+'px;height:'+((Math.random()*4+1))+'px;background:rgba(108,92,231,'+(Math.random()*.5+.1)+');border-radius:50%;top:'+(Math.random()*100)+'%;left:'+(Math.random()*100)+'%;animation:pf '+(Math.random()*10+5)+'s ease-in-out infinite '+(Math.random()*5)+'s';c.appendChild(p)}document.head.appendChild(Object.assign(document.createElement('style'),{textContent:'@keyframes pf{0%,100%{transform:translate(0,0);opacity:.5}50%{transform:translate('+(Math.random()*60-30)+'px,'+(Math.random()*60-30)+'px);opacity:.3}}'}))}

// === BOOT ===
document.addEventListener('DOMContentLoaded',()=>{initDom();createParticles();initAuth();
dom.btnSignIn.addEventListener('click',async()=>{try{await puter.auth.signIn();handleSignIn(await puter.auth.getUser())}catch(e){showToast('Failed.','error')}});
dom.btnSignOut.addEventListener('click',async()=>{const uid=state.user?.username;if(uid)rtdb.ref('presence/'+uid).set({online:false,lastSeen:firebase.database.ServerValue.TIMESTAMP});try{await puter.auth.signOut()}catch(e){}state.user=null;dom.app.classList.add('hidden');dom.authScreen.classList.remove('hidden');showToast('Signed out.','info')});
document.querySelectorAll('.nav-item').forEach(i=>i.addEventListener('click',()=>switchTab(i.dataset.tab)));
dom.mobileMenuBtn.addEventListener('click',()=>{document.querySelector('.sidebar').classList.toggle('open');let o=document.querySelector('.sidebar-overlay');if(!o){o=document.createElement('div');o.className='sidebar-overlay';o.addEventListener('click',closeMobileSidebar);document.body.appendChild(o)}o.classList.toggle('active')});
dom.aiModelSelect.addEventListener('change',()=>{state.selectedModel=dom.aiModelSelect.value;updateBotIdentity();puter.kv.set('photon_selected_model',state.selectedModel).catch(()=>{});showToast('Switched to '+AI_MODELS[state.selectedModel]?.name+' ✨','success')});
dom.btnToggleMemory.addEventListener('click',()=>{dom.memoryList.classList.toggle('hidden');dom.btnToggleMemory.textContent=dom.memoryList.classList.contains('hidden')?'Show':'Hide'});
dom.btnClearMemory.addEventListener('click',async()=>{if(!confirm('Clear ALL?'))return;const snap=await db.collection('memories').get();const batch=db.batch();snap.forEach(doc=>batch.delete(doc.ref));await batch.commit();showToast('Cleared.','info')});
dom.btnDismissTip.addEventListener('click',()=>{dom.memoryTipBanner.classList.add('dismissed');puter.kv.set('photon_tip_dismissed','true').catch(()=>{})});
dom.btnNewChat.addEventListener('click',createNewChat);
dom.btnAiSend.addEventListener('click',sendAiMessage);
dom.aiInput.addEventListener('keydown',e=>{if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();sendAiMessage()}});
document.querySelectorAll('.preset-btn').forEach(b=>b.addEventListener('click',()=>{dom.aiInput.value=b.dataset.prompt;sendAiMessage()}));
dom.btnAiAttach.addEventListener('click',()=>dom.aiFileInput.click());
dom.aiFileInput.addEventListener('change',handleFileAttach);
dom.btnRemoveAttachment.addEventListener('click',clearAttachment);
dom.btnPostDiscussion.addEventListener('click',postDiscussion);
document.querySelectorAll('.filter-btn').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('.filter-btn').forEach(x=>x.classList.remove('active'));b.classList.add('active');state.currentFilter=b.dataset.filter;renderDiscussions()}));
dom.btnBrowse.addEventListener('click',()=>dom.fileInput.click());
dom.uploadZone.addEventListener('click',e=>{if(e.target!==dom.btnBrowse)dom.fileInput.click()});
dom.uploadZone.addEventListener('dragover',e=>{e.preventDefault();dom.uploadZone.classList.add('drag-over')});
dom.uploadZone.addEventListener('dragleave',()=>dom.uploadZone.classList.remove('drag-over'));
dom.uploadZone.addEventListener('drop',e=>{e.preventDefault();dom.uploadZone.classList.remove('drag-over');uploadFiles(e.dataTransfer.files)});
dom.fileInput.addEventListener('change',e=>uploadFiles(e.target.files));
dom.btnRefreshFiles.addEventListener('click',loadFiles);
dom.btnNewFolder.addEventListener('click',async()=>{const n=prompt('Folder name:');if(!n?.trim())return;try{await puter.fs.mkdir('PhotonCore/files/'+n.trim(),{dedupeName:false});showToast('Created!','success');loadFiles()}catch(e){showToast('Failed.','error')}});
dom.btnSaveProfile.addEventListener('click',saveProfile);
})