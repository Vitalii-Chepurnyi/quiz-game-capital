document.addEventListener('DOMContentLoaded', function() {
    let buttons = document.getElementsByTagName('button');

    for (let button of buttons) {
        button.addEventListener('click', function(){
            if (this.getAttribute("data-type") === "next"){
                alert('nextgame')
            } else if (this.getAttribute("data-type") === "refresh") {
                alert('refresh')
            }
        })
    }
})



