import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, NavController } from '@ionic/angular';
import { DataService } from '../services/data.service';
import { CommonModule } from '@angular/common';
import { TouchSequence } from 'selenium-webdriver';
import { DetailsNotePage } from '../details-note/details-note.page';
import { Style } from '@capacitor/status-bar';
import { AddnotePage } from '../addnote/addnote.page';
import { stringify } from 'querystring';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.page.html',
  styleUrls: ['./notes.page.scss'],
})

export class NotesPage implements OnInit {
  
  notes = [];

  constructor(private dataService: DataService, private alertCtrl: AlertController, private modalCtrl: ModalController, private navCrtl: NavController, public ngFireAuth: AngularFireAuth, private router: Router) { 
    this.dataService.getNotes().subscribe(res => {
      console.log(res);
      this.notes = res;
    })
  }

  async logOut() {
    return this.ngFireAuth.signOut().then(() => {
       this.router.navigate(['']);
       
    });
  }
  
  async openNote(note) {
    const modal = await this.modalCtrl.create(
      {
        component: DetailsNotePage,
        componentProps: { id: note.id },
        breakpoints: [0, 0.5, 0.8, 1],
        initialBreakpoint: 1
      });
      modal.present();
  }

  async newNote() {
    const modal = await this.modalCtrl.create(
      {
        component: AddnotePage,
        componentProps: {
          title: "",
          text: ""
        },
        breakpoints: [0, 0.5, 0.8, 1],
        initialBreakpoint: 1
      });
      modal.present();
  }

  async addNote1() {
    const alert = await this.alertCtrl.create({
      header: 'Add Note',
      inputs: [
        {
          name: 'title',
          placeholder: 'Note title',
          type: 'text'
        },
        {
          name: 'text',
          placeholder: 'Write more...',
          type: 'textarea'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Add',
          handler: (res) => {
            this.dataService.addNote({
              title: res.title, text: res.text
            });
          }
        }
      ]
    });
    await alert.present();  
  }

  ngOnInit() {
  }

}
