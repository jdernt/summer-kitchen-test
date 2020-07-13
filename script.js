document.addEventListener('DOMContentLoaded', function(){

	document.querySelector('.auth').addEventListener('click', function(e){
		e.preventDefault();

		document.querySelector('.signup').classList.add('hidden');
		document.querySelector('.login').classList.remove('hidden');
	});

	document.querySelector('.create-acc').addEventListener('click', function(e){
		e.preventDefault();

		document.querySelector('.signup').classList.remove('hidden');
		document.querySelector('.login').classList.add('hidden');
	});

	function fadeOutEffect() {
    var fadeTarget = document.querySelector('.preview');
    var fadeEffect = setInterval(function () {
        if (!fadeTarget.style.opacity) {
					fadeTarget.style.opacity = 1;
				}
        if (fadeTarget.style.opacity > 0) {
					fadeTarget.style.opacity -= 0.1;
					fadeTarget.classList.add('underground');
        } else {
          	clearInterval(fadeEffect);
        }
    }, 50);
	}

	setTimeout(fadeOutEffect, 1500);


});
