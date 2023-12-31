
![Shema infra](https://github.com/YacineBOUHALA/ITravel/blob/master/src/assets/images/infra.png)


===============================|Introduction|===============================

ITravel est une application destinée à une population qui aime voyager. Le but de cette dernière est de permettre à ces personnes de conserver une trace de leurs voyages et souvenirs dans un espace privé qui leur est dédié. Cela leur permettrait de garder une trace de tous les endroits visités avec un commentaire spécifique et une photo pour chaque lieu, afin d'immortaliser tous leurs bons moments de vacances et de voyage.

==========================|Application|====================================

Pour pouvoir utiliser l'application, suivez ces étapes :
  * Clonez ou téléchargez l'application.
  * Rendez-vous dans le dossier de l'application.
  * Lancez la commande `npm install` pour installer les dépendances de l'application.
  * Effectuez `amplify init` en suivant les étapes pour lier votre compte AWS à l'application.
  * Lancez la commande `npm start` pour démarrer l'application.
  * Ajoutez vos clés dans git pour permettre le diploiment automatique

===================|Aspects techniques|====================================

L'application repose sur la technologie Amplify d'AWS et comprend notamment :
  - Une base de données DynamoDB :
    * Pour stocker :
      * Le nom de l'endroit
      * L'adresse de l'endroit
      * L'URL de l'image associée à l'endroit
      * Un commentaire
      * Le taux de satisfaction

  - Un service S3 :
    * Pour stocker les images

L'application est basée sur une architecture microservices, ce qui la rend facile à maintenir et à faire évoluer.

Notre application se déploie automatiquement selon des règles précises grâce à la mise en œuvre de pipelines CI/CD. Ces pipelines déclenchent le déploiement lors d'un push sur une branche spécifique, uniquement si les tests réussissent.

Le déploiement automatique a lieu exclusivement sur la branche nommée `deployment`.
Un esLinter a été mis en place pour vérifier la syntaxe du code et aider a écrir du clean code.


===================|Fonctionalité non terminée|==========================

-mise a jour d'un élément(update)
-navbar
=================================|Auteur|================================
* Yacine BOUHALA

* Massi HEDJLOUM
