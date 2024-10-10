import { Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { EventItemComponent } from './pages/dashboard/components/event-item/event-item.component';
import { CreateEventDialogComponent } from './pages/dashboard/components/create-event-dialog/create-event-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DateAdapter, MatNativeDateModule, NativeDateAdapter } from '@angular/material/core';

@Injectable()
export class CustomDateAdapter extends NativeDateAdapter {

  // Format the date in DD/MM/YYYY format
  override format(date: Date, displayFormat: Object): string {
    const day = this.padTo2Digits(date.getDate());
    const month = this.padTo2Digits(date.getMonth() + 1); // Months are 0-based
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  // Parse a date string in DD/MM/YYYY format
  override parse(value: any): Date | null {
    if (typeof value === 'string') {
      const parts = value.split('/');
      const day = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10) - 1; // Months are 0-based
      const year = parseInt(parts[2], 10);
      return new Date(year, month, day);
    }
    return null; // Return null for invalid input
  }

  // Helper method to pad numbers to two digits
  private padTo2Digits(num: number): string {
    return num.toString().padStart(2, '0');
  }
}

@NgModule({
  declarations: [
    DashboardComponent,
    EventItemComponent,
    CreateEventDialogComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [
    { provide: DateAdapter, useClass: CustomDateAdapter }
  ]
})
export class DashboardModule { }
