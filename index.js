var game = document.getElementById('games');

function selectGame() {
    if (game.value === '') {
        alert('Please Choose A Game!')
    } 
    else if (game.value === 'wheely1') {
        window.location.href = 'games/wheely1/index.html'
    }else if (game.value === 'wheely2') {
        window.location.href = 'games/wheely2/index.html'
    }else if (game.value === 'wheely3') {
        window.location.href = 'games/wheely3/index.html'
    }else if (game.value === 'wheely4') {
        window.location.href = 'games/wheely4/index.html'
    }else if (game.value === 'wheely5') {
        window.location.href = 'games/wheely5/index.html'
    }else if (game.value === 'wheely6') {
        window.location.href = 'games/wheely6/index.html'
    }else if (game.value === 'wheely7') {
        window.location.href = 'games/wheely7/index.html'
    }else if (game.value === 'wheely8') {
        window.location.href = 'games/wheely8/index.html'
    }
}