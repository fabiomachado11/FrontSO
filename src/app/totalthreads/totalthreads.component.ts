import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-totalthreads',
  templateUrl: './totalthreads.component.html',
  styleUrls: ['./totalthreads.component.css']
})
//pega as informações dos arquivos e imprime na tela via html css
export class TotalthreadsComponent implements OnInit {
  public fileContent: string = '';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.loadFileContent();

    setInterval(() => {
      this.loadFileContent();
    }, 5000);
  }

  public loadFileContent() {
    this.http.get('/assets/cpu-NumT.txt', { responseType: 'text' }).subscribe(response => {
      this.fileContent = response;
    });
  }
}

