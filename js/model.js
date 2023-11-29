

// implementation class

class Model extends Observable {
    constructor(){
        super();
        this.entier = 0;
        this.listLignes = [];
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
