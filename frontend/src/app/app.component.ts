import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  javaMessage: string = '';
  pythonMessage: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('http://localhost:8080/api/hello', { responseType: 'text' })
      .subscribe(data => this.javaMessage = data);

    this.http.get('http://localhost:5000/api/hello', { responseType: 'text' })
      .subscribe(data => this.pythonMessage = data);
  }
}