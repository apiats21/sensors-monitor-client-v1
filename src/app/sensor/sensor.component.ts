import { Component, OnInit } from '@angular/core';
import { SensorService } from '../service/sensor.service';
import { BehaviorSubject, Subscription } from 'rxjs';
import { NotificationService } from '../service/notification.service';
import { NotificationType } from '../enum/notification-type.enum';
import { HttpErrorResponse, HttpEvent, HttpEventType } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { CustomHttpRespone } from '../model/custom-http-response';
import { AuthenticationService } from '../service/authentication.service';
import { Router } from '@angular/router';
import { Sensor } from '../model/sensor';

@Component({
  selector: 'app-sensor',
  templateUrl: './sensor.component.html',
  styleUrls: ['./sensor.component.css']
})
export class SensorComponent implements OnInit {
  private subscriptions: Subscription[] = [];
  public refreshing: boolean;
  public sensors!: Sensor[]
  public editSensor: Sensor;
  public deleteSensor: Sensor;

  constructor(private router: Router, private authenticationService: AuthenticationService,
    private sensorService: SensorService, private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.getSensors();
  }


  public getSensors(): void {
    this.sensorService.getSensors().subscribe(
      (response: Sensor[]) => {
        this.sensors = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onOpenModal(sensor: Sensor, mode: string): void {
    const container = document.getElementById('main-container')
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addSensorModal')
    }
    if (mode === 'edit') {
      button.setAttribute('data-target', '#updateSensorModal')
      this.editSensor = sensor;
    }
    if (mode === 'delete') {
      button.setAttribute('data-target', '#deleteSensorModal')
      this.deleteSensor = sensor;
    }
    container.appendChild(button);
    button.click();
  }

  
  // public getSensors(showNotification: boolean): void {
  //   this.refreshing = true;
  //   this.subscriptions.push(
  //     this.sensorService.getUsers().subscribe(
  //       (response: Sensor[]) => {
  //         this.sensorService.addUsersToLocalCache(response);
  //         this.users = response;
  //         this.refreshing = false;
  //         if (showNotification) {
  //           this.sendNotification(NotificationType.SUCCESS, `${response.length} user(s) loaded successfully.`);
  //         }
  //       },
  //       (errorResponse: HttpErrorResponse) => {
  //         this.sendNotification(NotificationType.ERROR, errorResponse.error.message);
  //         this.refreshing = false;
  //       }
  //     )
  //   );
  // }

  private sendNotification(notificationType: NotificationType, message: string): void {
    if (message) {
      this.notificationService.notify(notificationType, message);
    } else {
      this.notificationService.notify(notificationType, 'An error occurred. Please try again.');
    }
  }

}
