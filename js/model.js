

// implementation class

class Model extends Observable {
    constructor(){
        super();
        this.entier = 0;
        this.lignes = [] //here change with backend call
        var colors = ["blue", "red", "green", "green", "red", "blue", "blue"]
        var names = ["T1", "T2", "T3", "23", "26", "C20", "C3"]
        for(let i =0; i < colors.length; i++){
            var temp = Object()
            temp.color = colors[i]
            temp.text = names[i]
            this.lignes.push(temp)
        }
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
