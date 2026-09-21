window.onerror = function(msg, url, line, col, err) {
  var box = document.getElementById('errorBox');
  if (box) {
    box.style.display = 'block';
    box.textContent = '❌ خطأ: ' + msg + ' | سطر: ' + line;
  }
};

var profiles = [
  { id:'SK-75001', name:'عبدالله', age:19, nationality:'سوري', city:'بيروت', country:'لبنان', flag:'🇱🇧', emoji:'👨', lastSeen:'الآن', maritalStatus:'أعزب', height:190, weight:66, build:'نحيف', eyes:'عسلي', hair:'أسود', skin:'داكنة', religion:'الإسلام - سنة', marriageType:['زواج شرعي','زواج مدني'], education:'ثانوي', work:'بلاط', smoking:'مدخّن', languages:'العربية', bio:'أحب العمل وأن يكون لدي زوجة صالحة.' },
  { id:'SK-61225', name:'', age:25, nationality:'المغرب', city:'الرياض', country:'السعودية', flag:'🇸🇦', emoji:'👩', lastSeen:'قبل ساعة', maritalStatus:'لم يسبق لها الزواج', height:166, weight:52, build:'متوسط', eyes:'بني', hair:'بني', skin:'فاتحة', religion:'الإسلام - سنة', marriageType:['زواج شرعي'], education:'ماجستير', work:'مهندسة', smoking:'غير مدخنة', languages:'العربية، الفرنسية', bio:'أحب القراءة والرياضة.' },
  { id:'SK-61297', name:'', age:23, nationality:'يمنية', city:'القاهرة', country:'مصر', flag:'🇪🇬', emoji:'👩‍🦰', lastSeen:'قبل ساعة', maritalStatus:'لم يسبق لها الزواج', height:166, weight:55, build:'متوسط', eyes:'بني', hair:'أسود', skin:'قمحية', religion:'الإسلام - سنة', marriageType:['زواج شرعي'], education:'بكالوريوس', work:'معلمة', smoking:'غير مدخنة', languages:'العربية، الإنجليزية', bio:'أحب التدريس والعمل التطوعي.' },
  { id:'SK-70953', name:'', age:31, nationality:'المغرب', city:'الجديدة', country:'المغرب', flag:'🇲🇦', emoji:'👩‍⚕️', lastSeen:'قبل 3 ساعات', maritalStatus:'لم يسبق لها الزواج', height:170, weight:65, build:'متوسط', eyes:'عسلي', hair:'بني داكن', skin:'قمحية', religion:'الإسلام - سنة', marriageType:['زواج شرعي'], education:'دكتوراه', work:'طبيبة', smoking:'غير مدخنة', languages:'العربية، الفرنسية، الإنجليزية', bio:'أحب الطب والسفر.' },
  { id:'SK-72145', name:'فاطمة', age:27, nationality:'تونسية', city:'تونس', country:'تونس', flag:'🇹🇳', emoji:'👩‍🎓', lastSeen:'قبل 30 دقيقة', maritalStatus:'لم يسبق لها الزواج', height:164, weight:54, build:'نحيف', eyes:'بني', hair:'بني فاتح', skin:'قمحية', religion:'الإسلام - سنة', marriageType:['زواج شرعي'], education:'ماجستير', work:'مهندسة معمارية', smoking:'غير مدخنة', languages:'العربية، الفرنسية', bio:'أحب الفن والتصميم والسفر.' },
  { id:'SK-73412', name:'', age:29, nationality:'مصرية', city:'الإسكندرية', country:'مصر', flag:'🇪🇬', emoji:'👩‍🏫', lastSeen:'أمس', maritalStatus:'مطلقة', height:160, weight:58, build:'متوسط', eyes:'بني غامق', hair:'أسود طويل', skin:'قمحية', religion:'الإسلام - سنة', marriageType:['زواج شرعي'], education:'بكالوريوس', work:'مدرسة لغة عربية', smoking:'غير مدخنة', languages:'العربية، الإنجليزية', bio:'أبحث عن شريك حياة متفهم يحب الاستقرار.' },
  { id:'SK-74125', name:'ياسمين', age:24, nationality:'سورية', city:'إستنبول', country:'تركيا', flag:'🇹🇷', emoji:'👩‍🍳', lastSeen:'قبل 5 دقائق', maritalStatus:'لم يسبق لها الزواج', height:168, weight:56, build:'نحيف', eyes:'عسلي', hair:'بني', skin:'فاتحة', religion:'الإسلام - سنة', marriageType:['زواج شرعي'], education:'بكالوريوس', work:'صيدلانية', smoking:'غير مدخنة', languages:'العربية، التركية', bio:'أحب الطبخ والقراءة والهدوء.' },
  { id:'SK-75890', name:'', age:32, nationality:'أردنية', city:'عمّان', country:'الأردن', flag:'🇯🇴', emoji:'👩‍⚖️', lastSeen:'قبل ساعتين', maritalStatus:'لم يسبق لها الزواج', height:172, weight:62, build:'متوسط', eyes:'بني', hair:'بني داكن', skin:'قمحية', religion:'الإسلام - سنة', marriageType:['زواج شرعي'], education:'ماجستير', work:'محامية', smoking:'غير مدخنة', languages:'العربية، الإنجليزية', bio:'طموحة وأبحث عن شريك متفاهم.' },
  { id:'SK-76231', name:'', age:26, nationality:'جزائرية', city:'الجزائر', country:'الجزائر', flag:'🇩🇿', emoji:'👩‍💻', lastSeen:'قبل 4 ساعات', maritalStatus:'لم يسبق لها الزواج', height:165, weight:55, build:'متوسط', eyes:'عسلي', hair:'بني', skin:'فاتحة', religion:'الإسلام - سنة', marriageType:['زواج شرعي'], education:'بكالوريوس', work:'مبرمجة', smoking:'غير مدخنة', languages:'العربية، الفرنسية', bio:'أحب التقنية والرياضة.' },
  { id:'SK-77456', name:'مريم', age:30, nationality:'مغربية', city:'الدار البيضاء', country:'المغرب', flag:'🇲🇦', emoji:'👩‍🔬', lastSeen:'قبل 15 دقيقة', maritalStatus:'لم يسبق لها الزواج', height:167, weight:58, build:'متوسط', eyes:'بني', hair:'أسود', skin:'قمحية', religion:'الإسلام - سنة', marriageType:['زواج شرعي'], education:'دكتوراه', work:'باحثة جامعية', smoking:'غير مدخنة', languages:'العربية، الفرنسية، الإنجليزية', bio:'أحب العلم والبحث والسفر.' },
  { id:'SK-78123', name:'', age:22, nationality:'سعودية', city:'الرياض', country:'السعودية', flag:'🇸🇦', emoji:'👩‍🎨', lastSeen:'الآن', maritalStatus:'لم يسبق لها الزواج', height:162, weight:50, build:'نحيف', eyes:'بني', hair:'أسود', skin:'فاتحة', religion:'الإسلام - سنة', marriageType:['زواج شرعي'], education:'بكالوريوس', work:'مصممة جرافيك', smoking:'غير مدخنة', languages:'العربية، الإنجليزية', bio:'فنانة وأحب الحياة الهادئة.' },
  { id:'SK-79344', name:'', age:28, nationality:'عراقية', city:'بغداد', country:'العراق', flag:'🇮🇶', emoji:'👩‍⚕️', lastSeen:'قبل ساعة', maritalStatus:'لم يسبق لها الزواج', height:163, weight:55, build:'متوسط', eyes:'عسلي', hair:'بني', skin:'قمحية', religion:'الإسلام - سنة', marriageType:['زواج شرعي'], education:'بكالوريوس', work:'طبيبة أسنان', smoking:'غير مدخنة', languages:'العربية، الإنجليزية', bio:'أحب عملي وأبحث عن شريك داعم.' },
  { id:'SK-80156', name:'', age:33, nationality:'مصرية', city:'القاهرة', country:'مصر', flag:'🇪🇬', emoji:'👩‍💼', lastSeen:'أمس', maritalStatus:'مطلقة', height:158, weight:60, build:'متوسط', eyes:'بني', hair:'بني', skin:'قمحية', religion:'الإسلام - سنة', marriageType:['زواج شرعي'], education:'ماجستير', work:'مديرة تسويق', smoking:'غير مدخنة', languages:'العربية، الإنجليزية', bio:'أم لطفل وأبحث عن زوج متفهم.' },
  { id:'SK-81234', name:'', age:25, nationality:'كويتية', city:'الكويت', country:'الكويت', flag:'🇰🇼', emoji:'👩‍🍳', lastSeen:'قبل 3 دقائق', maritalStatus:'لم يسبق لها الزواج', height:165, weight:52, build:'نحيف', eyes:'بني', hair:'أسود', skin:'فاتحة', religion:'الإسلام - سنة', marriageType:['زواج شرعي'], education:'بكالوريوس', work:'معلمة رياض أطفال', smoking:'غير مدخنة', languages:'العربية، الإنجليزية', bio:'أحب الأطفال والتعليم.' },
  { id:'SK-82345', name:'', age:27, nationality:'يمنية', city:'صنعاء', country:'اليمن', flag:'🇾🇪', emoji:'👩‍📚', lastSeen:'قبل ساعتين', maritalStatus:'لم يسبق لها الزواج', height:160, weight:53, build:'متوسط', eyes:'بني غامق', hair:'أسود', skin:'قمحية', religion:'الإسلام - سنة', marriageType:['زواج شرعي'], education:'بكالوريوس', work:'كاتبة', smoking:'غير مدخنة', languages:'العربية', bio:'أحب الكتابة والشعر.' }
];

