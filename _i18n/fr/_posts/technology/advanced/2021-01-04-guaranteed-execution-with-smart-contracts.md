---
layout: post
type: article
title: "La garantie d'exécution avec les Smart contracts"
description: "Enfin, nous parlons des Smart contracts, une technologie que la blockchain permet. Vous pouvez résumer les Smart contracts à des contrats numériques avec exécution garantie. Vous avez peut-être déjà entendu le terme d’”argent programmable” dans le contexte des cryptomonnaies avant. Les Smart contracts sont la technologie qui permet cette programmation."
permalink: /technology/advanced/guaranteed-execution-with-smart-contracts/
topic: technology
level: advanced
chapter: "Qu’est-ce que la Blockchain ?"
---

Nous avons examiné la blockchain de deux façons différentes. D'abord en tant que structure de données et ensuite en tant que protocole de transfert de valeur. Pour le dernier article de ce chapitre sur ce qu'est une blockchain, nous voulons parler de smart contract. Outre l'IA, l'IoT (internet des objets) et la blockchain, les smart contracts (contrats intelligents) ont été l'un des sujets les plus branchés au cours des deux dernières années dans le monde de la technologie. Ce sont des logiciels qui s’exécutent sur la blockchain.

Une blockchain peut non seulement héberger des données simples comme des transactions, mais aussi de petits programmes. Nous appelons ces programmes des smart contracts. Un contrat, en général, est un accord entre les parties qui les lie. Le "smart" vient de l'exécution automatique de ces contrats numériques. Il s'agit d'un grand nombre d'énoncés "si, alors" qui sont rédigés et mis en application par le code. Le contrat s'exécute automatiquement si les conditions du contrat sont remplies.

![Smart Contract]({{site.baseurl}}/assets/post_files/technology/advanced/1.3-smart-contracts/FR_smart_contract_D.jpg)
![Smart Contract]({{site.baseurl}}/assets/post_files/technology/advanced/1.3-smart-contracts/FR_smart_contract_M.jpg)

### La promesse des smart contracts

Les smart contracts promettent d'éliminer le besoin d'intermédiaires, tels que les avocats ou les notaires, et de réduire ainsi le coût des transactions. Le fait de disposer d'intermédiaires peut également faire gagner beaucoup de temps. Vous n'avez pas besoin d'attendre des heures d'ouverture ou des jours ouvrables. Les smart-contracts peuvent non seulement être utilisés pour régir le transfert de biens numériques tels que les cryptomonnaies, mais ils peuvent également régir de nombreux autres types de transfert de valeur, tels que la négociation d'actions et d'autres instruments financiers traditionnels ou même les transactions impliquant des biens physiques (comme des biens immobiliers).

Par exemple, un propriétaire et un locataire pourraient utiliser un smart contract pour régir le contrat de location. Le smart contract pourrait automatiquement bloquer le locataire à l'extérieur de l'appartement si le locataire ne paie pas son loyer. Dans ce cas, l'énoncé “si-alors”, ressemblerait à quelque chose comme :

_Si l'adresse du contrat reçoit le montant X au plus tard le 3 de chaque mois de l'adresse d’Y, accordez à Y l'accès à l'appartement. Si le paiement échoue pendant 2 mois consécutifs, révoquez le droit d’Y de déverrouiller l'appartement._

Un autre cas d'utilisation possible pour les smart contracts serait la décentralisation d'eBay. On pourrait construire un smart contract avec une date d'expiration définissant la période de l'enchère et une offre de départ. Le plus offrant recevrait l'article à la fin de la période d'enchère en échange de son argent. Les enchérisseurs perdants seraient automatiquement remboursés par le smart contract. Une telle version décentralisée d'eBay serait considérée comme une application dApp (une application décentralisée).

### dApps

