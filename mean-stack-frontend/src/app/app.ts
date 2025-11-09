import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// Import the HTTP client
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  // Add HttpClientModule to imports array
  imports: [RouterOutlet, HttpClientModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
// Implement OnInit lifecycle hook
export class AppComponent implements OnInit {
  title = 'mean-stack-frontend';
  // Property to hold the backend message
  backendMessage: string = 'Connecting...';

  // Inject HttpClient in the constructor
  constructor(private http: HttpClient) {}

  ngOnInit() {
    // Fetch the message from the Express backend
    this.http.get<{ message: string }>('/api/message')
      .subscribe(response => {
        this.backendMessage = response.message;
        console.log('Backend response received:', response.message);
      }, error => {
        this.backendMessage = 'ERROR: Could not connect to backend.';
        console.error('Connection Error:', error);
      });
  }
}

