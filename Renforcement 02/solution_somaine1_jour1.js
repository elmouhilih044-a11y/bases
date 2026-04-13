// # 🔴 MARDI — Renforcement : Méthodes de tableaux (1h)


// ## R-Challenge 1 — Le gestionnaire de playlist

// Tu développes un lecteur de musique. Tu as un tableau de 10 chansons (chaque chanson est un objet : titre, artiste, durée en secondes, genre).




// 8. Trie les chansons par durée, de la plus courte à la plus longue

// 1. Affiche uniquement les titres de toutes les chansons
let chansons=[
     {titre: "hali", artiste: "inconnu", dureeSeconde: 170, genre: "rap"},
    {titre: "street vibes", artiste: "mc flow", dureeSeconde: 200, genre: "rock"},
    {titre: "no stress", artiste: "young beat", dureeSeconde: 185, genre: "rap"},
    {titre: "dark night", artiste: "lil shadow", dureeSeconde: 210, genre: "rap"},
    {titre: "freestyle 1", artiste: "unknown", dureeSeconde: 160, genre: "rock"},
    {titre: "life story", artiste: "mc truth", dureeSeconde: 195, genre: "rap"},
    {titre: "on fire", artiste: "rap king", dureeSeconde: 175, genre: "rock"},
    {titre: "dreams", artiste: "young star", dureeSeconde: 205, genre: "rap"},
    {titre: "underground", artiste: "ghost mc", dureeSeconde: 190, genre: "rap"},
    {titre: "rise up", artiste: "street boy", dureeSeconde: 180, genre: "rap"}
];

function affichageTitre(chansons){
   return chansons.forEach(ch=>console.log(ch.titre));
}

affichageTitre(chansons);

// 2. Crée un nouveau tableau contenant uniquement les chansons de genre "Rock"
function arrRock(chansons){
   return chansons.filter(ch=>ch.genre=="rock");
}
console.log(arrRock(chansons));

// 3. Crée un nouveau tableau où chaque durée est convertie en format "3:45" (minutes:secondes)

function arrTime(chansons){
    return chansons.map(ch=>
        Math.floor(ch.dureeSeconde/60)+":"+
        (ch.dureeSeconde%60).toString().padStart(2,"0"));
       
   
}
console.log(arrTime(chansons));

// 4. Calcule la durée totale de la playlist en minutes et secondes

function totalDuree(chansons){
  let result =chansons.reduce((total,ch)=> total+ch.dureeSeconde,0);
   let m=Math.floor(result/60);
   return[
result,
m
   ]
   
}
console.log(totalDuree(chansons))

// 5. Trouve la chanson la plus longue

function plusLongue(chansons){
    return chansons.reduce((max, ch) => {
        return ch.dureeSeconde > max.dureeSeconde ? ch : max;
    });
}

console.log(plusLongue(chansons));

// 6. Vérifie si toutes les chansons durent moins de 6 minutes

function toutesMoins6min(chansons){
    return chansons.every(ch => ch.dureeSeconde < 360);
}

console.log(toutesMoins6min(chansons));

// 7. Vérifie si au moins une chanson est du genre "Jazz"

function auMoinsUneJazz(chansons){
    return chansons.some(ch => ch.genre === "jazz");
}

console.log(auMoinsUneJazz(chansons));

// 8. Trie les chansons par durée, de la plus courte à la plus longue
function trierParDuree(chansons){
    return [...chansons].sort((a, b) => a.dureeSeconde - b.dureeSeconde);
}


// ## R-Challenge 2 — L'analyse des ventes

