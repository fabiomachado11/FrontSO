import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-processos',
  templateUrl: './processos.component.html',
  styleUrls: ['./processos.component.css']
})
//pega as informações dos arquivos e imprime na tela via html css
export class ProcessosComponent implements OnInit {
  public fileContent: string = '';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.loadFileContent();

    setInterval(() => {
      this.loadFileContent();
    }, 5000);
  }

  public loadFileContent() {
    this.http.get('/assets/processos.txt', { responseType: 'text' }).subscribe(response => {
      this.fileContent = response;
    });
  }
}
