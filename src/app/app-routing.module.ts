import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MainboardComponent } from './mainboard/mainboard.component';
import { TboardComponent } from './tboard/tboard.component';
import { HomeComponent } from './home/home.component';
import { InstructionComponent } from './instruction/instruction.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent,  },
  { path: 'play', component: MainboardComponent,  },
  { path: 'instruction', component: InstructionComponent,  },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents =[HomeComponent,MainboardComponent,InstructionComponent]