// Tu es data analyst dans un magasin. Tu as un tableau de 12 objets représentant les ventes mensuelles (mois, chiffre_affaires, nb_clients, ville).
let ventes = [
  {mois: "janvier", chiffre_affaires: 10000, nb_clients: 50, ville: "Tanger"},
  {mois: "février", chiffre_affaires: 12000, nb_clients: 60, ville: "Casablanca"},
  {mois: "mars", chiffre_affaires: 9000, nb_clients: 40, ville: "Rabat"},
  {mois: "avril", chiffre_affaires: 15000, nb_clients: 70, ville: "Marrakech"},
  {mois: "mai", chiffre_affaires: 11000, nb_clients: 55, ville: "Fès"},
  {mois: "juin", chiffre_affaires: 13000, nb_clients: 65, ville: "Agadir"},
  {mois: "juillet", chiffre_affaires: 17000, nb_clients: 80, ville: "Tanger"},
  {mois: "août", chiffre_affaires: 169000, nb_clients: 75, ville: "Casablanca"},
  {mois: "septembre", chiffre_affaires: 14000, nb_clients: 60, ville: "Rabat"},
  {mois: "octobre", chiffre_affaires: 125900, nb_clients: 58, ville: "Marrakech"},
  {mois: "novembre", chiffre_affaires: 13500, nb_clients: 62, ville: "Fès"},
  {mois: "décembre", chiffre_affaires: 50000, nb_clients: 90, ville: "Agadir"}
];
// 1. Calcule le chiffre d'affaires total de l'année

function CalculechAnnee(ventes){
    return ventes.reduce((acc,v)=>acc+v.chiffre_affaires,0)
}
console.log(CalculechAnnee(ventes));
// 2. Calcule le chiffre d'affaires moyen par mois
function CalculechMois(ventes){
let totalAnnee=ventes.reduce((acc,v)=>acc+v.chiffre_affaires,0);
return totalAnnee/12;
}
console.log(CalculechMois(ventes));
// 3. Trouve le mois avec le meilleur chiffre d'affaires
function meilleurCh(ventes){
    return ventes.reduce((max,v)=>v.chiffre_affaires>max.chiffre_affaires?v:max)
}
console.log(meilleurCh(ventes));
// 4. Trouve le mois avec le moins de clients
function moiMoinsClients(ventes){
    return ventes.reduce((min,v)=>v.nb_clients<min.nb_clients?v:min,ventes[0])
}
console.log(moiMoinsClients(ventes));
// 5. Crée un nouveau tableau avec uniquement les mois où le CA dépasse 50 000€
function moisAvecCA(ventes){
    return ventes.filter(v=>v.chiffre_affaires>50000).map(v=>v.mois);
}
console.log(moisAvecCA(ventes))
// 6. Crée un résumé par ville : pour chaque ville, le CA total et le nombre total de clients
function parVille(ventes){
    return ventes.reduce((acc, v) => {
        if (!acc[v.ville]) {
            acc[v.ville] = {
                caTotal: 0,
                clientsTotal: 0
            };
        }

        acc[v.ville].caTotal += v.chiffre_affaires;
        acc[v.ville].clientsTotal += v.nb_clients;

        return acc;
    }, {});
}

console.log(parVille(ventes));

// 7. Trie les mois par chiffre d'affaires décroissant
function trieParCA(ventes){
    return ventes.sort((a,b)=>b.chiffre_affaires-a.chiffre_affaires);
}
console.log(trieParCA(ventes));
// 8. Calcule la croissance entre chaque mois (CA mois N - CA mois N-1) et affiche-la

// 

// ## R-Challenge 3 — Le système de notation 🔥

// Un site web de recettes a un tableau d'avis utilisateurs (pseudo, note de 1 à 5, commentaire, date). Tu as 15 avis.
let avis = [
  { pseudo: "Ali", note: 4, commentaire: "Très bon site", date: "2024-01-01" },
  { pseudo: "Sara", note: 5, commentaire: "Excellent", date: "2024-01-02" },
  { pseudo: "Youssef", note: 3, commentaire: "Pas mal", date: "2024-01-03" },
  { pseudo: "Fatima", note: 4, commentaire: "J'aime bien", date: "2024-01-04" },
  { pseudo: "Omar", note: 2, commentaire: "Moyen", date: "2024-01-05" },
];

