import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export class Message {
  constructor(public author: string, public content: string) {}
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  constructor() {}

  conversation = new Subject<Message[]>();

  messageMap: any = {
    "hi": "hello",
    "how are you": "fine! how can i help you",
    "what is angular": "Angular is a coding framework",
    "default": "I don't understand"
  };

  getAnswer(msg: string) {
    const userMessage = new Message('user', msg);
    this.conversation.next([userMessage]);

    const botMessage = new Message('bot', this.getBotAnswer(msg));
    setTimeout(() => {
      this.conversation.next([botMessage]);
    }, 500); // Simulate a slight delay for the bot response
  }

  getBotAnswer(question: string): string {
    return this.messageMap[question.toLowerCase()] || this.messageMap['default'];
  }
}
