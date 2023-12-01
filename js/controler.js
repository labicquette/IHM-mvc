
class updateText extends Observer{

  constructor(view){
    super()
    this.view = view;
  }
  update(observable, object){
    this.view.text.value = observable.entier;
  }
}

class updateLignes extends Observer {
  constructor(view){
    super()
    this.view = view
  }
  update(observable, object){
    this.view.addTransports(observable.lignes)
  }
  
}


class Controler {

  constructor(model){

      this.view = new View();
      this.model = model;
      
      let actionPlus = event => {this.model.plus()};
      let actionMoins = event => {this.model.moins()};
      let actionInput = event => {
        if(event.key === 'Enter'){this.model.input(event)}};
      // update

      let updateLigne = new updateLignes(this.view)
      let updateT = new updateText(this.view)
      //
      this.model.addObservers(updateT);
      this.model.addObservers(updateLigne);


      //  action
      
      this.view.plus.addEventListener('click', actionPlus);
      this.view.moins.addEventListener('click', actionMoins);
      this.view.text.addEventListener('keypress', actionInput)

      this.model.init()
  }
}
