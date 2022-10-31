export interface IProductDB {
  id: string;
  qty_stock: number;
  name: string;
  price: number;
}

export interface IPutPurchaseInputDB {
  id_product: string;
  id_purchase: string;
}

export interface IDelCartInputDB extends IPutPurchaseInputDB{
  quantity: number;
}

export interface IStockInputDB {
  id_product: string;
  quantity: number;
}

export interface IPurInputDB {
  id_cart: string;
  id_product: string;
}

export interface IPostInputDB {
  id_cart: string;
  id_product: string;
  price: number;
}

export interface IPostInputIdDB extends IPostInputDB {
  id_purchase: string;
}

export interface IPurchaseInputDB {
  id_purchase: string;
  id_cart: string;
  id_product: string;
  quantity: number;
  price: number;
}

export interface ISearchProduct {
  search: string;
  order: string;
  limit: string;
  page: string;
  offset: string;
  sort: string;
}

export class Product {
  constructor(
    private id: string,
    private name: string,
    private price: number,
    private qty_stock: number
  ) {}
}