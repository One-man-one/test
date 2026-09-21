// ==================== البيانات ====================
var RAW=[
["SK-75001","عبدالله",19,"سوري","بيروت","لبنان","🇱🇧","👨",190,66,"نحيف","عسلي","أسود","داكنة","سني","أعزب",["شرعي","مدني"],"ثانوي","بلاط","مدخّن","العربية","أحب العمل وأن يكون لدي زوجة صالحة"],
["SK-61225","",25,"مغربية","الرياض","السعودية","🇸🇦","👩",166,52,"متوسط","بني","بني","فاتحة","سنية","عزباء",["شرعي"],"ماجستير","مهندسة","غير مدخنة","العربية، الفرنسية","أحب القراءة والرياضة"],
["SK-61297","",23,"يمنية","القاهرة","مصر","🇪🇬","👩‍🦰",166,55,"متوسط","بني","أسود","قمحية","سنية","عزباء",["شرعي"],"بكالوريوس","معلمة","غير مدخنة","العربية، الإنجليزية","أحب التدريس والعمل التطوعي"],
["SK-70953","",31,"مغربية","الجديدة","المغرب","🇲🇦","👩‍⚕️",170,65,"متوسط","عسلي","بني داكن","قمحية","سنية","عزباء",["شرعي"],"دكتوراه","طبيبة","غير مدخنة","العربية، الفرنسية، الإنجليزية","أحب الطب والسفر"],
["SK-72145","فاطمة",27,"تونسية","تونس","تونس","🇹🇳","👩‍🎓",164,54,"نحيف","بني","بني فاتح","قمحية","سنية","عزباء",["شرعي"],"ماجستير","مهندسة معمارية","غير مدخنة","العربية، الفرنسية","أحب الفن والتصميم والسفر"],
["SK-73412","",29,"مصرية","الإسكندرية","مصر","🇪🇬","👩‍🏫",160,58,"متوسط","بني غامق","أسود","قمحية","سنية","مطلقة",["شرعي"],"بكالوريوس","مدرسة","غير مدخنة","العربية، الإنجليزية","أبحث عن شريك متفهم"],
["SK-74125","ياسمين",24,"سورية","إستنبول","تركيا","🇹🇷","👩‍🍳",168,56,"نحيف","عسلي","بني","فاتحة","سنية","عزباء",["شرعي"],"بكالوريوس","صيدلانية","غير مدخنة","العربية، التركية","أحب الطبخ والقراءة"],
["SK-75890","",32,"أردنية","عمّان","الأردن","🇯🇴","👩‍⚖️",172,62,"متوسط","بني","بني داكن","قمحية","سنية","عزباء",["شرعي"],"ماجستير","محامية","غير مدخنة","العربية، الإنجليزية","طموحة وأبحث عن شريك متفاهم"],
["SK-76231","",26,"جزائرية","الجزائر","الجزائر","🇩🇿","👩‍💻",165,55,"متوسط","عسلي","بني","فاتحة","سنية","عزباء",["شرعي"],"بكالوريوس","مبرمجة","غير مدخنة","العربية، الفرنسية","أحب التقنية والرياضة"],
["SK-77456","مريم",30,"مغربية","الدار البيضاء","المغرب","🇲🇦","👩‍🔬",167,58,"متوسط","بني","أسود","قمحية","سنية","عزباء",["شرعي"],"دكتوراه","باحثة جامعية","غير مدخنة","العربية، الفرنسية، الإنجليزية","أحب العلم والبحث"],
["SK-78123","",22,"سعودية","الرياض","السعودية","🇸🇦","👩‍🎨",162,50,"نحيف","بني","أسود","فاتحة","سنية","عزباء",["شرعي"],"بكالوريوس","مصممة جرافيك","غير مدخنة","العربية، الإنجليزية","فنانة وأحب الحياة الهادئة"],
["SK-79344","",28,"عراقية","بغداد","العراق","🇮🇶","👩‍⚕️",163,55,"متوسط","عسلي","بني","قمحية","سنية","عزباء",["شرعي"],"بكالوريوس","طبيبة أسنان","غير مدخنة","العربية، الإنجليزية","أحب عملي وأبحث عن شريك داعم"],
["SK-80156","",33,"مصرية","القاهرة","مصر","🇪🇬","👩‍💼",158,60,"متوسط","بني","بني","قمحية","سنية","مطلقة",["شرعي"],"ماجستير","مديرة تسويق","غير مدخنة","العربية، الإنجليزية","أم لطفل وأبحث عن زوج متفهم"],
["SK-81234","",25,"كويتية","الكويت","الكويت","🇰🇼","👩‍🍳",165,52,"نحيف","بني","أسود","فاتحة","سنية","عزباء",["شرعي"],"بكالوريوس","معلمة رياض أطفال","غير مدخنة","العربية، الإنجليزية","أحب الأطفال والتعليم"],
["SK-82345","",27,"يمنية","صنعاء","اليمن","🇾🇪","👩‍📚",160,53,"متوسط","بني غامق","أسود","قمحية","سنية","عزباء",["شرعي"],"بكالوريوس","كاتبة","غير مدخنة","العربية","أحب الكتابة والشعر"],
["SK-83001","نورة",26,"سعودية","جدة","السعودية","🇸🇦","👩",163,54,"نحيف","بني","بني","فاتحة","سنية","عزباء",["شرعي"],"بكالوريوس","صيدلانية","غير مدخنة","العربية، الإنجليزية","أحب الرياضة والقراءة"],
["SK-83002","ليلى",24,"مصرية","الإسكندرية","مصر","🇪🇬","👩",161,53,"نحيف","بني","أسود","قمحية","سنية","عزباء",["شرعي"],"بكالوريوس","مصممة أزياء","غير مدخنة","العربية، الإنجليزية","أحب الموضة والفن"],
["SK-83003","رنا",29,"أردنية","عمّان","الأردن","🇯🇴","👩‍🎓",167,58,"متوسط","عسلي","بني","قمحية","سنية","عزباء",["شرعي"],"ماجستير","محاسبة","غير مدخنة","العربية، الإنجليزية","أحب السفر والموسيقى"],
["SK-83004","هدى",27,"إماراتية","دبي","الإمارات","🇦🇪","👩‍💼",165,55,"متوسط","بني","أسود","فاتحة","سنية","عزباء",["شرعي"],"ماجستير","مديرة مشاريع","غير مدخنة","العربية، الإنجليزية","طموحة وأحب التطوير"],
["SK-83005","سلمى",25,"مغربية","الرباط","المغرب","🇲🇦","👩‍⚕️",164,54,"نحيف","بني","بني داكن","قمحية","سنية","عزباء",["شرعي"],"دكتوراه","طبيبة أطفال","غير مدخنة","العربية، الفرنسية","أحب الأطفال والطب"],
["SK-83006","أمينة",30,"جزائرية","الجزائر","الجزائر","🇩🇿","👩‍🏫",166,58,"متوسط","بني","أسود","قمحية","سنية","عزباء",["شرعي"],"ماجستير","أستاذة جامعية","غير مدخنة","العربية، الفرنسية","أحب التعليم والبحث"],
["SK-83007","ريم",23,"سعودية","الدمام","السعودية","🇸🇦","👩‍🎨",160,50,"نحيف","بني","أسود","فاتحة","سنية","عزباء",["شرعي"],"بكالوريوس","فنانة تشكيلية","غير مدخنة","العربية","أحب الرسم والتصوير"],
["SK-83008","لينا",26,"لبنانية","بيروت","لبنان","🇱🇧","👩",168,56,"نحيف","عسلي","بني فاتح","فاتحة","سنية","عزباء",["شرعي"],"بكالوريوس","صحافية","غير مدخنة","العربية، الفرنسية، الإنجليزية","أحب الكتابة والإعلام"],
["SK-83009","دانة",28,"قطرية","الدوحة","قطر","🇶🇦","👩‍⚕️",165,55,"متوسط","بني","أسود","قمحية","سنية","عزباء",["شرعي"],"ماجستير","صيدلانية","غير مدخنة","العربية، الإنجليزية","أحب الرياضة والطبخ"],
["SK-83010","شهد",24,"يمنية","صنعاء","اليمن","🇾🇪","👩‍🎓",162,52,"نحيف","بني","أسود","قمحية","سنية","عزباء",["شرعي"],"بكالوريوس","مترجمة","غير مدخنة","العربية، الإنجليزية","أحب اللغات والثقافات"],
["SK-83011","نور",31,"سورية","دمشق","سوريا","🇸🇾","👩‍🏫",167,60,"متوسط","عسلي","بني","فاتحة","سنية","مطلقة",["شرعي"],"ماجستير","معلمة لغة عربية","غير مدخنة","العربية","أحب الأدب والشعر العربي"],
["SK-83012","أمل",29,"سودانية","الخرطوم","السودان","🇸🇩","👩‍⚕️",164,55,"متوسط","بني","أسود","داكنة","سنية","عزباء",["شرعي"],"بكالوريوس","طبيبة عامة","غير مدخنة","العربية، الإنجليزية","أحب العمل الإنساني"],
["SK-83013","زينب",25,"عراقية","الموصل","العراق","🇮🇶","👩‍🔬",162,53,"نحيف","بني","أسود","قمحية","سنية","عزباء",["شرعي"],"بكالوريوس","كيميائية","غير مدخنة","العربية","أحب العلوم والبحث"],
["SK-83014","منى",27,"مصرية","القاهرة","مصر","🇪🇬","👩‍💼",165,56,"متوسط","عسلي","بني","قمحية","سنية","عزباء",["شرعي"],"ماجستير","محاسبة قانونية","غير مدخنة","العربية، الإنجليزية","هادئة وأحب القراءة"],
["SK-83015","سارة",22,"بحرينية","المنامة","البحرين","🇧🇭","👩‍🎨",160,50,"نحيف","بني","أسود","فاتحة","سنية","عزباء",["شرعي"],"بكالوريوس","مصممة داخلية","غير مدخنة","العربية، الإنجليزية","أحب الديكور والفن"],
["SK-83016","هند",32,"مغربية","فاس","المغرب","🇲🇦","👩‍⚖️",168,62,"متوسط","بني","بني داكن","قمحية","سنية","عزباء",["شرعي"],"دكتوراه","قاضية","غير مدخنة","العربية، الفرنسية","أحب العدالة والقانون"],
["SK-83017","عبير",26,"كويتية","حولي","الكويت","🇰🇼","👩‍🍳",163,55,"متوسط","بني","أسود","فاتحة","سنية","عزباء",["شرعي"],"بكالوريوس","أخصائية تغذية","غير مدخنة","العربية، الإنجليزية","أحب الطبخ والرياضة"],
["SK-83018","مها",28,"سعودية","مكة","السعودية","🇸🇦","👩‍⚕️",165,57,"متوسط","بني","أسود","قمحية","سنية","عزباء",["شرعي"],"بكالوريوس","طبيبة أسنان","غير مدخنة","العربية، الإنجليزية","أحب الطب والأعمال التطوعية"],
["SK-83019","ليان",23,"أردنية","إربد","الأردن","🇯🇴","👩‍🎓",161,52,"نحيف","بني","بني فاتح","فاتحة","سنية","عزباء",["شرعي"],"بكالوريوس","معلمة","غير مدخنة","العربية، الإنجليزية","أحب التعليم والأطفال"],
["SK-83020","جنى",30,"فلسطينية","غزة","فلسطين","🇵🇸","👩‍🏫",164,56,"متوسط","بني","أسود","قمحية","سنية","عزباء",["شرعي"],"ماجستير","أستاذة","غير مدخنة","العربية، الإنجليزية","صابرة وأحب الحياة"]
];
var profiles=RAW.map(function(r){return{id:r[0],name:r[1],age:r[2],nat:r[3],city:r[4],country:r[5],flag:r[6],emoji:r[7],h:r[8],w:r[9],build:r[10],eyes:r[11],hair:r[12],skin:r[13],religion:r[14],marital:r[15],marriage:r[16],edu:r[17],work:r[18],smoke:r[19],lang:r[20],bio:r[21]};});

