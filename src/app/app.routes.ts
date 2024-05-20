import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { StudentComponent } from './student/student.component';
import { BookComponent } from './book/book.component';
import { LoginComponent } from './views/login/login.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { BookdetailsComponent } from './book/bookdetails/bookdetails.component';
import { authguardGuard } from './auth/auth.guard';
import { authChildGuard } from './auth/auth-child.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DsaComponent } from './components/dsa/dsa.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'login', component: LoginComponent, title: 'Login' },
    { path: '', component: DashboardComponent, title: 'Dashboard', canActivate:[authguardGuard],
        children: [
            { path: 'home', component: HomeComponent, title: 'Home', canActivate:[authguardGuard] }, //, canActivate:[authguardGuard]
            { path: 'contact', component: ContactusComponent, title: 'Contact Us' },
            { path: 'aboutus', component: AboutusComponent, title: 'About Us' },
            { path: 'student', canActivateChild:[authChildGuard],
                children:[
                    { path:'', component: StudentComponent, title: 'Student' },
                    { path: 'details', component: StudentdetailsComponent, title: 'Student Details' },
                ]
            },
            { path: 'book', component: BookComponent, title: 'Books', canActivate:[authguardGuard] }, //, canActivate:[authguardGuard]
            { path: 'bookdetails/:id', component: BookdetailsComponent, title: 'Books Details', canActivate:[authguardGuard] }, //, canActivate:[authguardGuard]
            { path: 'dsa', component: DsaComponent, title: 'DSA', canActivate:[authguardGuard] }, //, canActivate:[authguardGuard]

        ]
    },
    { path: '**', component: PagenotfoundComponent, title: 'Page not found' }
];
