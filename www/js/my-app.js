// Let's register Template7 helper so we can pass json string in links
Template7.registerHelper('json_stringify', function (context) {
    return JSON.stringify(context);
});

Template7.registerHelper('prettyTime', function (arr) {
   moment.locale('fr');
  return moment(arr,"YYYY-MM-DD").fromNow();
}); 

// Initialize your app
var myApp = new Framework7({
    animateNavBackIcon: true,
    // Enable templates auto precompilation
    precompileTemplates: true,
    // Enabled pages rendering using Template7
    template7Pages: true,
    // Specify Template7 data for pages
    template7Data: {
        
        // Just plain data object that we can pass for other pages using data-contextName attribute
        nouvelles: [
            {
                titre:"Mise à jour du système d'exploitation vers la version iOS 8.1",
                pubDate:'2014-12-16',
                message:"Si ce n’est pas déjà fait, veuillez effectuer la mise à jour du système d’exploitation de votre appareil mobile vers la version IOS 8.1. Cette mise à jour corrige de nombreuses anomalies identifiées dans les versions 8.0.0 et 8.0.2. Si vous éprouvez des difficultés techniques, communiquez avec le Centre de services TIC au 800-8611 de l'interne, ou au 1 855 800-8611 de l'externe.",
                important:true  
            },
            {
                titre:"Mise à jour du système d'exploitation vers la version iOS 8.0",
                pubDate:'2014-12-10',
                message:"Vous pouvez maintenant effectuer la mise à jour du système d'exploitation de votre appareil iPhone ou iPad vers la version iOS 8.0 : Appuyer sur l'icône Réglages, puis sur Général et sur Mise à jour logicielle;", 
                important:false
            },
                     {
                titre:'Ne pas effectuer la mise à jour du système vers iOS 8',
                pubDate:'2014-12-02',
                message:"Apple lancera le 17 septembre prochain une nouvelle version de son système d'exploitation pour les appareils mobiles de type iPhone et iPad : iOS 8. L'équipe du centre d’expertise − Mobilité travaille actuellement à intégrer cette nouvelle plateforme à notre environnement, mais certains tests devront être effectués après sa sortie officielle. Ainsi, pour vous assurer de la disponibilité des fonctions de courriel et de calendrier de votre appareil, il est important de ne pas effectuer la mise à jour du système d'exploitation d'Apple qui pourrait vous être demandée. Soyez assurés que nous déployons tous les efforts possibles pour que vous puissiez procéder à cette mise à jour dans les meilleurs délais. Nous communiquerons avec vous par courriel lorsque cela sera possible. Merci de votre collaboration.",
                important:false
            },

                 {
                titre:"Mise à jour du système d'exploitation iOS vers la version 7.1.2",
                pubDate:'2014-12-02',
                message:"Il est maintenant possible de mettre à jour le système d'exploitation iOS vers la version 7.1.2. Vous devez cependant avoir accès à une connexion sans fil (WiFi) pour effectuer la procédure qui suit :  Appuyer sur l'icône Réglages, puis sur Général et sur Mise à jour logicielle. Appuyer sur Télécharger / Installer, entrer votre code de verrouillage et à Accepter la licence d'utilisation. Si vous n'avez pas accès à un réseau WiFi, vous pouvez communiquer avec le Centre de services TIC en ligne ou au 800-8611 pour qu'un analyste prenne rendez-vous avec vous pour effectuer la mise à jour.  Attention ! Si votre appareil reste sur la pomme d'Apple pendant plus de 30 minutes, vous devez forcer un redémarrage à chaud en appuyant simultanément sur le bouton d'allumage et sur le bouton Home pendant 10 secondes. ",
                important:false
            },

                 {
                titre:'Courriel frauduleux de "Apple"',
                pubDate:'2014-12-02',
                message:"À tous les utilisateurs du service de mobilité d'entreprise, Il est possible que vous receviez ou que vous ayez déjà reçu un courriel mentionnant que votre identifiant Apple sera désactivé dans 48 heures (voir exemple ci-dessous). Il s'agit d'un courriel d'hameçonnage. Il est important de ne pas cliquer sur Restore Now et de supprimer complètement ce courriel de votre boite de réception. Pour toute question, n'hésitez pas à joindre le Centre de services TIC en ligne ou au 800-8611, ou encore, communiquez avec votre unité d'assistance habituelle. Merci de votre collaboration !",
                important:false
            },

                 {
                titre:"Appareils mobiles d'entreprise (iPhone et iPad) et réseau sans fil ",
                pubDate:'2014-12-02',
                message:'Dolores jectae est',
                important: true
            },

                 {
                titre:'Ne pas effectuer la mise à jour du système vers iOS 8',
                pubDate:'2014-10-02',
                message:"Tel que mentionné dans ce courriel qui vous a été acheminé vendredi (voir ci-dessous), il est nécessaire, pour tous les utilisateurs d'appareils mobiles d'entreprise (iPhone et iPad), de procéder à nouveau à leur enrôlement avant d'utiliser le réseau sans fil d'entreprise. Cette procédure exceptionnelle vous permettra d'utiliser votre appareil en toute conformité. Notez que, si vous possédez un appareil iPhone ET un appareil iPad, il est nécessaire de faire cette procédure pour vos deux appareils. Voici la marche à suivre :",
                important:false
            },

                 {
                titre:"message template ",
                pubDate:'2014-12-02',
                message:"body template",
                important: true
            }
   
        ],

       
    }
});

// Export selectors engine
var $$ = Dom7;

// Add main View
var mainView = myApp.addView('.view-main', {
    // Enable dynamic Navbar
    dynamicNavbar: true,
});
