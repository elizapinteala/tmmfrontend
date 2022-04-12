import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Report } from '../_models/report';
import { Subscription } from 'rxjs';
import { ChartDataSets } from '../_models/chart';
import { ReportService } from '../_services/report.service';
import {ChartOptions} from 'chart.js'


@Component({
  selector: 'app-report-graph',
  templateUrl: './report-graph.component.html',
  styleUrls: ['./report-graph.component.css']
})
export class ReportGraphComponent implements OnInit {

  chartDatasets: Report[]=[];
    chartLabels: String[] = [];
    playerReportSubscription: Subscription;
    chartType: string = 'line';

    @ViewChild('screen')
    screen: ElementRef;
    @ViewChild('canvas')
    canvas: ElementRef;
    @ViewChild('downloadLink')
    downloadLink: ElementRef;

    lineChartLabels:string[]=[];
 

    result:ChartDataSets[]=[{
      label:"Aces",
      data:[]
    },
  {
    label:"Double Faluts",
    data:[]
  },
  {
    label:"Forhend Hits",
    data:[]
  },
{
  label:"Voles",
  data:[]
},
{
  label:"Winner Points",
  data:[]
},
{
label:"Unforced Errors",
data:[]
}];

    resultData:Report[]=[];     
  

    options: ChartOptions = {
      title: {
          display: true,
          text: 'Reports',
          fontSize: 35,
          padding: 50

      },
      responsive: true,
      scales: {
          yAxes: [{
              scaleLabel: {
                  display: true,
                  labelString: 'Result',
                  fontSize: 15,
              }
          }],
          xAxes: [{
              scaleLabel: {
                  display: true,
                  labelString: 'Player',
                  fontSize: 15,
              }
          }]
      },
      legend: {
          position: 'bottom',
          display: true,
          labels: {
              padding: 40
          }
      }

  }


  constructor(private resultService:ReportService) { }

  ngOnInit(): void {
    
    this.getReport();
   // console.log(this.chartDatasets.length)
  
 // console.log(this.chartDatasets)
  //   this.create();
  }

  create(){
   
    this.chartDatasets.forEach((values:Report)=>{
      this.lineChartLabels.push(values.playerName.toString());
      this.result[0].data.push(values.aches);
      this.result[1].data.push(values.doubleFault);
      this.result[2].data.push(values.forhendHits);
      this.result[3].data.push(values.voles);
      this.result[4].data.push(values.winnerPoints);
      this.result[5].data.push(values.unforcedErros);
  
    })
  }

  getReport () {
    this.resultService.getReports()
        .subscribe(res => {
          
            res= res as Report[];
            this.chartDatasets= JSON.parse(JSON.stringify(res));
            this.create();
        })
        
}


// exportPDF() {
//   let canvas = document.querySelector('#chart') as HTMLCanvasElement;

//   let canvasImg = canvas.toDataURL("image/png", 1.0);
//   let doc = new jspdf('landscape');
//   doc.addImage(canvasImg, 'PNG', 10, 10, 280, 150);
//   doc.save('report.pdf');
// }

}