var PRELIKED=['SK-61225','SK-72145','SK-77456','SK-79344','SK-83005','SK-83009','SK-83015'];

// ==================== الحالة ====================
var liked=[], skipped=[], matches=[], myProfile=null;
var filters={minAge:18,maxAge:60,country:'',marriage:''};
var tab='browse', animating=false;

try{var saved=localStorage.getItem('zw_v6');if(saved){var o=JSON.parse(saved);liked=o.liked||[];skipped=o.skipped||[];matches=o.matches||[];myProfile=o.myProfile||null;filters=o.filters||filters;}}catch(e){}
function saveState(){try{localStorage.setItem('zw_v6',JSON.stringify({liked:liked,skipped:skipped,matches:matches,myProfile:myProfile,filters:filters}));}catch(e){}}

// ==================== التنقل ====================
function showSec(s,btn){
  tab=s;
  document.querySelectorAll('.nav button').forEach(function(b){b.classList.remove('on');});
  if(btn)btn.classList.add('on');
  render();
}
function render(){
  if(tab==='browse'){document.querySelector('.deck').style.display='block';document.getElementById('actionBtns').style.display='flex';renderStack();}
  else{document.getElementById('actionBtns').style.display='none';if(tab==='matches')renderMatches();else renderMyProfile();}
}

