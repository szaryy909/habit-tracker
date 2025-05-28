import { Component, OnInit } from '@angular/core';
import { HabitService } from './habit.service';
import { Habit } from './habit.model';

@Component({
  selector: 'app-root',
  template: `
    <h1>System Zarządzania Nawykami</h1>
    <app-habit-form (habitAdded)="addHabit($event)"></app-habit-form>
    <app-habit-list [habits]="habits" (habitRemoved)="removeHabit($event)"></app-habit-list>
  `
})
export class AppComponent implements OnInit {
  habits: Habit[] = [];

  constructor(private habitService: HabitService) {}

  ngOnInit() {
    this.habits = this.habitService.getHabits();
  }

  addHabit(habit: Habit) {
    this.habitService.addHabit(habit);
    this.habits = this.habitService.getHabits();
  }

  removeHabit(index: number) {
    this.habitService.removeHabit(index);
    this.habits = this.habitService.getHabits();
  }
}

