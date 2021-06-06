const  express  =  require ( 'express' ) ;
const  app  =  express ( ) ;
const  axios  =  require ( " axios " ) ;

application . get ( [ '/fortnite/api/v2/versioncheck/:ver' ,  '/fortnite/api/versioncheck/:ver' ] ,  ( req ,  res )  =>  {
	rés . json ( {
		tapez : 'NO_UPDATE' ,
	} ) ;
} ) ;

application . get ( '/fortnite/api/game/v2/enabled_features' ,  ( req ,  res )  =>  {
    rés . json ( [ ] ) ;
} ) ;

application . get ( '/fortnite/api/calendar/v1/timeline' ,  async  ( req ,  res )  =>  {
    axios . get ( 'https://api.nitestats.com/v1/epic/modes' ) . alors ( réponse  =>  {
        rés . json ( réponse . données )
    } ) . capture ( e  =>  {
        rés . json ( { 'channels' : { 'client-events' : { 'states' : [ { 'state' : { 'seasonNumber' : 0 , 'seasonTemplateId' : 'AthenaSeason:athenaseason0' , 'seasonBegin' : '0001-06 -23T04:00:00Z' , 'seasonEnd' : '0001-07-23T04:00:00Z' , 'seasonDisplayedEnd' : '0001-07-23T04:00:00Z' } } ] } } ,nouvelle  date ( ) } )
    } )
            
} )

module . exportations  =  application ;
