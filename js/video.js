var video;

function updateVolumnInfo() {
	var volumeDisplay = document.getElementById('volume');
	volumeDisplay.textContent = (video.volume * 100).toFixed(0) + '%';
}

window.addEventListener("load", function () {
	console.log("Good job opening the window")
	video = document.querySelector(".video");
	video.autoplay = false;
	video.loop = false;
	updateVolumnInfo();
});

document.querySelector("#play").addEventListener("click", function () {
	console.log("Play Video");
	video.play();
	updateVolumnInfo();
});

document.querySelector("#pause").addEventListener("click", function () {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function () {
	video.playbackRate *= 0.9;
	console.log("New speed is ", video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function () {
	video.playbackRate /= 0.9;
	console.log("New speed is ", video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function () {
	if (video.currentTime + 10 > video.duration) {
		video.currentTime = 0;
		console.log("Going back to the start");
	} else {
		video.currentTime += 10;
	}
	console.log("Current location is ", video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function () {
	if (video.muted) {
		this.textContent = "Mute";
		video.muted = false;
	} else {
		this.textContent = "Unmute";
		video.muted = true;
	}
	updateVolumnInfo();
});

document.querySelector("#slider").addEventListener("change", function () {
	video.volume = this.value / 100;
	console.log("Volumn	is ", video.volume);
	updateVolumnInfo();
});

document.querySelector("#vintage").addEventListener("click", function () {
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function () {
	video.classList.remove("oldSchool");
});