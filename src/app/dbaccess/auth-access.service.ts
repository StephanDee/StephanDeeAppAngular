import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { BaseStephanDeeCloudAccessService } from './base-stephandeecloud-access.service';

/*
 * @Author: Stephan Dünkel
 * @Date: 2019-07-19 23:25:01
 * @Last Modified by: Stephan Dünkel
 * @Last Modified time: 2019-07-22 13:09:00
 *
 * The AuthAccessService is the REST API connection to the StephanDeeCloud.
 */
@Injectable()
export class AuthAccessService extends BaseStephanDeeCloudAccessService {
  private routeUser = '/user';
  private routeRegister = '/register';
  private routeLogin = '/login';
  private authToken: string;

  /**
   * The constructor of AuthAccessService.
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
        `${this.apiUrl}${this.routeUser}${this.routeRegister}`,
        user,
        { headers }
      ).toPromise();

    } catch (error) {
      console.log(error);
    }
  }

  public async login(email, password): Promise<void> {
    try {
      const headers = new HttpHeaders();
      headers.append('Content-Type', 'application/json');
      headers.append('Accept', 'application/json');

      const token = await this.http.post<string>(
        `${this.apiUrl}${this.routeUser}${this.routeLogin}`,
        { email, password },
        { headers }
      ).toPromise();

      this.saveAuthToken(token);
    } catch (error) {
      console.log(error);
    }
  }

  public logout(): void {
    this.authToken = '';
    localStorage.removeItem('auth-token');
  }

  private saveAuthToken(token: string): void {
    localStorage.setItem('auth-token', token);
    this.authToken = token;
  }

  public getToken(): string {
    if (!this.authToken) {
      this.authToken = localStorage.getItem('auth-token');
  }

    return this.authToken;
  }

  public userIsLoggedIn(): boolean {
    return !!this.getToken();
  }
}
