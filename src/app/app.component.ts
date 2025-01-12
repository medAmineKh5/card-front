import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import { CardService } from '././service/app.service';
import { Card } from './model/card';


@Component({
  selector: 'app-root',
  imports: [
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    CommonModule,
    MatIconModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit {
  title = 'card';
  cards: Card[] = [];
  sortedCards: Card[] = [];

  constructor(private cardService: CardService) {}

  ngOnInit(): void {
    this.shuffleCards();
  }

  categorySymbols: { [key: string]: string } = {
    'Carreaux': '♦', 
    'Cœur': '♥',    
    'Pique': '♠',    
    'Trèfle': '♣'    
  };

  categoryColors: { [key: string]: string } = {
    'Carreaux': 'red',       
    'Cœur': 'red',         
    'Pique': 'black',        
    'Trèfle': 'black'       
  };

  shuffleCards()
  { 
    this.cardService.getRandomCards().subscribe((data) => {
      this.cards = data;
    });
  }

  getCategoryColor(category: string): string {
    return this.categoryColors[category] || 'black';  
  }
  
  sortCards() {
    this.cardService.sortCards(this.cards).subscribe((data) => {
      this.cards = data;
    });
  }

  getFontSize(cardNumber: string): string {
    return cardNumber.length <= 2 ? '280%' : '220%';
  }
}
  

