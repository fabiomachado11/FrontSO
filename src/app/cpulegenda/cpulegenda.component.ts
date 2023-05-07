import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cpulegenda',
  templateUrl: './cpulegenda.component.html',
  styleUrls: ['./cpulegenda.component.css']
})
//pega as informações dos arquivos e imprime na tela via html
export class CpulegendaComponent implements OnInit {
  public fileContent: string = '';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.loadFileContent();

    setInterval(() => {
      this.loadFileContent();
    }, 5000);
  }

  public loadFileContent() {
    this.http.get('/assets/cpu-info.txt', { responseType: 'text' }).subscribe(response => {
      this.fileContent = response;
    });
  }
}