// ==================== التصفية ====================
function avail(){
  return profiles.filter(function(p){
    if(liked.indexOf(p.id)!==-1||skipped.indexOf(p.id)!==-1)return false;
    if(p.age<filters.minAge||p.age>filters.maxAge)return false;
    if(filters.country&&p.country!==filters.country)return false;
    if(filters.marriage&&p.marriage.indexOf(filters.marriage)===-1)return false;
    return true;
  });
}

// ==================== البطاقات ====================
function renderStack(){
  var stack=document.getElementById('stack');
  var a=avail();
  document.getElementById('counter').textContent=a.length+' متبقي';
  if(a.length===0){
    stack.innerHTML='<div class="empty"><h3>انتهت الملفات 🎉</h3><p>شاهدت جميع الملفات.</p><button class="reset" onclick="resetDeck()">إعادة البدء</button></div>';
    return;
  }
  var html='';
  if(a[2])html+=cardHTML(a[2],'b2');
  if(a[1])html+=cardHTML(a[1],'b1');
  html+=cardHTML(a[0],'front');
  stack.innerHTML=html;
  var top=stack.querySelector('.card.front');
  if(top)swipe(top,a[0]);
}
function cardHTML(p,cls){
  var tags=p.marriage.map(function(m){return '<span style="background:rgba(212,175,55,.15);color:#e8c96a;padding:3px 8px;border-radius:10px;font-size:11px;margin:2px;display:inline-block">'+m+'</span>';}).join('');
  var name=p.name?'<div class="name">'+p.name+'</div>':'<div style="height:10px"></div>';
  var bio=p.bio?'<div class="bio">"'+p.bio+'"</div>':'';
  return '<div class="card '+cls+'">'+
    '<div style="display:flex;justify-content:space-between;align-items:flex-start"><div><div style="color:#d4af37;font-size:13px;font-weight:700">'+p.id+'</div><div style="color:#888;font-size:13px;margin-top:2px">'+p.age+' سنة</div></div><div class="avatar">'+p.emoji+'</div></div>'+
    name+'<div class="loc">'+p.city+'، '+p.country+' '+p.flag+'</div>'+
    '<div class="row"><span class="l">📏 الطول</span><span class="v">'+p.h+' سم</span></div>'+
    '<div class="row"><span class="l">⚖️ الوزن</span><span class="v">'+p.w+' كجم</span></div>'+
    '<div class="row"><span class="l">👁️ العينان</span><span class="v">'+p.eyes+'</span></div>'+
    '<div class="row"><span class="l">💇 الشعر</span><span class="v">'+p.hair+'</span></div>'+
    '<div class="row"><span class="l">💼 المهنة</span><span class="v">'+p.work+'</span></div>'+
    '<div class="row"><span class="l">💍 الزواج</span><span class="v">'+tags+'</span></div>'+bio+
    '<div style="text-align:center;color:#666;font-size:11px;margin-top:16px">👆 اضغط للتفاصيل • اسحب للتفاعل</div></div>';
}

