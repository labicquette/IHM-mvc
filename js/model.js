

// implementation class

class Model extends Observable {
    constructor(){
        super();
        this.entier = 0;
        this.lignes = [] //here change with backend call
        var t1 = Object()
            t1.color = 'blue'
            t1.text = "T1"
        var t2 = Object()
            t2.color = 'red'
            t2.text = "T3"
        var t3 = Object()
            t3.color = 'green'
            t3.text = "T3"
        this.lignes = [t1,t2,t3]
        this.changed = false;
    }

    init(){
        this.setChanged();
        this.notifyObservers();
    }

    plus(){
        this.entier++;
        this.setChanged();
        this.notifyObservers();
    }
    moins(){
        this.entier--;
        this.setChanged();
        this.notifyObservers();
    }

    input(e){
        this.entier = e.target.value
        this.setChanged();
        this.notifyObservers();
    }


}
