const playlist = document.getElementById("playlist-wrapper")
const videoPlayer = document.getElementById("video-player")
const viewsCount = document.getElementById("views-count")
const videoTitle = document.getElementById("video-title")
const videoDescription = document.getElementById("video-description")


playlist.addEventListener("click", (e) => {
    const http = new XMLHttpRequest()
    const urlVideo = "https://5d76bf96515d1a0014085cf9.mockapi.io/playlist"
    const urlDescription = "https://5d76bf96515d1a0014085cf9.mockapi.io/video/"
    http.open("GET", urlDescription)
    http.send()
    http.responseType = "json"
    http.onload = function() {
        n = +e.target.parentElement.id[4]
        console.log(http.response[n-1]);
        videoPlayer.src = "https://player.vimeo.com/video/" + http.response[n-1].vimeoId
        viewsCount.textContent = http.response[n-1].views
        videoTitle.textContent = http.response[n-1].title
        videoDescription.textContent = http.response[n-1].description
        document.getElementsByClassName("active-card")[0].classList.remove("active-card")
        e.target.parentElement.classList.add("active-card")
        // console.log(document.getElementsByClassName("active-card"));
    }
})