// 1. Calcule la note moyenne arrondie à 1 décimale
// 2. Compte combien d'avis par note (combien de 1 étoile, combien de 2 étoiles, etc.)
// 3. Filtre les avis positifs (≥ 4) et les avis négatifs (≤ 2)
// 4. Trie les avis du plus récent au plus ancien
// 5. Trouve l'avis le plus long (en nombre de caractères dans le commentaire)
// 6. Crée un résumé : "4.2/5 basé sur 15 avis — 8 positifs, 3 négatifs, 4 neutres"

// 



// # 🔴 MERCREDI — Renforcement : Objets et tableaux d'objets (1h)

// ---

// ## R-Challenge 4 — Le carnet d'adresses professionnel

// Tu crées un CRM simplifié. Chaque contact est un objet avec : nom, entreprise, email, telephone, ville, et un objet imbriqué `adresse` (rue, code_postal, ville, pays).







// 

// 1. Crée 6 contacts avec des adresses complètes
let contacts = [
    {
        nom: "Hajar Elm",
        entreprise: "TechSolutions",
        email: "hajar.elm@techsolutions.com",
        telephone: "0612345678",
        ville: "Casablanca",
        adresse: {
            rue: "123 Boulevard Zerktouni",
            code_postal: 20000,
            ville: "Casablanca",
            pays: "Maroc"
        }
    },
    {
        nom: "Youssef El Mansouri",
        entreprise: "DigitalMaroc",
        email: "youssef.elm@digitalmaroc.ma",
        telephone: "0678912345",
        ville: "Rabat",
        adresse: {
            rue: "45 Avenue Mohammed V",
            code_postal: 10000,
            ville: "Rabat",
            pays: "Maroc"
        }
    },
    {
        nom: "Fatima Zahraoui",
        entreprise: "InnoTech",
        email: "fatima.z@innotech.ma",
        telephone: "0698765432",
        ville: "Rabat",
        adresse: {
            rue: "78 Rue de la Liberté",
            code_postal: 90000,
            ville: "Tanger",
            pays: "Maroc"
        }
    },
    {
        nom: "Karim Idrissi",
        entreprise: "SmartSolutions",
        email: "karim.idrissi@smartsolutions.com",
        telephone: "0654321876",
        ville: "Marrakech",
        adresse: {
            rue: "12 Rue Yougoslavie",
            code_postal: 40000,
            ville: "Marrakech",
            pays: "Maroc"
        }
    },
    {
        nom: "Sofia El Amrani",
        entreprise: "WebExpert",
        email: "sofia.elamrani@webexpert.ma",
        telephone: "0611223344",
        ville: "Rabat",
        adresse: {
            rue: "34 Avenue Hassan II",
            code_postal: 30000,
            ville: "Fès",
            pays: "Maroc"
        }
    },
    {
        nom: "Omar Chafik",
        entreprise: "DataPro",
        email: "omar.chafik@datapro.com",
        telephone: "0655443322",
        ville: "Agadir",
        adresse: {
            rue: "56 Boulevard Mohammed VI",
            code_postal: 80000,
            ville: "Agadir",
            pays: "Maroc"
        }
    }
];

// 2. Affiche le nom et la ville de chaque contact
function affichageNomVille(contacts){
    return contacts.forEach(c=>console.log(c.nom,c.ville));
}
affichageNomVille(contacts);

// 3. Regroupe les contacts par ville : pour chaque ville, la liste des noms

function regroupeParVille(contacts){
    return contacts.reduce((acc, c) => {
        const ville = c.adresse.ville;

        if (!acc[ville]) {
            acc[ville] = [];
        }

        acc[ville].push(c.nom);

        return acc;
    }, {});
}
console.log(regroupeParVille(contacts));

