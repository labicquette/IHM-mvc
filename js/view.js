
class View {

  constructor(){
    
    // ------------------------------------------
    // INIT
    // ------------------------------------------

    this.row_start = document.createElement('div')
    this.row_center = document.createElement('div')
    this.row_end = document.createElement('div')

    this.row_start_inner = document.createElement('div')
    this.row_center_inner = document.createElement('div')
    this.row_end_inner= document.createElement('div')

    this.left = document.createElement('div');
    this.right = document.createElement('div')
    this.center = document.createElement('div')
    
    this.left2 = document.createElement('div');
    this.right2 = document.createElement('div')
    this.center2 = document.createElement('div')

    //this.div.appendChild();
    this.container = document.createElement('div')

    this.plus = document.createElement('button');
    this.moins = document.createElement('button')
    this.text = document.createElement('input')

    this.end_text = document.createElement('textarea')
    this.end_text.textContent='end AREA'

    this.plus.textContent= "+"
    this.moins.textContent='-'

    this.but1 = document.createElement('button');
    this.but2 = document.createElement('button')
    this.but1.textContent= "1"
    this.but2.textContent='2'

    let nodeParent = document.querySelector('#outer');

    // ------------------------------------------
    // BOOTSTRAP
    // ------------------------------------------

    this.container.classList.add("container-fluid")

    this.moins.classList.add("btn","btn-primary", "btn-lg");
    this.plus.classList.add("btn")

    this.but1.classList.add('btn')
    this.but2.classList.add('btn')

    this.row_start.classList.add("row_start")
    this.row_start_inner.classList.add("row")
    
    this.row_center.classList.add("row_center")
    this.row_center_inner.classList.add("row")

    this.row_end.classList.add("row_end")
    this.row_end_inner.classList.add("row")

    this.left.classList.add("col")
    this.center.classList.add("col")
    this.right.classList.add("col")

    this.left2.classList.add("col")
    this.center2.classList.add("col")
    this.right2.classList.add("col")

    // ------------------------------------------
    // CREATING TREE
    // ------------------------------------------
    nodeParent.appendChild(this.container)

    this.container.appendChild(this.row_start);
    this.container.appendChild(this.row_center);
    this.container.appendChild(this.row_end);

    this.row_start.appendChild(this.left);
    this.row_start.appendChild(this.center);
    this.row_start.appendChild(this.right)

    this.row_start.appendChild(this.row_start_inner);
    this.row_center.appendChild(this.row_center_inner);
    this.row_end.appendChild(this.row_end_inner)

    this.center.appendChild(this.moins)
    this.center.appendChild(this.plus)
    this.center.appendChild(this.text)

    this.row_center.appendChild(this.left2);
    this.row_center.appendChild(this.center2);
    this.row_center.appendChild(this.right2)

    this.left2.appendChild(this.but1)
    this.right2.appendChild(this.but2)
   
    this.row_end.appendChild(this.end_text)
    


  }
}
