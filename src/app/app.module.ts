import { PessoaModule } from './pessoa/pessoa.module';
import { LancamentoModule } from './lancamento/lancamento.module';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CurrencyMaskModule } from 'ng2-currency-mask';

import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { PaginatorModule } from 'primeng/paginator';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    PaginatorModule,
    CalendarModule,
    TooltipModule,
    DropdownModule,
    InputTextareaModule,
    SelectButtonModule,
    CurrencyMaskModule,
    InputMaskModule,
    FormsModule,
    LancamentoModule,
    PessoaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
