import { Routes } from '@angular/router';
import { TechStackComponent } from './pages/tech-stack/tech-stack.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { ProjectsComponent} from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {path:'home',component:HomeComponent},
    { path: 'tech-stack', component: TechStackComponent },
    { path: 'resume', component: ResumeComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'contact', component: ContactComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
]
  