var likedProfiles = [];
var skippedProfiles = [];
var currentSection = 'browse';
var isAnimating = false;

function showSection(section) {
  currentSection = section;
  document.querySelectorAll('.nav-item').forEach(function(btn) {
    btn.classList.toggle('active', btn.getAttribute('data-section') === section);
  });
  renderContent();
}

function renderContent() {
  var deckArea = document.getElementById('deckArea');
  var actionButtons = document.getElementById('actionButtons');
  if (currentSection === 'browse') {
    deckArea.style.display = 'flex';
    actionButtons.style.display = 'flex';
    renderCards();
  } else {
    deckArea.style.display = 'none';
    actionButtons.style.display = 'none';
    if (currentSection === 'matches') renderMatches();
    else if (currentSection === 'notifications') renderEmpty('🔔', 'الإشعارات', 'لديك إشعار جديد.');
    else if (currentSection === 'profile') renderMyProfile();
    else if (currentSection === 'help') renderEmpty('❓', 'المساعدة', 'support@example.com');
  }
}

function renderCards() {
  var stack = document.getElementById('cardStack');
  var available = profiles.filter(function(p) {
    return likedProfiles.indexOf(p.id) === -1 && skippedProfiles.indexOf(p.id) === -1;
  });
  if (available.length === 0) {
    stack.innerHTML = '<div class="empty-state" style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center">' +
      '<div class="big-icon">🎉</div><h3>انتهت الملفات المتاحة</h3>' +
      '<p>شاهدت جميع الملفات.</p>' +
      '<button class="btn-reset" onclick="resetDeck()">إعادة البدء</button></div>';
    return;
  }
  var html = '';
  if (available[2]) html += buildCardHTML(available[2], 'behind-3');
  if (available[1]) html += buildCardHTML(available[1], 'behind-2');
  html += buildCardHTML(available[0], 'top');
  stack.innerHTML = html;
  var topCard = stack.querySelector('.card.top');
  if (topCard) attachSwipe(topCard, available[0]);
}

