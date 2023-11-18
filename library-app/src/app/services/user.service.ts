import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class userService {
  private api = 'http://libraryapi.infometrika.net/api/user/';
  constructor(private _http: HttpClient) { }

  public loginService(username: string, password: string) {
    const body = JSON.stringify({
      username: username,
      password: password
    });

    const headers = new HttpHeaders({
      // 'Authorization': 'Basic ' + data,
      'accept': 'application/json',
      'Content-Type': 'application/json',
      'X-CSRFTOKEN': 'OW1gke0YSWtqPRZzojErGOYPV3bJoOdkbPzVLnVkckdCYbUqh6t2FT8Tmy3tOGsI'
    });
    return this._http.post(`${this.api}login/`, body, { headers });
  }
  public refreshService(refresh: String) {
    const body = JSON.stringify({
      refresh: refresh
    });

    const headers = new HttpHeaders({
      'accept': 'application/json',
      'Content-Type': 'application/json',
      'X-CSRFTOKEN': 'ShZ9q2oDcdM46v3ve654mUJkI4RfYLLVfaxORbjZwBwgfPYm7TUFlZTo9zJZoD0j'
    });
    return this._http.post(`${this.api}login/refresh/`, body, { headers });
  }
  public verifyService(token: String) {
    const body = JSON.stringify({
      token: token
    });

    const headers = new HttpHeaders({
      'accept': '*/*',
      'Content-Type': 'application/json',
      'X-CSRFTOKEN': 'ShZ9q2oDcdM46v3ve654mUJkI4RfYLLVfaxORbjZwBwgfPYm7TUFlZTo9zJZoD0j'
    });
    return this._http.post(`${this.api}verify/`, body, { headers });
  }
}
