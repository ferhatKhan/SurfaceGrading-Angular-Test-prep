import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Grade } from "../data/grade";
import { SurfaceType } from "../data/surface-type";
import { Record } from "../records/record";

@Component({
  selector: "app-root",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  records: Record[];
  surfaceTypes: SurfaceType[];
  grades: Grade[];

  constructor(private readonly http: HttpClient) {
    this.getSurfaceTypeList();
    this.getGradeList();
  }
  ngOnInit(): void {
    this.records = new Array<Record>(new Record(1, 4532, 1), new Record(2, 4536, 3));
  }

  emptyList(): void {
    this.records = new Array<Record>();
  }

  getSurfaceTypeName(id): string {
    let surface = this.surfaceTypes?.find(x => x.id == id).name
    return surface;
    //   return "TODO: Show SurfaceType name";
  }

  getGradeNameAndDescription(id): string {
    let name = this.grades?.find(g => g.id == id).name;
    let description = this.grades?.find(g => g.id == id).description;
    return name + "|" + description;
    //  return "TODO: Show Grade name and description";
  }

  getSurfaceTypeList() {
    this.http.get<Array<SurfaceType>>("assets/surfacetypes.json")
      .subscribe((surfaceTypes: Array<SurfaceType>) => {
        this.surfaceTypes = surfaceTypes;
      });
  }

  getGradeList() {
    this.http.get<Array<Grade>>("assets/grades.json")
      .subscribe((grades: Array<Grade>) => {
        this.grades = grades;
      });
  }

  selectedRoadRecord(data: Record) {
    this.records.push(data);
  }
  delete(data:Record) {
    const index = this.records.indexOf(data);
   return this.records.splice(index, 1);
  }
}