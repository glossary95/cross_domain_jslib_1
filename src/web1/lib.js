function setKey(value) {
	localStorage.setItem('defaultValue', value);
}

addEventListener('message', function(event) {
	setKey(event.data.value);
})