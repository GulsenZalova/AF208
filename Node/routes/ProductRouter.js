import express from "express"
 let router=express.Router()
import { ProductController} from "../controllers/ProductController.js"

router.get("/", ProductController.getAll)
router.get("/:id", ProductController.getById)
router.delete("/:id", ProductController.deleteProduct)
router.post("/", ProductController.postProduct)
router.put("/:id", ProductController.putProduct)



export default router