const countEl = document.getElementById('count');

updateVisitCount();

function updateVisitCount() {
	fetch('https://api.countapi.xyz/update/RUMBLEBOXCOUNTER/e3d532b9-5918-4bf1-bd2b-24ca4d17d87b/?amount=1')
	.then(res => res.json())
	.then(res => {
		countEl.innerHTML = res.value;
	})
}