// 4. Cherche tous les contacts d'une entreprise donnée
function ChercheContact(contacts,entreprise){
   return contacts.filter(c=>c.entreprise===entreprise).map(c=>c.nom);

}
console.log(ChercheContact(contacts,"DataPro"));

// 5. Modifie l'adresse d'un contact (il a déménagé)
function updateAdresse(contacts,nom,newAdress){
    return contacts.forEach(c=>{
        if(nom===c.nom){
            c.adresse=newAdress;
        }
    })
}
console.log(updateAdresse(contacts,"Omar Chafik",{rue:"34 Avenue Hassan II",code_postal:20000,ville:"casa",pays:"maroc"}));
// 6. Ajoute un champ "dernierContact" (date) à chaque contact
function addDernierContact(contacts){
contacts.forEach(c=>c.dernierContact=new Date());
return contacts;
}
console.log(addDernierContact(contacts));

// 7. Affiche les contacts que tu n'as pas contactés depuis plus de 30 jours


// ## R-Challenge 5 — La gestion de stock d'un restaurant

// Tu gères le stock d'ingrédients d'un restaurant. Chaque ingrédient est un objet : nom, quantite, unite (kg, litres, pièces), prix_unitaire, seuil_alerte, categorie (légume, viande, épice, boisson).

// 1. Crée 12 ingrédients de 4 catégories différentes
let ingredients = [
    // Légumes
    {nom:"oignon", quantite:4, unite:"kg", prix_unitaire:4, seuil_alerte:7, categorie:"legume"},
    {nom:"tomate", quantite:10, unite:"kg", prix_unitaire:3, seuil_alerte:5, categorie:"legume"},
    {nom:"carotte", quantite:6, unite:"kg", prix_unitaire:2, seuil_alerte:4, categorie:"legume"},

    // Viandes
    {nom:"poulet", quantite:8, unite:"kg", prix_unitaire:20, seuil_alerte:5, categorie:"viande"},
    {nom:"boeuf", quantite:5, unite:"kg", prix_unitaire:50, seuil_alerte:3, categorie:"viande"},
    {nom:"agneau", quantite:3, unite:"kg", prix_unitaire:60, seuil_alerte:2, categorie:"viande"},

    // Épices
    {nom:"sel", quantite:2, unite:"kg", prix_unitaire:1, seuil_alerte:1, categorie:"epice"},
    {nom:"poivre", quantite:1, unite:"kg", prix_unitaire:10, seuil_alerte:1, categorie:"epice"},
    {nom:"curcuma", quantite:0.5, unite:"kg", prix_unitaire:15, seuil_alerte:0.3, categorie:"epice"},

    // Boissons
    {nom:"eau", quantite:50, unite:"litres", prix_unitaire:1, seuil_alerte:10, categorie:"boisson"},
    {nom:"jus", quantite:20, unite:"litres", prix_unitaire:3, seuil_alerte:5, categorie:"boisson"},
    {nom:"soda", quantite:30, unite:"litres", prix_unitaire:2, seuil_alerte:8, categorie:"boisson"}
];

// 2. Affiche les ingrédients dont la quantité est en dessous du seuil d'alerte
function affichageInd(ingredients){
   return ingredients.filter(i=>i.quantite<i.seuil_alerte);
}
console.log(affichageInd(ingredients));
// 3. Calcule la valeur totale du stock (quantité × prix unitaire)
function totaleStock(ingredients){
    return ingredients.reduce((acc,i)=>acc+i.quantite*i.prix_unitaire,0);
}
console.log(totaleStock(ingredients));
// 4. Affiche la valeur du stock par catégorie
function afficheStockParCategorie(ingredients,cat){
return ingredients.filter(i=>i.categorie===cat).reduce((acc,i)=>acc+i.quantite*i.prix_unitaire,0);
}
console.log(afficheStockParCategorie(ingredients,"viande"));
// 5. Simule une commande : vérifie si les ingrédients nécessaires sont disponibles. Si oui, décrémente le stock. Si non, affiche ce qui manque
// 6. Génère une liste de courses : tous les ingrédients sous le seuil d'alerte avec la quantité à commander pour revenir au double du seuil

