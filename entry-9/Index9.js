let highlightClass = 'highlight'; 
let highlightBlocks = document.querySelectorAll('.move');


highlightBlocks.forEach((block) => {
	let sectionObserver = new IntersectionObserver(entries => {
		let [entry] = entries;


		entry.isIntersecting ? block.classList.add(highlightClass) : block.classList.remove(highlightClass); 
	}, {
		rootMargin: '-33% 0% -33% 0%', // CSS: top/right/bottom/left.
	});

	sectionObserver.observe(block); 
});


let button = document.querySelector('#activate'); 

button.onclick = () => { 
	alert('Disclaimer: Chickens are dumb and scared, they will run...eventually. So is their content! READ FAST! A SUPRISE is hiding in one of the chickens, start CLUCK-ing! '); // Pop an alert!
};

function playAudio(url) {
	new Audio(url).play();
  }
