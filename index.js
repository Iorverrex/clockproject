function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
  
    const hourDegree = (hours % 12) * 30 + (minutes / 2);  // 360 degrees / 12 hours
    const minuteDegree = minutes * 6;  // 360 degrees / 60 minutes
    const secondDegree = seconds * 6;  // 360 degrees / 60 seconds
  
    document.getElementById("hours-hand").style.transform = `rotate(${90 + hourDegree}deg)`;
    document.getElementById("minutes-hand").style.transform = `rotate(${90 + minuteDegree}deg)`;
    document.getElementById("seconds-hand").style.transform = `rotate(${90 + secondDegree}deg)`;
  }
  
  // Update the clock every second
  setInterval(updateClock, 1000);
  
  // Initial call to set the correct position immediately when the page loads
  updateClock();