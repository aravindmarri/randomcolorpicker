import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'random-color';
  rgbColor: any = 'rgb ( 255, 255, 255 )';
  hexColor: any = '#ffffff';
  dialog: any;
  colorCode: [] = [];
  chooseColor: any;
  getRandomColor = () => {
    let color = '#';
    for (let i = 0; i < 6; i++) {
      // const random = Math.random();
      // const bit = random * 16 | 0;
      const bit = Math.floor(Math.random() * 16);
      color += (bit).toString(16);
    }
    this.hexColor = color;
    const r = parseInt((cutHex(this.hexColor)).substring(0, 2), 16);
    const g = parseInt((cutHex(this.hexColor)).substring(2, 4), 16);
    const b = parseInt((cutHex(this.hexColor)).substring(4, 6), 16);
    // return document.getElementById('r').value = r, document.getElementById('g').value = g, document.getElementById('b').value = b;
    const colorRGB = 'rgb ( ' + r + ', ' + g + ', ' + b + ' )';
    this.rgbColor = colorRGB;

    function cutHex(h): any {
      return (h.charAt(0) === '#') ? h.substring(1, 7) : h;
    }
  }

  alertMessage(): void {
    alert('We are working on it, Soon we will implement this feature...!');
  }
}
