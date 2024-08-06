import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-food-template',
  templateUrl: './food-template.component.html',
  styleUrls: ['./food-template.component.scss']
})
export class FoodTemplateComponent {
 @Output() closeSiderbar = new EventEmitter<boolean>();
 @Input() isEditMember:any;
 @Input() selectedMemberDetails:any;

    
  productForm:any=FormGroup
  constructor(private fb:FormBuilder){
    this.productForm=this.fb.group({
      productName:['',Validators.required],
      productPrice:['',Validators.required]
      
    })
  }
  submitted=false
  get formOrder(){
      return this.productForm.controls;
  }
  saveData(){
    this.submitted=true
    console.log(this.productForm.value);
  }
  clearData(){

  }
  // closeSiderbar(){
  //   this.closeSiderbar.emit(true);
  // }
  
}
