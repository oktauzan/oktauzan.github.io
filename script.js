var background = "Backround.jpeg";
var foto = "photo.jpg";
var musik = "https://oktauzan.github.io/backsound.mp3";
var panggilan = "TENY OKTAVIANI";
var ucapan = "Selamat ulang tahun sayangku, Hari ini adalah lembaran baru dalam buku kehidupanmu. isi setiap halaman dengan warna-warna kebahagiaan, semoga panjang umur, sehat selalu dan bahagia selalu. dan aku berharap Semoga kita selalu bersama. Sekali lagi, Happy Birthday Cintaku";

var hadiah1 = "HADIAH SATU";
var hadiah2 = "HADIAH DUA";
var hadiah3 = "HADIAH TIGA";
var hadiah4 = "HADIAH EMPAT";

var noWhatsapp = "6281321801677";

$(window).on("load", function () {
    $(".preload").fadeOut("slow");
});
var audio = new Audio(musik);
audio.loop = true;
audio.autoplay = true;
var bg = document.querySelector(".bg");
var fotoku = document.querySelector(".foto");
var hai = document.querySelector(".hai");
var pesanku = document.querySelector(".pesan");
var open = document.querySelector(".open");
var modal = document.querySelector(".modal");
var kado = document.querySelector(".kado");
var hadiah = "";
hai.innerHTML = panggilan;
open.style = "background: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('" + background +
    "');background-size: cover;";
bg.style = "background: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('" + background +
    "');background-size: cover;";
document.querySelector(".fotoku").src = foto;

function ilang() {
    audio.play();
    open.style =
        "transition: 1.5s ease-out all; opacity: 0; transform: scale(100) translateY(20px); filter: brightness(0);";
    setTimeout(function () {
        open.style = "display:none;";
    }, 1500);
    setTimeout(fotonya, 500);
    setTimeout(haiku, 1300);
    setTimeout(tampilPesan, 2000);
}

function fotonya() {
    fotoku.style = "opacity: 1; transform: rotateY(360deg);";
}

function haiku() {
    hai.style = "opacity: 1; transform: translateY(0px);";
    setTimeout(function () {
        hai.style = "opacity: 1; animation: anm 2s ease infinite;";
    }, 700);
}

function tampilPesan() {
    pesanku.style = "opacity: 1;";
    typeWriter();
}

function tampilKado() {
    kado.style = "transform: translateY(0px); opacity: 1;";
}
var i = 0;
var speed = 120;
var txt = ucapan;

function typeWriter() {
    if (i < txt.length) {
        pesanku.innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    } else {
        tampilKado();
    }
}

function randomAngka() {
    x = Math.random();
    if (x >= 0 && x <= 0.25) {
        return 0;
    } else if (x > 0.25 && x <= 0.5) {
        return 1;
    } else if (x > 0.5 && x <= 0.75) {
        return 2;
    } else {
        return 3;
    }
}

function acak() {
    a = randomAngka();
    b = randomAngka();
    if (b == a) {
        b = randomAngka();
        acak();
    } else {
        c = randomAngka();
        if (c == a || c == b) {
            c = randomAngka();
            acak();
        } else {
            d = randomAngka();
            if (d == a || d == b || d == c) {
                d = randomAngka();
                acak();
            }
        }
    }
}
var data = [hadiah1, hadiah2, hadiah3, hadiah4];
acak();
const swalo = Swal.mixin({
    confirmButtonColor: "#23a542",
    allowOutsideClick: false,
    showCancelButton: false,
    customClass: {
        popup: "border-radius",
    },
});

function openModal() {
    if (hadiah == "") {
        modal.style = "display: flex;";
        setTimeout(function () {
            modal.style = "display: flex;top: 0; opacity: 1;";
        }, 10);
    } else {
        swalo.fire({
            title: "Kamu dapet " + hadiah,
            timer: 3000,
            confirmButtonColor: "#fff",
            timerProgressBar: true
        });
    }
}

function closeModal() {
    modal.style = "top: 60vh;opacity: 0;display: flex;";
    setTimeout(function () {
        modal.style = "display: none;";
    }, 300);
}
async function pilihHadiah(z) {
    await swalo.fire("Penasaran ya sama kado nya? Nanti aku kasih langsung aja yaa sayangku, I Love You");
    balas();
}
async function balas() {
    var {
        value: pesan
    } = await swalo.fire({
        title: "Mending Tulis pesan dulu buat aku :)",
        input: "text",
        confirmButtonText: "Kirim",
    });
    if (pesan) {
        await swalo.fire("Kirim ke wa aku ya jawaban nya");
        location.assign("https://api.whatsapp.com/send?phone=" + noWhatsapp + "&text=Hai, aku dapet hadiah, di tunggu ya hadih nya " + hadiah +
            ".%0A %0AAku mau bilang, " + pesan);
        modal.style = "top: 60vh;opacity: 0;display: flex;";
        setTimeout(function () {
            modal.style = "display: none;";
        }, 300);
    } else {
        await swalo.fire({
            confirmButtonText: "Iya deh",
            title: "Jangan dikosongin ya :)",
        });
        balas();
    }
}
