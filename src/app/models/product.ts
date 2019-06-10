/**
 * The product model.
 *
 * @Author: Stephan Dünkel 
 * @Date: 2019-06-09 23:52:56 
 * @Last Modified by: Stephan Dünkel
 * @Last Modified time: 2019-06-10 00:20:56
 */
export class Product {

    // the released/modified date
    public readonly date: Date;

    /**
     * The constructor of the product model.
     *
     * @param name The product name
     * @param price the product price
     * @param description The product description, optional parameter
     */
    constructor(
        public name: string,
        public price: number,
        public description?: string) {
        this.name = name;
        this.price = price;
    }
}