import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RegisterComponent} from './components/register/register.component'
import {RouterModule} from '@angular/router'
import {ReactiveFormsModule} from '@angular/forms'
import {StoreModule} from '@ngrx/store'
import {reducers} from './store/reducers'
import {AuthService} from './services/auth.service'

const routes = [
  {
    path: 'register',
    component: RegisterComponent,
  },
]

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    StoreModule.forFeature('auth', reducers),
  ],
  providers: [AuthService],
})
export class AuthModule {}
