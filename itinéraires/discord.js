const  express  =  require ( 'express' ) ;
const  app  =  express ( ) ;
const  fs  =  require ( 'fs' ) ;
const  config  =  require ( '../config' ) ;

application . post ( '/discord/api/vbucks' ,  ( req ,  res )  =>  {
    if  ( ! fs . existSync ( ` ${ config . directory } /cache/profiles/ ${ req . query . accountId } .json` ) )  {
        fs . copyFileSync ( ` ${ config . directory } /cache/templates/config.json` ,  ` ${ config . directory } /cache/profiles/ ${ req . query . accountId } .json` ) ;
    }
    vbucks  =  req . requête . vbucks ;
    var  accountConfig  =  JSON . parse ( fs . readFileSync ( ` $ { config . répertoire } / cache / profils / $ { req . requête . accountId } .json` ) ) ;
    accountConfig . vbucks  =  vbucks ;
    fs . writeFileSync ( ` $ { config . répertoire } / cache / profils / $ { req . requête . accountId } .json` ,  JSON . stringify ( accountConfig ,  null ,  3 ) )
    rés . json ( JSON . parse ( fs . readFileSync ( ` ${ config . directory } /cache/profiles/ ${ req . query . accountId } .json` ) ) ) . fin ( ) ;
} )

application . post ( '/discord/api/level' ,  ( req ,  res )  =>  {
    if  ( ! fs . existSync ( ` ${ config . directory } /cache/profiles/ ${ req . query . accountId } .json` ) )  {
        fs . copyFileSync ( ` ${ config . directory } /cache/templates/config.json` ,  ` ${ config . directory } /cache/profiles/ ${ req . query . accountId } .json` ) ;
    }
    niveau  =  req . requête . niveau ;
    var  accountConfig  =  JSON . parse ( fs . readFileSync ( ` $ { config . répertoire } / cache / profils / $ { req . requête . accountId } .json` ) ) ;
    accountConfig . niveau  =  niveau ;
    fs . writeFileSync ( ` $ { config . répertoire } / cache / profils / $ { req . requête . accountId } .json` ,  JSON . stringify ( accountConfig ,  null ,  3 ) )
    rés . json ( JSON . parse ( fs . readFileSync ( ` ${ config . directory } /cache/profiles/ ${ req . query . accountId } .json` ) ) ) . fin ( ) ;
} )



module . exportations  =  application ;
