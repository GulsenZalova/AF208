import joi from "joi"

export let ProductValidationSchema=joi.object({
    title: joi.string().min(15).max(50),
    image:joi.string().uri(),
    description:joi.string().min(20).max(100),
    price:joi.number().min(20).max(1000),
    category:joi.string()
})