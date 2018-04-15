import { ModuleWithProviders } from '@angular/core';
import { Routes } from '@angular/router';

export class Product {
    id: number;
    productID: number;
    name: string;
    description: string;
    imageURL: string;
    hasTemplate?: boolean;
    quantityDefault?: number;
    shippingDefault?: string;
    deliveredPrices?: DeliveryOption[];
}

export class OrderPayload {
    orderNumber: number;
    orderCustomer: OrderCustomerData;
    items: OrderItemData[];
    partnerOrderReference?: string;
    shipments?: OrderShipmentData[];
    payments?: Payments[];
    itemShipments?: ItemShipments[];
    webhooks?: WebHooks[];
    billingVariables?: BillingVariables[];
}

export class OrderItemData {
  itemSequenceNumber: number;
  productID: number;
  quantity: number;
  itemFile: string;
  templateData: OrderTemplateData[];
  itemID: number;
  productionDays?: number;
  partnerItemReference?: string;
}

export class OrderCustomerData {
  public id: number;
  public firstName: string;
  public lastName: string;
  public companyName: string;
  public address1: string;
  public city: string;
  public state: string;
  public postalCode: number;
  public countryCode: string;
  public email: string;
  public phone: string;
  public orders?: OrderPayload[];
  public orderTotal?: number;
  public address2?: string;
}

export class OrderShipmentData {
  shipmentSequenceNumber: number;
  firstName: string;
  lastName: string;
  companyName: string;
  address1: string;
  city: string;
  state: string;
  postalCode: number;
  countryCode: string;
  phone: string;
  shippingMethod: string;
  MBSerialNumber: number;
  address2?: string;
}

export class Payments {
  paymentMethod: string;
  paymentID: string;
  paymentAmount: number;
}

export class ItemShipments{
  itemSequenceNumber: number;
  shipmentSequenceNumber: number;
}

export class WebHooks{
  callbackHeaders: string;
  callbackUri: string;
  id: string;
  type: string;
}

export class BillingVariables{
  key: string;
  value: string;
}

export class OrderTemplateData{
  templateDataName: string;
  templateDataValue: string;
}

export class DeliveryOption {
  deliveryMethodCode: string;
  description: string;
  isDefault:boolean;
  locationType: string;
   price: number;
   country: string;
   countryCode: string;
   created: string;
}
