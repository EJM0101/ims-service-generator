# 📡 IMS Service Generator – Visualisation pédagogique des architectures IMS

**IMS Service Generator** est une application web interactive conçue pour illustrer les **architectures IMS (IP Multimedia Subsystem)** et leurs scénarios d’usage. Cette plateforme permet de visualiser les composants IMS, les connexions entre eux, et les flux de signalisation et multimédia de manière intuitive, avec une interface moderne construite en **Next.js, TypeScript, Tailwind CSS et React Flow**.

---

## 🎯 Objectifs pédagogiques

- Comprendre les rôles des composants clés de l'architecture IMS
- Simuler des scénarios multimédias sécurisés (voix, vidéo, messagerie)
- Visualiser les flux SIP, RTP, Diameter et leur sécurisation
- Expérimenter la composition d’un service IMS par glisser-déposer (drag & drop)
- Offrir un outil d’enseignement et de démonstration dans les contextes académiques ou techniques

---

## 🧠 Concepts IMS illustrés

| Composant      | Rôle |
|----------------|------|
| **UE**         | Terminal utilisateur (WebRTC, mobile IMS) |
| **P-CSCF**     | Point d’entrée IMS – sécurisation, routage initial |
| **I-CSCF**     | Interrogation du HSS, sélection du S-CSCF |
| **S-CSCF**     | Contrôle central des sessions SIP |
| **HSS**        | Base de données des abonnés IMS |
| **AS**         | Application Server – services comme la téléconsultation, la messagerie, la conférence |

---

## 🔐 Mécanismes de sécurité IMS

L’IMS assure la sécurité par :

- **IMS AKA** : authentification mutuelle entre le terminal (UE) et le HSS
- **IPsec / TLS** : protection de la signalisation SIP (confidentialité et intégrité)
- **SRTP** : chiffrement des flux multimédias (audio/vidéo)
- **Contrôle d’accès** : basé sur le profil de l’abonné IMS

---

## 🧪 Fonctionnalités principales

- 🧱 **Palette de composants IMS** : liste interactive à insérer dans le schéma
- 🔌 **Connexion visuelle entre composants** : flux SIP, RTP, Diameter simulés par des lignes colorées et animées
- 🎯 **Scénarios prédéfinis** :
  - Téléconsultation (UE → AS avec flux vidéo)
  - Centre d’appel (gestion des appels entrants vers agents)
  - Messagerie instantanée IMS
- 📚 **Explication intégrée dans l’interface** : bloc pédagogique avec définitions, fonctions et sécurisation
- 🧭 **Interface réactive** et responsive, pensée pour l’usage académique et la démonstration professionnelle

---

## 📺 Scénarios pédagogiques disponibles

| Nom               | Description |
|------------------|-------------|
| **Téléconsultation** | Simulation d’un appel vidéo sécurisé entre un patient et un médecin via un AS |
| **Centre d’appel**   | Routage des appels SIP vers des agents, avec logique gérée par l’Application Server |
| **Messagerie IMS**   | Transmission sécurisée de messages texte via SIP MESSAGE, avec authentification IMS |

---

## 🛠️ Technologies utilisées

| Technologie     | Usage |
|------------------|-------|
| **Next.js**      | Framework React moderne (SSR, API, routing) |
| **React**        | Composants d’interface |
| **TypeScript**   | Typage strict pour la robustesse du projet |
| **Tailwind CSS** | Design moderne, responsive et personnalisable |
| **React Flow**   | Moteur graphique interactif pour la topologie réseau |
| **D3.js** *(optionnel)* | Visualisation avancée des flux animés (future extension)

---

## ▶️ Lancer le projet en local

```bash
npm install
npm run dev

Ensuite, accédez à http://localhost:3000


---

## 🚀 Déploiement Vercel

Ce projet est 100% compatible avec https://vercel.com :

1. Poussez le dépôt GitHub


2. Liez-le à votre compte Vercel


3. Déploiement automatique avec détection de Next.js




---

## 📘 Licence

Projet open source à but pédagogique uniquement.
Utilisable librement dans un cadre universitaire, scolaire ou personnel.
Toute réutilisation commerciale est interdite sans autorisation explicite.


---

## 🙋‍♂️ Contribution

Vous êtes les bienvenus pour :

Ajouter de nouveaux composants IMS (BGCF, MGCF, etc.)

Proposer de nouveaux scénarios pédagogiques

Améliorer l’accessibilité ou l’interface utilisateur

Ajouter des options d’export ou d’enregistrement des scénarios