function buildCardHTML(p, position) {
  var marriageTags = p.marriageType.map(function(m) {
    return '<span class="marriage-tag">' + m + '</span>';
  }).join('');
  var nameBlock = p.name ? '<div class="card-name">' + p.name + '</div>' : '';
  var bioBlock = p.bio ? '<div class="bio-preview">"' + p.bio + '"</div>' : '';
  var tapHint = position === 'top' ? '<div class="tap-hint">👆 اضغط للتفاصيل • اسحب للتفاعل</div>' : '';
  return '<div class="card ' + position + '" data-id="' + p.id + '">' +
    '<div class="stamp stamp-like">إعجاب</div>' +
    '<div class="stamp stamp-nope">تخطي</div>' +
    '<div class="card-head"><div><div class="card-id">' + p.id + '</div><div class="card-age">' + p.age + ' سنة</div></div>' +
    '<div class="card-avatar">' + p.emoji + '</div></div>' +
    nameBlock +
    '<div class="card-loc">' + p.city + '، ' + p.country + ' ' + p.flag + '</div>' +
    '<div class="card-nat">' + p.nationality + ' • آخر ظهور ' + p.lastSeen + '</div>' +
    '<div class="mini-details">' +
      '<div class="mini-detail"><span class="label">📏 الطول</span><span class="value">' + p.height + '</span></div>' +
      '<div class="mini-detail"><span class="label">⚖️ الوزن</span><span class="value">' + p.weight + 'كج</span></div>' +
      '<div class="mini-detail"><span class="label">👁️ العينان</span><span class="value">' + p.eyes + '</span></div>' +
      '<div class="mini-detail"><span class="label">💇 الشعر</span><span class="value">' + p.hair + '</span></div>' +
      '<div class="mini-detail" style="grid-column:1/-1"><span class="label">💍 الزواج</span><span class="value">' + marriageTags + '</span></div>' +
    '</div>' +
    bioBlock + tapHint + '</div>';
}

