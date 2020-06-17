$(function(){

	$("#navbarToggle").blur(function (event){
		var screenWidth = window.innerWidth;
		if(screenWidth < 768) {
			$("#collapsable-nav").collapse('hide');
		}
	});
});


 const cursor = document.querySelector('.cursor');

        document.addEventListener('mousemove', e => {
            cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
        })

        document.addEventListener('click', () => {
            cursor.classList.add("expand");

            setTimeout(() => {
                cursor.classList.remove("expand");
            }, 500)
        })

      





$('#immagine').hover(
    function() {
        $('#btn').fadeIn('slow');
    },function() {
        $('#btn').fadeOut('slow');
    }
);










