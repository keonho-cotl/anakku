/* ===== ASSETS: ganti path/URL di sini untuk memakai foto & lagu asli ===== */
const A = {
  audio: "jumbo.mp3", // lagu
  welcomeBg: "aa.jpg", // background halaman Welcome
  lockWallpaper: "wk.jpg", // wallpaper lockscreen
  wallpaper: "wu.jpg", // wallpaper home screen
  momAvatar: "pp fb.jpg", // foto profil Facebook
  cover: "h.jpg", // cover Facebook (boleh kosong)

  // Foto postingan Facebook: fb-1 sampai fb-17 (satu foto per postingan, urut dari yang terlama)
  photos: {
     "fb-1": "g1a.jpg",
     "fb-2": "g1c.jpg",
     "fb-3": "g2a.jpg",
     "fb-4": "g2b.jpg",
     "fb-5": "g222.jpg",
     "fb-6": "g26.jpg",
     "fb-7": "g2m.jpg",
     "fb-8": "g2g.jpg",
     "fb-9": "g223.jpg",
     "fb-10": "g3a.jpg",
     "fb-11": "g3b.jpg",
     "fb-12": "g3t.jpg",
     "fb-13": "g3y.jpg",
     "fb-14": "g5c.jpg",
     "fb-15": "g4a.jpg",
     "fb-16": "2.jpg",
     "fb-17": "g5h.jpg",
     "fb-18": "g4j.jpg",


  },
};
/* ===== ALBUM GALLERY =====
   Format tiap foto: ["nama-file.jpg", "tanggal", "caption"]
   Tambah foto = tambah satu baris di album yang diinginkan. File kosong ("") = tampil placeholder. */
