import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

type RegistrationRequestData = {
  role: number;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
  disabledSeasonAnimation: boolean;
  language: 'en';
};

type RegistrationRequestResponse = {};

@Injectable()
export class RegistrationService {
  constructor(private http: HttpClient) {}

  registration(data: RegistrationRequestData) {
    return this.http.post<RegistrationRequestResponse>(
      'https://beetroot-solodkui.herokuapp.com/beetroot-solodkui/users/registration',
      { body: data }
    );
  }
}