// 

// ## R-Challenge 6 — Le classement sportif 🔥

// Tu gères le classement d'un tournoi de football. Chaque équipe est un objet : nom, points, buts_pour, buts_contre, matchs_joues.

let equipes = [
    {nom:"Wydad", points:70, buts_pour:55, buts_contre:20, matchs_joues:30},
    {nom:"Raja", points:65, buts_pour:50, buts_contre:25, matchs_joues:30},
    {nom:"FAR", points:60, buts_pour:45, buts_contre:30, matchs_joues:30},
    {nom:"FUS", points:55, buts_pour:40, buts_contre:35, matchs_joues:30},
    {nom:"MAS", points:50, buts_pour:38, buts_contre:33, matchs_joues:30},
    {nom:"OCS", points:45, buts_pour:35, buts_contre:40, matchs_joues:30},
    {nom:"IRT", points:40, buts_pour:30, buts_contre:45, matchs_joues:30},
    {nom:"HUSA", points:35, buts_pour:28, buts_contre:50, matchs_joues:30}
];

// 1. Crée 8 équipes avec des statistiques variées
// 2. Calcule la différence de buts pour chaque équipe (buts_pour - buts_contre)
function diffEquipe(equipes){
    equipes.forEach(e=>e.diff=e.buts_pour-e.buts_contre);
    return equipes;
}
console.log(diffEquipe(equipes));

// 3. Trie le classement : d'abord par points décroissant, puis par différence de buts en cas d'égalité
function trie(equipes){
   return equipes.sort((a,b)=>{
       
        if( b.points!==a.points){
             return b.points-a.points
        }
       return b.diff-a.diff;
    })
}
console.log(trie(equipes));
// 4. Affiche le classement formaté avec le rang : "1. PSG — 45 pts (diff: +28)"
// 5. Simule un match entre 2 équipes : mets à jour les points (3 victoire, 1 nul, 0 défaite), les buts et les matchs joués
// 6. Après 5 matchs simulés, réaffiche le classement mis à jour

// 


// # 🔴 JEUDI — Renforcement : CRUD et logique métier (1h)


// ## R-Challenge 7 — Le système de réservation d'un restaurant

// Tu développes le système de réservation d'un restaurant (30 places max).

// 1. Crée une structure pour gérer les réservations : chaque réservation a un id, un nom_client, un nombre_personnes,
//  une date, une heure, un statut (confirmée, en attente, annulée) et un telephone
let reservations = [
    {
        id: 1,
        nom_client: "Hajar",
        nombre_personnes: 4,
        date: "2026-06-12",
        heure: "14:00",
        statut: "confirmée",
        telephone: "07889654578"
    },
    {
        id: 2,
        nom_client: "Ali",
        nombre_personnes: 2,
        date: "2026-06-12",
        heure: "15:30",
        statut: "en attente",
        telephone: "0612345678"
    },
    {
        id: 3,
        nom_client: "Sara",
        nombre_personnes: 6,
        date: "2026-06-13",
        heure: "13:00",
        statut: "confirmée",
        telephone: "0622334455"
    },
    {
        id: 4,
        nom_client: "Youssef",
        nombre_personnes: 3,
        date: "2026-06-13",
        heure: "20:00",
        statut: "annulée",
        telephone: "0655667788"
    },
    {
        id: 5,
        nom_client: "Imane",
        nombre_personnes: 5,
        date: "2026-06-14",
        heure: "19:30",
        statut: "confirmée",
        telephone: "0699887766"
    }
];

// 2. Écris la logique pour ajouter une réservation : vérifie que le total de personnes sur ce créneau (date + heure) ne dépasse pas 30.
//  Si c'est plein, la réservation passe en "en attente"

