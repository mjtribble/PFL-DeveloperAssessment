import { ModuleWithProviders } from '@angular/core';
import { Routes } from '@angular/router';

export interface IProduct {
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

export interface IOrderPayload {
    orderNumber: number;
    partnerOrderReference?: string;
    orderCustomer: IOrderCustomerData;
    items: IOrderItemData[];
    shipments?: IOrderShipmentData[];
    payments?: IPayments[];
    itemShipments?: IItemShipments[];
    webhooks?: IWebHooks[];
    billingVariables?: IBillingVariables[];
}

export interface IOrderItemData {
  itemSequenceNumber: number;
  productID: number;
  quantity: number;
  itemFile: string;
  templateData: IOrderTemplateData[];
  itemID: number;
  productionDays?: number;
  partnerItemReference?: string;
}

export interface IOrderCustomerData {
  id: number;
  firstName: string;
  lastName: string;
  companyName: string;
  gender: string;
  address1: string;
  address2?: string;
  city: string;
  state: string;
  postalCode: number
  countryCode: string;
  email: string;
  phone: string;
  orders?: IOrderPayload[];
  orderTotal?: number;
}

export interface IOrderShipmentData {
  shipmentSequenceNumber: number;
  firstName: string;
  lastName: string;
  companyName: string;
  address1: string;
  address2?: string;
  city: string;
  state: string;
  postalCode: number
  countryCode: string;
  phone: string;
  shippingMethod: string;
  IMBSerialNumber: number;
}

export interface IPayments {
  paymentMethod: string;
  paymentID: string;
  paymentAmount: number;
}

export interface IItemShipments{
  itemSequenceNumber: number;
  shipmentSequenceNumber: number;
}

export interface IWebHooks{
  callbackHeaders: string;
  callbackUri: string;
  id: string
  type: string;
}

export interface IBillingVariables{
  key: string;
  value: string
}

export interface IOrderTemplateData{
  templateDataName: string;
  templateDataValue: string;
}

export interface IDeliveryOption {
  deliveryMethodCode: string;
  description: string;
  isDefault:boolean;
  locationType: string;
   price: number;
   country: string;
   countryCode: string;
   created: string;
}
