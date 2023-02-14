import { Component } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent {
  presentDate = new Date();
  time$: Observable<Date> = interval(1000).pipe(map(() => new Date()));
  constructor() {}
  ngOnInit() {}
  price: number = 20000;
}
// export class testComponent implements onInit{
// price: number = 20000; ngOnInit(){

// }
// }
