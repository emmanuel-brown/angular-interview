import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { environment } from '../../enviroments/environment';
import { Router } from '@angular/router';
import { UserI } from '../../interface/data';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  router = inject(Router)

  private userSubject = new BehaviorSubject<UserI | null>(null)
  user$ = this.userSubject.asObservable()

  constructor(private http: HttpClient) { }

  login(firstName: string, lastName: string): Observable<{token: string}> {
    return this.http.post<{token: string}>(
      `${environment.apiUrl}/users/login`,
      { firstName, lastName }
    ).pipe(
      tap((res) => {
        localStorage.setItem('token', res.token)
      })
    )
  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    return !!token; // Returns true if token exists, false otherwise
  }
  
  logout(): void {
    localStorage.removeItem('token')
    this.userSubject.next(null)
    this.router.navigate(['/login']) // Redirect to login page after logout
  }

  getUser() {
    this.http.get<UserI>(`${environment.apiUrl}/users/profile`).pipe(
      tap((user: UserI) => {
        console.log("User fetched:", user)
      })
    ).subscribe({
      next: (user) => {
        this.userSubject.next(user)
      },
      error: (error) => {
        console.error("Error fetching user:", error)
        // this.userSubject.next(null)
      }
    })
  }
}
