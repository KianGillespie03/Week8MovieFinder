import { Routes } from '@angular/router';
import { SearchtitleComponent } from './searchtitle/searchtitle.component';
import { SearchComponent } from './search/search.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    { path: '', component: SearchtitleComponent},
    { path: 'search', component: SearchComponent},
    { path: 'about', component: AboutComponent},
];
