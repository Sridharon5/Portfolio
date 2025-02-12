import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';
import { ProjectsComponent} from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { HireComponent } from './hire/hire.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path:'home',component:HomeComponent},
    { path: 'about', component: AboutComponent },
    { path: 'resume', component: ResumeComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'hire', component: HireComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
]
  