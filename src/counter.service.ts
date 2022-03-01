import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class CounterService {
    changes: number = 0;

    addChange() {
        this.changes++;
        console.log(this.changes)
    }
}