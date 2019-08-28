import { DynamicFormModel, DynamicCheckboxModel, DynamicInputModel, DynamicRadioGroupModel, RequiredMatcher} from '@ng-dynamic-forms/core';


export const MY_FORM_MODEL: DynamicFormModel = [

    new DynamicInputModel({

        id: 'sampleInput',
        label: ' First Name ',
        placeholder: 'first name',
        additional: {
            appearance: 'outline'
        }

    }),
    new DynamicInputModel({

      id: 'sampleInput1',
      label: ' Last Name ',
      placeholder: 'last name',
      additional: {
          appearance: 'outline'
      }

  }),
    new DynamicRadioGroupModel<string>({

        id: 'sampleRadioGroup',
        label: 'Sample Radio Group',
        options: [
            {
                label: 'Option 1',
                value: 'option-1',
            },
            {
                label: 'Option 2',
                value: 'option-2'
            },
            {
                label: 'Option 3',
                value: 'option-3'
            }
        ],
        value: ''
    }),

    new DynamicCheckboxModel({

        id: 'sampleCheckbox',
        label: 'I do agree'
    })
];
