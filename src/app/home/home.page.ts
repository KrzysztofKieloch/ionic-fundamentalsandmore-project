import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { IonButton, PickerController } from '@ionic/angular';
import { Observable, BehaviorSubject } from 'rxjs';
import { pickerController } from '@ionic/core';

const circleR = 80;
const circleDasharray = 2 * Math.PI * circleR;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export default class HomePage {

  time: BehaviorSubject<string> = new BehaviorSubject('20:00');

  timer: number;
  interval;

  startDuration = 1;

  circleR = circleR;
  circleDasharray = circleDasharray;

  state: 'start' | 'change' | 'reset' | 'stop' = 'stop' ;

  public workTime:  number = 1200;

  constructor(private router: Router,
    public ngFireAuth: AngularFireAuth, private PickerController: PickerController) {}

  async logOut() {
   return this.ngFireAuth.signOut().then(() => {
      this.router.navigate(['']);
      
   });
  }

  startTimer(duration: number) {
    this.state = 'start';
    this.timer = duration * this.workTime;
    this.updateTimeValue();
    
    this.interval = setInterval (() => {
      this.updateTimeValue();
    }, 1000); 
  }

  stopTimer() {
    this.state = 'stop';
    clearInterval(this.interval);
  }

  resetTimer(duration: number) {
    this.state = 'reset';
    clearInterval(this.interval);
    this.timer = duration * this.workTime;
    this.updateTimeValue();
  }

  updateTimeValue () {
    let minutes: any = this.timer / 60;
    let seconds: any = this.timer % 60;

    minutes = String('0' + Math.floor(minutes)).slice(-2);
    seconds = String('0' + Math.floor(seconds)).slice(-2);

    const text = minutes + ':' + seconds;
    this.time.next(text);

    --this.timer;

    if (this.timer < -1) {
      this.startTimer(this.startDuration);
    }
  }

  async openPicker() {
    let options = {
      buttons: [
        {
          text: "Cancel",
          role: 'cancel'
        },
        {
          text:'Change',
          handler:(value:any) => {
            this.workTime=value.WTime.value;
            this.time.next(value.WTime.text);
            this.timer = this.workTime;
            clearInterval(this.interval);
            this.state='change';  
          }
        }
      ],
      columns:[
        {name:'WTime',
        options: [
          {text: '20:00', value: 1200},
          {text: '25:00', value: 1500},
          {text: '30:00', value: 1800},
          {text: '35:00', value: 2100},
          {text: '40:00', value: 2400},
          {text: '45:00', value: 2700},
        ]}
      ]
    };

    let picker = await this.PickerController.create(options);
    picker.present()
  }
}


