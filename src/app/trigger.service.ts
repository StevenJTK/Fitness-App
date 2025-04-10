import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TriggerService {
private trigger = new Subject < void > ();
public triggerList = this.trigger.asObservable();

triggerAction() {
  this.trigger.next();
}
}
