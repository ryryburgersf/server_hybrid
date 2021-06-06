const  express  =  require ( 'express' ) ;
const  app  =  express ( ) ;
const  fs  =  require ( 'fs' ) ;
const  crypto  =  require ( 'crypto' ) ;
const  config  =  require ( '../config' ) ;

// INSPIRÉ PAR AURORAFN & NEONITE
application . get ( '/fortnite/api/cloudstorage/system' ,  ( req ,  res )  =>  {
	laisser  résultat  =  [ ] ;
	fs . readdirSync ( ` ${ config . répertoire } /cache/cloudstorage` )
		. pourChaque ( ( fichier )  =>  {
			résultat . pousser ( {
				nomFichier unique : fichier ,
				nom de fichier : fichier ,
				hachage : crypto . createHash ( ' sha1' ) . mise à jour ( fichier ) . résumé ( 'hex' ) ,
				hash256 : crypto . createHash ( 'sha256' ) . mise à jour ( fichier ) . résumé ( 'hex' ) ,
				longueur : fichier . longueur ,
				contentType : 'application/octet-stream' ,
				téléchargé : fs . statSync (
					` ${ config . répertoire } /cache/cloudstorage/ ${ fichier } `
				) . mtime ,
				Type de stockage : 'S3' ,
				doNotCache : false ,
			} ) ;
		} ) ;
	rés . json ( [ ] ) ;
} ) ;

application . get ( '/fortnite/api/cloudstorage/system/config' ,  ( req ,  res )  =>  {
	rés . envoyer ( '' ) ;
} ) ;

application . get ( '/fortnite/api/cloudstorage/system/:fileName' ,  ( req ,  res )  =>  {
	si  (
		fs . existeSync (
			` ${ config . répertoire } /cache/cloudstorage/ ${ req . paramètres . nom_fichier } `
		)
	)  {
		rés . envoyer (
			fs . readFileSync (
				` ${ config . répertoire } /cache/cloudstorage/ ${ req . paramètres . nom_fichier } `
			)
		) ;
	}  autre  {
		rés . état ( 404 ) . fin ( ) ;
	}
} ) ;

module . exportations  =  application ;
