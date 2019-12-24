import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ServercallService {

  constructor(private http: HttpClient) { }
  login(body) {
    return this.http.post(`${environment.API_URL}/users/login`, body);
  }
  register(body) {
    return this.http.post(`${environment.API_URL}/users/register`, body);
  }
  getNewTest() {
    return this.http.get(`${environment.API_URL}/test/createTest`);
  }
  getCurrentTest(testId) {
    return this.http.post(`${environment.API_URL}/test/getCurrentTest`, { testId });
  }
  submitTest(ansobjet) {
    return this.http.post(`${environment.API_URL}/test/updateResult`, {userAns: ansobjet});
  }
  getAllCanditates() {
    return this.http.get(`${environment.API_URL}/users/getAllCanditates`,);
  }
}
