import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CandidateServiceService {

  constructor(private http: HttpClient) { }

  registerCandidate(candidateData: any) {
    return this.http.post<any>('http://localhost:3000/Candidates', candidateData);
  }

  getCandidate(){
    return this.http.get<any>('http://localhost:3000/Candidates');
  }

}
