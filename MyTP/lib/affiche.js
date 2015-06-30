/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var projet = new Array();
projet['nom'] = 'BDPhilia';
projet['auteur'] = 'Maxime PUECH';
projet['copy'] = '&copy; 2009 ARVALIS';

function affichePageBandeauHaut() {
    var bandeauHTML = '<div id="bandeau"></div>';

    // affichage de bandeauHTML
    document.write(bandeauHTML);
}

function afficheFooter() {
    var footerHTML = '<div id="pied"><span>' + projet['copy'] + ' - R&eacute;alis&eacute; par ' + projet['auteur'] + '</span></div>';

    // affichage de footerHTML
    document.write(footerHTML);
}

function affichePageTitre(nompage) {

    for (var i = 0; i < pagesDisponibles.length; i++) {
        if (pagesDisponibles[i][1] === nompage) {
            var titrepage = pagesDisponibles[i][2];
        }
    }
    var titreHTML = '<div id="titre"><h1>' + titrepage + '</h1></div>';

    // affichage de titreHTML
    document.write(titreHTML);
}