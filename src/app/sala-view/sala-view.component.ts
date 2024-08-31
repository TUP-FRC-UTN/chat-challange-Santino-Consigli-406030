import { Component, Input } from '@angular/core';
import { MessageUsersComponent } from "../message-users/message-users.component";
import { Message } from '../models/message';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sala-view',
  standalone: true,
  imports: [MessageUsersComponent,FormsModule,CommonModule],
  templateUrl: './sala-view.component.html',
  styleUrl: './sala-view.component.css'
})
export class SalaViewComponent {


  messages: Message[]=[]
 

  onMensajeEmitCargarChat(message: Message) {
    
    if(message.text=='')
    {
      alert("No puedes enviar un mensaje vacio!")
      return;
    }
    console.log(message)
    this.messages.push(message)
    }
}
