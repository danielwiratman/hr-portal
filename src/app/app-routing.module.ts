import { NgModule, inject } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AdminComponent } from './pages/admin/admin.component';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { EmployeeDataComponent } from './pages/admin/employee-data/employee-data.component';
import { EmployeePermitComponent } from './pages/admin/employee-permit/employee-permit.component';
import { EmployeePermitConfirmationComponent } from './pages/admin/employee-permit/employee-permit-confirmation/employee-permit-confirmation.component';
import { EmployeePermitAllComponent } from './pages/admin/employee-permit/employee-permit-all/employee-permit-all.component';
import { EmployeePermitReportComponent } from './pages/admin/employee-permit/employee-permit-report/employee-permit-report.component';
import { EmployeeLeaveComponent } from './pages/admin/employee-leave/employee-leave.component';
import { EmployeeLeaveConfirmationComponent } from './pages/admin/employee-leave/employee-leave-confirmation/employee-leave-confirmation.component';
import { EmployeeLeaveAllComponent } from './pages/admin/employee-leave/employee-leave-all/employee-leave-all.component';
import { EmployeeLeaveReportComponent } from './pages/admin/employee-leave/employee-leave-report/employee-leave-report.component';
import { SettingsComponent } from './pages/admin/settings/settings.component';
import { SettingsHolidayComponent } from './pages/admin/settings/settings-holiday/settings-holiday.component';
import { SettingsLeaveLimitComponent } from './pages/admin/settings/settings-leave-limit/settings-leave-limit.component';
import { SettingsPermitCategoryComponent } from './pages/admin/settings/settings-permit-category/settings-permit-category.component';
import { StaffComponent } from './pages/staff/staff.component';
import { StaffDashboardComponent } from './pages/staff/staff-dashboard/staff-dashboard.component';
import { StaffInfoComponent } from './pages/staff/staff-info/staff-info.component';
import { StaffLeaveComponent } from './pages/staff/staff-leave/staff-leave.component';
import { StaffLeaveFormComponent } from './pages/staff/staff-leave/staff-leave-form/staff-leave-form.component';
import { StaffLeaveHistoryComponent } from './pages/staff/staff-leave/staff-leave-history/staff-leave-history.component';
import { StaffPermitComponent } from './pages/staff/staff-permit/staff-permit.component';
import { StaffPermitFormComponent } from './pages/staff/staff-permit/staff-permit-form/staff-permit-form.component';
import { StaffPermitHistoryComponent } from './pages/staff/staff-permit/staff-permit-history/staff-permit-history.component';
import {
  isLoggedInGuard,
  noLoginIfAuthenticatedGuard,
} from './services/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [noLoginIfAuthenticatedGuard],
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [isLoggedInGuard],
    children: [
      {
        path: '',
        component: AdminDashboardComponent,
      },
      {
        path: 'employee-data',
        component: EmployeeDataComponent,
      },
      {
        path: 'employee-permit',
        component: EmployeePermitComponent,
        children: [
          {
            path: 'confirmation',
            component: EmployeePermitConfirmationComponent,
          },
          {
            path: 'all',
            component: EmployeePermitAllComponent,
          },
          {
            path: 'report',
            component: EmployeePermitReportComponent,
          },
        ],
      },
      {
        path: 'employee-leave',
        component: EmployeeLeaveComponent,
        children: [
          {
            path: 'confirmation',
            component: EmployeeLeaveConfirmationComponent,
          },
          {
            path: 'all',
            component: EmployeeLeaveAllComponent,
          },
          {
            path: 'report',
            component: EmployeeLeaveReportComponent,
          },
        ],
      },

      {
        path: 'settings',
        component: SettingsComponent,
        children: [
          {
            path: 'holiday',
            component: SettingsHolidayComponent,
          },
          {
            path: 'leave-limit',
            component: SettingsLeaveLimitComponent,
          },
          {
            path: 'permit-category',
            component: SettingsPermitCategoryComponent,
          },
        ],
      },
    ],
  },
  {
    path: 'staff',
    component: StaffComponent,
    canActivate: [isLoggedInGuard],
    children: [
      {
        path: '',
        component: StaffDashboardComponent,
      },
      {
        path: 'info',
        component: StaffInfoComponent,
      },
      {
        path: 'staff-leave',
        component: StaffLeaveComponent,
        children: [
          {
            path: 'form',
            component: StaffLeaveFormComponent,
          },
          {
            path: 'history',
            component: StaffLeaveHistoryComponent,
          },
        ],
      },
      {
        path: 'staff-permit',
        component: StaffPermitComponent,
        children: [
          {
            path: 'form',
            component: StaffPermitFormComponent,
          },
          {
            path: 'history',
            component: StaffPermitHistoryComponent,
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
