function androAiChatBot(
    video_url,
    option_url_one,
    option_url_two,
    option_name_one,
    option_name_two
) {

    window.addEventListener('load', function () {
            document.body.innerHTML += `
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" />
            <div class="andro" style="opacity: 0;position: fixed;bottom: 2.5rem;right: 2.5rem;width: 14rem;height: 14rem;border-radius: 50%;padding: 0;margin: 0;line-height: 0;border: 10px solid #ff74268f;z-index: 500;transition: all 0.3s;cursor: pointer;">
              <span class="notification" style="position: absolute;right: 1rem;bottom: 11rem;z-index: 501;cursor: pointer;transition: all 0.1s;">
                <span class="badge" style="display: table-cell;overflow: hidden;min-width: 40px;height: 40px;font-size: 18px;font-weight: 700;border-radius: 100%;text-align: center;vertical-align: middle;background-color: #f85a3a;color: #fff;background-clip: padding-box;cursor: pointer;">
                  <i class="fas fa-play"></i>
                </span>
              </span>
              <img id="placeholder" src="https://i.ibb.co/ZhJKk3t/placeholder.jpg" style="position: absolute;top: 0;left: 0;width: 100%;height: 100%;border-radius: 50%;opacity: 0;pointer-events: none;">
              <div style="overflow:hidden;border-radius:50%;width:100%;height:100%;">
                  <video id="androvideo" poster="https://i.ibb.co/ZhJKk3t/placeholder.jpg" src="${video_url}" style="position: relative;left: -100%;top: -55%;width: 300%;height: 36rem;border-radius: 50%;padding: 0;margin: 0;line-height: 0;z-index: 1;pointer-events: none;background: url(https://storage.googleapis.com/dev-andro.appspot.com/aimient/poster2.jpg);"></video>
              </div>
              <span id="menu" style="opacity: 0;pointer-events: none;position: absolute;bottom: 0;left: -9rem;border-radius: 0.5rem;background: white;padding: 0.8rem 1.2rem 0.8rem 1.2rem;margin: 0;line-height: 1.6rem;box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.4);font-family: Roboto;transition: all 0.3s;">
                <a style="text-decoration: none; color:black;" href="${option_url_one}"><div id="option1" style="font-size: 1rem;padding: 0.2rem 0.8rem;border-radius: 0.5rem;cursor: pointer;background: #eeeeeec7;margin-bottom: 0.5rem;">${option_name_one}</div></a>
                <a style="text-decoration: none; color:black;" href="${option_url_two}"><div id="option2" style="font-size: 1rem;padding: 0.2rem 0.8rem;border-radius: 0.5rem;cursor: pointer;background: #eeeeeec7;">${option_name_two}</div></a>
              </span>
                <span id="mic" style="position: absolute;bottom: 0;right: 0;z-index: 501;background: white;padding: 1rem;border-radius: 50%;width: 1.7rem;height: 1.7rem;display: flex;align-items: center;justify-content: center;cursor: pointer;transition: all 0.3s;">
                <i class="fas fa-microphone" style="color: #969696;font-size: 1.7rem;"></i>
              </span>
            </div>`;
        
            let recognition,
                listening,
                menuVisible,
                introPlayed;
            const video = document.getElementById("androvideo");
            const placeholder = document.getElementById("placeholder");
            const menu = document.querySelector("#menu");
            const mic = document.querySelector("#mic > i");
        
            setTimeout(() => {
                document.querySelector(".andro").style.opacity = 1;
        
            }, 100);
            navigator.permissions
                .query({
                    name: "microphone",
                })
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
                                let i = event.resultIndex, len = event.results.length; i < len; i++
                            ) {
                                transcript = event.results[i][0].transcript;
        
                            }
                        }
                    };
                })
                .catch(() => alert("Not enough permissions to access microphone!"));
            document
                .querySelector(".notification")
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
        }) 
}
