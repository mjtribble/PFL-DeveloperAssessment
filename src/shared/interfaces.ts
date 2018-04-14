import { ModuleWithProviders } from '@angular/core';
import { Routes } from '@angular/router';

export interface IProducts {
    id: number;
    productID: number;
    name: string;
    description: string;
    imageURL: string;
    hasTemplate?: boolean;
    quantityDefault: number;
    shippintDefault: string;
    deliveredPrices: IDeliveryOption[];
}


export interface IOrder {
    orderCustomer: ICustomer;
    items: IProducts[];
    productName: string;
    itemCost: number;
}

export interface IDeliveryOption {
    orderCustomer: ICustomer;
    items: IProducts[];
    productName: string;
    itemCost: number;
}

export interface IOrderItem {
    id: number;
    productName: string;
    itemCost: number;
}

export interface ICustomer {
  id: number;
  firstName: string;
  lastName: string;
  gender: string;
  address: string;
  city: string;
  state: string;
  orders?: IOrder[];
  orderTotal?: number;
}
// export interface IPagedResults<T> {
//     totalRecords: number;
//     results: T;
// }
//
// export interface IUserLogin {
//     email: string;
//     password: string;
// }
//
// export interface IApiResponse {
//     status: boolean;
//     error?: string;
// }
