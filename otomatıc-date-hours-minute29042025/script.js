function updateClock() {
    const now = new Date();
  
    let hour = now.getHours().toString().padStart(2, '0');
    let minute = now.getMinutes().toString().padStart(2, '0');
  
    document.getElementById("hour").textContent = hour;
    document.getElementById("minute").textContent = minute;
    document.getElementById("second").textContent = second;
  }
  
  // Her saniyede bir güncelle
  setInterval(updateClock, 1000);
  updateClock();
  