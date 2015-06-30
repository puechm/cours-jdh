/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var pagesDisponibles = [
    ['Accueil','index.htm','Bienvenue sur ' + projet['nom']],
    ['Recherche','recherche.htm','Votre recherche de BD'],
    ['Commande','commande.htm','Votre panier']
];

function affichePageMenu(nompage) {
    // ouverture de la <div> et du <ul>
    var menuHTML = '<div id="menu"><ul>';
    
    // boucle pour générer les <li> autant de fois qu'il y a de pages disponibles
    for (var i = 0; i < pagesDisponibles.length; i++) {
        if(pagesDisponibles[i][1] === nompage) {
            select = 'class="select"';
        } else {
            select = '';
        }
	menuHTML += '<li ' + select + ' ><a href="' + pagesDisponibles[i][1] + '" title="' + pagesDisponibles[i][2] + '">' + pagesDisponibles[i][0] + '</a></li>';
    }
    
    // fermeture de la </div> et du </ul>
    menuHTML += '</ul></div>';
    
    // affichage de menuHTML
    document.write(menuHTML);
}