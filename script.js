const keys=document.querySelectorAll('.key');

keys.forEach(key => {
    key.addEventListener( 'click', () => play(key) )
})

function play(key){
    const noteAudio = document.getElementById(key.dataset.note)
    noteAudio.currentTime=0
    noteAudio.play()
    key.classList.add('active')
    noteAudio.addEventListener('ended', () => {
        key.classList.remove('active')
    } )
}