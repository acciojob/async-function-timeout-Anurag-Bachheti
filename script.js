window.onload = function(){
document.getElementById("btn").addEventListener("click", getDelayed)

	async function getDelayed(){
		let text = document.getElementById("text").value;
		let delay = document.getElementById("delay").value;
		let screen = document.getElementById("output");
		
		screen.innerHTML = "Waiting!..."
	
		await new Promise(resolve => setTimeout(resolve, delay));
		screen.innerHTML = text;
	}
		document.getElementById("output").innerHTML = "";
}
