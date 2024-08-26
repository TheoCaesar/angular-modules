import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";
import { ShoppingListComponent } from "./shopping-list.component";
import { Routes, RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";

 const shoppingListRoutes : Routes = [
  { path: 'shopping-list', component: ShoppingListComponent },
]

@NgModule({
  declarations:[
    ShoppingListComponent,
    ShoppingEditComponent,
  ],
  imports: [
    // CommonModule, replaced by export version in shared module
    SharedModule,
    FormsModule,
    RouterModule.forChild(shoppingListRoutes)
  ],
  exports: [RouterModule]
})
export class ShoppingListModule {}
