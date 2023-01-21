import { Component, Input, OnInit } from '@angular/core';
import { DataService, Note } from '../services/data.service';
import { ModalController, ToastController } from '@ionic/angular';
import { ClientRequest } from 'http';

@Component({
  selector: 'app-details-note',
  templateUrl: './details-note.page.html',
  styleUrls: ['./details-note.page.scss'],
})
export class DetailsNotePage implements OnInit {
  @Input() id: string;
  note: Note; 


  constructor(private dataService: DataService, private modalCtrl: ModalController, private toastCtrl: ToastController) { }

  ngOnInit() {
    this.dataService.getNoteById(this.id).subscribe(res => {
      this.note = res;
    });
  }

  async updateNote() {
    this.dataService.updateNote(this.note);
    const toast = await this.toastCtrl.create(
      {
        message: "Well done!",
        duration: 500,
      }
    );
    toast.present();
    this.modalCtrl.dismiss();
  }

  async deleteNote() {
    await this.dataService.deleteNote(this.note);
    this.modalCtrl.dismiss();
  }

  closeNote() {
    this.modalCtrl.dismiss();
  }

}
