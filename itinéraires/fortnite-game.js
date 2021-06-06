/crédit à neonite pour les données json parce que je suis si gay pour faire le mien

const  express  =  require ( 'express' )
 application  const =  express ( )
const  config  =  require ( '../config' ) ;
const  axios  =  require ( 'axios' ) ;

application . get ( '/content/api/pages/fortnite-game' ,  async  ( req ,  res )  =>  {

     données  const =  attend  axios . get ( 'https://fortnitecontent-website-prod07.ol.epicgames.com/content/api/pages/fortnite-game' ) ;
     bannière  const =  config . bannière ;
    const  background  =  config . fond ;

    //réponse.battleroyalenewsv2 = {
    // nouvelles: {
    // mots : [
    // {
    // type d'entrée : 'Texte',
    // image : bannière1920x1080,
    // TileImage : bannière1024 x 512,
    // caché : faux,
    // videoMute : vrai,
    // tabTitleOverride : 'RyryburgerFN',
    // _type: 'CommonUI Simple Message MOTD',
    // titre : 'RyryburgerFN',
    // body : 'Un serveur hybride fortnite.',
    // videoLoop : false,
    // videoStreamingEnabled : faux,
    // videoAutoplay : false,
    // vidéoPlein écran : false,
    //priorité de tri : 0,
    // identifiant : 'RyryburgerFN-News',
    // projecteur : false
    // }
    // ],
    // _type: 'Actualités Battle Royale',
    // },
    // 'jcr:isCheckedOut': data.data.battleroyalenews['jcr:isCheckedOut'] || vrai,
    // _title: 'battleroyalenews',
    // entête: '',
    // style : 'Aucun',
    // _noIndex : faux,
    // alwaysShow : false,
    // 'jcr:baseVersion': data.data.battleroyalenews['jcr:baseVersion'] || 'a7ca237317f1e7546d8fe7-0d7a-4312-9e37-a20f1c4333b0',
    // _activeDate : data.data.battleroyalenews._activeDate || '2020-01-21T14:00:00.000Z',
    // lastModified : data.data.battleroyalenews.lastModified || new Date().toISOString(),
    // _locale : data.data._locale || 'fr'
    //}
    // CELA PROVOQUE UN Crash
    // NOUS NE SAVONS PAS POURQUOI, MAIS CHANGER LE RAPPORT D'ASPECT DE L'IMAGE/BANNIÈRE EN 1920x1080 ET 1024x512 PROVOQUE UN Crash

    données . données . avis d'urgencev2  =  {
        'jcr:isCheckedOut' : données . données . Emergencynoticev2 [ 'jcr:isCheckedOut' ]  ||  vrai ,
        _title : données . données . avis d'urgencev2 . _titre  ||  'avis d'urgencev2' ,
        _noIndex : données . données . avis d'urgencev2 . _noIndex  ||  faux ,
        'jcr:baseVersion' : données . données . Emergencynoticev2 [ 'jcr:baseVersion' ]  ||  'a7ca237317f1e7da533b38-74ee-468b-8c63-a7c3c256b313' ,
        Avis d'urgence : {
            _type : données . données . avis d'urgencev2 . avis d'urgence . _type  ||  « Avis d'urgence » ,
            avis d'urgence : [
                {
                    caché : faux ,
                    _type : 'Base de notification d'urgence CommonUI' ,
                    titre : 'Mise à jour Tempête' ,
                    body : 'Vous pouvez maintenant changer votre niveau et vbucks, en utilisant le bot de notre serveur discord, amusez-vous avec Ryryburger !' ,
                }
            ]
        } ,
        _activeDate : données . données . avis d'urgencev2 . _activeDate  ||  '2018-08-06T19:00:26.217Z' ,
        lastModified : données . données . avis d'urgencev2 . lastModified  ||  '2021-05-10T19:37:21.335Z' ,
        _locale : données . données . avis d'urgencev2 . _locale  ||  'fr-FR' ,
    }

    données . données . abonnement  =  données . données . abonnement ;
    données . données . shopSections  =  données . données . boutiqueSections ;

    données . données . battleroyalenewsv2  =  {
        nouvelles : {
            mots : [ {
                entryType : 'Site Web' ,
                image : bannière ,
                tileImage : bannière ,
                videoMute : false ,
                caché : faux ,
                tabTitleOverride : 'Orage' ,
                _type : 'CommonUI Simple Message MOTD' ,
                titre : 'Orage' ,
                body : 'Ryryburger  n'est pas affilié, associé, autorisé, approuvé par ou officiellement connecté à Epic Games.' ,
                videoLoop : false ,
                videoStreamingEnabled : false ,
                TriPriorité : 0 ,
                id : 'RyryburgerNewsBRv2' ,
                videoAutoplay : false ,
                videoPlein écran : false ,
                projecteur : faux ,
                URL du site : 'https://discord.gg/Hg9kUS7Q,
                websiteButtonText : 'Rejoindre le Discord'
            } ]
        } ,
        'jcr:isCheckedOut' : données . données . battleroyalenewsv2 [ 'jcr:isCheckedOut' ]  ||  vrai ,
        _title : 'battleroyalenews' ,
        _noIndex : false ,
        alwaysShow : false ,
        'jcr:baseVersion' : données . données . battleroyalenewsv2 [ 'jcr:baseVersion' ]  ||  'a7ca237317f1e7546d8fe7-0d7a-4312-9e37-a20f1c4333b0' ,
        _activeDate : données . données . battleroyalenewsv2 . _activeDate  ||  '2020-01-21T14:00:00.000Z' ,
        lastModified : données . données . battleroyalenewsv2 . lastModified  ||  nouvelle  date ( ) . àChaîneISO ( ) ,
        _locale : données . données . _locale  ||  'fr-US'
    } ;

    données . données . arrière-plans dynamiques  =  {
        'jcr:isCheckedOut' : données . données . dynamicbackgrounds [ 'jcr:isCheckedOut' ]  ||  vrai ,
        arrière - plans : {
            arrière - plans : [
                {
                    étape : 'hiver19' ,
                    _type : 'DynamicBackground' ,
                    touche : 'lobby'
                } ,
                {
                    étape : 'hiver19' ,
                    _type : 'DynamicBackground' ,
                    clé : 'coffre'
                }
            ] ,
            _type : 'DynamicBackgroundList'
        } ,
        _title : 'dynamicbackgrounds' ,
        _noIndex : false ,
        'jcr:baseVersion' : données . données . arrière-plans dynamiques [ 'jcr:baseVersion' ]  ||  'a7ca237317f1e7546d8fe7-0d7a-4312-9e37-a20f1c4333b0' ,
        _activeDate : données . données . battleroyalenewsv2 . _activeDate  ||  '2020-01-21T14:00:00.000Z' ,
        lastModified : données . données . battleroyalenewsv2 . lastModified  ||  nouvelle  date ( ) . àChaîneISO ( ) ,
        _locale : données . données . _locale  ||  'fr-US'
    } ;

    rés . json ( données . données ) ;
} )

module . exportations  =  application
