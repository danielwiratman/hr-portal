import { Component, OnInit } from '@angular/core';
import { SidebarItem } from 'src/app/models/sidebar-item.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent {
  sidebarItems: SidebarItem[] = [
    {
      title: 'Beranda',
      icon: 'matHome',
      route: '/admin',
    },
    {
      title: 'Data Karyawan',
      icon: 'matPeople',
      route: 'employee-data',
    },
    {
      title: 'Data Cuti',
      icon: 'matPeople',
      route: 'javascript:void(0)',
      children: [
        {
          title: 'Menunggu Persetujuan',
          route: 'employee-leave/confirmation',
        },
        {
          title: 'Semua Data',
          route: 'employee-leave/all',
        },
        {
          title: 'Laporan',
          route: 'employee-leave/report',
        },
      ],
    },
    {
      title: 'Data Izin',
      icon: 'matPeople',
      route: 'javascript:void(0)',
      children: [
        {
          title: 'Menunggu Persetujuan',
          route: 'employee-permit/confirmation',
        },
        {
          title: 'Semua Data',
          route: 'employee-permit/all',
        },
        {
          title: 'Laporan',
          route: 'employee-permit/report',
        },
      ],
    },
    {
      title: 'Settings',
      icon: 'matSettings',
      route: 'javascript:void(0)',
      children: [
        {
          title: 'Hari Libur',
          route: 'settings/holiday',
        },
        {
          title: 'Jumlah Cuti',
          route: 'settings/leave-limit',
        },
        {
          title: 'Kategori Izin',
          route: 'settings/permit-category',
        },
      ],
    },
  ];
}
