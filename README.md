# Créer une application complète avec REACT
### Créer le routeur et les pages d’application
- Lorsque vous créez la logique de routage, profitez-en pour créer les différentes pages de l’application. Posez-vous la question : Que se passe-t-il si j’écris mal l’URL d’une route ou si j’entre une route qui n’existe pas ?
- Pour la navigation dans l’application, vous pourrez soit faire un header et un footer, soit faire un layout dans lequel vous mettrez le reste de l’application via props.children. Pensez à créer ces composants et à y intégrer le composant du router.
- C’est le moment de commencer à faire la mise en page de votre application pour le layout principal. Pour cela, il faut que vous utilisiez Sass.

**Points de vigilance :**
- Créer un composant à part pour le routeur.

### Créer la page d’accueil
**Recommandations :**
- Analysez bien les différents composants et voyez si ceux-ci sont réutilisés dans l’application. Évaluez quels éléments de l’interface nécessitent un composant qui leur est propre.
- Pensez à bien utiliser Sass afin de structurer votre code CSS plus facilement.

**Points de vigilance :**
- Attention à ce que la création des cards ne génère pas de warning dans la console.

### Créer la page A propos
**Recommandations :**
- Gardez en tête que le Collapse doit avoir deux états différents : ouvert et fermé. Il peut prendre différentes formes en fonction de son utilisation.
- Pensez à bien utiliser les propriétés des composants pour passer les données voulues.
- Assurez-vous de bien coder l’animation d’ouverture / fermeture du menu au clic sur la flèche.

# Créer la page d’erreur
**Recommandations :**
- Suivez bien le design de la maquette.
- Assurez-vous que toute route inexistante mène bien à la page d’erreur.

# Créer le carrousel de la page logement
**Recommandations :**
- Commencez par ajouter les flèches et la numérotation des slides de façon dynamique. Si une propriété n’a qu’une seule image, on ne devrait voir ni flèche ni numérotation.
- Ajoutez les event listeners pour qu’au clic le changement d’image se fasse correctement.
- Vous pouvez ajouter une animation de défilement au changement de page grâce à CSS, mais ce n’est pas obligatoire.

**Points de vigilance :**
- Attention à ne pas avoir d’erreur lorsque vous vous trouvez aux extrémités du carrousel : le clic sur la flèche gauche à la première diapositive doit vous mener à la dernière image, et vice versa.

### Finaliser la page logements
**Recommandations :**
- Suivez bien le design de la maquette créer chaque élément.
- Pensez à réutiliser le composant Collapse créé auparavant.

### Gérer l’erreur sur l’id propriété
**Recommandations :**
- Utilisez les fonctionnalités de React Router pour gérer l’erreur et rediriger vers la page d’erreur.



-----------------------------------

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
