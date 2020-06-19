const cursor = document.querySelector('.cursor');

        document.addEventListener('mousemove', e => {
            cursor.setAttribute("style", "top: "+(e.pageY - 5)+"px; left: "+(e.pageX - 5)+"px;")
        })

        document.addEventListener('click', () => {
            cursor.classList.add("expand");

            setTimeout(() => {
                cursor.classList.remove("expand");
            }, 500)
        })

        function start (){
	document.getElementById('prog').style.display = "";
	var content= "<p> WORKS</p>"
	+

			"<img onclick="+"show1()" + " " +"src="+"./images/io.jpg"+"><br>"
			+
			"<p>v typo </p>"
			+
			"<img onclick="+"show2()" + " " + "src="+"./images/copertina.jpg"+"><br>"
			+
			"<p> v typo. animate meanings </p>"
			+
			"<img onclick="+"show3()" + " " + "src="+"./images/copertina.jpg"+"><br>"
			+
			"<p> v typo. animate meanings </p>"
			+
			"<img onclick="+"show4()" + " "+ "src="+"./images/copertina.jpg"+"><br>"
			+
			"<p> v typo. animate meanings </p>"
			+
			"<img onclick="+"show5()" + " " + "src="+"./images/copertina.jpg"+"><br>"
			+
			"<p> v typo. animate meanings </p>"
			+
			"<img onclick="+"show6()" + " "+"src="+"./images/copertina.jpg"+"><br>"
			+
			"<p> v typo. animate meanings </p>"
			+
			"<img onclick="+"show6()" + " "+"src="+"./images/copertina.jpg"+"><br>"
			+
			"<p> v typo. animate meanings </p>"
			document.getElementsByTagName('prog').innerHTML = content;
			$(".clicked").removeClass("clicked");
 

}

function show1(){
	$(".clicked").removeClass("clicked");

	document.getElementById('prog').style.display= "";

	var content=
	"<p class="+"titoloprog"+">Serie 4312 <p>"
	+
	"<p class="+"sottotitoloprog"+"> Progetto per l'attesa <p>"
	+
	"<p class="+"testoprog"+"> Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo tipografo prese una cassetta di caratteri e li assemblò per preparare un testo campione. È sopravvissuto non solo a più di cinque secoli, ma anche al passaggio alla videoimpaginazione, pervenendoci sostanzialmente inalterato. Fu reso popolare, negli anni ’60, con la diffusione dei fogli di caratteri trasferibili “Letraset”, che contenevano passaggi del Lorem Ipsum, e più recentemente da software di impaginazione come Aldus PageMaker, che includeva versioni del Lorem Ipsum. <p>"
	+
	"<a href= "+"./images/serie4312.jpg"+">" + "<img class="+"imgprog"+" src="+"./images/serie4312.jpg"+">"+"</a>";
	document.getElementById('prog').innerHTML=content;



}


function show2(){
	$(".clicked").removeClass("clicked");

	document.getElementById('prog').style.display= "";

	var content=
	"<p class="+"titoloprog"+">V-Typo. Animate meanings. Inserti testuali cinematografici intelligenti. Da Saul Bass ai caratteri variabili. Ambiti di applicazione e progetti. <p>"
	+
	"<p class="+"sottotitoloprog"+"> MA thesis project <p>"
	+
	"<p class="+"testoprog"+"> Lorem Ipsum è un testo <p>" +"<p class="+"underline"+"> segnaposto <p>" + "<p class="+"testoprog"+">utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo tipografo prese una cassetta di caratteri e li assemblò per preparare un testo campione. È sopravvissuto non solo a più di cinque secoli, ma anche al passaggio alla videoimpaginazione, pervenendoci sostanzialmente inalterato. Fu reso popolare, negli anni ’60, con la diffusione dei fogli di caratteri trasferibili “Letraset”, che contenevano passaggi del Lorem Ipsum, e più recentemente da software di impaginazione come Aldus PageMaker, che includeva versioni del Lorem Ipsum. <p>"
	
	document.getElementById('prog').innerHTML=content;
}


function show3(){
	$(".clicked").removeClass("clicked");

	document.getElementById('prog').style.display= "";

	var content=
	"<p class="+"titoloprog"+"> Incongruity <p>"
	+
	"<p class="+"sottotitoloprog"+"> Laboratorio di Design dei sistemi interattivi per l’informazione (DSII)<p>"
	+
	"<p class="+"testoprog"+">  Making the invisible visible was the design goal. Starting from a personal experience, I worked on a &quot;misleading&quot; aspect of mental illness and in particular Alzheimer’s: the fact that the physical aspect of the patient, especially in the early stages of the disease, does not change significantly, makes it difficult for &quot;inexperienced&quot; people to understand the disease. It is in particular an interactive mirror that, placed ideally within a specialized structure, fragments the image of the people who are reflected in it. The metaphor is to be found in the fact that, contrary to the operation of a mirror, in which the approach makes the detail visible, here the approach makes the image be shattered, made discreet as well as the memory and abilities of the patient, in depth, depth that instead of adding meaning and information, becomes significant, making it become unintelligible.<p>"
	+
	"<a href= "+"./images/rossoincongruity.jpg"+">" + "<img class="+"imgprog"+" src="+"./images/rossoincongruity.jpg"+">"+"</a>"
	+
	"<a href= "+"./images/verdeincongruity.jpg"+">" + "<img class="+"imgprog"+" src="+"./images/verdeincongruity.jpg"+">"+"</a>"
	+
	"<a href= "+"./images/bluincongruity.jpg"+">" + "<img class="+"imgprog"+" src="+"./images/bluincongruity.jpg"+">"+"</a>"
	;
	
	document.getElementById('prog').innerHTML=content;
}



