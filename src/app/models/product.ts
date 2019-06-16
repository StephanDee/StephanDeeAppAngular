/**
 * The product model.
 *
 * @Author: Stephan Dünkel 
 * @Date: 2019-06-11 13:53:53 
 * @Last Modified by: Stephan Dünkel
 * @Last Modified time: 2019-06-16 17:43:46
 */
export class Product {

    // the product ID
    public readonly _id: string;
    // the released/modified date
    public readonly date: Date;
    // the product version
    public readonly __v: number;

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