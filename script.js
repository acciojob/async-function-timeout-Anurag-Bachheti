window.onload = function(){
	document.getElementById("output").innerHTML = "";
	
	document.getElementById("btn").addEventListener("click", getDelayed)

	async function getDelayed(){
		let text = document.getElementById("text").value;
		let delay = document.getElementById("delay").value;
		let screen = document.getElementById("output");

	 if (!text || isNaN(delay) || delay < 0) {
      screen.innerHTML = "Please enter valid text and delay.";
      return;
    }
		
		screen.innerHTML = "Waiting!..."
	
		await new Promise(resolve => setTimeout(resolve, delay));
		screen.innerHTML = text;
	}
}
