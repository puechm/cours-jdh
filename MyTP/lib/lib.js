/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function ficheBd(id, titre, auteur, sortie, resume, leprix, lestock) {
    this.id = id;                          // entier incrémenté
    this.titre = titre;
    this.auteur = auteur;
    this.sortie = sortie;                   // année de sortie
    this.resume = resume;
    this.prix = ( ( leprix === undefined ) ? 0 : leprix );           // si non defini dans le constructeur, mettre a 0.00
    this.stock = ( ( lestock === undefined ) ? 0 : lestock );        // si non defini dans le constructeur, mettre a 0
    this.stocker = incremente;              // incrémente le stock de qte si fourni, de 1 sinon
    this.destocker = decremente;            // décrémente le stock de qte si fourni, de 1 sinon
    this.toString = affiche;                //  affiche une répésentation textuelle de l'objet
}

function incremente(qte) {
    this.stock += ( ( qte === undefined ) ? 1 : qte );
}

function decremente(qte) {
    this.stock -= ( ( qte === undefined ) ? 1 : qte );
}

function affiche() {
    ficheHTML = 'FICHE BD Numero ' + this.id + ' : ' + this.titre + '<br>';
    ficheHTML += 'Auteur : ' + this.auteur + '<br>';
    ficheHTML += 'Prix : ' + this.prix + '<br>';
    ficheHTML += 'Stock : ' + this.stock + '<br><br>';
    
    return ficheHTML;
}
