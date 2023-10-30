import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-formulario-reactivo',
  templateUrl: './formulario-reactivo.component.html',
  styleUrls: ['./formulario-reactivo.component.css']
})
export class FormularioReactivoComponent {

get name()
{
  return this.formUser.get('name') as FormControl;
}

get email()
{
  return this.formUser.get('email') as FormControl;
}

formUser = new FormGroup({
  'name': new FormControl('', Validators.required),
'email': new FormControl('', [Validators.required, Validators.email])
});

procesar()
{
  console.log(this.formUser.value);
}

/* name = new FormControl('', Validators.required);
email = new FormControl('', [Validators.required, Validators.email]); */
}
