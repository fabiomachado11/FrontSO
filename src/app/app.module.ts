import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TelaGeralComponent } from './tela-geral/tela-geral.component';
import { MemoriaComponent } from './memoria/memoria.component';
import { CpuComponent } from './cpu/cpu.component';
import { ProcessosComponent } from './processos/processos.component';
import { ThreadsComponent } from './threads/threads.component';
import { DiscoComponent } from './disco/disco.component';
import { TotalcpuComponent } from './totalcpu/totalcpu.component';
import { TotalthreadsComponent } from './totalthreads/totalthreads.component';
import { CpulegendaComponent } from './cpulegenda/cpulegenda.component';

@NgModule({
  declarations: [
    AppComponent,
    TelaGeralComponent,
    MemoriaComponent,
    CpuComponent,
    ProcessosComponent,
    ThreadsComponent,
    DiscoComponent,
    TotalcpuComponent,
    TotalthreadsComponent,
    CpulegendaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
