import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Habit } from '../../app/habit.model';

@Component({
  selector: 'app-habit-item',
  template: `
    <span>{{ habit.name }} - {{ habit.createdAt | date:'short' }}</span>
    <button (click)="remove.emit()">Usuń</button>
  `
})
export class HabitItemComponent {
  @Input() habit!: Habit;
  @Output() remove = new EventEmitter<void>();
}