function attachSwipe(card, profile) {
  var startX = 0, startY = 0, currentX = 0, currentY = 0;
  var isDragging = false, hasMoved = false;
  var threshold = 100;

  card.addEventListener('touchstart', onStart, { passive: true });
  card.addEventListener('touchmove', onMove, { passive: false });
  card.addEventListener('touchend', onEnd, { passive: true });
  card.addEventListener('mousedown', onStart);
  document.addEventListener('mousemove', onMove);
  document.addEventListener('mouseup', onEnd);

  function onStart(e) {
    if (isAnimating) return;
    if (e.type === 'mousedown' && e.target.closest('button')) return;
    isDragging = true; hasMoved = false;
    var pt = e.touches ? e.touches[0] : e;
    startX = pt.clientX; startY = pt.clientY;
    currentX = 0; currentY = 0;
    card.style.transition = 'none';
  }
  function onMove(e) {
    if (!isDragging) return;
    if (e.type === 'touchmove') e.preventDefault();
    var pt = e.touches ? e.touches[0] : e;
    currentX = pt.clientX - startX;
    currentY = pt.clientY - startY;
    if (Math.abs(currentX) > 5 || Math.abs(currentY) > 5) hasMoved = true;
    card.style.transform = 'translate(' + currentX + 'px, ' + currentY + 'px) rotate(' + (currentX / 15) + 'deg)';
    var ls = card.querySelector('.stamp-like');
    var ns = card.querySelector('.stamp-nope');
    if (currentX > 0) { ls.style.opacity = Math.min(currentX / 100, 1); ns.style.opacity = 0; }
    else if (currentX < 0) { ns.style.opacity = Math.min(Math.abs(currentX) / 100, 1); ls.style.opacity = 0; }
    else { ls.style.opacity = 0; ns.style.opacity = 0; }
  }
  function onEnd(e) {
    if (!isDragging) return;
    isDragging = false;
    if (!hasMoved && Math.abs(currentX) < 5) {
      openModal(profile.id);
      card.style.transition = 'transform .3s';
      card.style.transform = '';
      return;
    }
    if (currentX > threshold) swipeOut(card, 'right', profile);
    else if (currentX < -threshold) swipeOut(card, 'left', profile);
    else {
      card.style.transition = 'transform .3s cubic-bezier(.16,1,.3,1)';
      card.style.transform = '';
      card.querySelectorAll('.stamp').forEach(function(s) { s.style.opacity = 0; });
    }
  }
}

