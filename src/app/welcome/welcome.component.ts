import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})


export class WelcomeComponent implements AfterViewInit {
  @ViewChild('input') input:ElementRef;
  
  pendingMessages = [
    { side:'left', content: 'Chào bạn!'},
    { side:'right', content: 'Chào!'},
    { side:'left', content: 'Hãy cùng nhau bàn về một vấn đề đi.'},
    { side:'right',content: 'Bạn muốn bàn về vấn đề gì nào?' },
    { side:'left', content: 'Khum biết'},
    { side:'right', content: 'Blah.'},
    { side:'left', content: 'Blah...blah...'},
    { side:'right',content: '??? :D ???' },
    
  ]
  messages = [];

  constructor() { 
  }
  
  ngAfterViewInit() {
    const queue = async () => {
      for (const message of this.pendingMessages) {
        const result = await new Promise(resolve => {
          let charIndex = 0;
          const interval = setInterval(() => {
            if (message.side == 'right') {
              this.input.nativeElement.append(message.content[charIndex]);
              charIndex++;
              if (charIndex == message.content.length) {
                clearInterval(interval);
                setTimeout(() => {
                  resolve(message);
                  this.input.nativeElement.innerHTML = '';
                },250);
              };
            } else {
              setTimeout(() => {
                resolve(message);
              },1000);
            }
          },50);
        });
        this.messages.push(result);
      }
    }
    queue();
  }
}
