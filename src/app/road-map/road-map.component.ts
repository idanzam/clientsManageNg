import { Component } from '@angular/core';

@Component({
  selector: 'app-road-map',
  templateUrl: './road-map.component.html',
  styleUrl: './road-map.component.css'
})
export class RoadMapComponent {


  events: EventItem[];

    constructor() {
        this.events = [
            { status: 'On Air', date: '01/06/2024', icon: 'pi pi-play-circle', color: '#9C27B0', image: 'logo.png',
                      info:'Lunching our Pools Mining with 20 coin minable.' },
            { status: 'Add up to 100 Pools coin', date: '15/08/2024', icon: 'pi pi-cog', color: '#673AB7', image: 'Crypto-Mining.svg',
                      info:'Add to our Pools up to 100 coin minable at top 200 coins.' },
            { status: 'Bete Exchnage Web3', date: '01/10/2024', icon: 'pi pi-chart-line', color: '#FF9800', image: 'beta.svg',
                       info:'Lunch Beta Exchange Web3 - Tesing & Pilot.' },
            { status: 'Complete And Lunch Exchange Web3', date: '01/12/2024', icon: 'pi pi-check', color: '#607D8B', image: 'final-beta.svg',
                       info:'Lunch Exchange Web3 with more than 75 Coins & Tokens.' },

        ];
    }

}

interface EventItem {
  status?: string;
  date?: string;
  icon?: string;
  color?: string;
  image?: string;
  info?:string;
}