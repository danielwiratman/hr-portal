import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AdminComponent } from './pages/admin/admin.component';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { EmployeeDataComponent } from './pages/admin/employee-data/employee-data.component';
import { EmployeeDetailComponent } from './pages/admin/employee-data/employee-detail/employee-detail.component';
import { AddEditEmployeeComponent } from './pages/admin/employee-data/add-edit-employee/add-edit-employee.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { StaffComponent } from './pages/staff/staff.component';
import { EmployeeLeaveConfirmationComponent } from './pages/admin/employee-leave/employee-leave-confirmation/employee-leave-confirmation.component';
import { EmployeeLeaveAllComponent } from './pages/admin/employee-leave/employee-leave-all/employee-leave-all.component';
import { EmployeeLeaveReportComponent } from './pages/admin/employee-leave/employee-leave-report/employee-leave-report.component';
import { SettingsHolidayComponent } from './pages/admin/settings/settings-holiday/settings-holiday.component';
import { SettingsLeaveLimitComponent } from './pages/admin/settings/settings-leave-limit/settings-leave-limit.component';
import { SettingsPermitCategoryComponent } from './pages/admin/settings/settings-permit-category/settings-permit-category.component';
import { StaffDashboardComponent } from './pages/staff/staff-dashboard/staff-dashboard.component';
import { StaffInfoComponent } from './pages/staff/staff-info/staff-info.component';
import { StaffLeaveFormComponent } from './pages/staff/staff-leave/staff-leave-form/staff-leave-form.component';
import { StaffLeaveHistoryComponent } from './pages/staff/staff-leave/staff-leave-history/staff-leave-history.component';
import { StaffPermitFormComponent } from './pages/staff/staff-permit/staff-permit-form/staff-permit-form.component';
import { StaffPermitHistoryComponent } from './pages/staff/staff-permit/staff-permit-history/staff-permit-history.component';
import { EmployeeLeaveComponent } from './pages/admin/employee-leave/employee-leave.component';
import { SettingsComponent } from './pages/admin/settings/settings.component';
import { EmployeePermitAllComponent } from './pages/admin/employee-permit/employee-permit-all/employee-permit-all.component';
import { EmployeePermitConfirmationComponent } from './pages/admin/employee-permit/employee-permit-confirmation/employee-permit-confirmation.component';
import { EmployeePermitReportComponent } from './pages/admin/employee-permit/employee-permit-report/employee-permit-report.component';
import { EmployeePermitComponent } from './pages/admin/employee-permit/employee-permit.component';
import { StaffLeaveComponent } from './pages/staff/staff-leave/staff-leave.component';
import { StaffPermitComponent } from './pages/staff/staff-permit/staff-permit.component';
import { LoginComponent } from './pages/login/login.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgIconsModule } from '@ng-icons/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  matHome,
  matPeople,
  matSettings,
  matKeyboardArrowDown,
  matLogout,
} from '@ng-icons/material-icons/baseline';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CookieService } from 'ngx-cookie-service';
import { authInterceptorProviders } from './services/auth.interceptor';
import { TableComponent } from './components/table/table.component';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AdminDashboardComponent,
    EmployeeDataComponent,
    EmployeeDetailComponent,
    AddEditEmployeeComponent,
    HeaderComponent,
    SidebarComponent,
    StaffComponent,
    EmployeeLeaveConfirmationComponent,
    EmployeeLeaveAllComponent,
    EmployeeLeaveReportComponent,
    SettingsHolidayComponent,
    SettingsLeaveLimitComponent,
    SettingsPermitCategoryComponent,
    StaffDashboardComponent,
    StaffInfoComponent,
    StaffLeaveFormComponent,
    StaffLeaveHistoryComponent,
    StaffPermitFormComponent,
    StaffPermitHistoryComponent,
    EmployeeLeaveComponent,
    SettingsComponent,
    EmployeePermitAllComponent,
    EmployeePermitConfirmationComponent,
    EmployeePermitReportComponent,
    EmployeePermitComponent,
    StaffLeaveComponent,
    StaffPermitComponent,
    LoginComponent,
    TableComponent,
  ],
  imports: [
    RouterModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    InputTextModule,
    ButtonModule,
    DropdownModule,
    NgIconsModule.withIcons({
      matHome,
      matPeople,
      matSettings,
      matKeyboardArrowDown,
      matLogout,
    }),
    HttpClientModule,
    TableModule
  ],
  providers: [CookieService, authInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {}
}
