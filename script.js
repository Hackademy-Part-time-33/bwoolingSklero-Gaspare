// Traccia 3:
// Crea un oggetto bowling con le seguenti caratteristiche:
// una proprietà che comprenda una lista di giocatori con un nome e i relativi punteggi
// diverse funzionalità tra cui:
// creare 10 punteggi casuali per ogni giocatore:
// Suggerimento: questo metodo dovra’ ciclare tutti i giocatori, presenti nell’oggetto bowling, e aggiungere ad ogni proprieta’ scores, dieci punteggi casuali ad ogni giocatore
// Per generare un punteggio casuale da 1 a 10 → Math.floor(Math.random() * (10 - 1 +1) + 1)
// trovare il punteggio finale per ogni giocatore:
// Suggerimento: ordinare l’array in ordine Decrescente (Attenzione! E’ un array di oggetti: Array.prototype.sort() - JavaScript | MDN )
// aggiungere un nuovo giocatore e creare 10 punti casuali anche per lui
// determinare il vincitore


let bowling ={
    'players' : [
        {'name' : 'pasquale', 'score' : []},
        {'name' : 'filippo', 'score' : []},
        {'name' : 'elia', 'score' : []},
        {'name' : 'nicola', 'score' : []},
        {'name' : 'sebby', 'score' : []},
        {'name' : 'grillo', 'score' : []},
        {'name' : 'patacherru', 'score' : []},
        
    ],

    // mostrare la lista
    'showPlayers': function () {
        this.players.forEach(player => console.log(`Nome: ${player.name} - Punteggio : ${player.score}` ));
    },

    // aggiungere un giocatore

    'addPlayer' : function (newplayer, []){
        this.players.push({ 'name' : newplayer, 'score' :[] });

    },

// aggiungere punteggio
    'addScore' : function (){
        this.players.forEach(player =>{
            for (let i = 0 ; i<10 ; i++){
                player.score.push(Math.floor(Math.random() * (10 - 1 +1) + 1));
            }
        });
    },

    // punteggio totale
    'totScore' : function(){
        this.players.forEach(player =>{
            let totale = player.score.reduce ((acc, el) => acc + el,0);
            player.totale = totale ;
        });
        
    },

    // classifica
    'classifica' : function(){
        this.players.sort((a, b) => b.totale - a.totale );
        console.log('questa è la classifica');
        this.players.forEach(player => console.log(`Nome: ${player.name} - Punteggio : ${player.score} ${player.totale}` ));

        },

}






    
    
    

bowling.addPlayer('giulio' , []); 
bowling.addScore();   
bowling.totScore();
bowling.showPlayers();
bowling.classifica();    
console.log(bowling.players);
    
    
    
    
    
    
    
    

