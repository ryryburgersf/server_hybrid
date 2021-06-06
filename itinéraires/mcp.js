const  express  =  require ( 'express' ) ;
const  app  =  express ( ) ;
const  fs  =  require ( 'fs' ) ;
const  backendConfig  =  require ( '../config' ) ;
const  random  =  require ( 'aléatoire' ) ;

function  checkAndCreateProfile ( accountId )  {
    if  ( ! fs . existSync ( ` ${ backendConfig . répertoire } /cache/profiles/ ${ accountId } .json` ) )  {
        fs . copyFileSync ( ` ${ backendConfig . répertoire } /cache/templates/config.json` ,  ` ${ backendConfig . répertoire } /cache/profiles/ ${ accountId } .json` ) ;
    } ;  
} ;

fonction  loadConfig ( accountId )  {
    retourner  JSON . parse ( fs . readFileSync ( ` ${ backendConfig . répertoire } /cache/profiles/ ${ accountId } .json` ) ) ;
} ;

function  loadProfile ( profileId )  {
    retourner  JSON . parse ( fs . readFileSync ( ` ${ backendConfig . répertoire } /cache/templates/profile_ ${ profileId } .json` ) ) ;
} ;

function  saveConfig ( répertoire ,  accountId ,  data )  {
    fs . writeFileSync ( ` ${ directory } /cache/profiles/ ${ accountId } .json` ,  JSON . stringify ( data ,  null ,  2 ) ) ;
}

// CRÉDITS À AURORA & NEONITE POUR CETTE IDÉE
function  createResponse ( profileData ,  profileId ,  rvn )  {
    retour  {
        'profilRevision' : rvn ? ( rvn  -  0 )  +  ( 1  -  0 ) : 1  ||  1 ,
        'profileId' : profileId ,
        'profileChangesBaseRevision' : Nombre ( rvn )  ||  1 ,
        'profilChanges' : [
            {
                changeType : 'fullProfileUpdate' ,
                profile : profileData
            }
        ] ,
        'profileCommandRevision' : rvn ? ( rvn  -  0 )  +  ( 1  -  0 ) : 1  ||  1 ,
        'serverTime' : nouvelle  Date ( ) . àChaîneISO ( ) ,
        'responseVersion' : 1
    } ;
} ;

// Crédits à Aurora
fonction  createError ( errorCode ,  errorMessage ,  numericErrorCode ,  originatingService ,  intention ,  messageVars )  {
    retour  {
        'errorCode' : errorCode ,
        'erreurMessage' : erreurMessage ,
        'numericErrorCode' : numericErrorCode ,
        'service d'origine' : service d' origine ,
        'MessageVars' : messageVars  ||  indéfini ,
        'intention' : intention  ||  'prod'
    }
} ;

function  createCreative ( accountId ,  profile )  {

    // Défaut

    profil . accountId  =  accountId ;

    profil . créé  =  nouvelle  date ( ) . àChaîneISO ( ) ;
    profil . mis à jour  =  nouvelle  date ( ) . àChaîneISO ( ) ;

    profil . profileId  =  'créatif' ;

     profil de retour ;
} ;

function  createCommonCore ( config ,  accountId ,  profile )  {

    // Défaut

    profil . _id  =  accountId ;
    profil . accountId  =  accountId ;

    profil . créé  =  nouvelle  date ( ) . àChaîneISO ( ) ;
    profil . mis à jour  =  nouvelle  date ( ) . àChaîneISO ( ) ;

    profil . profileId  =  'athena' ;

    // V-Bucks

    profil . articles [ 'Currency:MtxPurchased' ] . quantité  =  configuration . vbucks ;
    profil . articles [ 'Devise:MtxPurchased' ]

    // Statistiques

    profil . statistiques . attributs . mtx_affiliate  =  'GKI' ;

     profil de retour ;
} ;

function  createCommonPublic ( accountId ,  profile )  {

    // Défaut

    profil . accountId  =  accountId ;

    profil . créé  =  nouvelle  date ( ) . àChaîneISO ( ) ;
    profil . mis à jour  =  nouvelle  date ( ) . àChaîneISO ( ) ;

    profil . profileId  =  'athena' ;

     profil de retour ;
} ;