// ==================== السحب ====================
function swipe(card,p){
  var sx=0,cx=0,drag=false,moved=false;
  card.addEventListener('touchstart',start,{passive:true});
  card.addEventListener('touchmove',move,{passive:false});
  card.addEventListener('touchend',end);
  card.addEventListener('mousedown',start);
  document.addEventListener('mousemove',move);
  document.addEventListener('mouseup',end);
  function start(e){if(animating)return;drag=true;moved=false;var pt=e.touches?e.touches[0]:e;sx=pt.clientX;card.style.transition='none';}
  function move(e){if(!drag)return;if(e.type==='touchmove')e.preventDefault();var pt=e.touches?e.touches[0]:e;cx=pt.clientX-sx;if(Math.abs(cx)>5)moved=true;card.style.transform='translate('+cx+'px,'+(cx/20)+'px) rotate('+(cx/18)+'deg)';if(cx>50)card.style.boxShadow='0 0 30px #22c55e';else if(cx<-50)card.style.boxShadow='0 0 30px #ef4444';else card.style.boxShadow='';}
  function end(e){if(!drag)return;drag=false;if(!moved&&Math.abs(cx)<5){openModal(p.id);card.style.transform='';card.style.boxShadow='';return;}if(cx>100)swipeOut(card,'right',p);else if(cx<-100)swipeOut(card,'left',p);else{card.style.transition='transform .3s';card.style.transform='';card.style.boxShadow='';}cx=0;}
}
function swipeOut(card,dir,p){
  if(animating)return;animating=true;
  var x=dir==='right'?window.innerWidth:-window.innerWidth;
  card.style.transition='transform .4s, opacity .4s';
  card.style.transform='translate('+x+'px,0) rotate('+(dir==='right'?30:-30)+'deg)';
  card.style.opacity='0';
  setTimeout(function(){
    if(dir==='right'){
      liked.push(p.id);
      if(PRELIKED.indexOf(p.id)!==-1&&matches.indexOf(p.id)===-1){matches.push(p.id);showMatch(p);}
      else{toast('❤️ '+(p.name||p.id));}
    }else{skipped.push(p.id);toast('✕ '+(p.name||p.id));}
    saveState();animating=false;renderStack();
  },350);
}
function likeTop(){var a=avail();if(!a.length)return;var c=document.querySelector('.card.front');if(c)swipeOut(c,'right',a[0]);}
function skipTop(){var a=avail();if(!a.length)return;var c=document.querySelector('.card.front');if(c)swipeOut(c,'left',a[0]);}
function resetDeck(){if(!confirm('إعادة تعيين كل الإعجابات والمطابقات؟'))return;liked=[];skipped=[];matches=[];saveState();renderStack();toast('تم إعادة البدء');}
function showMatch(p){
  document.getElementById('matchText').textContent='أعجبت '+(p.name||p.id)+' وأعجبت بك أيضاً!';
  document.getElementById('matchPop').classList.add('on');
}

