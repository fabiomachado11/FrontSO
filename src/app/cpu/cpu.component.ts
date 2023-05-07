import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-cpu',
  templateUrl: './cpu.component.html',
  styleUrls: ['./cpu.component.css']
})

//cria um grafico que e exibido no html css
export class CpuComponent implements OnInit {
  public fileContent: string = '';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.loadFileContent();

    setInterval(() => {
      this.loadFileContent();
    }, 3000);//atualiza os conteudos 
    setTimeout(() => {
      location.reload();
    }, 10000); //recarrega a pagina para atualizar o grafico
    
  }

  public loadFileContent() {
    this.http.get('/assets/cpu-info.txt', { responseType: 'text' }).subscribe(response => {
     //transforma a string para numeros
      const data = response.trim().split(',').map(Number);

      //cria o grafico
      const chart = new Chart('canvas', {
        type: 'pie',
        data: {
          labels: ['usuário', 'sistema', 'NICE', 'ociosidade', 'E/S', 'interrupções de hardware', 'interrupções de software', 'virtualização'],
          datasets: [{
            data: data,
            backgroundColor: [
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(0, 128, 0, 0.6)',
              'rgba(128, 0, 128, 0.6)'
            ]
          }]
        },
        options: {}
      });
    });
  }
}
