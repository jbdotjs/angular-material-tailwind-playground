import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ReactiveformComponent implements OnInit {
  myForm: FormGroup;
  reorderDisabled: boolean = true;

  Langs = [
    'English',
    'Spanish',
    'French',
    'Urdu',
    'German',
    'Russian',
    'Chinese',
  ];
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      firstName: '',
      languages: [''],
    });

    this.myForm.get('languages').setValue(['Spanish']);
  }

  onSubmit() {}

  onDrop(event: CdkDragDrop<string[]>) {
    // if (event.previousContainer === event.previousContainer) {

    moveItemInArray(
      event.container.data,
      // this.myForm.get('languages').value,
      event.previousIndex,
      event.currentIndex
    );

    const sortingArr = event.container.data;
    const itemsArray = this.myForm.get('languages').value;
    const sortedItems = this.sortArr(itemsArray, sortingArr);

    this.myForm.get('languages').setValue(sortedItems);
    console.log(this.myForm.get('languages').value);
  }

  sortArr(itemsArray, sortingArr) {
    return itemsArray.sort(
      (a, b) => sortingArr.indexOf(a) - sortingArr.indexOf(b)
    );
  }

  onSelectionChange(e) {
    // e.stopPropagation;
    console.log(e.value);
  }

  addClick(e) {}
}
