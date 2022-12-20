import { Component, OnInit,Input, createPlatform, OnChanges, SimpleChange, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() value:string = 'proacdamy';
  constructor() {
    console.log('constructor called');
    console.log(this.value);

   }

  ngOnInit(): void {
    console.log(`ngoninit call`);
    console.log(this.value);
  }
  ngOnChanges(change : SimpleChanges){
    console.log('onchange call');
    console.log(change);
  }
  ngDoCheck(){
    console.log('ngdocheck -change detection cycle runs');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentCheck called');
  }

  ngAfterViewInit(): void {
    console.log('afterviewinit called')
  }

  ngAfterViewChecked(): void {
    console.log('afterviewchecked call');
  }

  ngOnDestroy(): void {

    console.log('ondestroy called')
  }


}
