import { Router } from "express";
import { ProductBusiness } from "../business/ProductBusiness";
import { ProductController } from "../controller/ProductController";
import { ProductDatabase } from "../database/ProductDatabase";
import { IdGenerator } from "../services/IdGenerator";

export const productRouter = Router();

const productController = new ProductController(
  new ProductBusiness(new ProductDatabase(), new IdGenerator())
);

productRouter.get("/all/:page/", productController.getAll);
productRouter.get("/byId/:id", productController.getById);
productRouter.post("/purchase", productController.postPurchase);
productRouter.put("/addOnPurchase", productController.putSumPurchase);
productRouter.put("/subOnPurchase", productController.putSubPurchase);
productRouter.get("/allPurchase/:id_cart", productController.getAllPurchase);
productRouter.delete("/delPurchase/:id_purchase", productController.delPurchaseItem);
