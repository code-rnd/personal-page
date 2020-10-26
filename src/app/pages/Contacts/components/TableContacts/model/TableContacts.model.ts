export interface TableContactsModel {
  list: ContactModel[];
  archiveMode: boolean;
}

export interface ContactModel {
  id: number;
  name: string;
  email: string;
  phone: string;
  isArchive: boolean;
}
