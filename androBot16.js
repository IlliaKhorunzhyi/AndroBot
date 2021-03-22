function androAiChatBot(
  video_url,
  option_url_one,
  option_url_two,
  option_name_one,
  option_name_two,
  text
) {
  const placeholder_img = "https://i.ibb.co/ZhJKk3t/placeholder.jpg";
  const redirect_video =
    "https://storage.googleapis.com/dev-andro.appspot.com/videos/8M8ED83sOxbizXVgAn5L/161056838576.mp4";
  window.addEventListener("load", function () {
    document.body.innerHTML += `
              <style>
              #placeholder {
                  position: absolute;
                  top: 0;
                  left: 0;
                  width: 100%;
                  height: 100%;
                  border-radius: 50%;
                  opacity: 0;
                  pointer-events: none;
              }
              .andro {
                  opacity: 0;
                  position: fixed;
                  bottom: 2.5rem;
                  right: 2.5rem;
                  width: 14rem;
                  height: 14rem;
                  border-radius: 50%;
                  padding: 0;
                  margin: 0;
                  line-height: 0;
                  border: 10px solid #ff74268f;
                  z-index: 500;
                  transition: all .3s;
                  cursor: pointer;
              }
              .andro:hover {
                  border: 10px solid #ff7426;
              }
              .androvideo {
                  width: 100%;
                  height: 14rem;
                  border-radius: 50%;
                  padding: 0;
                  margin: 0;
                  line-height: 0;
                  z-index: 1;
                  pointer-events: none;
              }
              .andro-notification {
                  position: absolute;
                  right: 1rem;
                  bottom: 11rem;
                  z-index: 501;
                  cursor: pointer;
                  transition: all .1s;
              }
              .andro-notification > span {
                  display: table-cell;
                  overflow: hidden;
                  min-width: 40px;
                  height: 40px;
                  font-size: 18px;
                  font-weight: 700;
                  border-radius: 100%;
                  text-align: center;
                  vertical-align: middle;
                  background-color: #f85a3a;
                  color: #fff;
                  background-clip: padding-box;
                  cursor: pointer;
              }
              .andro > #menu {
                  opacity: 0;
                  pointer-events: none;
                  position: absolute;
                  bottom: 0;
                  left: -12rem;
                  border-radius: .5rem;
                  background: white;
                  padding: .8rem 1.2rem .8rem 1.2rem;
                  margin: 0;
                  line-height: 1.6rem;
                  box-shadow: 0 2px 6px 0 rgba(0,0,0,.4);
                  font-family: Roboto;
                  transition: all .3s;
              }
              .andro > #menu:after {
                  display: block;
                  position: absolute;
                  content: "";
                  width: 10px;
                  height: 10px;
                  right: -10px;
                  bottom: 60px;
                  background-color: inherit;
                  transform: translateX(-6px) rotate(45deg);
                  pointer-events: none;
                  box-shadow: 2px -2px 2px 0 rgba(0,0,0,.2);
              }
              .andro > #menu > div {
                  font-size: 1rem;
                  padding: 0.2rem .8rem;
                  border-radius: .5rem;
                  cursor: pointer;
                  background: #eeeeeec7;
              }
              .andro > #menu > div:first-child {
                  margin-bottom: .5rem;
              }
              .andro > #menu > div:hover {
                  background: #ff742629;
              }     
              #mic {
                  position: absolute;
                  bottom: 0;
                  right: 0;
                  z-index: 501;
                  background: white;
                  border-radius: 50%;
                  width: 3.4rem;
                  height: 3.4rem;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  cursor: pointer;
                  transition: all .3s;
              }
              #mic > i {
                  color: #969696;
                  font-size: 1.7rem;
              }
              #mic:hover > i {
                  color: black;
              }
              #options {
                  display: none;
                  margin-bottom: 4rem;
              }
              #options:after {
                  content: 'Powered by Andro.ai';
                  position: absolute;
                  bottom: 14px;
                  right: 4.5rem;
                  font-size: 12px;
                  color: #969696;
                  font-family: Roboto;
              }
              #options > .question {
                  background: #eeeeeec7;
                  font-size: .9rem;
                  padding: .8rem;
                  border-radius: .5rem .5rem .5rem 0;
                  cursor: pointer;
                  line-height: 1.2rem;
                  margin: .9rem .9rem 1rem;
                  font-family: Roboto;
              }
              #options > #menu {
                  opacity: 1;
                  border-radius: .5rem;
                  padding: 0 1rem;
                  margin: 0;
                  font-family: Roboto;
                  transition: all .3s;
                  line-height: 1rem;
                  display: flex;
                  flex-direction: column;
                  align-items: flex-end;
              }
              #options > #menu > div {
                  font-size: 0.9rem;
                  padding: 0.4rem .8rem;
                  border-radius: .5rem;
                  cursor: pointer;
                  border: 2px solid #4196ff8f;
              }
              #options > #menu > div:first-child {
                  margin-bottom: .5rem;
              }
              #options > #menu > div:hover {
                  background: #ff742629;
                  border: 2px solid transparent;
              }
              #andro {
                  position: relative;
                  left: -100%;
                  top: -45%;
                  width: 300%;
                  height: 36rem;
                  border-radius: 50%;
                  padding: 0;
                  margin: 0;
                  line-height: 0;
                  z-index: 1;
                  pointer-events: none;
                  background: url(${placeholder_img});
              }
              #video_container{
                  overflow:hidden;
                  border-radius:50%;
                  width:100%;
                  height:100%;
              }
              </style>
  
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" />
              <div class="andro">
                  <span class="andro-notification">
                    <span class="badge"><i class="fas fa-play" aria-hidden="true"></i></span>
                  </span>
                  <img id="placeholder" src="${placeholder_img}">
                  <div id="video_container">
                      <video id="andro" poster="${placeholder_img} src="${video_url}"></video>
                  </div>
                  <span id="menu">
                    <div id="option1">${option_name_one}</div>
                    <div id="option2">${option_name_two}</div>
                  </span>
                  <span id="mic">
                      <i class="fas fa-microphone" aria-hidden="true"></i>
                  </span>
                  <div id="options">
                      <div class="question">
                          ${text}
                      </div>
                  </div>
              </div>`;

    let recognition,
      listening,
      menuVisible,
      expanded,
      introPlayed,
      playing1,
      playing2;
    const andro = document.querySelector(".andro");
    const video = document.getElementById("andro");
    const video_container = document.getElementById("video_container");
    const placeholder = document.getElementById("placeholder");
    const menu = document.querySelector("#menu");
    const badge = document.querySelector(".andro-notification");
    const mic = document.querySelector("#mic > i");
    const options = document.getElementById("options");
    let candidateUrl,
      employerUrl,
      changed_opacity = false;

    setTimeout(() => {
      document.querySelector(".andro").style.opacity = 1;
      var candidate = new XMLHttpRequest();
      candidate.open("GET", redirect_video, true);
      candidate.responseType = "blob";
      var employer = new XMLHttpRequest();
      employer.open("GET", redirect_video, true);
      employer.responseType = "blob";
      candidate.onload = function () {
        if (this.status === 200) {
          var videoBlob = this.response;
          var url = URL.createObjectURL(videoBlob);
          candidateUrl = url;
        }
      };
      employer.onload = function () {
        if (this.status === 200) {
          var videoBlob = this.response;
          var url = URL.createObjectURL(videoBlob);
          employerUrl = url;
        }
      };
      candidate.send();
      employer.send();
    }, 1500);
    navigator.permissions
      .query({ name: "microphone" })
      .then((permissions) => {
        window.SpeechRecognition =
          window.webkitSpeechRecognition ||
          window.SpeechRecognition ||
          window.mozSpeechRecognition ||
          window.msSpeechRecognition ||
          window.oSpeechRecognition;
        recognition = new window.SpeechRecognition();
        recognition.lang = "en-US";
        recognition.interimResults = true;
        recognition.maxAlternatives = 10;
        recognition.continuous = true;
        recognition.onresult = (event) => {
          if (event) {
            let transcript;
            for (
              let i = event.resultIndex, len = event.results.length;
              i < len;
              i++
            ) {
              transcript = event.results[i][0].transcript;
              if (transcript.includes(option_name_one)) {
                if (!changed_opacity) {
                  changed_opacity = true;
                  placeholder.style.opacity = 1;
                  photographer();
                }
              } else if (transcript.includes(option_name_two)) {
                if (!changed_opacity) {
                  changed_opacity = true;
                  placeholder.style.opacity = 1;
                  organization();
                }
              }
            }
          }
        };
      })
      .catch(() => alert("Not enough permissions to access microphone!"));
    document
      .querySelector(".andro-notification")
      .addEventListener("click", () => {
        if (!introPlayed) {
          video.play();
          introPlayed = true;
        }
        if (menuVisible) {
          menu.style.opacity = 0;
          menu.style.pointerEvents = "none";
          menuVisible = false;
        } else {
          menu.style.opacity = 1;
          menu.style.pointerEvents = "all";
          menuVisible = true;
        }
      });
    document.getElementById("mic").addEventListener("click", () => {
      if (listening) {
        recognition.stop();
        if (mic) mic.style.color = "#969696";
        listening = false;
      } else {
        try {
          recognition && recognition.start();
          listening = true;
          if (mic) mic.style.color = "#24b39e";
        } catch (e) {
          console.log(`Failed to start: ${e}`);
        }
      }
    });
    andro.addEventListener("click", ({ target }) => {
      if (
        target.id != "mic" &&
        !target.className.includes("fas") &&
        !target.id.includes("option")
      ) {
        if (!expanded && target.className != "badge") {
          video_container.style.height = "16rem";
          video_container.style.width = "100%";
          video_container.style.borderRadius = ".5rem .5rem 0 0";
          andro.style.borderRadius = ".8rem";
          video.style.borderRadius = ".5rem .5rem 0 0";
          video.style.top = "0px";
          andro.style.height = "32rem";
          andro.style.width = "16rem";
          andro.style.background = "white";
          setTimeout(() => (video.style.height = "262px"), 500);
          andro.style.border = "5px solid #ff7426b8";
          badge.style.opacity = 0;
          menu.style.opacity = 1;
          menu.style.pointerEvents = "all";
          options.appendChild(menu);
          options.style.display = "block";
          expanded = true;
          placeholder.style.borderRadius = ".5rem .5rem 0 0";
          placeholder.style.width = "100%";
          placeholder.style.height = "16.4rem";
        } else if (expanded) {
          video_container.style.height = "100%";
          video_container.style.width = "100%";
          video_container.style.borderRadius = "50%";
          video.style.top = "-50%";
          andro.style.borderRadius = "50%";
          video.style.borderRadius = "50%";
          andro.style.height = "14rem";
          andro.style.width = "14rem";
          andro.style.border = "10px solid #ff7426b8";
          video.style.height = null;
          expanded = false;
          options.style.display = "none";
          andro.appendChild(menu);
          setTimeout(() => (badge.style.opacity = 1), 500);
          menu.style.opacity = 0;
          menu.style.pointerEvents = "none";
        }
      } else if (target.id.includes("option")) {
        if (target.id == "option1") {
          placeholder.style.opacity = 1;
          photographer();
        } else if (target.id == "option2") {
          placeholder.style.opacity = 1;
          organization();
        }
      }
    });
    function photographer() {
      if (!playing1) {
        video.src = candidateUrl;
        video.play().then(() => {
          placeholder.style.opacity = 0;
          playing1 = true;
        });
        video.onended = () => {
          window.location.href = option_url_one;
        };
      }
    }
    function organization() {
      if (!playing2) {
        video.src = employerUrl;
        video.play().then(() => {
          placeholder.style.opacity = 0;
          playing2 = true;
        });
        video.onended = () => {
          window.location.href = option_url_two;
        };
      }
    }
  });
}