function reservation(reservations,nouvelle){
let total=reservations.reduce((acc,r)=>{
    if(r.date===nouvelle.date && r.heure===nouvelle.heure){
     return acc+r.nombre_personnes;
    }
    return acc;
   
},0);
if(total+nouvelle.nombre_personnes>=30){
    nouvelle.statut="en attente"
}else{
  nouvelle.statut="confirme"  
reservations.push(nouvelle)  } 
return reservations
}
nouvelle={
        id: 6,
        nom_client: "valen",
        nombre_personnes: 29,
        date: "2026-06-14",
        heure: "19:30",
        statut: "",
        telephone: "0699887788"

}
console.log(reservation(reservations,nouvelle));


// 3. Écris la logique d'annulation : change le statut en "annulée" et vérifie si
//  des réservations en attente pour ce créneau peuvent maintenant être confirmées

function annulation(reservations,id){
    reservations.forEach(r=>{
     if(r.id===id){
        r.statut="annulee"
     }
    })
}



// 4. Affiche les réservations d'une date donnée, triées par heure
// 5. Calcule le taux d'occupation d'une journée (places réservées / 30 par créneau)
// 6. Teste avec 8 réservations en incluant les cas limites : créneau plein, annulation qui libère une place

// 

// ## R-Challenge 8 — Le panier e-commerce intelligent

// Tu développes la logique du panier d'un site e-commerce.

// 1. Le panier contient un tableau d'articles. Chaque article référence un produit (id, nom, prix, stock_disponible) et une quantité
let articles = [
  {
    produit: { id: 1, nom: "art", prix: 40, stock_disponible: 70 },
    quantite: 20
  },
  {
    produit: { id: 2, nom: "stylo", prix: 10, stock_disponible: 100 },
    quantite: 5
  },
  {
    produit: { id: 3, nom: "cahier", prix: 25, stock_disponible: 50 },
    quantite: 10
  },
  {
    produit: { id: 4, nom: "sac", prix: 150, stock_disponible: 30 },
    quantite: 2
  }
];

// 2. Logique d'ajout : si le produit est déjà dans le panier, augmente la quantité sans dépasser le stock. Sinon, ajoute-le

// 3. Logique de modification de quantité : vérifie que la nouvelle quantité ne dépasse pas le stock
// 4. Logique de suppression d'un article
// 5. Calculs : sous-total par article, total du panier, nombre total d'articles
// 6. Codes promo : "BIENVENUE" = -15%, "NOEL2025" = -10€ si total > 50€, "LIVGRATUITE" = -7€ de frais. Un seul code à la fois
// 7. Récapitulatif complet : lignes, remise, frais de livraison (7€, gratuits si total > 100€), TVA 20%, total TTC

// 

// ## R-Challenge 9 — Le convertisseur de devises 🔥

// Tu crées un convertisseur multi-devises pour une application de finance.

// 1. Crée un objet contenant les taux de change par rapport à l'euro : USD (1.08), GBP (0.86), MAD (10.85), JPY (162.5), CAD (1.47)
// 2. Écris la logique de conversion : convertit d'abord en euros puis dans la devise cible
// 3. Adapte-la pour convertir un panier entier (tableau de prix)
// 4. Affiche la valeur d'un montant dans TOUTES les devises disponibles simultanément
// 5. Stocke un historique des conversions (date, montants, devises). Affiche l'historique
// 6. Statistiques : devise la plus demandée, montant total converti, conversion la plus fréquente

// 


// # 🏆 VENDREDI — Mini-Projet : La Marketplace (2-3h)

// > ✅ Validé (≥12/20) → S2 | ❌ Non validé → challenges weekend



// ## Brief

// Tu es développeur dans une startup. On te demande de créer le prototype d'une marketplace de produits d'occasion 
// en JavaScript (console).

// ## Fonctionnalités

// **1. Gestion des utilisateurs (2 pts)**

