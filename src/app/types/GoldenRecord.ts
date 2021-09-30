export interface Golden_Record {
  Name: Name;
  Alias_Name: AliasName;
  Full_Name: FullName;
  Primary_Address: PrimaryAddress;
  Direct_Message_HIE_Address: string;
  NPI: string;
  Academic_Title: string;
  Accepts_Children: string;
  Board_Certification: string[];
  Chicago_ID: string;
  Clinical_Interest: string[];
  Degree: string[];
  Department: string[];
  Email: string;
  Gender: string;
  Is_Active: string;
  Languages: string[];
  Medical_Society: string[];
  Medical_School: string[];
  Group_Name: string;
  Specialty: string[];
  Section: string[];
  Start_Date: string;
  Provider_Type: string;
  Call_Center_Phone: string;
  Office_Fax: string;
  Office_Phone: string;
  Fellowship_Location: string[];
  Intern_Location: string[];
  Other_Education_Location: string[];
  Residency_Location: string[];
}

export interface Name {
  firstname: string;
  lastname: string;
}

export interface AliasName {
  lastname: string;
}

export interface FullName {
  fullname: string;
}

export interface PrimaryAddress {
  Address_Line_1: string;
  Address_Line_2: string;
  City: string;
  State: string;
  ZipCode: string;
  Country: any;
}
