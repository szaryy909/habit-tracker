import { Injectable } from '@angular/core';
import { Habit } from '../app/habit.model';

@Injectable({ providedIn: 'root' })
export class HabitService {
  private readonly STORAGE_KEY = 'habits';

  getHabits(): Habit[] {
    const data = localStorage.getItem(this.STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  }

  addHabit(habit: Habit) {
    const habits = this.getHabits();
    habits.push(habit);
    this.saveHabits(habits);
  }

  removeHabit(index: number) {
    const habits = this.getHabits();
    habits.splice(index, 1);
    this.saveHabits(habits);
  }

  private saveHabits(habits: Habit[]) {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(habits));
  }
}
