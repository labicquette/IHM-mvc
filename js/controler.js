
class updateText extends Observer{

  constructor(view){
    super()
    this.view = view;
  }
  update(observable, object){
    this.view.text.value = observable.entier;
  }
}

class updateTransports extends Observer {
  constructor(view){
    super()
    this.view = view
  }
  update(observable, object){
    this.view.addTransports(observable.lignes, object)
  }
  
}

class updateLignes extends Observer {
  constructor(view){
    super()
    this.view = view
  }
  update(observable, object){
    this.view.addIncomingLines(observable.lignes, object)
  }
  
}


class Controler {

  constructor(model){

      this.view = new View();
      this.model = model;
      
      // let actionPlus = event => {this.model.plus()};
      // let actionMoins = event => {this.model.moins()};
      // let actionInput = event => {
      //   if(event.key === 'Enter'){this.model.input(event)}};
      let actionClickLine = event => {this.model.listLignes(event),
        //need to reconnect the newly generated nodes
        this.view.row_sliding_hor.childNodes.forEach(element => {
          element.addEventListener('click', actionClickLine)
        });}
      // update

      let updateTr = new updateTransports(this.view)
      let updateLig = new updateLignes(this.view)
      // let updateT = new updateText(this.view)
      //
      // this.model.addObservers(updateT);
      this.model.addObservers(updateTr);
      this.model.addObservers(updateLig);


      //  action
      // this.view.plus.addEventListener('click', actionPlus);
      // this.view.moins.addEventListener('click', actionMoins);
      // this.view.text.addEventListener('keypress', actionInput)
      

      this.model.init()
      this.view.row_sliding_hor.childNodes.forEach(element => {
        element.addEventListener('click', actionClickLine)
      });
  }
}
