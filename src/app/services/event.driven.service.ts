import { Injectable } from '@angular/core'
import { Subject } from 'rxjs'
import { ActionEvent } from '../state/product.state'

@Injectable({ providedIn: 'root' })
export class EventDrivenService {
  sourceEventSubject: Subject<ActionEvent> = new Subject<ActionEvent>()
  sourceEventSubjectObservable = this.sourceEventSubject.asObservable()

  publishEvent(event: ActionEvent) {
    this.sourceEventSubject.next(event)
  }

  constructor() {}
}
