import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { LayoutComponent } from './layout/layout.component';
import { ListingComponent } from './listing/listing.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { authGuard } from './auth/auth.guard';

const routes: Routes = [
    {
        path: 'auth',
        component: AuthComponent
    },
    {
      path:'',
      component:LayoutComponent,
      canMatch:[authGuard],
      children:[
        {
          path:'',
          component:ListingComponent
        },
        {
          path:'view/:id',
          component:ViewUserComponent
        }
      ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
