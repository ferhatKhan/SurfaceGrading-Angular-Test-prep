import { HttpClient } from "@angular/common/http";
import { Component, EventEmitter, Output } from "@angular/core";
import { Grade } from "../data/grade";
import { SurfaceType } from "../data/surface-type";
import { Record } from "./record";

@Component({
    selector: "app-create-record",
    templateUrl: "./create-record.component.html"
})
export class CreateRecordComponent {
    nextId = 3;
    isAdding = false;
    newRecord: Record;
    surfaceTypes: Array<SurfaceType>;
    grades: Array<Grade>;
    recordsAdd: Record;

  @Output()  addSelectedEventEmitter =  new EventEmitter();

    constructor(private readonly http: HttpClient) {
    }

    showAddForm(): void {
        this.isAdding = true;
        this.newRecord = new Record(this.nextId, 0, 0);

        this.http.get<Array<SurfaceType>>("assets/surfacetypes.json").subscribe((surfaceTypes: Array<SurfaceType>) => {
            this.surfaceTypes = surfaceTypes;
        });
        
        this.http.get<Array<Grade>>("assets/grades.json").subscribe((grades: Array<Grade>) => {
            this.grades = grades;
        });
    }

    submit(): void {
        this.isAdding = false;
        this.nextId++;
        // TODO: Submit new record to the list
        this.recordsAdd = new Record(this.newRecord.id,this.newRecord.surfaceTypeId,this.newRecord.gradeId);
        this.addSelectedEventEmitter.emit(this.recordsAdd);
    }

    canSubmit(): boolean {
        if (this.newRecord.surfaceTypeId === 0) {
            return false;
        }

        return true;
    }
}