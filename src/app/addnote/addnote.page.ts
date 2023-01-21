import { Component, Input, OnInit, Output } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { getElementRoot } from '@ionic/core/dist/types/utils/helpers';
import { title } from 'process';
import { runInThisContext } from 'vm';
import { DataService, Note } from '../services/data.service';

@Component({
  selector: 'app-addnote',
  templateUrl: './addnote.page.html',
  styleUrls: ['./addnote.page.scss'],
})
export class AddnotePage implements OnInit {


  constructor(private dataService: DataService, private modalCtrl: ModalController, private toastCtrl: ToastController) {}

  ngOnInit() {
  }

  @Input() title: string;
  @Input() text: string;  
  note: Note;

  async addNote() {
      this.dataService.addNote({
        title: this.title, text: this.text
      });
      this.modalCtrl.dismiss();
    }

  async closeNote() {
    this.modalCtrl.dismiss();
    }
  }
  
  