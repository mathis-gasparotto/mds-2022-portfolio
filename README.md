
# Portfolio - Mathis GASPAROTTO

**[Lien du site](https://portfolio.mathisgasparotto.fr/)**

***Avant toutes chose, il faut noter que pour voir le responsive du site, il est préférable de rechaarger la page une fois le type de device changé (il y a des propriétés JS qui se définissent au chargement du site, et par rapport à la taille de l'écran)***


Pour concevoir ce site, je me suis inspiré de base sur un thème WordPress. 
Ce thème ([Thème Neve](https://fr.wordpress.org/themes/neve/)) avait déjà un design assez ergonomique (aéré, design entres les sections assez distinct), et il m'avait séduit.

Puis, je suis tombé sur un tuto pour faire un site avec de la 3D intégré. 
J'ai donc voulu tester, et j'ai rajouté mon style dessus. 
Cette 3D que j'ai ajouté sur le site m'a permis, d'une part, de découvrir la 3D en CSS 😉, et d'autre part, de faire un site qui reste plaisant à l'utilisateur, et assez différents des autres sites, afin de pousser l'utilisateur à rester et à revenir sur mon site.
De plus, l'utilisateur se souviendra mieux de mon site grâce à cette petite fonctionnalité.

## Charte graphique
### Couleurs

| Titre             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Couleur primaire | ![#FBB03B](https://via.placeholder.com/10/FBB03B?text=+) #FBB03B |
| Couleur secondaire | ![#14171C](https://via.placeholder.com/10/14171C?text=+) #14171C |
| Couleur tertiaire | ![#FFFFFF](https://via.placeholder.com/10/FFFFFF?text=+) #FFFFFF |


### Typos

- Text : Poppins (regular)
- Titre : Poppins (Bold)



### Logos


<img src="https://portfolio.mathisgasparotto.fr/data/img/rogne-noir-fond-blanc.png" alt="logo" width="250"/>
<img src="https://portfolio.mathisgasparotto.fr/data/img/rogne-noir-noir-orange-fond-blanc.png" alt="logo" width="250"/>
<img src="https://portfolio.mathisgasparotto.fr/data/img/rogne-noir-noir-fond-blanc.png" alt="logo" width="250"/>
<img src="https://portfolio.mathisgasparotto.fr/data/img/rogne-blanc-fond-noir.png" alt="logo" width="250"/>
<img src="https://portfolio.mathisgasparotto.fr/data/img/rogne-blanc-fond-noir-inner-white.png" alt="logo" width="250"/>
<img src="https://portfolio.mathisgasparotto.fr/data/img/rogne-blanc-blanc-fond-noir.png" alt="logo" width="250"/>


## Règles d'ergonomie utilisées

### Règles d'UX

J’ai travaillé sur un design plutôt sobre, aéré, et agréable à regarder, afin de motiver l’utilisateur à continuer sa visite. (Effet esthétique d’utilisabilité)

J’ai utilisé la loi de Fitts en positionnant le menu sur mobile en bas de l’écran, et le bouton d’accès au menu en haut à droite de l’écran pour la version desktop.

J’ai également utilisé la loi de proximité pour mes compétences et mes projets, afin de bien associer l’illustration avec le texte qui va avec.

J’ai également utilisé la loi de similitude pour toutes les sections, afin que l’on distingue bien que ce sont des sections différentes. Et de ce fait, j’ai pu faire des sections bien distinctes, et positionnées dans un ordre bien réfléchi (plus importantes au moins importantes, avec la section de contact à la fin). Cela correspond également à un des principes d’Amélie Boucher : l’architecture.

### Amélie Boucher

Un autre de ces principes présents sur ma landing page, c’est celui de la convention, selon Amélie Boucher. En effet, j’ai fait en sorte que l’utilisateur ne soit pas perdu lors de sa visite sur mon site :
-	j’ai bien illustré le bouton qui ouvre le menu avec 3 barres horizontales (pour la version desktop) ;
-	j’ai bien mis le bouton pour remonter tout en haut de la page en bas à droite ;
-	j’ai bien mis le bouton d’envoie du formulaire de contact en-dessous de ce dernier.

Encore un autre de ces principes utilisés, c’est celui a de la cohérence :
-	tous les titres de section ont la même taille ;
-	tous les titres de sous-section ont la même taille ;
-	toutes les sections ont le même espace entres elles ;
-	toutes les sections ont la même largeur de contenu ;
-	la typographie est la même pour tous les texte et pour tous les titres.


Un autre de ces principes utilisés, c’est celui de l’information :
-	l’utilisateur connait sa progression sur la page grâce à la barre de progression (en version mobile) ;
-	l’utilisateur connait sa position dans le site grâce au changement dynamique de couleur des icones de sections dans la barre de navigation (en version mobile).

Encore un autre de ces principes utilisés, celui de la gestion des erreurs :
-	lorsque l’utilisateur remplit le formulaire, mais qu’il le soumet avec des erreurs, le site lui indique qu’il y a une erreur, et lui précise quel est réellement l’erreur ;
-	et de plus, lorsque l’utilisateur revient sur le formulaire après une erreur, les champs corrects récupèrent la valeur que l’utilisateur avait déjà renseigné ;
-	à côté de cela, tout libellé de champ requis, est suivi d’un « * » ;

Un autre de ces principes utilisés, c’est celui de l’accessibilité :
-	le site est accessible sur mobile, tablette, et ordinateur ;
-	le site est optimisé au maximum, afin qu’il reste accessible par le maximum de débit réseau ;
-	afin de rendre la visite du site par des non-voyants, chaque image et bouton possèdent l’attribut « title », afin d’informer vocalement (via un outil externe) l’utilité des éléments des image et bouton du site ;
-	le site possède des contrastes de couleur convenable, afin que ce dernier reste accessible pour toutes personnes en capacité de vision réduite ;
-	le site possède une navbar (en version desktop) qui change de fond lorsque qu’elle atteint le contenu, afin que cette dernière puisse être encore assez bien visible.

Un dernier de ces principes utilisés, c’est celui de la satisfaction de l’utilisateur, selon Amelie Boucher :
-	le site possède  des animations agréables à regarder, afin de motiver l’utilisateur à rester dessus (animation de hover pour les cartes de projet, les bulles tournent sur elles-mêmes au scroll, animation de hover sur les liens du menu pour la version desktop) ;
-	le site possède un menu de navigation incluant un effet de 3d (pour la version desktop) ;
-	le site possède des animations, au scroll, sur les 4 bulles du début.

### Heuristiques de Bastien et Scapin

En ce qui concerne les heuristiques de Bastien et Scapin, j’en ai utilisé plusieurs sur mon site :
-	Groupement / Distinction entre éléments :
    -	Les éléments d’une même section sont tous identique, ou semblable
-	Groupement / Distinction par la localisation :
    -   Les éléments d’une même section sont tous regroupé géographiquement
-	Groupement / Distinction par le format :
    -   Tous les champs du formulaire de contact ont tous le même format
-	Lisibilité :
    -   Tous les textes ont un contraste de couleur correct ;
    -   Les paragraphes sont en minuscule ;
    -   Les longs paragraphes ne sont pas centrés, ni alignés à droite
-	Protection contre les Erreurs :
    -   Un « * » est présent pour chaque champ requis du formulaire de contact, afin de prévenir l’utilisateur d’une erreur qu’il aurait pu commettre 
-	Qualité des Messages d’Erreurs :
    -   Les erreurs renvoyées à l’utilisateur lorsqu’il y en a une au niveau du formulaire de contact, sont claires et précises 
-	Homogénéité / Cohérence :
    -   Tous les boutons ont le même style (juste 2 types de couleurs suivant les éléments voisins)
-	Signifiance des Codes et Dénominations :
    -   Tous les boutons ont un texte correspondant à leur action




---

*PS : le logo de la navbar en desktop change en partie de couleur quand le fond de cette navbar change (seul quelques parties du logo change de couleur)*