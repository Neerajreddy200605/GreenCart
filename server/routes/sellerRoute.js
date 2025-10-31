import express from "express";
import {
  sellerLogin,
  sellerLogout,
  isSeller,
} from "../controllers/sellerController.js";
import authSeller from "../middlewares/authSeller.js";

const sellerRouter = express.Router();

sellerRouter.post("/login", sellerLogin);
sellerRouter.get("/is-auth", authSeller, isSeller);
sellerRouter.get("/logout", sellerLogout);

export default sellerRouter;
