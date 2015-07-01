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

function stockBd() {
    this.stock = new Array();
    this.stockByKey = new Array();
    
    this.ajouter = function (id, titre, auteur, sortie, resume, prix, stock)
		{
			this.referencer(new ficheBd(id, titre, auteur, sortie, resume, prix, stock));
		}
		
    this.referencer = function (bd)
    {
            if(typeof bd == 'object')
            {
                    this.stockByKey[bd.id]= this.stock.length;
                    this.stock[this.stock.length]= bd;
            }
    }
    
    this.stocker = function (id,qte)
		{
			this.stock[this.stockByKey[id]].stocker(qte);
		}
		
		
		this.destocker = function (id,qte)
		{
			this.stock[this.stockByKey[id]].stocker(qte);
		}
		
	
		this.toString = function()
		{
			out = "<h3>Tableau des BD</h3><table class=\"search\">";
			out+= "<tr><th>Titre</th><th>Auteur</th><th>Sortie</th><th>Prix</th><th>Stock</th></tr>";
			for ( i = 0; i < this.stock.length; i++) {
				var altern = i % 2;
				out+= "<tr class=\"altern"+altern+"\"><td>"+this.stock[i].titre+"</td>";
				out+= "<td>"+this.stock[i].auteur+"</td>";
				out+= "<td>"+this.stock[i].sortie+"</td>";
				out+= "<td>"+this.stock[i].prix+"</td>";
				out+= "<td>"+this.stock[i].stock+"</td></tr>";
			}
			out+= "</table>";
			return out;
		}
}