import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentListComponent } from './pages/document-list/document-list.component';
import { DocumentStoreComponent } from './pages/document-store/document-store.component';

const routes: Routes = [
  { path: 'list', component: DocumentListComponent },
  { path: 'store', component: DocumentStoreComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
