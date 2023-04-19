const editor = document.getElementById('editor');

window.addEventListener('load', function() { 
    if (localStorage.text) {
        editor.value = localStorage.getItem('text');
    }
        editor.addEventListener('input', function() {
            localStorage.setItem('text', editor.value);
        });    
});