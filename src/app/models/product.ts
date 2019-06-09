/**
 * The product model.
 *
 * @Author: Stephan Dünkel 
 * @Date: 2019-06-09 23:52:56 
 * @Last Modified by: Stephan Dünkel
 * @Last Modified time: 2019-06-10 00:20:56
 */
export class Product {

    /**
     * The constructor of the product model.
     * @param name The product name
     * @param description The product description
     * @param price the product price
     * @param date the released/modified date
     */
    constructor(
        public name: string,
        public description: string,
        public price: number,
        public date: Date) {
        this.name = name;
        this.price = price;
    }
}