Une application décentralisée ou dApp est un cas d'utilisation plus sophistiqué pour les smart contracts. La plupart des applications et des sites Web utilisent des API (interfaces de programmation d'applications) pour communiquer avec leur base de données sous-jacente. Une API bien rédigée permet aux développeurs d'offrir plus facilement un service en définissant la communication entre les différents composants d'un système tel que le système d'exploitation, une base de données ou une bibliothèque logicielle.

Les dApps utilisent des smart contracts pour communiquer avec la blockchain sous-jacente. Imaginez un avenir où les bibliothèques de smart contracts avec un grand nombre de modèles de contrats différents puissent être utilisés à des fins diverses. Nous constatons déjà une tendance vers ce scénario avec des plateformes de smart contracts telles qu'Ethereum.

![dApp]({{site.baseurl}}/assets/post_files/technology/advanced/1.3-smart-contracts/FR_dapp_D.jpg)
![dApp]({{site.baseurl}}/assets/post_files/technology/advanced/1.3-smart-contracts/FR_dapp_M.jpg)

### Plateforme de Smart Contracts

Il existe de nombreuses plateformes de smart contracts en dehors d'Ethereum, qui est la plus populaire aujourd'hui et qui en plus de cela, a la plus grande activité de développement. Les autres plateformes comprennent Lisk, NEM et Hyperledger, une version modifiée d'Ethereum conçue pour les entreprises.

Peu de gens savent que Bitcoin permet également le déploiement de smarts contracts. Bitcoin possède un langage de programmation intégré appelé Script. C'est un langage de programmation rudimentaire comparé à Solidity qui est utilisé pour écrire des smart contracts sur Ethereum. Solidity est un langage de programmation Turing-complet, qui permet des contrats plus complexes que Bitcoin Script. Plus complexe signifie plus difficile à écrire, à analyser et à sécuriser.

Dans le contexte des smart contracts, la sécurité consiste à examiner toutes les façons possibles dont un contrat pourrait être exécuté et à tenir compte de chacun de ces scénarios. Les smart contracts sur les blockchains basées sur Bitcoin (comme Horizen) écrits en Script sont moins complexes que ceux écrits en Solidity sur Ethereum. Cela limite les cas d'utilisation possibles, mais facilite l'énumération, l'examen et la comptabilisation des états possibles du contrat (ou du programme), ce qui rend les contrats plus faciles à écrire.

Il est intéressant de noter que les modèles de smart contracts les plus couramment utilisés sur Ethereum, à savoir les normes ERC-20 et ERC-721, n'exigent pas que la machine virtuelle soit Turing-complète. Presque tous les jetons déployés sur la chaîne Ethereum utilisent l'un de ces deux standards, car ils permettent une intégration plus facile avec différents portefeuilles et échanges.

### Sont-ils vraiment “sans confiance” ?

La promesse des smart contracts est de permettre une exécution dite “sans confiance” avec des règles appliquées automatiquement. Mais peuvent-ils tenir cette promesse ?

Presque tous les types d'actifs sont soumis à la juridiction locale dans laquelle vous vous trouvez. Cela signifie qu'un contrat, qu'il soit intelligent ou non, exige une confiance supplémentaire dans la juridiction en plus de la confiance placée dans le contrat lui-même. Posséder un smart contract, ce n’est pas posséder dans le monde réel. Tout comme dans le cas des contrats ordinaires, les conditions peuvent être sujettes à des changements de circonstances et à leur interprétation. Un contrat illégal n'est pas juridiquement contraignant.

Il faut tenir compte du fait que la rédaction de contrats traditionnels nécessite des années d'étude du cadre régissant les différents domaines du droit des contrats. La rédaction de smart contracts est encore plus difficile, car il faut comprendre la dimension technique qu'ils comportent. Nous devrons voir émerger une toute nouvelle génération d'avocats experts en technologie pour permettre l'adoption significative de smart contracts juridiquement contraignants.

