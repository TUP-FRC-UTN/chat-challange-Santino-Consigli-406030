import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { Message } from '../models/message';


@Component({
  selector: 'app-message-users',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './message-users.component.html',
  styleUrl: './message-users.component.css'
})
export class MessageUsersComponent {

  @Output() mensajeEmit = new EventEmitter<Message>();
  message: Message= {} as Message;
  textMessagePepe: string = '';
  textMessageMaria: string = '';

  onClickSendMessage(user: string, textMessage: string) {
    this.message = {
      usuario: user,
      text: textMessage
    };
    this.cleanChatUser(user)
    this.mensajeEmit.emit(this.message);
  }

  cleanChatUser(user : string)
  {
    if(user=='Maria')
      {
       this.textMessageMaria=''
      }
      else{
       this.textMessagePepe=''
      }
  }

}
