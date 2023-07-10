import { Component } from '@angular/core';

import {  Chart,registerables} from 'node_modules/chart.js';
Chart.register(...registerables)

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {
  lessThanOrGreaterThan=""
  filterLimit=""
  chartData = {
    "dataSet1" : Array.from({ length: 8 }, () => Math.floor(Math.random() * 590) + 10),
    "dataSet2" : Array.from({ length: 8 }, () => Math.floor(Math.random() * 590) + 10)
  };
  barChart:any
  piechart: any;

ngOnInit(){
this.renderChart( )
}
renderChart(){
 

  this.barChart=new Chart('barchart', {
    type: 'bar',
    data: {
      labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June'],
      datasets: [{
        label: 'Hari',
        data: this.chartData.dataSet1,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)'
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)'
        ],
        borderWidth: 1
      },
      {
        label: 'Hari',
        data: this.chartData.dataSet2,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)'
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      
      scales: {
        y: {
          beginAtZero: true
        }
      },
     
    },
   
  });
 

   this.piechart=new Chart('piechart', {
    type: 'pie',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: this.chartData.dataSet1,
        
        borderWidth: 1
      },
      {
        label: '# of Votes',
        data: this.chartData.dataSet2,
        
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  
  const doughnut=new Chart('doughnut', {
    type: 'doughnut',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'
        ],
        
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  const polarArea=new Chart('polarArea', {
    type: 'polarArea',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3,],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(75, 192, 192)',
          'rgb(255, 205, 86)',
          'rgb(201, 203, 207)',
          'rgb(54, 162, 235)'
        ],
        
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}
applyFilter(value:any){

  this.barChart.data.datasets[0].data = this.chartData.dataSet1;
  this.barChart.data.datasets[1].data = this.chartData.dataSet2;

  this.barChart.data.datasets.forEach((data:any,i:any) => {
    if(this.lessThanOrGreaterThan === 'greaterThan'){
      this.barChart.data.datasets[i].data = data.data.map((v:any) => {
        if(v >= value) return v
        else return 0;
      });
   
    }else{
      this.barChart.data.datasets[i].data = data.data.map((v:any) => {
        if(v <= value) return v;
        else return 0;
      });

    }
  });
  this.barChart.update();




  this.piechart.data.datasets[0].data = this.chartData.dataSet1;
  this.piechart.data.datasets[1].data = this.chartData.dataSet2;

  this.piechart.data.datasets.forEach((data:any,i:any) => {
    if(this.lessThanOrGreaterThan === 'greaterThan'){
      this.piechart.data.datasets[i].data = data.data.map((v:any) => {
        if(v >= value) return v
        else return 0;
      });
     // console.log(">>>>>>>>", this.barChart.data.datasets[i].data);
    }else{
      this.piechart.data.datasets[i].data = data.data.map((v:any) => {
        if(v <= value) return v;
        else return 0;
      });
      //console.log("?????????", this.barChart.data.datasets[i].data);
    }
  });
  this.piechart.update();
}
  }