function show4(){
	$(".clicked").removeClass("clicked");

	document.getElementById('prog').style.display= "";

	var content=
	"<p class="+"titoloprog"+">Meat the plastic pig <p>"
	+
	"<p class="+"sottotitoloprog"+"> Workshop with Parco Studio <p>"
	+
	"<p class="+"testoprog"+"> Reflection on climate change. The project is based on the choice of two hashtags thanks to which to trace the posts published by users, whose content, shown simultaneously, generates significant contrasts with precise meaning. The hashtags chosen are #schleichpig and #meatthevictimsuk2 : it has been chosen to think on the environmental impact of intensive farms and the consequent exploitation of animals, on the other hand on the accuracy of the design and presentation of plastic animal miniatures. <p>"
	+
	"<p class="+"testoprog"+"> The project was made using html, css and making it possible to interact with Javascript. Operation is dictated by the mouse over.<p>"
	+
	"<a href= "+"https://vimeo.com/425520740"+">" + "<video class="+"videoprog"+" src="+"./images/Meat_the_plastic_pig"+">"+"</a>"
	+
	"<a href= "+"./images/plasticpig1.jpg"+">" + "<img class="+"imgprog"+" src="+"./images/plasticpig1.jpg"+">"+"</a>"
	+
	"<a href= "+"./images/plasticpig2.jpg"+">" + "<img class="+"imgprog"+" src="+"./images/plasticpig2.jpg"+">"+"</a>"
	+
	"<a href= "+"./images/plasticpig3.jpg"+">" + "<img class="+"imgprog"+" src="+"./images/plasticpig3.jpg"+">"+"</a>"
	;
	document.getElementById('prog').innerHTML=content;
}

function show5(){
	$(".clicked").removeClass("clicked");

	document.getElementById('prog').style.display= "";

	var content=
	"<p class="+"titoloprog"+"> Gaia Charta. La storia e le lotte del Fronte Unitario Omosessuale Rivoluzionario Italiano <p>"
	+
	"<p class="+"sottotitoloprog"+"> University project <p>"
	+
	"<p class="+"testoprog"+"> Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo tipografo prese una cassetta di caratteri e li assemblò per preparare un testo campione. È sopravvissuto non solo a più di cinque secoli, ma anche al passaggio alla videoimpaginazione, pervenendoci sostanzialmente inalterato. Fu reso popolare, negli anni ’60, con la diffusione dei fogli di caratteri trasferibili “Letraset”, che contenevano passaggi del Lorem Ipsum, e più recentemente da software di impaginazione come Aldus PageMaker, che includeva versioni del Lorem Ipsum. <p>"
	
	document.getElementById('prog').innerHTML=content;
}


function show6(){
	$(".clicked").removeClass("clicked");

	document.getElementById('prog').style.display= "";

	var content=
	"<p class="+"titoloprog"+"> Amaro font <p>"
	+
	"<p class="+"sottotitoloprog"+"> Workshop with Beatrice D'Agostino <p>"
	+
	"<p class="+"testoprog"+"> Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo tipografo prese una cassetta di caratteri e li assemblò per preparare un testo campione. È sopravvissuto non solo a più di cinque secoli, ma anche al passaggio alla videoimpaginazione, pervenendoci sostanzialmente inalterato. Fu reso popolare, negli anni ’60, con la diffusione dei fogli di caratteri trasferibili “Letraset”, che contenevano passaggi del Lorem Ipsum, e più recentemente da software di impaginazione come Aldus PageMaker, che includeva versioni del Lorem Ipsum. <p>"
	
	document.getElementById('prog').innerHTML=content;
}


function show7(){
	$(".clicked").removeClass("clicked");

	document.getElementById('prog').style.display= "";

	var content=
	"<p class="+"titoloprog"+"> Sonar. Advanced Music Festival <p>"
	+
	"<p class="+"sottotitoloprog"+"> Branding <p>"
	+
	"<p class="+"testoprog"+"> Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo tipografo prese una cassetta di caratteri e li assemblò per preparare un testo campione. È sopravvissuto non solo a più di cinque secoli, ma anche al passaggio alla videoimpaginazione, pervenendoci sostanzialmente inalterato. Fu reso popolare, negli anni ’60, con la diffusione dei fogli di caratteri trasferibili “Letraset”, che contenevano passaggi del Lorem Ipsum, e più recentemente da software di impaginazione come Aldus PageMaker, che includeva versioni del Lorem Ipsum. <p>"
	
	document.getElementById('prog').innerHTML=content;
}

function show8(){
	$(".clicked").removeClass("clicked");

	document.getElementById('prog').style.display= "";

	var content=
	"<p class="+"titoloprog"+"> Sonar. Advanced Music Festival <p>"
	+
	"<p class="+"sottotitoloprog"+"> Branding <p>"
	+
	"<p class="+"testoprog"+"> Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo tipografo prese una cassetta di caratteri e li assemblò per preparare un testo campione. È sopravvissuto non solo a più di cinque secoli, ma anche al passaggio alla videoimpaginazione, pervenendoci sostanzialmente inalterato. Fu reso popolare, negli anni ’60, con la diffusione dei fogli di caratteri trasferibili “Letraset”, che contenevano passaggi del Lorem Ipsum, e più recentemente da software di impaginazione come Aldus PageMaker, che includeva versioni del Lorem Ipsum. <p>"
	
	document.getElementById('prog').innerHTML=content;
}