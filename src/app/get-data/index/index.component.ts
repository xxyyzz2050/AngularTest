import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
  styleUrls: ["./index.component.scss"]
})
export class IndexComponent implements OnInit {
  data;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.data = this.http.get("http://localhost:4200/db.json");
  }
}
