import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  getAuthorizationToken() {
    return [
      'Basic d2VudHdvcnRobWFuOkNoYW5nZV9tZQ=='
    ];
  }
}