function  createCollections ( accountId ,  profile )  {

    // Défaut
    profil . accountId  =  accountId ;

    profil . créé  =  nouvelle  date ( ) . àChaîneISO ( ) ;
    profil . mis à jour  =  nouvelle  date ( ) . àChaîneISO ( ) ;

    profil . profileId  =  'athena' ;

     profil de retour ;
}

function  createAthena ( config ,  accountId ,  profile )  {

    // Défaut

    profil . _id  =  accountId ;
    profil . accountId  =  accountId ;

    profil . créé  =  nouvelle  date ( ) . àChaîneISO ( ) ;
    profil . mis à jour  =  nouvelle  date ( ) . àChaîneISO ( ) ;

    profil . version  =  'doener#6969' ;
    profil . profileId  =  'athena' ;

    // Chargement

    var  casier  =  profil . articles . sandbox_loadout . attributs . locker_slots_data . fentes ;

    casier . Pack Musique . éléments [ 0 ]  =  config . Pack Musique . identifiant ;
    casier . Pack Musique . activeVariants  =  config . Pack Musique . variantes ;

    casier . Caractère . éléments [ 0 ]  =  config . Caractère . identifiant ;
    casier . Caractère . activeVariants  =  config . Caractère . variantes ;          
    
    casier . Sac à dos . éléments [ 0 ]  =  config . Sac à dos . identifiant ;
    casier . Sac à dos . activeVariants  =  config . Sac à dos . variantes ;

    casier . SkyDiveContrail . éléments [ 0 ]  =  config . SkyDiveContrail . identifiant ;
    casier . SkyDiveContrail . activeVariants  =  config . SkyDiveContrail . variantes ;

    casier . Danse . éléments  =  configuration . Danse . identifiant ;
    casier . Danse . activeVariants  =  config . Danse . variantes ;
    
    casier . ItemWrap . éléments  =  configuration . ItemWrap . identifiant ;
    casier . ItemWrap . activeVariants  =  config . ItemWrap . variantes ;
    
    casier . Pioche . éléments [ 0 ]  =  config . Pioche . identifiant ;
    casier . Pioche . activeVariants  =  config . Pioche . variantes ;

    casier . Écran de chargement . éléments [ 0 ]  =  config . Écran de chargement . identifiant ;
    casier . Écran de chargement . activeVariants  =  config . Écran de chargement . variantes ;

    casier . Planeur . éléments [ 0 ]  =  config . Planeur . identifiant ;
    casier . Planeur . activeVariants  =  config . Planeur . variantes ;

    // Bannière
    profil . articles . sandbox_loadout . attributs . locker_slots_data . banner_icon_template  =  configuration . BannerIconTemplate ;
    profil . articles . sandbox_loadout . attributs . locker_slots_data . banner_color_template  =  configuration . ModèleCouleurBannière ;

    profil . articles . sandbox_loadout . attributs . locker_slots_data . emplacements  =  casier ;

    // Statistiques

    var  stats  =  profil . statistiques . attributs ;

    statistiques . book_level  =  parseInt ( config . level ) ;
    statistiques . book_purchased  =  true ;
    statistiques . life_wins  =  aléatoire . int ( 1337 ,  666666 ) ;
    statistiques . level  =  parseInt ( config . level ,  150 ) ;
    statistiques . accountLevel  =  parseInt ( config . niveau ) ;
    statistiques . num_saison  =  backendConfig . num_saison ;  // CHANGEZ CELA CHAQUE FOIS QU'IL Y A UNE NOUVELLE SAISON

    profil . statistiques . attributs  =  statistiques ;

    // Préféré

     éléments  var =  profil . articles ;

    for  ( élément var  de config . favoris ) {   
        éléments [ élément [ " id " ] ] . attributs . favori  =  vrai ;
    } ;

    profil . éléments  =  éléments ;

     profil de retour ;
} ;

