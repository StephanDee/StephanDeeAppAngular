/*
 * @Author: Stephan Dünkel
 * @Date: 2019-07-18 18:36:53
 * @Last Modified by: Stephan Dünkel
 * @Last Modified time: 2019-07-18 18:46:53
 *
 * The user model.
 */
export class User {

  // the product ID
  public readonly _id: string;
  // the released date
  public readonly createdAt: Date;
  // the modified date
  public readonly updatedAt: Date;
  // the product version
  public readonly __v: number;

  /**
   * The constructor of the user model.
   *
   * @param name The product name
   * @param firstname the firstname
   * @param lastname The lastname
   * @param email The email
   * @param password The password
   * @param config optional attributes
   */
  constructor(
    public name: string,
    public firstname: string,
    public lastname: string,
    public email: string,
    public password: string,
    public config?: {}) {
    this.name = name;
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.password = password;
  }
}