const ALB = [
  {
    name: "My Little Baby",
    years: "2009-2010",
    items: [
      ["g1a.jpg", "2008-07-12"],
      ["g1b.jpg", "2009-01-13"],
      ["g1c.jpg", "2009-04-02"],
      ["g1d.jpg", "2009-05-20"],
      ["g1e.jpg", "2009-07-11"],
      ["g1f.jpg", "2009-09-05"],
    ],
  },
  {
    name: "TK",
    years: "2015–2017",
    items: [
      ["g2a.jpg", "2015-04-09"],
      ["g2b.jpg", "2014-03-12"],
      ["g2c.jpg", "2015-07-22"],
      ["g2d.jpg", "2016-07-18"],
      ["g2e.jpg", "2017-05-03"],
      ["g2f.jpg", "2017-12-25"],
      ["g2g.jpg", "2018-03-14"],
      ["g2h.jpg", "2018-07-22"],
      ["g2i.jpg", "2019-12-14"],
      ["g2j.jpg", "2019-12-14"],
      ["g2k.jpg", "2019-12-14"],
      ["g2l.jpg", "2019-12-14"],
      ["g2m.jpg", "2019-12-14"],
      ["g2n.jpg", "2019-12-14"],
      ["g2o.jpg", "2019-12-14"],
      ["g2p.jpg", "2016-20-07"],
      ["g2q.jpg", "2016-20-07"],
      ["g2r.jpg", "2016-20-07"],
      ["g2s.jpg", "2016-20-07"],
      ["g2t.jpg", "2016-20-07"],
      ["g2u.jpg", "2016-20-07"],
      ["g2v.jpg", "2016-20-07"],
      ["g2w.jpg", "2016-20-07"],
      ["g2x.jpg", "2016-20-07"],
      ["g2y.jpg", "2016-20-07"],
      ["g2z.jpg", "2016-20-07"],
      ["g21.jpg", "2017-03-12"],
      ["g22.jpg", "2016-03-12"],
      ["g23.jpg", "2016-03-12"],
      ["g24.jpg", "2017-03-12"],
      ["g25.jpg", "2018-03-12"],
      ["g26.jpg", "2013-03-12"],
      ["g27.jpg", "2015-03-12"],
      ["g28.jpg", "2016-03-12"],
      ["g29.jpg", "2019-03-12"],
      ["g210.jpg", "2011-03-12"],
      ["g211.jpg", "2014-03-12"],
      ["g212.jpg", "2014-03-12"],
      ["g213.jpg", "2014-03-12"],
      ["g214.jpg", "2014-03-12"],
      ["g215.jpg", "2014-03-12"],
      ["g216.jpg", "2014-03-12"],
      ["g217.jpg", "2014-03-12"],
      ["g218.jpg", "2014-03-12"],
      ["g219.jpg", "2014-03-12"],
      ["g220.jpg", "2014-03-12"],
      ["g221.jpg", "2014-03-12"],
      ["g222.jpg", "2014-03-12"],
      ["g223.jpg", "2014-03-12"]
    ],
  },
  {
    name: "Abang Sean",
    years: "2020–2023",
    items: [
      ["g3a.jpg", "2020-06-10"],
      ["g3b.jpg", "2021-04-04"],
      ["g3c.jpg", "2022-10-08"],
      ["g3d.jpg", "2023-05-20"],
      ["g3e.jpg", "2020-06-10"],
      ["g3f.jpg", "2020-06-10"],
      ["g3g.jpg", "2020-06-10"],
      ["g3h.jpg", "2020-06-10"],
      ["g3i.jpg", "2020-06-10"],
      ["g3j.jpg", "2020-06-10"],
      ["g3k.jpg", "2020-06-10"],
      ["g3l.jpg", "2020-06-10"],
      ["g3m.jpg", "2020-06-10"],
      ["g3n.jpg", "2020-06-10"],
      ["g3o.jpg", "2020-06-10"],
      ["g3p.jpg", "2020-06-10"],
      ["g3q.jpg", "2020-06-10"],
      ["g3r.jpg", "2020-06-10"],
      ["g3s.jpg", "2020-06-10"],
      ["g3t.jpg", "2020-06-10"],
      ["g3u.jpg", "2020-06-10"],
      ["g3v.jpg", "2020-06-10"],
      ["g3w.jpg", "2020-06-10"],
      ["g3x.jpg", "2020-06-10"],
      ["g3y.jpg", "2020-06-10"],
      ["g3z.jpg", "2020-06-10"]
    ],
  },
  {
    name: "si ganteng",
    years: "2024–2026",
    items: [
      ["g4a.jpg", "2024-03-14"],
      ["g4b.jpg", "2024-09-01"],
      ["g4c.jpg", "2025-06-15"],
      ["g4d.jpg", "2025-12-24"],
      ["g4e.jpg", "2026-03-12"],
      ["g4f.jpg", "2026-08-17"],
      ["g4g.jpg", "2024-03-14"],
      ["g4h.jpg", "2024-03-14"],
      ["g4i.jpg", "2024-03-14"],
      ["g4j.jpg", "2024-03-14"],
      ["g4k.jpg", "2024-03-14"],
      ["g4l.jpg", "2024-03-14"],
      ["g4m.jpg", "2024-03-14"],
      ["g4n.jpg", "2024-03-14"],
      ["g4o.jpg", "2024-03-14"],
      ["g4p.jpg", "2024-03-14"],
      ["g4q.jpg", "2024-03-14"],
      ["g4r.jpg", "2024-03-14"],
      ["g4s.jpg", "2024-03-14"],
      ["g4t.jpg", "2024-03-14"],
      ["g4u.jpg", "2024-03-14"],
      ["g4v.jpg", "2024-03-14"],
      ["g4w.jpg", "2024-03-14"],
      ["g4x.jpg", "2024-03-14"],
      ["g4y.jpg", "2024-03-14"],   
      ["g4z.jpg", "2024-03-14"]
     ],
  },
   {
    name: "teman teman sean",
    years: "2024–2026",
    items: [
      ["g5a.jpg", "2024-03-14"],
      ["g5b.jpg", "2024-09-01"],
      ["g5c.jpg", "2025-06-15"],
      ["g5d.jpg", "2025-12-24"],
      ["g5e.jpg", "2026-03-12"],
      ["g5f.jpg", "2026-08-17"],
      ["g5g.jpg", "2026-03-12"],
      ["g5h.jpg", "2026-08-17"],
      ["g5i.jpg", "2026-08-17"],
      ["g5j.jpg", "2026-08-17"],
      ["g5k.jpg", "2026-08-17"],
      ["g5l.jpg", "2026-08-17"],
      ["g5m.jpg", "2026-08-17"],
      ["g5n.jpg", "2026-08-17"],
      ["g5o.jpg", "2026-08-17"],
      ["g5p.jpg", "2026-08-17"],
    ],
  },
];
/* ===== POSTINGAN FACEBOOK ===== */
const POSTS = [
  [
    "2008-08-12",
    "Pertama kali lihat hasil USG ini, ibu sama ayah sampai ga bisa berhenti senyum. kecil banget kamu di sana nak, tapi rasanya kebahagiaan kita langsung berubah jadi seluas ini. tumbuh sehat terus di perut ibu ya, sayang 🤍",
    214,
    [
      ["Seanhomage", "Masya Allah ganteng bgt, selamat ya mbak! 🥰"],
      ["konhocor", "Alhamdulillah, sehat sehat mba dan janin 🤲"],
    ],
  ],
  [
    "2009-03-05",
    "Tiap hari ada aja ekspresi barunya nak 😭❤️ Dari yang merem, ngulet, miring, sampai melek natap ibu begini. Gak berasa kamu udah makin pinter dan gemesin. Sehat terus ya sayang 🤍",
    148,
    [
        ["Abod", "Bentar lagi udah bisa diajak main bola nih jagoan😆"],
        ["Eomceanzip","Aduh meleknya pas natap kamera dapet banget! Fase ini emang lagi lucu-lucunya nih mba, nikmati terus yaa 🥹✨"],
        ["Wawa Gepeng", "Masya Allah tabarakallah... Anak ganteng sholeh ya sayang... Gemessss bangettt ih pengen rasanya colek pipinya!!! 🥰😘❤️"],
        ["v aja", "Duh bund, anaknya ganteng bngt dari bayi gimana udh gede nanti 😆"],
    ],
  ],
  [
    "2015-04-02",
    "Hari pertama sekolah! 🥺 Mama yang nemenin di luar kelas malah yang sibuk ngusap mata. Cepat banget kamu tumbuhnya sayang, perasaan baru kemarin nangis minta digendong jarik... Semangat menuntut ilmu jagoan mama 🤍🏅",
    96,
    [["Mommy Jju", "Sama bgt, waktu berasa cepet bgt kalau udah ngeliat anak mulai masuk sekolah 🥲 Nangis ga pas ditinggal di kelas? Anakku dulu drama dulu nangis di pojokan  😂"]],
  ],
  [
    "2015-04-03",
    "Dikirim gurunya foto pertama kali perkenalan ke depan 🥹 Keliatan sekali muka adek grogi bibirnya sampe dikatup gitu, tapi mamah tau adek pasti bisa dan berani. Apapun hasilnya, adek tetap juara buat mamah! 🏅❤️",
    121,
    [
      ["Dudul", "Lucu banget mukanya pas nahan grogi gitu 😂😂 tapi jempolan bgt udah berani berdiri di depan teman-temannya! 👍✨"],
      ["Racel", "Walaupun tegang tapi tetep ganteng dan berani maju ke depan yaa! 🥳"],
    ],
  ],
  [
    "2015-04-04",
    "Baru 3 hari masuk sekolah adek udah punya temen banyak 😭❤️ Ternyata anaknya humble banget, langsung rangkul-rangkulan gini sama temen-temen barunya. Lega rasanya lihat adek seneng dan betah di sekolah 🎒",
    302,
    [
      ["Seanhomage", "kakak terharu lihat kamu punya banyak temen, semoga sampai besar nanti kamu selalu dikelilingi orang-orang baik ya adekkk 🥹❤️"],
      ["breenaa", "tos dulu jagoan!"],
      ["kakaii", "ikut nangis liatnya 🥹"],
    ],
  ],
  [
    "2015-09-18",
    "Dapat kiriman foto dari gurunya 🥺 Ternyata kalau lagi pelajaran mewarnai sama menempel bisa seanteng dan sefokus ini. Alhamdulillah, lega lihatnya adek mulai bisa menikmati kegiatan di sekolah 🎨✂️❤️",
    187,
    [["Mamah Kono", "Duh adem banget lihatnya 🥹"]],
  ],
  [
    "2015-10-09",
    "Hari ini anak ibu lagi seneng banget main di taman, dari tadi ga mau diajak pulang 😭❤️",
    133,
    [["Mamah Kono.", "sama jeng anakku juga gitu"]],
  ],
  [
    "2016-01-13",
    "Selamat ulang tahun yang ke-7, jagoan mamah 🎂 Minta dirayain di sekolah bareng temen-temen kelas, alhamdulillah hari ini terlaksana walau sederhana. Maaf ya nak kalau mamah belum bisa kasih yang terbaik buat adek, tapi percaya deh doa dan rasa sayang mamah buat kamu selalu melimpah setiap hari 🥹❤️ Semoga adek tumbuh jadi anak yang sehat, pintar, soleh, dan selalu dikelilingi kebahagiaan. Terus tebarkan senyum manis kamu ya sayang",
    256,
    [
      ["Mamah Kono", "h4ppy birtdhY s34n tm3n ku p4l1ng k3r3n!! 🎂🥳 m4k4s1h ya k3k ny4 3n4k bgt t4d1 d1 k3l4s x_x b3st13 s3l4m4ny4!! 🤜🤛"],
      ["Mommy Jju", "happy birthday sean!"],
      ["Moms jamie", "Selamat Ulang Tahun Sean! Nanti Pulang Sekolah Jgn Lupa Kita Main Bola Ya"],
      ["Martin's Mom", "H4PPY bithDay SeAN, aku Mau kUE nya DonG"]
    ],
  ],
  [
    "2016-03-12",
    "Hari kelulusan adek 🎓🥺 Rasanya baru kemarin mamah tuntun adek jalan ke kelas, sekarang udah berdiri berani di panggung pegang mik begini. Jujur mamah belum siap melihat adek tumbuh makin besar dan dewasa secepat ini... Tapi mamah bangga banget sama adek. Selamat lulus ya sayang, perjalananmu masih panjang, tumbuhlah jadi anak yang selalu bahagia 🤍✨",
    178,
    [
      ["Tante Pus", "keren sekali adekkk"],
      ["Tukang Galon", "Wuih buk anaknya sudah gede aja perasaan kemrin masih cimit"],
      ["Wibu Mentok", "Ya Allah, sudah besar Rasanya baru kemarin masuk TK, sekarang sudah mau SD 😭😭😭"],
    ],
  ],
  [
    "2020-07-18",
    "Sempat lupa password FB bertahun-tahun, akhirnya ingat dan bisa buka akun lagi 😭 Liat postingan-postingan dulu rasanya baru kemarin, tau-tau sekarang anak mamah udah tumbuh gede banget. Udah mau masuk SMP aja... Sekarang kalau mau difotoin udah mulai malu-malu begini  🫣 Jangan cepet-cepet dewasa dong adek, mamah masih kangen masa-masa digendong 🥺🤍✨",
    341,
    [
      ["Seanhomage", "kakak nangis banget lihat foto ini, kapan ya terakhir kali kamu sekecil ini dek…. jangan gede-gede dulu ya sayang, kakak belum siap, jadi anak pintar ya dek"],
    ],
  ],
  [
    "2018-05-03",
    "Tiba-tiba adek manggil 'Mamah! Mamah!' heboh banget, mamah kaget kira ada apa 😭 Ternyata cuma mau dipamerin & disuruh fotoin gara-gara lagi pake baju baru yang dibeliin bapaknya 😂😂😂😂. Udah gitu gayanya sok cool banget lagi, senyumnya tipis-tipis ala model",
    204,
    [["Tante Rini", "keren banget sean 👏 cocok nih jadi model"]],
  ],
  [
    "2020-12-14",
    "Datang-datang langsung cemberut lipat tangan gara-gara gak diajak ikutan ke mall sama bapaknya 😂😂, giliran mamah bukain meja makan dan liat ada makanan kesukaannya, langsung sumringah emang cara paling ampuh ngebujuk anak bujang mamah ini cuma pakai makanan 😂😂😂😂",
    117,
    [["Jamal", "Mode ngambeknya langsung lenyap disikat makanan enak! Mantap jagoan, perut kenyang hati senang 😎👍🏻"]],
  ],
  [
    "2021-06-10",
    "Pertama kali abang ngekost bareng temen-temennya 😭🏠 Dikirimin foto ini sama Kono, keliatan banget tuh mukanya bahagia banget pas ngambil GoFood kiriman dari papahnya 😂😂, jaga kesehatan ya kalian semua",
    162,
    [
      ["Eomceanzip", "cepet banget udh kost aja 😭, baru kemarin teteh gendong gendong kamu mandiin kamu sekarang udah bisa ngajak anak tetangga berantem🥹🥹"],
      ["Tante Raya", "tumbuh cepet banget ya🥺"],
    ],
  ],
  [
    "2021-11-20",
    "Pertama kali adek jalan-jalan ke luar negeri tanpa orang tua 😭✈️ Dikirim foto ini pas lagi di Hollywood bareng bff-nya adek, pada heboh loncat-loncat gitu 😂😂. Perasaan mamah campur aduk antara khawatir tapi seneng banget lihat adek bahagia dan mandiri sama temen-temennya 🥹❤️ Hati-hati di sana ya nak, jangan lupa kabar-kabarin mamah terus!",
    389,
    [
      ["Mama Kono", "Aduh perasaaan campur aduk liat anak-anak bujang liburan mandiri 😭👍🏻 Udah pada gede-gede ya mba, seneng liat mereka heboh gitu di depan tulisan Hollywood!"],
      ["Om Jakal", "Foto loncatnya kompak bgt 👍🏻 , hati-hati di negeri orang ya ganteng! 🥰"],
    ],
  ],
  [
    "2022-06-01",
    "Tadi adek kirim foto ini ngabarin mamah kalau habis cobain jas... Ya ampun dekk, ngeliat kamu udah segagah dan seganteg ini, mamah tadi sempet panglling ini siapa 🥹 rasanya jahitan bekas melahirkan mamah langsung ngilu lagi 😭 Mukanya makin dewasa, udah cocok banget jadi CEO ya dek. Cepat banget kamu tumbuhnya sayang, perasaan baru kemarin digendong 🥹❤️",
    244,
    [["Tante Rina", "Pangling banget mbak, udah kaya bos muda di drama korea"]],
  ],
  [
    "2023-03-12",
    "Nemu foto adek pas masih TK di bersanding sama foto adek yang sekarang 😭 Pas diliat liat, ternyata posisi berdirinya sama persis gak ada yang berubah 😂😂! Dulu mamah yang gendong kamu nak, sekarang kamu udah nyalip tinggi mamah... Mau setinggi dan sedewasa apapun kamu nanti, kamu bakal tetap jadi anak kecilnya mamah 🥹🤍✨",
    412,
    [
      ["Wawa Gepeng", "Makin ganteng aja bu anaknya"],
      ["Tukang Galon", "sehat terus ya bu anaknya"],
    ],
  ],
  [
    "2023-12-17",
    "Hampir gak bisa bedain mana Sean mana Kono sekilas mirip banget 😭 Kata adek pakai kacamata begini biar serasa balik ke tahun 2016... Padahal di tahun segitu kalian berdua mah baru masuk TK dan masih sibuk nangis minta ditungguin di depan kelas! 😭🤌❤️ Gaya anak jaman sekarang ada-ada aja 😂😂",
    768,
    [
      ["Mama Kono", "Taun 2016 mah masih ingusan anak kita mba di TK 😂👍🏻 Sekarang udah berasa kayak duo rapper mau manggung aja ini anak dua😂😂"],
      ["Nenek Gayung", "Gaya apa lagi ini nak kacamata gede banget dipake di dalem ruangan"],
      ["Om Badrul", "Mau ngamen dimana cil"],
    ],
  ],
  [
    "2024-01-25",
    "Anak mamah beneran udah jadi model profesional sekarang 😭 Pas liat hasil fotonya terpampang begini rasanya terharu dan makin bangga bgt!  Perasaan baru kemarin mamah kibas-kibasin bajunya pas kepanasan, sekarang udah berdiri gagah jadi model majalah 🥺❤️ Bangga banget sama kamu nak, sukses terus ya adek! ✨",
    412,
    [
      ["Tante Rina", "Bangga banget liat adek udah makin sukses begini mbak 🥰✨"],
      ["Jamal", "WUIH KEREN BANGETTT, OTW JADI ARTIS BESAR NIHH"],
    ],
  ],
];
/* ===== HELPERS ===== */
const $ = (s) => document.querySelector(s),
  $$ = (s) => [...document.querySelectorAll(s)];
