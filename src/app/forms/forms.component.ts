import { Component, OnInit } from '@angular/core';
import { MY_FORM_MODEL } from '../models/anrede';
import { DynamicFormModel, DynamicFormService } from '@ng-dynamic-forms/core';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  formModel: DynamicFormModel = MY_FORM_MODEL;
  formGroup: FormGroup;

  constructor(private formService: DynamicFormService) {}

  ngOnInit() {
    this.formGroup = this.formService.createFormGroup(this.formModel);
}

}
