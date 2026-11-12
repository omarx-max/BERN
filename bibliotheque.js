(function(){
function P(id,nom,dates,ecole,libre,th,bio,oeuvres,cit){return{id:id,nom:nom,dates:dates,ecole:ecole,libre:libre,th:th,bio:bio,oeuvres:oeuvres,cit:cit};}

/* ===== BIBLIOTHÈQUE : pour ajouter un philosophe, copie une ligne P(...) ===== */
var L=[
P("socrate","Socrate","v. 470 – 399 av. J.-C.","Grèce antique",true,["connaissance","vertu","morale","vérité","ignorance","dialogue"],"Il interroge ses concitoyens à Athènes pour les aider à examiner leurs certitudes. Il n’a rien écrit : on le connaît surtout par Platon et Xénophon.",["Apologie de Socrate (Platon)","Criton (Platon)","Phédon (Platon)","Mémorables (Xénophon)"],[["Une vie sans examen ne vaut pas la peine d’être vécue.","Platon, Apologie de Socrate"],["Connais-toi toi-même.","Inscription du temple de Delphes, reprise par Socrate"]]),
P("platon","Platon","v. 428 – 348 av. J.-C.","Grèce antique",true,["connaissance","justice","vérité","âme","politique","amour","beauté"],"Élève de Socrate et fondateur de l’Académie. Ses dialogues explorent la justice, l’âme, l’amour et la connaissance.",["La République","Le Banquet","Phédon","Théétète"],[["L’étonnement est le propre du philosophe.","Théétète"],["La pensée est le dialogue silencieux de l’âme avec elle-même.","Théétète, Sophiste"]]),
P("aristote","Aristote","384 – 322 av. J.-C.","Grèce antique",true,["bonheur","vertu","politique","connaissance","morale","logique","cité"],"Élève de Platon et précepteur d’Alexandre le Grand. Il fonde la logique et écrit sur l’éthique, la politique, la nature et l’être.",["Éthique à Nicomaque","Politique","Métaphysique","Poétique"],[["L’homme est par nature un animal politique.","Politique, livre I"],["Tous les hommes désirent naturellement savoir.","Métaphysique, livre A"]]),
P("epicure","Épicure","341 – 270 av. J.-C.","Épicurisme",true,["bonheur","plaisir","mort","peur","amitié","sagesse"],"Il enseigne dans son Jardin à Athènes qu’une vie heureuse repose sur des plaisirs simples, l’amitié et l’absence de crainte.",["Lettre à Ménécée","Lettre à Hérodote","Maximes capitales"],[["La mort n’est rien pour nous.","Lettre à Ménécée"]]),
P("epictete","Épictète","v. 50 – v. 125","Stoïcisme",true,["liberté","jugement","stoïcisme","émotions","sagesse"],"Ancien esclave devenu maître stoïcien. Il enseigne à distinguer ce qui dépend de nous de ce qui n’en dépend pas.",["Manuel","Entretiens"],[["Ce ne sont pas les choses qui troublent les hommes, mais les jugements qu’ils portent sur les choses.","Manuel, 5"]]),
P("marc-aurele","Marc Aurèle","121 – 180","Stoïcisme",true,["stoïcisme","mort","temps","devoir","sagesse","pensée"],"Empereur romain et philosophe stoïcien. Il écrit pour lui-même des notes sur la maîtrise de soi et la brièveté de la vie.",["Pensées pour moi-même"],[["L’âme est teinte de la couleur de ses pensées.","Pensées, livre V"]]),
P("confucius","Confucius","551 – 479 av. J.-C.","Chine antique",true,["morale","éducation","vertu","société","famille","sagesse"],"Penseur chinois pour qui l’harmonie de la société naît de l’éducation, du respect et de la vertu de chacun.",["Entretiens (Analectes)"],[["Ce que tu ne désires pas pour toi-même, ne l’impose pas aux autres.","Entretiens, XV, 24"]]),
P("averroes","Averroès","1126 – 1198","Philosophie arabe (Al-Andalus)",true,["raison","foi","intellect","religion","connaissance"],"Juge, médecin et philosophe de Cordoue, grand commentateur d’Aristote. Il défend l’accord entre la raison et la foi.",["Discours décisif","L’Incohérence de l’incohérence","Commentaires sur Aristote"],[]),
P("machiavel","Machiavel","1469 – 1527","Renaissance italienne",true,["pouvoir","politique","guerre","ruse","fortune"],"Diplomate florentin. Il analyse le pouvoir tel qu’il est, et non tel qu’on voudrait qu’il soit.",["Le Prince","Discours sur la première décade de Tite-Live"],[["Il vaut mieux être craint qu’aimé, si l’on ne peut être les deux.","Le Prince, chap. XVII (traduction libre)"]]),
P("montaigne","Montaigne","1533 – 1592","Renaissance française",true,["doute","mort","sagesse","soi","éducation","tolérance"],"Il invente l’essai en écrivant sur lui-même et sur la diversité des opinions humaines.",["Essais"],[["Que sais-je ?","Essais, II, 12"],["Philosopher, c’est apprendre à mourir.","Essais, I, 20"]]),
P("descartes","Descartes","1596 – 1650","Rationalisme",true,["conscience","doute","raison","méthode","esprit","corps","vérité"],"Il fait du doute une méthode et de la pensée la première certitude. Il distingue l’esprit et le corps.",["Discours de la méthode","Méditations métaphysiques","Les Passions de l’âme"],[["Je pense, donc je suis.","Discours de la méthode, IV"],["Le bon sens est la chose du monde la mieux partagée.","Discours de la méthode, I"]]),
P("pascal","Pascal","1623 – 1662","Philosophie classique",true,["foi","raison","divertissement","mort","cœur","pensée"],"Mathématicien et penseur chrétien. Il explore la misère et la grandeur de l’homme.",["Pensées","Les Provinciales"],[["Le cœur a ses raisons que la raison ne connaît point.","Pensées"],["L’homme n’est qu’un roseau, le plus faible de la nature, mais c’est un roseau pensant.","Pensées"]]),
P("spinoza","Spinoza","1632 – 1677","Rationalisme",true,["liberté","bonheur","passions","Dieu","raison","joie"],"Philosophe d’Amsterdam. Il cherche la liberté et la joie dans la compréhension de la nature et de nos passions.",["Éthique","Traité théologico-politique","Traité politique"],[["Ne pas rire, ne pas pleurer, ne pas détester, mais comprendre.","Traité politique, I, 4"]]),
P("rousseau","Rousseau","1712 – 1778","Lumières",true,["liberté","société","égalité","éducation","politique","nature"],"Il s’interroge sur ce que la vie en société fait de la liberté et de l’égalité.",["Du contrat social","Discours sur l’origine de l’inégalité","Émile"],[["L’homme est né libre, et partout il est dans les fers.","Du contrat social, I, 1"]]),
P("kant","Kant","1724 – 1804","Lumières",true,["connaissance","morale","liberté","devoir","raison","Lumières"],"Il cherche les limites de ce que la raison peut connaître et fonde la morale sur le devoir et la liberté.",["Critique de la raison pure","Critique de la raison pratique","Fondements de la métaphysique des mœurs","Qu’est-ce que les Lumières ?"],[["Aie le courage de te servir de ton propre entendement.","Qu’est-ce que les Lumières ?, 1784"]]),
P("nietzsche","Nietzsche","1844 – 1900","Philosophie moderne",true,["sens de la vie","morale","vérité","volonté","nihilisme","art"],"Il met en question les valeurs héritées et invite chacun à créer sa propre manière de vivre.",["Ainsi parlait Zarathoustra","Le Gai Savoir","Par-delà le bien et le mal","Généalogie de la morale"],[["Ce qui ne me tue pas me rend plus fort.","Crépuscule des idoles"],["Dieu est mort.","Le Gai Savoir, §125"]]),
P("sartre","Sartre","1905 – 1980","Existentialisme",false,["liberté","existence","responsabilité","autrui","angoisse"],"Il affirme que nous sommes libres et responsables de ce que nous faisons de nous-mêmes.",["L’Être et le Néant","L’existentialisme est un humanisme","Huis clos","La Nausée"],[["L’existence précède l’essence.","L’existentialisme est un humanisme"],["L’enfer, c’est les autres.","Huis clos"]]),
P("beauvoir","Simone de Beauvoir","1908 – 1986","Existentialisme",false,["liberté","condition féminine","égalité","existence","morale"],"Elle analyse comment la société fabrique la condition des femmes et défend une morale de la liberté.",["Le Deuxième Sexe","Pour une morale de l’ambiguïté","Mémoires d’une jeune fille rangée"],[["On ne naît pas femme : on le devient.","Le Deuxième Sexe"]]),
P("camus","Albert Camus","1913 – 1960","Philosophie de l’absurde",false,["absurde","sens de la vie","révolte","liberté","mort"],"Il part du constat que le monde n’a pas de sens évident et cherche comment vivre pleinement malgré cela.",["Le Mythe de Sisyphe","L’Étranger","L’Homme révolté","La Peste"],[["Il faut imaginer Sisyphe heureux.","Le Mythe de Sisyphe"]]),
P("chalmers","David Chalmers","né en 1966","Philosophie de l’esprit",false,["conscience","esprit","expérience","problème difficile","panpsychisme"],"Il a formulé en 1995 le « problème difficile » de la conscience : pourquoi le cerveau s’accompagne-t-il d’expérience vécue ?",["The Conscious Mind","Reality+"],[["Il n’y a rien que nous connaissions plus directement.","Conférence TED, 2014 (traduction libre)"]])
];

/* ===== Recherche ===== */
function n(s){return String(s).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");}
function e(s){return String(s).replace(/[&<>"]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c];});}
var TH=[];
L.forEach(function(p){
  p.th.forEach(function(t){if(TH.indexOf(t)<0)TH.push(t);});
  p.nm=n(p.nom);p.tx=n(p.th.join(" "));p.ou=n(p.oeuvres.join(" "));
  p.ci=n(p.cit.map(function(c){return c[0]+" "+c[1];}).join(" "));p.re=n(p.ecole+" "+p.dates+" "+p.bio);
});
TH.sort(function(a,b){return a.localeCompare(b,"fr");});

function cherche(q){
  var mots=n(q).split(/\s+/).filter(Boolean);
  if(!mots.length)return L.slice();
  var r=[];
  L.forEach(function(p){
    var sc=0,ok=true;
    mots.forEach(function(m){
      var s=p.nm.indexOf(m)>-1?10:p.tx.indexOf(m)>-1?6:p.ou.indexOf(m)>-1?4:(p.ci.indexOf(m)>-1||p.re.indexOf(m)>-1)?1:0;
      if(!s)ok=false;sc+=s;
    });
    if(ok)r.push({p:p,s:sc});
  });
  r.sort(function(a,b){return b.s-a.s||a.p.nom.localeCompare(b.p.nom);});
  return r.map(function(x){return x.p;});
}

/* ===== Style ===== */
var st=document.createElement("style");
st.textContent=`
.recherche{position:fixed;top:1rem;left:8.4rem;right:1rem;max-width:30rem;z-index:40}
.recherche input{width:100%;height:44px;background:#0b0b0b url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' fill='none' stroke='%239a9a9a' stroke-width='2' stroke-linecap='round'%3E%3Ccircle cx='8' cy='8' r='6'/%3E%3Cpath d='m13 13 4 4'/%3E%3C/svg%3E") no-repeat 14px center;color:#f3f3f3;border:1px solid #333;border-radius:12px;padding:0 1rem 0 2.7rem;font:400 .95rem Inter,system-ui,sans-serif}
.recherche input:focus{outline:none;border-color:#b8a6ff;box-shadow:0 0 0 3px rgba(184,166,255,.18)}
.chips{display:flex;flex-wrap:wrap;gap:.5rem;margin:0 0 2.2rem}
.chip{background:#0b0b0b;color:#9a9a9a;border:1px solid #2a2a2a;border-radius:999px;padding:.4rem .9rem;font:500 .85rem Inter,system-ui,sans-serif;cursor:pointer;transition:.2s}
.chip:hover{color:#f3f3f3;border-color:#b8a6ff}
.phi .eco{margin:0 0 .8rem}
.phi blockquote{margin:.8rem 0;padding-left:.9rem;border-left:2px solid #b8a6ff;font:italic 500 1.08rem/1.45 var(--serif);color:#e6e6e6}
.tags{display:flex;flex-wrap:wrap;gap:.35rem;margin-top:.8rem}
.tags i{font-style:normal;font-size:.75rem;color:#8d8d8d;border:1px solid #2a2a2a;border-radius:999px;padding:.1rem .6rem}
.cit{margin:0 0 1.2rem;max-width:46rem;padding:1.1rem 1.4rem;background:#0b0b0b;border:1px solid #222;border-left:3px solid #b8a6ff;border-radius:0 14px 14px 0;font:italic 500 1.35rem/1.45 var(--serif)}
.cit cite{display:block;margin-top:.5rem;font:400 .85rem var(--sans);font-style:normal;color:#8d8d8d}
.h2{font:600 1.8rem var(--serif);margin:2.4rem 0 1rem}
.oeuvres{max-width:46rem;padding-left:1.2rem}.oeuvres li{margin:.4rem 0}.oeuvres a{color:#b8a6ff}
.liens{display:flex;flex-wrap:wrap;gap:.7rem;margin:1.2rem 0}
.liens a{border:1px solid #333;border-radius:12px;padding:.6rem 1rem;text-decoration:none;color:#f3f3f3;font-size:.95rem;transition:.2s}
.liens a:hover{border-color:#b8a6ff;color:#b8a6ff}
@media(max-width:640px){.recherche{left:4.9rem}}`;
document.head.appendChild(st);

/* ===== Barre de recherche et lien dans le menu ===== */
var scene=document.getElementById("scene"),Q="",tmr;
var f=document.createElement("form");
f.className="recherche";f.setAttribute("role","search");
f.innerHTML='<input type="search" id="rech" placeholder="Rechercher un thème, un philosophe…" aria-label="Rechercher un thème ou un philosophe" autocomplete="off">';
document.body.appendChild(f);
var inp=document.getElementById("rech");
document.querySelector("#tiroir a.accueil").insertAdjacentHTML("afterend",'<a class="accueil" href="#biblio">Bibliothèque de philosophes</a>');
function go(q,saisie){
  Q=q.trim();
  if(!saisie)inp.value=q;
  if(location.hash==="#biblio")resultats();else location.hash="#biblio";
}
f.onsubmit=function(ev){ev.preventDefault();go(inp.value,true);};
inp.oninput=function(){clearTimeout(tmr);tmr=setTimeout(function(){go(inp.value,true);},180);};

/* ===== Pages ===== */
function carte(p,mots){
  var c=p.cit[0];
  for(var i=0;i<p.cit.length;i++){
    if(mots.some(function(m){return n(p.cit[i][0]).indexOf(m)>-1;})){c=p.cit[i];break;}
  }
  return '<a class="dossier phi" href="#p-'+p.id+'"><span class="num">'+e(p.dates)+'</span><h3>'+e(p.nom)+'</h3><p class="eco">'+e(p.ecole)+'</p>'+
    (c?'<blockquote>« '+e(c[0])+' »</blockquote>':'')+
    '<span class="tags">'+p.th.slice(0,4).map(function(t){return '<i>'+e(t)+'</i>';}).join("")+'</span></a>';
}
function resultats(){
  var mots=n(Q).split(/\s+/).filter(Boolean),R=cherche(Q);
  scene.innerHTML='<div class="vue"><span class="etiquette">Bibliothèque</span><h1>'+(Q?e(Q):'Les philosophes')+'</h1>'+
    '<p class="intro">'+(Q?R.length+' résultat'+(R.length>1?'s':'')+'. Tu peux chercher un thème, un philosophe, une œuvre ou un mot d’une citation.':'Cherche un thème, un philosophe, une œuvre ou une citation dans la barre en haut, ou touche un thème ci-dessous.')+'</p>'+
    '<div class="chips">'+TH.map(function(t){return '<button type="button" class="chip" data-q="'+e(t)+'">'+e(t)+'</button>';}).join("")+'</div>'+
    (R.length?'<div class="grille">'+R.map(function(p){return carte(p,mots);}).join("")+'</div>':'<p class="intro">Aucun résultat. Essaie un autre mot ou touche un thème de la liste.</p>')+'</div>';
  scene.querySelectorAll(".chip").forEach(function(b){b.onclick=function(){go(b.getAttribute("data-q"));};});
  document.title="Bibliothèque · Philosophie";window.scrollTo(0,0);
}
function fiche(id){
  var p=L.filter(function(x){return x.id===id;})[0];
  if(!p){location.hash="#biblio";return;}
  var nq=encodeURIComponent(p.nom);
  var cit=p.cit.length?p.cit.map(function(c){return '<blockquote class="cit">« '+e(c[0])+' »<cite>'+e(c[1])+'</cite></blockquote>';}).join(""):'<p class="intro">Aucune citation vérifiée pour le moment.</p>';
  var oeu=p.oeuvres.map(function(o){
    var t=encodeURIComponent(o.replace(/\s*\(.*\)/,""));
    return '<li>'+(p.libre?'<a href="https://fr.wikisource.org/w/index.php?search='+t+'" target="_blank" rel="noopener">'+e(o)+'</a>':e(o))+'</li>';
  }).join("");
  var lib=p.libre?
    '<div class="liens"><a href="https://fr.wikisource.org/w/index.php?search='+nq+'" target="_blank" rel="noopener">Wikisource</a><a href="https://www.gutenberg.org/ebooks/search/?query='+nq+'" target="_blank" rel="noopener">Projet Gutenberg</a><a href="https://archive.org/search?query='+nq+'" target="_blank" rel="noopener">Internet Archive</a></div><p class="intro">Les textes originaux sont dans le domaine public. Certaines traductions modernes peuvent rester protégées.</p>':
    '<p class="intro">Ses œuvres sont encore protégées par le droit d’auteur : elles ne sont pas en accès libre. Tu peux les emprunter en bibliothèque.</p>';
  scene.innerHTML='<div class="vue"><nav class="fil"><a href="#">Accueil</a><span>/</span><a href="#biblio">Bibliothèque</a><span>/</span><b>'+e(p.nom)+'</b></nav>'+
    '<span class="etiquette">'+e(p.ecole)+' · '+e(p.dates)+'</span><h1>'+e(p.nom)+'</h1><p class="intro">'+e(p.bio)+'</p>'+
    '<div class="chips">'+p.th.map(function(t){return '<button type="button" class="chip" data-q="'+e(t)+'">'+e(t)+'</button>';}).join("")+'</div>'+
    '<h2 class="h2">Citations</h2>'+cit+'<h2 class="h2">Ouvrages</h2><ul class="oeuvres">'+oeu+'</ul>'+
    '<h2 class="h2">Lire gratuitement</h2>'+lib+
    '<div class="liens"><a href="https://fr.wikipedia.org/w/index.php?search='+nq+'" target="_blank" rel="noopener">En savoir plus sur Wikipédia</a></div></div>';
  scene.querySelectorAll(".chip").forEach(function(b){b.onclick=function(){go(b.getAttribute("data-q"));};});
  document.title=p.nom+" · Philosophie";window.scrollTo(0,0);
}
function route(){
  var h=location.hash,m=/^#p-([a-z0-9-]+)$/.exec(h);
  if(m)fiche(m[1]);else if(h==="#biblio")resultats();
}
window.addEventListener("hashchange",route);
route();
})();
