

// implementation class

class Model extends Observable {
    constructor(){
        super();
        this.lignes = [] //here change with backend call
        var colors = ["blue", "red", "green", "green", "red", "blue", "blue"]
        var names = ["T1", "T2", "T3", "23", "26", "C20", "C3"]
        var dest = ["Commerce","Duchesse Anne","Bouffay","Place du Cirque","Gare Nord","Pirmil","Chantiers Navals"]
        var time = [[0,2,5],[3,6,7],[15,20,45],[0,2,5],[3,6,7], [34,35], "Service Terminé"]
        for(let i =0; i < colors.length; i++){
            var temp = Object()
            temp.color = colors[i]
            temp.text = names[i]
            temp.temps = time[i]
            temp.destination = dest[i]
            this.lignes.push(temp)
        }
        this.changed = false;
    }

    init(){
        this.setChanged();
        this.notifyObservers();
    }

    // plus(){
    //     this.entier++;
    //     this.setChanged();
    //     this.notifyObservers();
    // }
    // moins(){
    //     this.entier--;
    //     this.setChanged();
    //     this.notifyObservers();
    // }

    // input(e){
    //     this.entier = e.target.value
    //     this.setChanged();
    //     this.notifyObservers();
    // }

    listLignes(e){
        var ok = e.target.textContent
        var response = Object()
        if (ok === "T1"){
            response.color = "blue"
            response.dest = "Commerce"
            response.text = "T1"
            response.temps = [0,2,5]  
        }
        if (ok === "T2"){
            response.color = "blue"
            response.dest = "Duchesse Anne"
            response.text = "T2"
            response.temps = [3,6,7]  
        }
        if (ok === "T3"){
            response.color = "blue"
            response.dest = "Bouffay"
            response.text = "T3"
            response.temps = [15,20,45]
        }
        if (ok === "23"){
            response.color = "blue"
            response.dest = "Place du Cirque"
            response.text = "23"
            response.temps = [0,2,5]
        }
        this.setChanged();
        this.notifyObservers(response);
    }
}
