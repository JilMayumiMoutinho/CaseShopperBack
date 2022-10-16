import { Request, Response } from "express";
import { ProductBusiness } from "../business/ProductBusiness";
import {
  ISearchProduct,
  IPostInputDB,
  IPutPurchaseInputDB,
} from "../models/Products";

export class ProductController {
  constructor(private productBusiness: ProductBusiness) {}

  public getAll = async (req: Request, res: Response) => {
    try {
      const input: ISearchProduct = {
        search: req.query.search as string,
        sort: req.query.sort as string,
        order: req.query.order as string,
        limit: req.query.limit as string,
        page: req.params.page as string,
        offset: req.query.offset as string,
      };

      const response = await this.productBusiness.getAll(input);

      res.status(201).send(response);
    } catch (error: any) {
      res.status(400).send({ message: error.message || error.sqlMessage });
    }
  };

  public getById = async (req: Request, res: Response) => {
    try {
      const id = req.params.id!;

      const response = await this.productBusiness.getById(id);

      res.status(201).send(response);
    } catch (error: any) {
      res.status(400).send({ message: error.message || error.sqlMessage });
    }
  };

  public postPurchase = async (req: Request, res: Response) => {
    try {
      const input: IPostInputDB = {
        id_cart: req.body.id_cart!,
        id_product: req.body.id_product!,
        price: req.body.price,
        name: req.body.name!,
      };

      const response = await this.productBusiness.postPurchase(input);

      res.status(201).send(response);
    } catch (error: any) {
      res.status(400).send({ message: error.message || error.sqlMessage });
    }
  };

  public putSumPurchase = async (req: Request, res: Response) => {
    try {
      const input: IPutPurchaseInputDB = {
        id_product: req.body.id_product,
        id_purchase: req.body.id_purchase,
      };

      const response = await this.productBusiness.putSumPurchaseInCart(input);

      res.status(201).send(response);
    } catch (error: any) {
      res.status(400).send({ message: error.message || error.sqlMessage });
    }
  };

  public putSubPurchase = async (req: Request, res: Response) => {
    try {
      const input: IPutPurchaseInputDB = {
        id_product: req.body.id_product,
        id_purchase: req.body.id_purchase,
      };

      const response = await this.productBusiness.putSubPurchaseInCart(input);

      res.status(201).send(response);
    } catch (error: any) {
      res.status(400).send({ message: error.message || error.sqlMessage });
    }
  };

  public getAllPurchase = async (req: Request, res: Response) => {
    try {
      const id_cart = req.params.id_cart!;

      const response = await this.productBusiness.getAllPurchase(id_cart);

      res.status(201).send(response);
    } catch (error: any) {
      res.status(400).send({ message: error.message || error.sqlMessage });
    }
  };

  public delPurchaseItem = async (req: Request, res: Response) => {
    try {
      const id_purchase = req.params.id_purchase!;
      const quantity = req.body.quantity;
      const id_product = req.body.id_product!;

      const response = await this.productBusiness.delPurchaseFromCart(id_purchase, quantity, id_product);

      res.status(201).send(response);
    } catch (error: any) {
      res.status(400).send({ message: error.message || error.sqlMessage });
    }
  };
}
