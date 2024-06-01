import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { WeatherService } from './services/weather.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HttpClientModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [WeatherService]
})

export class AppComponent implements OnInit{
  title = 'WeatherApp';
  weatherData: any;

  constructor(private weatherService:WeatherService) { }

  cityName: string="Hanoi";

  ngOnInit() {
    this.getWeatherData(this.cityName);
    this.cityName = "";
  }

  onSubmit() {
    this.getWeatherData(this.cityName);
    this.cityName = "";
  }

  private getWeatherData(cityName: string) {
    this.weatherService.getWeatherData(cityName).subscribe(data => {
      this.weatherData = data;
    });
  }
}