// ==================== المطابقات ====================
function renderMatches(){
  var stack=document.getElementById('stack');
  var html='<div style="max-width:400px;margin:0 auto;padding:16px;overflow-y:auto;max-height:calc(100vh - 140px)">';
  html+='<h2 style="color:#d4af37;text-align:center;margin-bottom:16px">💚 مطابقاتي ('+matches.length+')</h2>';
  if(!matches.length)html+='<p style="text-align:center;color:#888">لا توجد مطابقات بعد. عندما يعجب شخص بك ويعجبك، ستظهر هنا.</p>';
  matches.forEach(function(id){
    var p=profiles.find(function(x){return x.id===id;});
    if(!p)return;
    html+='<div class="match-card" onclick="openModal(\''+p.id+'\')"><div class="av">'+p.emoji+'</div><div><div style="color:#e8c96a;font-weight:700">'+(p.name||p.id)+'</div><div style="color:#888;font-size:12px">'+p.age+' سنة • '+p.city+'</div></div><span class="badge-match">تطابق 💚</span></div>';
  });
  html+='</div>';
  stack.innerHTML=html;document.querySelector('.deck').style.display='block';
  document.getElementById('counter').textContent=matches.length+' مطابقة';
}

// ==================== الملف الشخصي ====================
function renderMyProfile(){
  var stack=document.getElementById('stack');
  var p=myProfile||{};
  var html='<div style="max-width:400px;margin:0 auto;padding:16px;overflow-y:auto;max-height:calc(100vh - 140px)">';
  html+='<h2 style="color:#d4af37;text-align:center;margin-bottom:16px">ملفي الشخصي</h2>';
  html+='<div class="field"><label>الاسم</label><input id="pName" value="'+(p.name||'')+'" placeholder="اسمك"></div>';
  html+='<div class="field"><label>العمر</label><input id="pAge" type="number" value="'+(p.age||'')+'" placeholder="25"></div>';
  html+='<div class="field"><label>المدينة</label><input id="pCity" value="'+(p.city||'')+'" placeholder="مدينتك"></div>';
  html+='<div class="field"><label>الدولة</label><input id="pCountry" value="'+(p.country||'')+'" placeholder="دولتك"></div>';
  html+='<div class="field"><label>الطول (سم)</label><input id="pH" type="number" value="'+(p.h||'')+'" placeholder="170"></div>';
  html+='<div class="field"><label>الوزن (كجم)</label><input id="pW" type="number" value="'+(p.w||'')+'" placeholder="60"></div>';
  html+='<div class="field"><label>المهنة</label><input id="pWork" value="'+(p.work||'')+'" placeholder="مهنتك"></div>';
  html+='<div class="field"><label>نبذة</label><input id="pBio" value="'+(p.bio||'')+'" placeholder="نبذة قصيرة"></div>';
  html+='<button class="close gold-btn" onclick="saveMyProfile()">حفظ الملف</button>';
  html+='<div class="sec">📊 إحصائياتي</div>';
  html+='<div class="mrow"><span class="l">الإعجابات المرسلة</span><span class="v">'+liked.length+'</span></div>';
  html+='<div class="mrow"><span class="l">المتخطاة</span><span class="v">'+skipped.length+'</span></div>';
  html+='<div class="mrow"><span class="l">المطابقات</span><span class="v">'+matches.length+'</span></div>';
  html+='<div class="mrow"><span class="l">المتبقية</span><span class="v">'+avail().length+'</span></div>';
  html+='<button class="close" onclick="resetDeck()">🔄 إعادة تعيين كل شيء</button>';
  html+='</div>';
  stack.innerHTML=html;document.querySelector('.deck').style.display='block';
  document.getElementById('counter').textContent='';
}
function saveMyProfile(){
  myProfile={
    name:document.getElementById('pName').value,
    age:parseInt(document.getElementById('pAge').value)||0,
    city:document.getElementById('pCity').value,
    country:document.getElementById('pCountry').value,
    h:parseInt(document.getElementById('pH').value)||0,
    w:parseInt(document.getElementById('pW').value)||0,
    work:document.getElementById('pWork').value,
    bio:document.getElementById('pBio').value
  };
  saveState();toast('✅ تم حفظ ملفك');
}

