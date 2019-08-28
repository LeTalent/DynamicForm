import { Component, OnInit } from '@angular/core';
import { MY_FORM_MODEL } from "./models/anrede";
import { DynamicFormModel, DynamicFormService } from "@ng-dynamic-forms/core";
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  formModel: DynamicFormModel = MY_FORM_MODEL;
  formGroup: FormGroup;

  title = 'dynamic-forms';

  constructor(private formService: DynamicFormService) {}

  ngOnInit() {
      this.formGroup = this.formService.createFormGroup(this.formModel);
  }

}
