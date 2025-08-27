import { Routes } from '@angular/router';

import { DreamBoxComponent } from './dream-box/dream-box.component';
import { ServicesComponent } from './services/services.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { GoldComponent } from './gold/gold.component';
import { GoldenStarsComponent } from './golden-stars/golden-stars.component';
import { SinoalexComponent } from './sinoalex/sinoalex.component';
import { AmandaComponent } from './amanda/amanda.component';
import { CasesAExclusiveComponent } from './cases-aexclusive/cases-aexclusive.component';
import { ElFaurouzComponent } from './el-faurouz/el-faurouz.component';
import { ElkhaogaComponent } from './elkhaoga/elkhaoga.component';
import { CVCreativeComponent } from './cvcreative/cvcreative.component';
import { BogyComponent } from './bogy/bogy.component';

export const routes: Routes = [
    {path:"",redirectTo:"Home",pathMatch:'full'},
    {path:"Home",component:HomeComponent,title:"Portofolio/Home"},
    {path:"Services",component:ServicesComponent,title:"Portofolio/Services"},
    {path:"Projects",component:ProjectsComponent,title:"Portofolio/Projects"},
    {path:"Contact",component:ContactComponent,title:"Portofolio/Contact"},
    
    {path:"DreamBox",component:DreamBoxComponent,title:"Projects/Dream Box"},
    {path:"Gold",component:GoldComponent,title:"Projects/Gold"},
    {path:"Golden",component:GoldenStarsComponent,title:"Projects/Golden Stars FC"},
    {path:"Sinoalex",component:SinoalexComponent,title:"Projects/Sinoalex"},
    {path:"CasesAExclusive",component:CasesAExclusiveComponent,title:"Projects/CasesAExclusive"},
    
    {path:"ElFaurouz",component:ElFaurouzComponent,title:"Projects/El-Faurouz"},
    {path:"Elkhaoaga",component:ElkhaogaComponent,title:"Projects/El-khaoaga"},
    {path:"CV",component:CVCreativeComponent,title:"Projects/CVCreative"},
    {path:"Amanda",component:AmandaComponent,title:"Projects/Amanda"},
    {path:"Bogy",component:BogyComponent,title:"Projects/Bogy Academy"}
]