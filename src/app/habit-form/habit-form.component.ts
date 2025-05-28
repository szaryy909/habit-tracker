import { Component, EventEmitter, Output } from '@angular/core';
import { Habit } from '../habit.model';

@Component({
  selector: 'app-habit-form',
  templateUrl: './habit-form.component.html'
})
export class HabitFormComponent {
  name: string = '';
  @Output() habitAdded = new EventEmitter<Habit>();

  addHabit() {
    if (this.name.trim()) {
      this.habitAdded.emit({
        name: this.name,
        createdAt: new Date(),
        completed: false  
      });
      this.name = '';
    }
  }
}