let name = "";
const esc = (s) =>
  String(s).replace(
    /[&<>"]/g,
    (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c],
  );
const fmt = (d) =>
  new Date(d + "T12:00:00").toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
const em = (y) =>
  y < 2010 ? "👶" : y < 2013 ? "🍼" : y < 2017 ? "🧸" : y < 2020 ? "🎒" : y < 2024 ? "🎧" : "🧑";
const pic = (p) =>
  p.src || A.photos[p.id]
    ? `<img src="${p.src || A.photos[p.id]}" alt="${esc(p.c)}" loading="lazy">`
    : `<div class="ph" style="--h:${20 + ((p.n * 11) % 34)}"><i>${em(p.y)}</i><small>${p.id}</small></div>`;
let tt;
const toast = (t) => {
  const e = $("#toast");
  e.textContent = t;
  e.classList.add("on");
  clearTimeout(tt);
  tt = setTimeout(() => e.classList.remove("on"), 1800);
};
function show(id) {
  $$(".page").forEach((p) => p.classList.toggle("on", p.id === id));
}
if (A.welcomeBg) $("#wbg").style.backgroundImage = `url(${A.welcomeBg})`;
if (A.lockWallpaper) $("#lbg").style.backgroundImage = `url(${A.lockWallpaper})`;
if (A.wallpaper) $("#wall").style.backgroundImage = `url(${A.wallpaper})`;
/* ===== 1 WELCOME ===== */
function start() {
  const v = $("#nm").value.trim();
  if (!v) {
    $("#nerr").textContent = "Isi namamu dulu ya.";
    const i = $("#nm");
    i.classList.remove("shake");
    void i.offsetWidth;
    i.classList.add("shake");
    i.focus();
    return;
  }
  name = v;
  try {
    sessionStorage.setItem("pov-name", v);
  } catch (e) {}
  show("p-music");
}
$("#go1").onclick = start;
$("#nm").onkeydown = (e) => {
  if (e.key === "Enter") start();
};
/* ===== 2 MUSIC ===== */
const aud = new Audio();
aud.loop = true;
aud.preload = "auto";
aud.src = A.audio;
let started = false;
function sync() {
  const p = !aud.paused;
  $("#mbox").classList.toggle("playing", p);
  $("#mapp").classList.toggle("playing", p);
  $("#mpr").textContent = p ? "⏸ Pause" : "▶ Resume";
  $("#mp2").textContent = p ? "⏸ Pause" : "▶ Play";
}
aud.onplay = aud.onpause = sync;
function ok() {
  started = true;
  $("#mplay").style.display = "none";
  $("#mpr").style.display = "";
  $("#enter").style.display = "";
  $("#merr").textContent = "";
  $("#skip").style.display = "none";
  sync();
}
function fail() {
  $("#merr").textContent =
    "File lagu belum tersedia di website ini. Pilih file Segenap Hati dari perangkatmu.";
  $("#mfile").style.display = "";
  $("#skip").style.display = "";
}
function tryPlay() {
  aud.play().then(ok).catch(fail);
}
aud.onerror = () => {
  if (!started && $("#p-music").classList.contains("on")) fail();
};
$("#mplay").onclick = tryPlay;
const toggle = () =>
  aud.paused ? aud.play().catch(() => toast("Lagu belum bisa diputar")) : aud.pause();
$("#mpr").onclick = toggle;
$("#mp2").onclick = () => {
  if (!aud.src || aud.error) {
    $("#mpick2").click();
    return;
  }
  toggle();
};
function pick(e) {
  const f = e.target.files[0];
  if (!f) return;
  aud.src = URL.createObjectURL(f);
  aud
    .play()
    .then(ok)
    .catch(() => toast("File tidak bisa diputar"));
  $("#merr").textContent = "";
}
$("#mpick").onchange = pick;
$("#mpick2").onchange = pick;
$("#enter").onclick = enterOS;
$("#skip").onclick = enterOS;
/* ===== 3 OS ===== */
let cur = null,
  open = [],
  built = false;
function enterOS() {
  if (!built) {
    built = true;
    buildGal();
    buildFb();
    buildSet();
  }
  $("#who").textContent = name;
  show("p-lock");
}
function unlock() {
  const l = $("#p-lock");
  l.style.transform = "translateY(-14%)";
  show("os");
  setTimeout(() => (l.style.transform = ""), 700);
}
const PIN = "1309"; // ganti PIN di sini
let pv = "";
const keys = $("#keys");
keys.innerHTML = [1, 2, 3, 4, 5, 6, 7, 8, 9, "", 0, "⌫"]
  .map((k) =>
    k === ""
      ? "<span></span>"
      : `<button data-k="${k}" aria-label="${k === "⌫" ? "Hapus" : k}">${k}</button>`,
  )
  .join("");
const dots = () => $$("#dots i").forEach((d, i) => d.classList.toggle("f", i < pv.length));
function openPin() {
  pv = "";
  dots();
  $("#perr").textContent = "";
  $("#pin").classList.add("on");
}
function press(k) {
  if (k === "⌫") pv = pv.slice(0, -1);
  else if (pv.length < 4) pv += k;
  dots();
  if (pv.length === 4) {
    if (pv === PIN) {
      $("#pin").classList.remove("on");
      unlock();
    } else {
      $("#perr").textContent = "PIN salah, coba lagi.";
      const d = $("#dots");
      d.classList.remove("shake");
      void d.offsetWidth;
      d.classList.add("shake");
      setTimeout(() => {
        pv = "";
        dots();
      }, 350);
    }
  }
}
keys.onclick = (e) => {
  const b = e.target.closest("[data-k]");
  if (b) press(b.dataset.k);
};
document.addEventListener("keydown", (e) => {
  if (!$("#pin").classList.contains("on")) return;
  if (/^\d$/.test(e.key)) press(e.key);
  else if (e.key === "Backspace") press("⌫");
  else if (e.key === "Escape") $("#pin").classList.remove("on");
});
$("#pback").onclick = () => $("#pin").classList.remove("on");
$("#unlock").onclick = openPin;
let sy = null;
const lockEl = $("#p-lock");
lockEl.onpointerdown = (e) => {
  sy = e.clientY;
};
lockEl.onpointerup = (e) => {
  if (sy !== null && sy - e.clientY > 60 && !$("#pin").classList.contains("on")) openPin();
  sy = null;
};
function tick() {
  const d = new Date(),
    h = String(d.getHours()).padStart(2, "0"),
    m = String(d.getMinutes()).padStart(2, "0");
  $("#sbt").textContent = h + ":" + m;
  $("#hm").textContent = h + ":" + m;
  const ds = d.toLocaleDateString("id-ID", { weekday: "long", day: "numeric", month: "long" });
  $("#dt").textContent = ds;
  $("#ld").textContent = ds;
  $("#lh").textContent = h + ":" + m;
}
tick();
setInterval(tick, 20000);
const T = { gallery: "Gallery", facebook: "Facebook", music: "Music", settings: "Settings" };
function openApp(a) {
  cur = a;
  if (!open.includes(a)) open.push(a);
  $$(".app").forEach((e) => e.classList.toggle("open", e.id === "app-" + a));
  $("#os").classList.add("inapp");
  $("#rec").classList.remove("on");
}
function home() {
  cur = null;
  $$(".app").forEach((e) => e.classList.remove("open"));
  $("#os").classList.remove("inapp");
  $("#rec").classList.remove("on");
  $("#lb").classList.remove("on");
  $("#sheet").classList.remove("on");
}
function back() {
  if ($("#sheet").classList.contains("on")) $("#sheet").classList.remove("on");
  else if ($("#lb").classList.contains("on")) $("#lb").classList.remove("on");
  else if ($("#rec").classList.contains("on")) $("#rec").classList.remove("on");
  else if (cur === "gallery" && galA !== null) buildGal(null);
  else home();
}
$$(".ic").forEach((b) => (b.onclick = () => openApp(b.dataset.app)));
$("#nb").onclick = back;
$("#nh").onclick = home;
function rlist() {
  $("#rl").innerHTML = open.length
    ? open
        .map(
          (a) =>
            `<div class="rc"><button data-o="${a}" style="flex:1;text-align:left;font-weight:600">${T[a]}</button><button data-x="${a}" aria-label="Tutup ${T[a]}">✕</button></div>`,
        )
        .join("")
    : '<p style="text-align:center">Tidak ada aplikasi yang terbuka.</p>';
}
function recents() {
  if ($("#rec").classList.toggle("on")) rlist();
}
$("#nr").onclick = recents;
$("#rl").onclick = (e) => {
  const o = e.target.closest("[data-o]"),
    x = e.target.closest("[data-x]");
  if (o) openApp(o.dataset.o);
  if (x) {
    open = open.filter((a) => a !== x.dataset.x);
    if (cur === x.dataset.x) home();
    else rlist();
  }
};
$("#rclose").onclick = () => {
  open = [];
  home();
};
/* lightbox */
let lbL = [],
  lbI = 0;
function lb(list, i) {
  lbL = list;
  lbI = i;
  $("#lb").classList.add("on");
  lbR();
}
function lbR() {
  const p = lbL[lbI];
  $("#lbb").innerHTML = pic(p);
  $("#lbd").textContent = fmt(p.d);
  $("#lbt").textContent = p.cap || p.c;
  $("#lbc").textContent = lbL.length > 1 ? `${lbI + 1} / ${lbL.length}` : "";
  $("#lbp").style.display = $("#lbn").style.display = lbL.length > 1 ? "" : "none";
}
$("#lbx").onclick = () => $("#lb").classList.remove("on");
$("#lbp").onclick = () => {
  lbI = (lbI - 1 + lbL.length) % lbL.length;
  lbR();
};
$("#lbn").onclick = () => {
  lbI = (lbI + 1) % lbL.length;
  lbR();
};
/* gallery */
let galA = null;
const albumPhotos = (ai) =>
  ALB[ai].items.map(([src, d, c], i) => ({
    id: `album${ai + 1}-foto${i + 1}`,
    src,
    n: ai * 10 + i,
    d,
    y: +d.slice(0, 4),
    c,
  }));
function buildGal(a) {
  if (a !== undefined) galA = a;
  const g = $("#gal");
  $("#gback").style.display = galA === null ? "none" : "";
  if (galA === null) {
    $("#gt").textContent = "Album";
    g.innerHTML =
      '<div class="agrid">' +
      ALB.map(
        (x, i) =>
          `<div class="alb" data-a="${i}" role="button" tabindex="0"><div class="cv">${pic(albumPhotos(i)[0])}</div><b>${x.name}</b><small>${x.years} · ${x.items.length} foto</small></div>`,
      ).join("") +
      "</div>";
  } else {
    $("#gt").textContent = ALB[galA].name;
    g.innerHTML =
      '<div class="pgrid">' +
      albumPhotos(galA)
        .map(
          (p, i) =>
            `<div class="tile" data-i="${i}" role="button" tabindex="0" aria-label="${esc(p.c)}">${pic(p)}</div>`,
        )
        .join("") +
      "</div>";
    g.scrollTop = 0;
  }
}
$("#gback").onclick = () => buildGal(null);
$("#gal").onclick = (e) => {
  const a = e.target.closest("[data-a]"),
    t = e.target.closest("[data-i]");
  if (a) buildGal(+a.dataset.a);
  if (t) lb(albumPhotos(galA), +t.dataset.i);
};
$("#gal").onkeydown = (e) => {
  if (e.key === "Enter") e.target.click();
};
/* facebook */
const FP = POSTS.map(([k, cap, l, cm], i) => ({
  p: { id: "fb-" + (i + 1), n: i + 30, d: k, y: +k.slice(0, 4), c: cap, cap },
  cap,
  l,
  liked: false,
  o: false,
  cm: cm.map((x) => ({ w: x[0], t: x[1] })),
})).sort((a, b) => b.p.d.localeCompare(a.p.d));
const mom = () => (A.momAvatar ? `<img src="${A.momAvatar}" alt="">` : "👩");
function post(x, i) {
  const me = esc((name[0] || "?").toUpperCase());
  return `<article class="post" data-i="${i}"><div class="ph0"><span class="av m">${mom()}</span><div><b>${esc(name)}</b><small>${fmt(x.p.d)} · 🌐</small></div></div><p class="cap">${x.cap}</p><div class="pimg" data-act="img">${pic(x.p)}</div><div class="cnt"><span>👍❤️🥹 ${x.l + (x.liked ? 1 : 0)}</span><span data-act="cmt">${x.cm.length} komentar</span></div><div class="bt"><button data-act="like" class="${x.liked ? "lk" : ""}">${x.liked ? "👍 Disukai" : "👍 Suka"}</button><button data-act="cmt">💬 Komentar</button><button data-act="sh">↗ Bagikan</button></div>${x.o ? `<div class="cms">${x.cm.map((c) => `<div class="cm"><span class="av s">${esc(c.w[0])}</span><div class="bub"><b>${esc(c.w)}</b><br>${esc(c.t)}</div></div>`).join("")}<div class="cin"><span class="av s">${me}</span><input placeholder="Komentar sebagai ${esc(name)}…" maxlength="200" aria-label="Tulis komentar"><button data-act="send">Kirim</button></div></div>` : ""}</article>`;
}
function buildFb() {
  $("#feed").innerHTML =
    `<div class="cover" ${A.cover ? `style="background-image:url(${A.cover})"` : ""}></div><div class="prof"><div class="big">${mom()}</div><h2>${esc(name)}</h2><p>Mamahnya Sean🤍</p><p>Bergabung sejak Januari 2008</p></div><div id="posts">${FP.map(post).join("")}</div><div class="end serif">Itu postingan paling awal.<br>Tapi rasanya baru kemarin, ya?</div>`;
}
function rp(el, i, focus) {
  el.outerHTML = post(FP[i], i);
  if (focus) {
    const n = $(`.post[data-i="${i}"] .cin input`);
    n && n.focus();
  }
}
function send(el, i) {
  const inp = el.querySelector(".cin input"),
    t = inp.value.trim();
  if (!t) {
    inp.focus();
    return;
  }
  FP[i].cm.push({ w: name + " (kamu)", t });
  rp(el, i, true);
}
$("#feed").onclick = (e) => {
  const t = e.target.closest("[data-act]");
  if (!t) return;
  const el = t.closest(".post"),
    i = +el.dataset.i,
    x = FP[i],
    a = t.dataset.act;
  if (a === "like") {
    x.liked = !x.liked;
    rp(el, i);
  } else if (a === "cmt") {
    x.o = !x.o;
    rp(el, i, x.o);
  } else if (a === "sh") $("#sheet").classList.add("on");
  else if (a === "img") lb([x.p], 0);
  else if (a === "send") send(el, i);
};
$("#feed").onkeydown = (e) => {
  if (e.key === "Enter" && e.target.matches(".cin input")) {
    const el = e.target.closest(".post");
    send(el, +el.dataset.i);
  }
};
$("#sheet").onclick = (e) => {
  const b = e.target.closest("[data-s]");
  if (b && b.dataset.s) toast(b.dataset.s + " (simulasi)");
  if (b || e.target.id === "sheet") $("#sheet").classList.remove("on");
};
/* settings */
const WP = [
  "linear-gradient(160deg,#f1d3ae,#c99f7a 60%,#8f6a4b)",
  "linear-gradient(160deg,#e8d8c3,#b9a58a 60%,#6f604c)",
  "linear-gradient(160deg,#f6dcd2,#d6a79a 60%,#8a5d55)",
];
function buildSet() {
  $("#setp").innerHTML =
    `<div class="set"><h3>Informasi perangkat</h3><p>Perangkat<span>Ponsel Mama</span></p><p>Versi Android<span>13</span></p><p>Baterai<span>82%</span></p><p>Penyimpanan<span>Hampir penuh (isinya foto Seonghyeon)</span></p></div>
<div class="set"><h3>Wallpaper</h3><div class="wp" id="wps">${WP.map((w, i) => `<button data-w="${i}" style="background:${w}" aria-label="Wallpaper ${i + 1}" class="${!A.wallpaper && i === 0 ? "sel" : ""}"></button>`).join("")}<label class="btn" style="width:auto;padding:0 12px;display:grid;place-items:center;height:80px;background:var(--beige);font-size:13px;font-weight:600;border-radius:12px;cursor:pointer;text-align:center">Dari foto<input type="file" accept="image/*" id="wpf" hidden></label></div></div>
<div class="set"><h3>Tampilan</h3><p>Kecerahan<input type="range" min="0" max="60" value="0" id="br" aria-label="Kecerahan"></p><p>Teks besar<input type="checkbox" id="big" aria-label="Teks besar"></p></div>
<div class="set"><h3>Pemilik ponsel</h3><p>Nama<span>${esc(name)}</span></p><p>Peran<span>Ibu dari Seonghyeon</span></p><p>Pengunjung saat ini<span>${esc(name)}</span></p></div>`;
  $("#wps").onclick = (e) => {
    const b = e.target.closest("[data-w]");
    if (!b) return;
    $("#wall").style.backgroundImage = WP[+b.dataset.w];
    $$("#wps button").forEach((x) => x.classList.toggle("sel", x === b));
  };
  $("#wpf").onchange = (e) => {
    const f = e.target.files[0];
    if (f) {
      $("#wall").style.backgroundImage = `url(${URL.createObjectURL(f)})`;
      $$("#wps button").forEach((x) => x.classList.remove("sel"));
    }
  };
  $("#br").oninput = (e) => {
    $("#bright").style.opacity = e.target.value / 100;
  };
  $("#big").onchange = (e) => {
    $("#phone").style.fontSize = e.target.checked ? "18px" : "";
    document
      .querySelectorAll(".cap,.bub,.set p")
      .forEach((n) => (n.style.fontSize = e.target.checked ? "18px" : ""));
  };
}