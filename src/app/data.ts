import { ModuleWithProviders } from '@angular/core';
import { Routes } from '@angular/router';

export interface Results{
  errors: string[];
  messages: string[];
  data: ProductDetail;
}

export interface ResultsList{
  errors: string[];
  messages: string[];
  data: Product[];
}

export interface HttpDataList{
  meta: string[];
  results: ResultsList;
}
export interface HttpData{
  errors: string[];
  meta: string[];
  results: Results;
}
export class Product {
    id: number;
    sku: string;
    productID: number ;
    name: string;
    description: string;
    imageURL: string;
    hasTemplate: boolean;
    quantityDefault: number;
    quantityMinimum: number;
    quantityMaximum: number;
    quantityIncrement: number;
    shippingMethodDefault: number;
    deliveredPrices: DeliveryOption[];
    templateFields: FieldList;
}

export class ProductDetail {
    customValues?: string[];
    deliveredPrices?: string[];
    description?: string;
    emailTemplateId?: string;
    files?: string[];
    hasTemplate: boolean;
    id: number;
    imageURL?: string;
    images?: string[];
    lastUpdated?: string;
    name: string;
    productFormat?: string;
    productRestrictionType?: string;
    productionSpeeds?: string[];
    quantityDefault?: number;
    quantityIncrement?: number;
    quantityMaximum?: number;
    quantityMinimum?: number;
    shippingMethodDefault?: string;
    sku?: string;
    templateFields?: FieldList;
}

export class FieldList{
  fieldlist: FieldItem;
}

export class FieldItem{
  field: Field[];
}

export class Field {
  required: string;
  visible: string;
  type: string;
  subtype: string;
  fieldname: string;
  prompts: Prompt[];
  htmlfieldname: string;
}

export class Prompt{
  language: string;
  text: string;
}

export class OrderPayload {
    orderNumber: number;
    partnerOrderReference: string;
    orderCustomer: OrderCustomerData;
    items: OrderItemData[];
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
  itemID: number;
  templateData?: OrderTemplateData[];
  productionDays?: number;
  partnerItemReference?: string;
}

export class OrderCustomerData {
  public id?: number;
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

  constructor(name: string, value: string){
    this.templateDataName = name;
    this.templateDataValue = value;
  };
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
