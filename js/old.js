/* fonction pour detecter les obstacles */
function detecteCollision(sprite) {

	var collision = SAT.testPolygonPolygon(lac1, sprite.toPolygon() , response);
	collision += SAT.testPolygonPolygon(maison, sprite.toPolygon() , response);
	collision += SAT.testPolygonPolygon(maison_haut, sprite.toPolygon() , response);
	collision += SAT.testPolygonPolygon(lac2, sprite.toPolygon() , response);
	collision += SAT.testPolygonPolygon(bas_gauche, sprite.toPolygon() , response);
	collision += SAT.testPolygonPolygon(bas_droit, sprite.toPolygon() , response);
	collision += SAT.testPolygonPolygon(bas, sprite.toPolygon() , response);
	collision += SAT.testPolygonPolygon(haut, sprite.toPolygon() , response);
	collision += SAT.testPolygonPolygon(bord_gauche, sprite.toPolygon() , response);
	
	collision += SAT.testPolygonCircle(sprite.toPolygon(), maison_arbre, response);
	collision += SAT.testPolygonCircle(sprite.toPolygon(), arbre_bas, response);
	collision += SAT.testPolygonCircle(sprite.toPolygon(), arbre1, response);
	collision += SAT.testPolygonCircle(sprite.toPolygon(), arbre2, response);
	collision += SAT.testPolygonCircle(sprite.toPolygon(), arbre3, response);
	collision += SAT.testPolygonCircle(sprite.toPolygon(), arbre4, response);
	collision += SAT.testPolygonCircle(sprite.toPolygon(), arbre5, response);
	return collision;			
}

function detecteTrap(sprite) {
	if (SAT.testPolygonPolygon(sprite.toPolygon(), puits.toPolygon() , response)) {
		var trap = new Image();
		trap.src = "images/trap.png";
		context.drawImage(trap, posX+taillePerso/2, posY-105);// 105 hauteur de la bulle
	}	
}

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}

/* fonction pour initialiser les easter */
function initEaster() {
	for (var i = 0; i < nbEaster; i++) {
		do {
			var aleaX = getRandomInt(0, 1428);
			var aleaY = getRandomInt(0, 705);
			var posTextX = getRandomInt(0,3);
			var posTextY = getRandomInt(0,3);
			var temp = new SAT.Box(new SAT.Vector(aleaX, aleaY), easterWidth, easterHeight);}
		while (detecteCollision(temp))
		easters.push({numeroX : getRandomInt(0, nbColSpriteEaster-1), numeroY : getRandomInt(0, nbRowSpriteEaster-1), easterPosX : aleaX , easterPosY : aleaY, trouve : false, textPosX : posTextX, textPosY : posTextY"}); // pour un sprite de 11 images sur 16
	}
}

/* fonction pour initialiser les easter */
function initEaster() {
	for (var i = 0; i < nbEaster; i++) {
		do {
			var aleaX = getRandomInt(0, 1428);
			var aleaY = getRandomInt(0, 705);
			var posTextX = getRandomInt(0,3);
			var posTextY = getRandomInt(0,3);
			var temp = new SAT.Box(new SAT.Vector(aleaX, aleaY), easterWidth, easterHeight);}
		while (detecteCollision(temp))
		easters[i] = {numeroX : getRandomInt(0, nbColSpriteEaster-1), numeroY : getRandomInt(0, nbRowSpriteEaster-1), easterPosX : aleaX , easterPosY : aleaY, trouve : false, textPosX : posTextX, textPosY : posTextY}; // pour un sprite de 11 images sur 16
	}
}


			
/* fonction pour afficher les easter */
function afficheEaster() {
	for (var i = 0; i < nbEaster; i++) {
		if (!easters[i].trouve)
		{context.drawImage(easter, easters[i].numeroX*easterWidth, easters[i].numeroY*easterHeight, easterWidth, easterHeight, easters[i].easterPosX, easters[i].easterPosY, easterWidth, easterHeight);
		// affichage de l'easter si il n'est pas déjà trouvé
		}
	}
}


			/* fonction pour afficher le resultat */
			function afficheResultat() {
				var compteur = 0;
				for (var i = 0; i < nbEaster; i++) {
					if (easters[i].trouve) {
						compteur += 1;
					}									
				}
				nbEasterFound = compteur;
				document.getElementById("points" ).innerHTML = "Invitations restantes à distribuer : " + (nbEaster-nbEasterFound);
			}
			
						
			/* fonction pour rencontrer les easter */
			function rencontreEaster(sprite) {
				for (var i = 0; i < nbEaster; i++) {
					if (easters[i].trouve == false) {
						var temp = new SAT.Box(new SAT.Vector(easters[i].easterPosX, easters[i].easterPosY), easterWidth, easterHeight);
						var collision = SAT.testPolygonPolygon(temp.toPolygon(), sprite.toPolygon() , response);
											
						if (collision == true) {	
							context.drawImage(thanks,easters[i].textPosX*100,easters[i].textPosY*50,100,50,easters[i].easterPosX, easters[i].easterPosY,100,50);
							//setTimeout(function(){ramasseEaster(i);},5000);
							ramasseEaster(i);
						}
					}
				}
				
			}
			
			/* fonction pour ramasser les easter */
			function ramasseEaster(numero) {
				easters[numero].trouve = true;
				afficheResultat();
			}
	
				
			function testMaison(sprite) {
				if (SAT.testPolygonPolygon(sprite.toPolygon(), porte.toPolygon() , response)) {
					if (nbEasterFound != nbEaster) {
					// continue...
					var erreur = new Image();
					erreur.src = "images/erreur.png";
					context.drawImage(erreur, 1045, 55);
					//alert('pas fini');
					}
					else {
						finPartie();
					}
				}
			}
			
			
			function finPartie() {
				context.drawImage(fin, 1045, 55);
				setTimeout('document.location.href="./merryGeekMas.html"', 3000);
			}






