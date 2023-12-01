
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
    this.row_center_inner2 = document.createElement('div')
    this.row_sliding_hor = document.createElement('div')
    this.row_sliding_vert = document.createElement('div')
    this.row_sliding_vert_title = document.createElement('div')

    this.svt_left = document.createElement('div')
    this.svt_left.textContent = "Ligne"
    this.svt_center = document.createElement('div')
    this.svt_center.textContent = "Destination"
    this.svt_right = document.createElement('div')
    this.svt_right.textContent = "Temps d'attente"

    this.left = document.createElement('div');
    this.right = document.createElement('div')
    this.center = document.createElement('div')
    this.center.textContent = "AffluNantes"
    this.center_title = document.createElement('div')
    this.center_title.textContent = "Commerce"
    this.center_void_left = document.createElement('div')
    this.center_void_right = document.createElement('div')

  
    this.left2 = document.createElement('div');
    this.right2 = document.createElement('div')
    this.center2 = document.createElement('div')
  

    //this.div.appendChild();
    this.bot_left_but = document.createElement('button');
    this.bot_cent_left_but = document.createElement('button')
    this.bot_cent_right_but = document.createElement('button')
    this.bot_right_but = document.createElement('button')

    this.pic_1 = document.createElement('img')
    this.pic_1.src = "resources/home.png"
    this.pic_1.width = 100
    
    this.pic_2 = document.createElement('img')
    this.pic_2.src = "resources/search.png"
    this.pic_2.width = 100

    this.pic_3 = document.createElement('img')
    this.pic_3.src = "resources/star.png"
    this.pic_3.width = 100

    this.pic_4 = document.createElement('img')
    this.pic_4.src = "resources/vlc.png"
    this.pic_4.width = 100


    this.go_back_but = document.createElement('button')
    this.go_back_but.textContent = "<-"

    // this.plus = document.createElement('button');
    // this.moins = document.createElement('button')
    // this.text = document.createElement('input')

    // this.plus.textContent= "+"
    // this.moins.textContent='-'

    // this.but1 = document.createElement('button');
    // this.but2 = document.createElement('button')
    // this.but1.textContent= "1"
    // this.but2.textContent='2'

    let nodeParent = document.querySelector('#outer');

    // ------------------------------------------
    // BOOTSTRAP
    // ------------------------------------------

    // this.moins.classList.add("btn","btn-primary", "btn-lg");
    // this.plus.classList.add("btn")

    // this.but1.classList.add('btn')
    // this.but2.classList.add('btn')


    this.go_back_but.classList.add('btn', 'go_back')

    //START
    this.row_start.classList.add("row", "top")
    this.row_start.setAttribute("id", "top")
    this.row_start_inner.classList.add("row")
    
    //CENTER
    // this.row_center.classList.add("row", "flex-fill", "inner_body")
    // this.row_center.setAttribute("id", "inner_body")

    this.svt_left.classList.add("col")
    this.svt_center.classList.add("col")
    this.svt_right.classList.add("col")


    this.row_center_inner.classList.add("row", 'align-items-center', 'wrapper_stat_title')
    this.row_center_inner2.classList.add("row")

    this.row_sliding_hor.classList.add("row", "row_sliding")

    this.row_sliding_vert_title.classList.add("row", 'align-items-center', "row_sliding_vert_title")
    this.row_sliding_vert.classList.add("row", "row_sliding_vert", "flex-fill")

    this.center_title.classList.add('col', 'station_title', 'border', 'rounded-pill')
    this.center_void_left.classList.add('col')
    this.center_void_right.classList.add('col')

    //END
    this.row_end.classList.add("row", "bottom_menu", 'd-flex', 'btn-toolbar')
    this.row_end.setAttribute("id", "bottom_menu")

    this.bot_left_but.classList.add('btn', 'btn-primary', 'col', 'margin_right')
    this.bot_cent_left_but.classList.add('btn',  'btn-primary','col',  'margin_right')
    this.bot_cent_right_but.classList.add('btn', 'btn-primary', 'col',  'margin_right')
    this.bot_right_but.classList.add('btn', 'btn-primary', 'col', 'right_button')



    this.left.classList.add("col")
    this.center.classList.add("col", 'title')
    this.right.classList.add("col")

    this.left2.classList.add("col")
    this.center2.classList.add("col")
    this.right2.classList.add("col")

    // ------------------------------------------
    // CREATING TREE
    // ------------------------------------------
    

    nodeParent.appendChild(this.row_start);
    nodeParent.appendChild(this.row_center_inner);
    nodeParent.appendChild(this.row_sliding_hor);
    nodeParent.appendChild(this.row_sliding_vert_title);
    nodeParent.appendChild(this.row_sliding_vert);
    nodeParent.appendChild(this.row_center);
    nodeParent.appendChild(this.row_end);



    this.row_sliding_vert_title.appendChild(this.svt_left)
    this.row_sliding_vert_title.appendChild(this.svt_center)
    this.row_sliding_vert_title.appendChild(this.svt_right)

    this.row_start.appendChild(this.left);
    this.row_start.appendChild(this.center);
    this.row_start.appendChild(this.right)

    this.left.appendChild(this.go_back_but)

    this.row_center.appendChild(this.row_center_inner2);
    this.row_center_inner.appendChild(this.center_void_left)
    this.row_center_inner.appendChild(this.center_title);
    this.row_center_inner.appendChild(this.center_void_right)


    // this.center2.appendChild(this.moins)
    // this.center2.appendChild(this.plus)
    // this.center2.appendChild(this.text)

    // this.row_center_inner2.appendChild(this.left2);
    // this.row_center_inner2.appendChild(this.center2);
    // this.row_center_inner2.appendChild(this.right2)

    this.row_end.appendChild(this.bot_left_but)
    this.row_end.appendChild(this.bot_cent_left_but)
    this.row_end.appendChild(this.bot_cent_right_but)
    this.row_end.appendChild(this.bot_right_but)


    this.bot_left_but.appendChild(this.pic_1)
    this.bot_cent_left_but.appendChild(this.pic_2)
    this.bot_cent_right_but.appendChild(this.pic_3)
    this.bot_right_but.appendChild(this.pic_4)
    // this.left2.appendChild(this.but1)
    // this.right2.appendChild(this.but2)


  }

  addTransports(lines){
    this.transport = []
    var child = this.row_sliding_hor.lastElementChild
    while (child) { 
      this.row_sliding_hor.removeChild(child); 
      child = this.row_sliding_hor.lastElementChild; 
    } 

    lines.forEach(element => {
      var column = document.createElement('div')
      column.classList.add('col-md-auto')
      var temp = document.createElement('button')
      temp.classList.add('btn', "btn_bold")
      temp.textContent = element.text
      if (element.color === "green"){
        temp.classList.add('btn-success')
      }
      if (element.color === "red"){
        temp.classList.add('btn-danger')
      }
      if (element.color === "blue"){
        temp.classList.add('btn-primary')
      }
      temp.classList.add('btn_slider')
      column.appendChild(temp)
      this.transport.push(column)
    });
    this.transport.forEach(element => {
      this.row_sliding_hor.appendChild(element)
    })
  }

  addIncomingLines(element, obj){
    this.lines = []
    var child = this.row_sliding_vert.lastElementChild
    while (child) { 
      this.row_sliding_vert.removeChild(child); 
      child = this.row_sliding_vert.lastElementChild; 
    }
    if(obj === null){
      element.forEach(e => {
        var lrow = document.createElement('div')
        lrow.classList.add('row', 'align-items-center', "row_lignes")
        var lcol1 = document.createElement('div')
        lcol1.classList.add('col','col_lignes')
        lcol1.textContent = e.text
        var lcol2 = document.createElement('div')
        lcol2.classList.add('col','col_lignes')
        lcol2.textContent = e.destination
        var lcol3 = document.createElement('div')
        lcol3.classList.add('col','col_lignes')
        lcol3.textContent = e.temps
        this.row_sliding_vert.appendChild(lrow)
        lrow.appendChild(lcol1)
        lrow.appendChild(lcol2)
        lrow.appendChild(lcol3)
  
      }) 
    } else{
      console.log("WORKING");
      obj.temps.forEach(e => {
        var lrow = document.createElement('div')
        lrow.classList.add('row', 'align-items-center', "row_lignes")
        var lcol1 = document.createElement('div')
        lcol1.classList.add('col','col_lignes')
        lcol1.textContent = obj.text
        var lcol2 = document.createElement('div')
        lcol2.classList.add('col','col_lignes')
        lcol2.textContent = obj.dest
        var lcol3 = document.createElement('div')
        lcol3.classList.add('col','col_lignes')
        lcol3.textContent = e
        this.row_sliding_vert.appendChild(lrow)
        lrow.appendChild(lcol1)
        lrow.appendChild(lcol2)
        lrow.appendChild(lcol3)
      }) 
    }
    
    var fillrow = document.createElement('div')
    fillrow.classList.add('row', 'last_row')
    this.row_sliding_vert.appendChild(fillrow)
       
  }
}
