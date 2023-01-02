// Ereditarietà: Una classe che eredita da un'altra classe contiene tutte le proprietà e i metodi della classe madre,
// In più possono essere aggiunte proprietà e metodi.
// Polimorfismo: solo con i metodi! E' la definizione di quando cambio la funzione dello stesso metodo esistente nella classe madre

class Persona {
    constructor(nome, cognome, eta){
        this.nome = nome;
        this.cognome = cognome;             // Per costruire una persona uso le proprietà nome, cofnome, eta
        this.eta = eta;
    }

    studiare(){
        return 1+1;                // Una persona può studiare quindi aggiungo un metodo studia
    }
}






class Studente extends Persona{                   // Ciò vuol dire che Studente conterrà tutte le proprietà di Persona
    constructor(nome, cognome, eta, dipartimento){
        super(nome,cognome,eta);                 // Con la keyword super richiamo il costruttore della classe che sta sopra
        this.dipartimento = dipartimento;
    }
    
    studiare(){
        return 10+2;         // Polimorfismo. Ho usato lo stesso nome del metodo della classe madre ma con funzione diversa
    }

    ripassa(){                          // Ripassa è un metodo di studente ma ATTENZIONE! Persona.ripassa() NO!
        return 2+2;
    }
}




let gigi = new Persona('Luigi','Rossi',22);

let gigistudente = new Studente ('Luigi','Rossi',34,'filosofia',)

console.log(gigi);
console.log(gigistudente);
gigi.studiare();
console.log(gigi.studiare());
gigistudente.studiare();
console.log(gigistudente.studiare());
gigi.ripassa();
console.log(gigi.ripassa()); // RICEVO ERRORE!
console.log(gigistudente.ripassa()); // Qui corretto

