# Prenez en main Create React App



Yarn est un package manager.



Extension vs code pretier esLint très utile



Dossier Node module

Dossier qui regroupe toutes les Dépendances



Dossier public

Fichier index.html et autres fichiers relatifs au référencement web de la page



SRC

Dossier qui contient les fichiers créés et modifié.

Permet aussi d'initialiser l'application React.

Il contient aussi le fichier app.js qui est notre premier composant React.



Package.json

Ici situé à la racine permettant de gérer les dépendances (tous les outils permettant de construire mes projets)



Dans ce fichier on pourra installer web pack Babel et esLint par exemple grâce à React Script.



React Dom et React sont dans ce fichier.



Le dossier public.

On peut trouver le fichier index.html. C'est le template de l'application.

La ligne div avec l'ID root est dans ce fichier.





depencies Ce sont des dépendances nécessaire au code en local comment production. yarn add pour installer les depencies 



devdepencies Ce sont les dépendances uniquement nécessaires pour la phase de développement. yarn add dev pour installer les dev depencies





Le fichier Readme.md Pour afficher une explication de comment installer le projet



Et le fichier GitIgnore pour tous les fichiers que l'on ne veut pas pusher sur GitHub. (le dossier des nodes modules par exemple



Tuto sur React 17 (apparemment la plus répandue dans les entreprises). 



pour modifier les dépendances nécessaires à telle ou telle Version de React Il faut changer les dependence, supprimer le fichier package.lock ou yarn.lock ainsi que le dossier node\_modules.



et entrer la commande Yarn dans le terminal pour installer les nouveaux modules.



En cas d'erreur causé par la version 16 de Node par ExampleIl faut entrer la commande --openssl-legacy-provider Après chaque expression dans react-script. 



ex : 

"scripts": {

&nbsp;   "start": "react-scripts --openssl-legacy-provider start",

},



Yarn start pour démarrer une application en mode développement (Bien penser à aller dans le dossier du projet avant).



Yarn run build pour créer un build avec du code transformé et mini-fié pour déployer l'application en production (la mettre en ligne).



Il y a un test pour Exécuter les tests.





Bonne pratique:

commencer par mettre les fichiers dans un dossier components dans Src (app.js) Penser à changer le chemin dans index.js.





Exercice un, sa première fonction.



Syntaxe d'une fonction : 



function Banner (){

&nbsp;   return <h1> La maison de la jungle</h1>

}



Le fait d'ajouter "export default Banner" Évite d'utiliser les accolades au moment de l'import grâce à ES6.



Pour afficher le composant sur la page Il faut se rendre sur le fichier app.js Supprimer le code de base et importer nos composants dans la fonction app (Dans le cas où la fonction app doit afficher plusieurs éléments, il faut wrapper les composants entre eux avec des accolades).



BON À SAVOIR :





Create React app est une boite à outils de chez facebook

Un projet CRA contient toujours :



&nbsp;- un fichier index.html (Template)

&nbsp;- un fichier package.json (liste des dépendances et des scripts)

&nbsp;- un fichier index.js (endroit ou React est greffé et initialisé.



CRA s'exécute avec un gestionnaire de paquet (YARN actuellement)



les "import" se font grâce à Webpack.









