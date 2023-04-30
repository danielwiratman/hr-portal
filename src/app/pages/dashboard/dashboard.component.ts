import {
  ChangeDetectorRef,
  Component,
  ComponentFactoryResolver,
  OnInit,
  ViewChild,
  ViewContainerRef,
  inject,
} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { AdminComponent } from '../admin/admin.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  auth = inject(AuthService);
  router = inject(Router);
  cdr = inject(ChangeDetectorRef)

  @ViewChild('container', {read: ViewContainerRef}) container: ViewContainerRef;

  ngOnInit(): void {
    this.auth.getUserSidebarInfo().subscribe((res) => {
      switch (res.division) {
        case 'admin':
          break;
        default:
          this.container.createComponent(AdminComponent);
          this.cdr.detectChanges()
      }
    });
  }
}
