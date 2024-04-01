const downloadBtn = document.querySelector("#download");

const fileink = "https://drive.google.com/file/d/1muU3qpx-euPleyIiuM6R0hSg-Gv_T0qV/view?usp=drive_link";

const initTimer = () => {
    // if (downloadBtn.classList.contains("disable-timer")) {
    //     return (location.href = fileink);
    // }

    let timer = downloadBtn.dataset.timer;
    

    const initCounter = setInterval(() => {
        // console.log("hello!");
        if (timer > 0) {
            timer--
           return 
        }
        clearInterval(initCounter);
        location.href = fileink;
        

        
    }, 1000);
}

downloadBtn.addEventListener("click", initTimer);


$("#download").on("click", () => {
  $.ajax({
    url: "https://drive.google.com/file/d/1muU3qpx-euPleyIiuM6R0hSg-Gv_T0qV/view?usp=drive_link",
    method: "GET",
    xhrFields: {
      responseType: "blob",
    },
    success: function (data) {
      var a = document.createElement("a");
      var url = window.URL.createObjectURL(data);
      a.href = url;
      a.download = "ALKA KUMARI RESUME.pdf";
      location.href = "https://drive.google.com/file/d/1muU3qpx-euPleyIiuM6R0hSg-Gv_T0qV/view?usp=drive_link";
      document.body.append(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    },
  });
});








