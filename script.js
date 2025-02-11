document.addEventListener("DOMContentLoaded", function () {
      // Efek hover pada lirik
      document.querySelectorAll(".lyrics-content p").forEach(p => {
          p.addEventListener("mouseenter", function () {
              this.style.transform = "scale(1.05)";
              this.style.transition = "transform 0.3s ease-in-out";
          });
          p.addEventListener("mouseleave", function () {
              this.style.transform = "scale(1)";
          });
      });
  
      // Tambahkan musik latar
      let audio = new Audio("Audio/The Weeknd - Call Out My Name (Official Video).mp3"); // Ganti dengan file audio yang sesuai
      audio.loop = true;
  
      let musicButton = document.createElement("button");
      musicButton.innerText = "🎵 Turn on the music";
      musicButton.style.position = "fixed";
      musicButton.style.bottom = "20px";
      musicButton.style.right = "20px";
      musicButton.style.padding = "10px";
      musicButton.style.background = "#d63384";
      musicButton.style.color = "white";
      musicButton.style.border = "none";
      musicButton.style.borderRadius = "5px";
      musicButton.style.cursor = "pointer";
  
      let isPlaying = false;
      musicButton.addEventListener("click", function () {
          if (isPlaying) {
              audio.pause();
              musicButton.innerText = "🎵 Turn on the music";
          } else {
              audio.play();
              musicButton.innerText = "⏸ Turn off the music";
          }
          isPlaying = !isPlaying;
      });
  
      document.body.appendChild(musicButton);
  
      // Notifikasi motivasi setelah 30 detik membaca
      setTimeout(() => {
          let motivation = document.createElement("div");
          motivation.innerHTML = "✨ I love you Sabina! ✨";
          motivation.style.position = "fixed";
          motivation.style.bottom = "50px";
          motivation.style.left = "50%";
          motivation.style.transform = "translateX(-50%)";
          motivation.style.background = "#ff9a9e";
          motivation.style.color = "white";
          motivation.style.padding = "15px";
          motivation.style.borderRadius = "10px";
          motivation.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)";
          motivation.style.fontSize = "18px";
          motivation.style.fontWeight = "bold";
          motivation.style.textAlign = "center";
          motivation.style.zIndex = "1000";
  
          document.body.appendChild(motivation);
  
          setTimeout(() => {
              motivation.remove();
          }, 5000);
      }, 30000);
  });