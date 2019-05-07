import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ErrorComponent } from "./error/error.component";

const routes: Routes = [
  {
    path: "material",
    loadChildren: "./material/material.module#MaterialModule"
  },
  {
    path: "angular",
    loadChildren: "./angular-core/angular-core.module#AngularCoreModule"
  },
  {
    path: "formly",
    loadChildren: "./formly/formly.module#FormlyExampleModule"
  },
  {
    path: "get-data",
    loadChildren: "./get-data/get-data.module#GetDataModule"
  },
  { path: "", redirectTo: "", pathMatch: "full" },
  { path: "**", component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