function swipeOut(card, direction, profile) {
  if (isAnimating) return;
  isAnimating = true;
  var x = direction === 'right' ? window.innerWidth : -window.innerWidth;
  var rotate = direction === 'right' ? 30 : -30;
  card.style.transition = 'transform .4s ease, opacity .4s';
  card.style.transform = 'translate(' + x + 'px, 0) rotate(' + rotate + 'deg)';
  card.style.opacity = '0';
  setTimeout(function() {
    if (direction === 'right') {
      likedProfiles.push(profile.id);
      showToast('❤️ أعجبك ' + (profile.name || profile.id));
    } else {
      skippedProfiles.push(profile.id);
      showToast('✕ تخطيت ' + (profile.name || profile.id));
    }
    isAnimating = false;
    renderCards();
  }, 380);
}

function likeTop() {
  var a = getAvailableProfiles();
  if (a.length === 0) return;
  var card = document.querySelector('.card.top');
  if (card) swipeOut(card, 'right', a[0]);
}
function skipTop() {
  var a = getAvailableProfiles();
  if (a.length === 0) return;
  var card = document.querySelector('.card.top');
  if (card) swipeOut(card, 'left', a[0]);
}
function getAvailableProfiles() {
  return profiles.filter(function(p) {
    return likedProfiles.indexOf(p.id) === -1 && skippedProfiles.indexOf(p.id) === -1;
  });
}
function resetDeck() {
  likedProfiles = []; skippedProfiles = [];
  renderCards();
  showToast('تم إعادة البدء');
}

function renderMatches() {
  var area = document.getElementById('deckArea');
  if (likedProfiles.length === 0) {
    area.innerHTML = '<div class="empty-state" style="margin:auto"><div class="big-icon">💚</div><h3>لا توجد مطابقات</h3><p>ابدأ بإعجاب الملفات.</p></div>';
    return;
  }
  var html = '<div style="width:100%;max-width:400px;overflow-y:auto;max-height:100%">';
  html += '<div style="text-align:center;margin-bottom:16px"><h1 style="color:var(--gold);font-size:22px">💚 مطابقاتي (' + likedProfiles.length + ')</h1></div>';
  likedProfiles.forEach(function(id) {
    var p = profiles.find(function(x) { return x.id === id; });
    if (!p) return;
    html += '<div style="margin-bottom:12px;background:var(--card);border:1px solid var(--border);border-radius:16px;padding:14px" onclick="openModal(\'' + p.id + '\')">' +
      '<div style="display:flex;align-items:center;gap:12px">' +
        '<div style="width:50px;height:50px;border-radius:50%;border:2px solid var(--gold);display:flex;align-items:center;justify-content:center;font-size:24px">' + p.emoji + '</div>' +
        '<div style="flex:1"><div style="font-weight:700;color:var(--gold-light)">' + (p.name || p.id) + '</div>' +
        '<div style="font-size:12px;color:var(--text-dim)">' + p.age + ' سنة • ' + p.city + '</div></div>' +
        '<div style="color:var(--green);font-size:20px">❤️</div>' +
      '</div></div>';
  });
  html += '</div>';
  area.innerHTML = html;
}

function renderMyProfile() {
  var area = document.getElementById('deckArea');
  var html = '<div style="width:100%;max-width:400px"><div style="text-align:center;margin-bottom:20px"><h1 style="color:var(--gold);font-size:24px">ملفي</h1></div>';
  html += '<div style="background:var(--card);border:1px solid var(--border);border-radius:16px;padding:20px">';
  html += '<div class="mini-details">';
  html += '<div class="mini-detail"><span class="label">الحالة</span><span class="value" style="color:var(--green)">● نشط</span></div>';
  html += '<div class="mini-detail"><span class="label">الإعجابات</span><span class="value">' + likedProfiles.length + '</span></div>';
  html += '<div class="mini-detail"><span class="label">المتخطاة</span><span class="value">' + skippedProfiles.length + '</span></div>';
  html += '<div class="mini-detail"><span class="label">المتبقية</span><span class="value">' + getAvailableProfiles().length + '</span></div>';
  html += '</div></div></div>';
  area.innerHTML = html;
}