// ==================== نافذة التفاصيل ====================
function openModal(id){
  var p=profiles.find(function(x){return x.id===id;});
  if(!p)return;
  var tags=p.marriage.map(function(m){return '<span style="background:rgba(212,175,55,.15);color:#e8c96a;padding:3px 10px;border-radius:12px;font-size:11px;margin:2px;display:inline-block">'+m+'</span>';}).join('');
  var h='<h2>'+(p.name?'👤 '+p.name:p.id)+'</h2>';
  h+='<div class="sub">'+p.age+' سنة • '+p.city+'، '+p.country+' '+p.flag+'</div>';
  h+='<div class="sec">📐 المواصفات الجسدية</div>';
  h+='<div class="mrow"><span class="l">📏 الطول</span><span class="v">'+p.h+' سم</span></div>';
  h+='<div class="mrow"><span class="l">⚖️ الوزن</span><span class="v">'+p.w+' كجم</span></div>';
  h+='<div class="mrow"><span class="l">🧍 البنية</span><span class="v">'+p.build+'</span></div>';
  h+='<div class="mrow"><span class="l">👁️ العينان</span><span class="v">'+p.eyes+'</span></div>';
  h+='<div class="mrow"><span class="l">💇 الشعر</span><span class="v">'+p.hair+'</span></div>';
  h+='<div class="mrow"><span class="l">🎨 البشرة</span><span class="v">'+p.skin+'</span></div>';
  h+='<div class="sec">🕌 الدين والحالة</div>';
  h+='<div class="mrow"><span class="l">🕌 الدين</span><span class="v">'+p.religion+'</span></div>';
  h+='<div class="mrow"><span class="l">💕 الحالة</span><span class="v">'+p.marital+'</span></div>';
  h+='<div class="mrow"><span class="l">💍 الزواج</span><span class="v">'+tags+'</span></div>';
  h+='<div class="sec">📖 التعليم والعمل</div>';
  h+='<div class="mrow"><span class="l">📖 المؤهل</span><span class="v">'+p.edu+'</span></div>';
  h+='<div class="mrow"><span class="l">💼 المهنة</span><span class="v">'+p.work+'</span></div>';
  h+='<div class="mrow"><span class="l">🚭 التدخين</span><span class="v">'+p.smoke+'</span></div>';
  h+='<div class="mrow"><span class="l">🗣️ اللغات</span><span class="v">'+p.lang+'</span></div>';
  if(p.bio)h+='<div class="sec">📝 نبذة</div><div class="bio">"'+p.bio+'"</div>';
  if(liked.indexOf(p.id)===-1)h+='<button class="close gold-btn" onclick="likeFromModal(\''+p.id+'\')">❤️ إعجاب</button>';
  h+='<button class="close" onclick="closeModal()">إغلاق</button>';
  document.getElementById('modalContent').innerHTML=h;
  document.getElementById('modal').classList.add('on');
}
function likeFromModal(id){
  var p=profiles.find(function(x){return x.id===id;});
  if(liked.indexOf(id)===-1){
    liked.push(id);
    if(PRELIKED.indexOf(id)!==-1&&matches.indexOf(id)===-1){matches.push(id);closeModal();showMatch(p);}
    else{t
