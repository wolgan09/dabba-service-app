import { Component, OnInit } from '@angular/core';

const total = 158,
buttons = document.querySelector('.buttons'),
pie: any = document.querySelector('.pie'),
activeClass = 'active';

const continents = {
asia: 60,
northAmerica : 5,
southAmerica: 9,
oceania: 1,
africa: 15,
europe: 12
};

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})


export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

// Set up default settings
this.setPieChart('asia');
this.setActiveClass(buttons.children[0]);


// create a button for each country
Object.keys(continents).filter( 
  (property) => {
  let newEl = document.createElement('button');
  newEl.innerText = continents[property];
  newEl.setAttribute('data-name', continents[property]);
  buttons.appendChild(newEl);
}
)
  


// when you click a button setPieChart and setActiveClass
  buttons.addEventListener('click', function(e:any){
    if(e.target != e.currentTarget){
      var el = e.target,
          name = el.getAttribute('data-name');
      this.setPieChart(name);
      this.setActiveClass(el);
    }
    e.stopPropagation();
  });
}

setPieChart(name) {
  let number = continents[name],
      fixedNumber = this.numberFixer(number),
      result = fixedNumber + ' ' + total;
  
  pie.style.strokeDasharray = result;
}

setActiveClass(el) {
  for(var i = 0; i < buttons.children.length; i++) {
    buttons.children[i].classList.remove(activeClass);
    el.classList.add(activeClass);
  }
}



// work out percentage as a result of total
numberFixer(num){
  var result = ((num * total) / 100);
  return result;
}


}