function renderEmpty(icon, title, desc) {
  document.getElementById('deckArea').innerHTML =
    '<div class="empty-state" style="margin:auto"><div class="big-icon">' + icon + '</div><h3>' + title + '</h3><p>' + desc + '</p></div>';
}

function openModal(id) {
  var p = null;
  for (var i = 0; i < profiles.length; i++) if (profiles[i].id === id) { p = profiles[i]; break; }
  if (!p) return;
  var marriageTags = p.marriageType.map(function(m) {
    return '<span class="marriage-tag">' + m + '</span>';
  }).join('');
  var html = '<h2>' + (p.name ? '👤 ' + p.name : p.id) + '</h2>';
  html += '<div class="sub">' + p.age + ' سنة • ' + p.city + '، ' + p.country + ' ' + p.flag + ' • ' + p.nationality + '</div>';
  html += '<div class="section-label">📐 المواصفات الجسدية</div><div class="modal-details">';
  html += '<div class="m-detail"><span class="label">📏 الطول</span><span class="value">' + p.height + ' سم</span></div>';
  html += '<div class="m-detail"><span class="label">⚖️ الوزن</span><span class="value">' + p.weight + ' كجم</span></div>';
  html += '<div class="m-detail"><span class="label">🧍 البنية</span><span class="value">' + p.build + '</span></div>';
  html += '<div class="m-detail"><span class="label">👁️ العينان</span><span class="value">' + p.eyes + '</span></div>';
  html += '<div class="m-detail"><span class="label">💇 الشعر</span><span class="value">' + p.hair + '</span></div>';
  html += '<div class="m-detail"><span class="label">🎨 البشرة</span><span class="value">' + p.skin + '</span></div></div>';
  html += '<div class="section-label">🕌 الدين والحالة</div><div class="modal-details">';
  html += '<div class="m-detail"><span class="label">🕌 الدين</span><span class="value">' + p.religion + '</span></div>';
  html += '<div class="m-detail"><span class="label">💕 الحالة</span><span class="value">' + p.maritalStatus + '</span></div>';
  html += '<div class="m-detail" style="grid-column:1/-1"><span class="label">💍 الزواج</span><span class="value">' + marriageTags + '</span></div></div>';
  html += '<div class="section-label">📖 التعليم والعمل</div><div class="modal-details">';
  html += '<div class="m-detail"><span class="label">📖 المؤهل</span><span class="value">' + p.education + '</span></div>';
  html += '<div class="m-detail"><span class="label">💼 المهنة</span><span class="value">' + p.work + '</span></div>';
  html += '<div class="m-detail"><span class="label">🚭 التدخين</span><span class="value">' + p.smoking + '</span></div>';
  html += '<div class="m-detail"><span class="label">🗣️ اللغات</span><span class="value">' + p.languages + '</span></div></div>';
  if (p.bio) html += '<div class="section-label">📝 نبذة</div><div class="bio-box">"' + p.bio + '"</div>';
  html += '<div class="modal-actions">';
  if (likedProfiles.indexOf(p.id) !== -1) {
    html += '<button class="btn-interest" style="background:var(--green);color:#fff">✓ معجب به</button>';
  } else {
    html += '<button class="btn-interest" onclick="likeFromModal(\'' + p.id + '\')">❤️ إعجاب</button>';
  }
  html += '</div><button class="btn-close" onclick="closeModal()">إغلاق</button>';
  document.getElementById('modalContent').innerHTML = html;
  document.getElementById('modalOverlay').classList.add('show');
}

function likeFromModal(id) {
  if (likedProfiles.indexOf(id) === -1) {
    likedProfiles.push(id);
    showToast('❤️ تم الإعجاب');
  }
  closeModal();
  renderCards();
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('show
