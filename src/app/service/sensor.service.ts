import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse, HttpEvent } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { CustomHttpRespone } from '../model/custom-http-response';
import { Sensor } from '../model/sensor';

@Injectable({ providedIn: 'root' })
export class SensorService {
  private apiServerUrl = environment.apiUrl;


  constructor(private http: HttpClient) { }

  public getSensors(): Observable<Sensor[]> {
    return this.http.get<Sensor[]>(`${this.apiServerUrl}/sensor/list`);
  }

  public addSensor(sensor: Sensor): Observable<Sensor> {
    return this.http.post<Sensor>(`${this.apiServerUrl}/sensor`, sensor);
  }

  public updateSensor(sensor: Sensor): Observable<Sensor> {
    return this.http.put<Sensor>(`${this.apiServerUrl}/sensor`, sensor);
  }

  public deleteSensor(sensorId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/sensor/${sensorId}`);
  }

}
