// Hedef tarih (2 hafta sonra)
const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 14); // Şu anki tarihten 14 gün sonrasını hedefliyoruz

function updateCountdown() {
  const now = new Date();
  const timeDifference = targetDate - now;

  if (timeDifference <= 0) {
    document.getElementById("countdown").innerHTML = "Sitemiz Yayında!";
    clearInterval(interval);
  } else {
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = `${days} Gün ${hours} Saat ${minutes} Dakika ${seconds} Saniye`;
  }
}

// Güncellemeyi her saniye yapalım
const interval = setInterval(updateCountdown, 1000);

// İlk başta geri sayımı hemen gösterelim
updateCountdown();
