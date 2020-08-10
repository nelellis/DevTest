export enum CustomerType {
  Large = 1,
  Small = 2,
}
export interface CustomerModel {
  customerId: number;
  name: string;
  type: CustomerType;
}