application . poste (
    '/fortnite/api/game/v2/profile/:accountId/client/:command' ,  ( req ,  res )  =>  {

        const  commande  =  req . paramètres . commande ;
        const  accountId  =  req . paramètres . IDcompte ;

        const  profileId  =  req . requête . ID de profil ;
        const  rvn  =  req . requête . rvn ;
        
        checkAndCreateProfile ( accountId ) ;

        let  config  =  loadConfig ( accountId ) ;
        let  profile  =  loadProfile ( profileId ) ;

        switch  ( commande )  {

            cas  'SetCosmeticLockerBanner' :
                if ( req . body . bannerIconTemplateName  !=  'None' )  {
                    configuration . BannerIconTemplate  =  req . corps . bannerIconTemplateName
                } ;
                if ( req . body . BannerColorTemplate  !=  'None' )  {
                    configuration . BannerColorTemplate  =  req . corps . bannerColorTemplateName
                } ;
                saveConfig ( backendConfig . répertoire ,  accountId ,  config ) ;
                rés . json ( createResponse ( createAthena ( config ,  accountId ,  profile ) ,  profileId ,  rvn ) ) ;
                pause ;

            cas  'ClientQuestLogin' :
            case  'QueryProfile' :
                switch  ( profileId )  {

                    cas  'collections' :
                        rés . json ( createResponse ( createCollections ( config ,  accountId ,  profile ) ,  profileId ) ) . fin ( ) ;
                        pause ;

                    cas  'athena' :
                    cas  'profil0' :
                        rés . json ( createResponse ( createAthena ( config ,  accountId ,  profile ) ,  profileId ) ) . fin ( ) ;
                        pause ;

                    cas  'créatif' :
                        rés . json ( createResponse ( createCreative ( accountId ,  profile ) ,  profileId ) ) . fin ( ) ;
                        pause ;

                    cas  'common_core' :
                        rés . json ( createResponse ( createCommonCore ( config ,  accountId ,  profile ) ,  profileId ) ) . fin ( ) ;
                        pause ;

                    cas  'common_public' :
                        rés . json ( createResponse ( createCommonPublic ( accountId ,  profile ) ,  profileId ) ) . fin ( ) ;
                        pause ;

                    cas  'collection_book_schematics0' :
                    cas  'collection_book_people0' :
                    cas  'métadonnées' :
                    cas  'théâtre0' :
                    cas  'avant-poste0' :
                    cas  'métadonnées' :
                        rés . json ( createResponse ( [ ] ,  profileId ) ) ;
                        pause ;

                    par défaut :
                        rés . json ( createError (
                            'errors.com.epicgames.modules.profiles.operation_forbidden' ,
                            `Impossible de trouver la configuration du modèle pour le profil ${ req . requête . ID de profil } ` ,
                            12813 ,
                            'fortnite' ,
                            'prod-live' ,
                            [ demande . requête . ID de profil ]
                        )
                    ) ;
                    pause ;
                } ;
                pause ;

            cas  'SetMtxPlatform' :
                rés . json ( createResponse ( [ {
                    'changeType' : 'statModified' ,
                    'nom' : 'current_mtx_platform' ,
                    'valeur' : req . corps . Plate-forme
                } ] ,  profileId ,  rvn ) ) ;
                pause ;

            case  'VerifyRealMoneyPurchase' :
                rés . json ( createResponse ( createCommonCore ( config ,  accountId ,  profile ) ) ) ) ;
                pause ;

            case  'SetItemFavoriteStatusBatch' :
                soit  indice  =  0 ;
                for  ( élément  de  req . body . itemIds )  {
                    if  ( req . body . itemFavStatus [ index ]  ===  true )  {
                        var  isAlreadyFavorized  =  false ;
                        pour  ( élément  de  config . favoris )  {
                            if ( item . id  ===  req . body . itemIds [ index ] )  {
                                isAlreadyFavorized  =  true ;
                                pause ;
                            }
                        }
                        si  ( ! estDéjàFavorisé )
                            {
                                configuration . favoris . push ( { id : req . body . itemIds [ index ] } ) ;
                            }
                    }
                    sinon  {
                        var  index2  =  0 ;
                        pour  ( élément  de  config . favoris )  {
                            if  ( item . id  ===  req . body . itemIds [ index ] )  {
                                configuration . favoris . épissure ( indice2 ,  1 ) ;
                                pause ;
                            }
                            indice2  +=  1
                        }
                    }
                    index  +=  1 ;
                }
                saveConfig ( backendConfig . répertoire ,  accountId ,  config ) ;
                rés . json ( createResponse ( createAthena ( config ,  accountId ,  profile ) ,  profileId ,  rvn ) ) ;
                pause ;

            cas  'SetCosmeticLockerSlot' :
                const  itemToSlot  =  req . corps . élémentVersSlot ;
                const  indexSlot  =  req . corps . slotIndex ;
                const  slotName  =  req . corps . catégorie ; 
                const  variantUpdates  =  req . corps . variantUpdates ;

                switch  ( nom d' emplacement )  {
                    cas  'Personnage' :
                    étui  'Sac à dos' :
                    cas  'Pioche' :
                    cas  'Planeur' :
                    cas  'SkyDiveContrail' :
                    cas  'MusicPack' :
                    cas  'LoadingScreen' :
                        config [ slotName ] . ID  =  élémentVersSlot ;
                        config [ slotName ] . Variantes  =  [ { 'variantes' : variantUpdates } ] ;
                    cas  'Danse' :
                        config [ slotName ] . ID [ indexSlot ]  =  itemToSlot ;
                        config [ slotName ] . Variantes [ indexSlot ]  =  [ { 'variantes' : variantUpdates } ] ;
                    cas  'ItemWrap' :
                        if  ( indexSlot  !=  - 1 )  {
                            config [ slotName ] . ID [ indexSlot ]  =  itemToSlot ;
                            config [ slotName ] . Variantes [ indexSlot ]  =  [ { 'variantes' : variantUpdates } ] ;
                        }
                        // APPLIQUER TOUT
                        sinon  {
                            config [ slotName ] . ID [ 0 ]  =  élémentVersSlot ;
                            config [ slotName ] . Variantes [ 0 ]  =  [ { 'variantes' : variantUpdates } ] ;
                            config [ slotName ] . ID [ 1 ]  =  élémentVersSlot ;
                            config [ slotName ] . Variantes [ 1 ]  =  [ { 'variantes' : variantUpdates } ] ;
                            config [ slotName ] . ID [ 2 ]  =  élémentVersSlot ;
                            config [ slotName ] . Variantes [ 2 ]  =  [ { 'variantes' : variantUpdates } ] ;
                            config [ slotName ] . ID [ 3 ]  =  élémentVersSlot ;
                            config [ slotName ] . Variantes [ 3 ]  =  [ { 'variantes' : variantUpdates } ] ;
                            config [ slotName ] . ID [ 4 ]  =  élémentVersSlot ;
                            config [ slotName ] . Variantes [ 4 ]  =  [ { 'variantes' : variantUpdates } ] ;
                            config [ slotName ] . ID [ 5 ]  =  élémentVersSlot ;
                            config [ slotName ] . Variantes [ 5 ]  =  [ { 'variantes' : variantUpdates } ] ;
                            config [ slotName ] . ID [ 6 ]  =  élémentVersSlot ;
                            config [ slotName ] . Variantes [ 6 ]  =  [ { 'variantes' : variantUpdates } ] ;
                        }
                    
                    saveConfig ( backendConfig . répertoire ,  accountId ,  config ) ;
                    pause ;
                }
                var  newAthena  =  createAthena ( config ,  accountId ,  profile ) ;
                rés . json ( createResponse ( newAthena ,  profileId ,  rvn ) ) ;
                pause ;
            par défaut :
                rés . json ( createError (
                    'errors.com.epicgames.modules.profiles.operation_forbidden' ,
                    `Impossible de trouver la configuration du modèle pour le profil ${ req . requête . ID de profil } ` ,
                    12813 ,
                    'fortnite' ,
                    'prod-live' ,
                    [ demande . requête . ID de profil ]
                )
            ) ;
            pause ;
        } ;
    }
)

module . exportations  =  application ;
