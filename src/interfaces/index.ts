export interface NavbarItems {
  href: string;
  tags: string;
  closeNav?: () => void;
}

export interface RegisterFormData {
  name: string;
  email: string;
  password: string;
}
export interface LoginFormData {
  email: string;
  password: string;
}
