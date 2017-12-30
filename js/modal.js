$(document).ready(function() {
   
   // Lorsque l'on clique sur show on affiche la fenêtre modale
   $('#showIntro').click(function (e) {
       //On désactive le comportement du lien
        e.preventDefault();
      showModal('#intro');
   });
   // Lorsque l'on clique sur show on affiche la fenêtre modale
   $('#showAbout').click(function (e) {
       //On désactive le comportement du lien
        e.preventDefault();
      showModal('#about');
   });
   
   
   // Lorsque l'on clique sur le fond on cache la fenetre modale   
   $('#fond').click(function () {
      hideModal();
    });
   
   // Lorsque l'on modifie la taille du navigateur la taille du fond change
   $(window).resize(function () {
      resizeModal()
   });
   
});

function showModal(id){
   //var id = '#modal';
   //$(id).html('<img src="images/heros.png" /> </br>Bienvenue sur mon petit jeu de noël<br/><br/>Aide le héros à inviter tous ses amis à sa fête puis à revenir chez lui.<br/><br/><u>Avancer</u> : flèches directionnelles.<br/><u>Dialoguer avec les amis</u> : barre espace</br><u>Perso bloqué</u> : tu as atteint un obstacle ou un amis, il faut changer de direction ou l\'inviter<br/><u>Changer d\'amis</u> : recharger la fenêtre ^^ (réinitialise le jeu)<br/> <br/><a href="#" class="close">Let\'s play !</a>');
   //$(id).html('');
   
   // On definit la taille de la fenetre modale
   resizeModal(id);
   
   // Effet de transition     
   $('#fond').fadeIn(1000);   
   $('#fond').fadeTo("slow",0.8);
   // Effet de transition   
   $(id).fadeIn(2000);
   
   $('.popup .close').click(function (e) {
      // On désactive le comportement du lien
      e.preventDefault();
      // On cache la fenetre modale
      hideModal();
    });
}

function hideModal(){
   // On cache le fond et la fenêtre modale
   $('#fond, .popup').hide();
   //$('.popup').html('');
}


function resizeModal(id){
   var modal = $(id);
   // On récupère la largeur de l'écran et la hauteur de la page afin de cacher la totalité de l'écran
   var winH = $(document).height();
   var winW = $(window).width();
   
   // le fond aura la taille de l'écran
   $('#fond').css({'width':winW,'height':winH});
   
   // On récupère la hauteur et la largeur de l'écran
   var winH = $(window).height();
   // On met la fenêtre modale au centre de l'écran
   modal.css('top', winH/2 - modal.height()/2);
   modal.css('left', winW/2 - modal.width()/2);
}