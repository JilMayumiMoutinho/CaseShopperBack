import { IPostInputIdDB, IProductDB, ISearchProduct, IPurchaseInputDB } from "../models/Products";
import { BaseDatabase } from "./BaseDatabase";

export class ProductDatabase extends BaseDatabase {
  public static TABLE_PRODUCTS = "Shopper_Products";
  public static TABLE_PURCHASES = "Shopper_Purchases";

  public getAllProducts = async (
    input: ISearchProduct
  ): Promise<IProductDB[]> => {
    const { search, order, sort } = input;
    const offset = Number(input.offset);
    const limit = Number(input.limit);

    const ProductsDB: IProductDB[] = await this.getConnection()
      .select("*")
      .where("qty_stock", ">", "0")
      .andWhere("name", "like", `%${search}%`)
      .limit(limit)
      .offset(offset)
      .orderBy(sort, order)
      .from(ProductDatabase.TABLE_PRODUCTS);
    return ProductsDB;
  };

  public getProductById = async (id: string): Promise<IProductDB | undefined> => {
    const productDB: IProductDB[] = await this.getConnection()
      .select("*")
      .from(ProductDatabase.TABLE_PRODUCTS)
      .where({ id });
    return productDB[0];
  };

  public postPurchase = async (input: IPostInputIdDB): Promise<string> => {
    await this.getConnection()
      .insert({
        id_cart: input.id_cart,
        id_product: input.id_product,
        id_purchase: input.id_purchase,
        price: input.price,
        quantity: 1,
        name: input.name,
      })
      .from(ProductDatabase.TABLE_PURCHASES);
    return `Purchase created successfully`;
  };

  public putStockById = async (id_product: string): Promise<string> => {
    const productDB = await this.getConnection()
      .select("*")
      .from(ProductDatabase.TABLE_PRODUCTS)
      .where({ id: id_product })
      .decrement("qty_stock", 1);

    return `Quantity removed from stock successfuly`;
  };

  public putStockByIdDelPurchase = async (
    id_product: string, quantity: number
  ): Promise<string> => {

    if(quantity === null || undefined){quantity=1};
    const productDB = await this.getConnection()
      .select("*")
      .from(ProductDatabase.TABLE_PRODUCTS)
      .where({ id: id_product })
      .increment("qty_stock", quantity);

    return `Quantity added in stock successfuly`;
  };

  public getPurchase = async (
    id_product: string,
    id_cart: string
  ): Promise<IPurchaseInputDB> => {
    const productDB: IPurchaseInputDB[] = await this.getConnection()
      .select("*")
      .from(ProductDatabase.TABLE_PURCHASES)
      .where({ id_product })
      .andWhere({ id_cart });
    return productDB[0];
  };

  public getPurchaseQtyById = async (id_purchase: string): Promise<any> => {
    const productDB: IPurchaseInputDB[] = await this.getConnection()
      .select("quantity")
      .from(ProductDatabase.TABLE_PURCHASES)
      .where({ id_purchase });
    return productDB[0];
  };

  public putPurchaseById = async (id_purchase: string): Promise<string> => {
    const purchaseDB = await this.getConnection()
      .select("*")
      .from(ProductDatabase.TABLE_PURCHASES)
      .where({ id_purchase })
      .increment("quantity", 1);

    return `Quantity added in cart successfuly`;
  };

  public putDelPurchaseById = async (id_purchase: string): Promise<string> => {
    const purchaseDB = await this.getConnection()
      .select("*")
      .from(ProductDatabase.TABLE_PURCHASES)
      .where({ id_purchase })
      .decrement("quantity", 1);

    return `Quantity removed from cart successfuly`;
  };

  public getAllPurchaseById = async (id_cart: string): Promise<IPurchaseInputDB[]|undefined > => {
    const result: IPurchaseInputDB[] | undefined = await this.getConnection()
      .select("*")
      .from(ProductDatabase.TABLE_PURCHASES)
      .where({ id_cart });
    return result;
  };

  public delPurchaseFromCart = async (id_purchase: string): Promise<string > => {
    await this.getConnection()
      .del("*")
      .from(ProductDatabase.TABLE_PURCHASES)
      .where({ id_purchase });
    return `Purchase deleted successfully`;
  };
}
