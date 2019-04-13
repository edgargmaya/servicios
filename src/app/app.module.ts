/* Angular */
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* Application Components */
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { WorkSpaceComponent } from './components/work-space/workspace.component';
import { FormComponent } from './components/formulario/form.component'

/* PrimeNG Components */
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';

/* Application Services */
import { ConsumoService } from './services/consumo.service';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    WorkSpaceComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CardModule,
    TableModule,
    FormsModule
  ],
  providers: [ ConsumoService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