Il y a un autre défi majeur à relever. Le monde numérique a besoin d'en savoir plus sur les événements du monde réel pour qu'un smart contract puisse fonctionner et s'exécuter. Un oracle est une entité qui soumet des données à une blockchain ou à un smart contract. Le problème de confiance est connu sous le nom de problème oracle. Imaginez un smart contract exécutant une plateforme de paris dans un environnement sans confiance. Un oracle doit soumettre le résultat d'un jeu pour que le smart contract distribue les fonds aux gagnants. Parce qu'un oracle détermine ce qu'un smart contract voit, il contrôle également ce qu'il fait.

![Oracle]({{site.baseurl}}/assets/post_files/technology/advanced/1.3-smart-contracts/FR_oracle_D.jpg)
![Oracle]({{site.baseurl}}/assets/post_files/technology/advanced/1.3-smart-contracts/FR_oracle_M.jpg)

Les oracles centralisés ne sont pas considérés comme une solution au problème d'oracle. Peu importe à quoi ressemble la mise en œuvre réelle, les incitations à soumettre des données mensongères pourraient l'emporter sur les avantages d'agir honnêtement dans certaines décisions. Qu'il soit centralisé ou décentralisé, un oracle aura toujours un coût. Agir honnêtement doit toujours être la stratégie la plus rentable et, par conséquent, des incitations fortes doivent être en place. C'est un autre problème qui nécessite une évaluation de la théorie des jeux et la conception d'incitations, tout comme les incitations pour les mineurs dont nous avons parlé dans notre [dernier article](https://academy.horizen.io/fr/technology/advanced/a-protocol-to-transfer-value/)

Des projets tels qu'Augur et Gnosis travaillent sur des solutions décentralisées au problème d'oracle via des marchés de prédiction. Avant que ces marchés prédictifs ne soient sérieusement adoptés, ils resteront faciles à jouer. Et puisque les marchés prédictifs ont le potentiel d'influencer le résultat d'un événement comme le suggère Dan Finley, il reste à voir s'ils peuvent devenir une solution.

{% include blocks/tweet.html id="1089550845698396167" %}

**Français**

"Théorie : Puisque les marchés prédictifs décentralisés peuvent influencer les incitations à la probabilité d'événements, ils ne sont jamais de simples outils prédictifs, et doivent donc toujours être traités comme des outils d'incitation."

Avant de résoudre le problème de la création de smarts contracts juridiquement contraignants et le problème d'oracle, l'utilisation des smart contracts sera limitée aux petits domaines expérimentaux à faible risque. Un exemple de cas d'utilisation potentielle serait les paiements dans un jeu déclenchés par certaines réussites qui sont objectivement vérifiables par code.

Comme [le dit Jimmy Song](https://jimmysong.medium.com/the-truth-about-smart-contracts-ae825271811f) : "Un smart contract qui fait confiance à un tiers enlève la caractéristique remarquable du “sans confiance”." Il reste encore un long chemin à parcourir avant de voir l'utilisation généralisée de smart contracts “sans confiance” dans différents domaines, mais il s'agit sans aucun doute d'un concept à explorer.

### Résumé

Vous devriez avoir une bonne idée de ce qu'est une blockchain. Nous l'avons considérée comme une structure de données et comme un ensemble de règles. Une blockchain peut stocker des données de façon fiable en raison de la nature décentralisée du registre. N'importe qui peut participer au réseau sans autorisation ni inscription, à condition de respecter les règles du protocole. Cela rend les blockchains publiques résistantes à la censure, sans permission, sans confiance et valables. Elle peut non seulement stocker des données mais aussi des programmes fonctionnant de manière distribuée.

Les smart contracts peuvent garantir une exécution objective sur la base de conditions convenues d'un commun accord et appliquées par un code. Ils ont le potentiel de réduire le nombre d'intermédiaires et, par conséquent, de réduire les coûts et le temps de travail. Ils favoriseront très probablement un lien plus étroit entre les développeurs de logiciels et le système judiciaire. Avant que l'adoption généralisée ne se produise, nous devons surmonter certains obstacles. Les régulateurs doivent créer un cadre pour permettre le déploiement de smart contracts juridiquement contraignants et des oracles décentralisés doivent être développés.
