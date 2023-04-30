export interface User {
  id: number;
  first_name: string;
  last_name: string;
  display_name: string;
  email: string;
  password: string;
  phone: string;
  date_of_birth: Date;
  gender: string;
  division: string;
  address: string;
  emergency_contact: string;
  emergency_number: string;
  nip: string;
  npwp: string;
  nik: string;
  wfh_schedule: null;
  is_active: number;
  photo: string;
  level: number;
}

export interface UserSidebarInfo {
  name: string;
  photo: string;
  division: string;
}
