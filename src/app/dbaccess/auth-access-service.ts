import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { BaseStephanDeeCloudAccessService } from './base-stephandeecloud-access.service';

/*
 * @Author: Stephan Dünkel
 * @Date: 2019-07-19 23:25:01
 * @Last Modified by: Stephan Dünkel
 * @Last Modified time: 2019-07-19 23:43:06
 *
 * The AuthAccessService is the REST API connection to the StephanDeeCloud.
 */
@Injectable()
export class ProductAccessService extends BaseStephanDeeCloudAccessService {
  private routeUser = '/users';

  /**
   * The constructor of ProductAccessService.
   *
   * @param http The http client.
   */
  constructor(private http: HttpClient) {
    super();
  }

  /**
   * Register a user.
   *
   * @param user the user
   */
  public async registerUser(user: User): Promise<User> {
    try {
      const headers = new HttpHeaders();
      headers.append('Content-Type', 'application/json');
      headers.append('Accept', 'application/json');

      return await this.http.post<User>(
        `${this.apiUrl}${this.routeUser}`,
        user,
        { headers }
      ).toPromise();
    } catch (error) {
      console.log(error);
    }
  }

  public login(email, password) {
    // add somnething here
    console.log(email + ' ' + password);
  }
}