// La marketplace a des vendeurs et des acheteurs. Chaque utilisateur a : un id, un pseudo, un email, 
// un rôle (vendeur/acheteur), une note moyenne,un solde (porte-monnaie virtuel). Crée au moins 5 utilisateurs.
let users = [
    { id: 1, pseudo: "Ali", email: "ali@mail.com", role: "vendeur", noteMoyenne: 4.5, solde: 150 },
    { id: 2, pseudo: "Sara", email: "sara@mail.com", role: "acheteur", noteMoyenne: 4.2, solde: 200 },
    { id: 3, pseudo: "Youssef", email: "youssef@mail.com", role: "vendeur", noteMoyenne: 4.8, solde: 300 },
    { id: 4, pseudo: "Lina", email: "lina@mail.com", role: "acheteur", noteMoyenne: 3.9, solde: 120 },
    { id: 5, pseudo: "Omar", email: "omar@mail.com", role: "vendeur", noteMoyenne: 4.1, solde: 180 }
];

console.log(users);

// **2. Gestion des annonces (4 pts)**

// Un vendeur peut publier une annonce : id, vendeur_id, titre, description, prix, categorie (Électronique, Vêtement,
//  Meuble, Sport, Autre), etat (neuf, très bon, bon, acceptable), statut (disponible, vendu, réservé), date_publication.
//  Gère la publication (réservée aux vendeurs), la modification du prix et le retrait d'annonce.
let annonces = [
    {
        id: 1,
        vendeur_id: 1,
        titre: "iPhone 11",
        description: "iPhone en très bon état avec chargeur",
        prix: 3000,
        categorie: "Électronique",
        etat: "très bon",
        statut: "disponible",
        date_publication: new Date()
    },
    {
        id: 2,
        vendeur_id: 3,
        titre: "Chaise en bois",
        description: "Chaise solide, peu utilisée",
        prix: 250,
        categorie: "Meuble",
        etat: "bon",
        statut: "disponible",
        date_publication: new Date()
    },
    {
        id: 3,
        vendeur_id: 5,
        titre: "Chaussures Nike",
        description: "Pointure 42, presque neuves",
        prix: 400,
        categorie: "Vêtement",
        etat: "très bon",
        statut: "réservé",
        date_publication: new Date()
    }
];
// **3. Recherche et filtrage (4 pts)**

// Implémente la recherche par mot-clé (titre + description), par catégorie, par tranche de prix (min/max), 
// par état et par vendeur. Les filtres doivent être combinables. Implémente aussi le tri par prix,
//  par date et par note du vendeur.

// **4. Système d'achat (4 pts)**

// Un acheteur peut acheter une annonce : vérifie que l'annonce est disponible et que le solde est suffisant. 
// Déduis le montant du solde acheteur, crédite le vendeur (moins 5% de commission) et passe l'annonce en "vendu".
//  Garde un historique des transactions (date, acheteur, vendeur, annonce, montant, commission).

// **5. Système d'avis (3 pts)**

// Après un achat, l'acheteur peut noter le vendeur (1 à 5) avec un commentaire.
//  Un acheteur ne peut noter qu'une seule fois par transaction. La note moyenne du vendeur se recalcule automatiquement. 
// Affiche le profil complet d'un vendeur : note, nombre de ventes, avis reçus.

// **6. Statistiques de la marketplace (3 pts)**

// Nombre d'annonces par statut, chiffre d'affaires total, commission totale, top 3 des vendeurs par note,
//  catégorie la plus populaire, prix moyen par catégorie.

// ## Barème : /20

// Structure et données : /2 | Annonces CRUD : /4 | Recherche/filtres : /4 | Achat + solde : /4 | Avis + notation : /3 
// | Statistiques : /3

// ## Challenges weekend (si non validé)

// **Challenge 1** : Crée un gestionnaire d'annonces simplifié : CRUD sur les annonces, 1 filtre par catégorie, 
// 1 tri par prix.

// **Challenge 2** : 5 katas Codewars niveau 7 sur la manipulation de tableaux d'objets.
