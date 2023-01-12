import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {

  // contactForm!: FormGroup;
  
  // constructor(readonly fb: FormBuilder) {}

  // ngOnInit(): void {
  //   this.contactForm = this.initForm();
  // }
 
  // onSubmit(): void {
  //   console.log('Form ->');
  // }
  

  // initForm():FormGroup{
  //   return this.fb.group({
  //     name: ['', [Validators.required, Validators.minLength(10)]],
  //     email:['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
  //     comment: ['', [Validators.required]],
  //   });
  // }
   //Crear atributo de tipo FormBuilder
   constructor(private formBuilder : FormBuilder){ }

   // Estructura del formulario reactivo
   registroForm = this.formBuilder.group({
     nombres: ['', [Validators.required, Validators.minLength(10)]],
     email:['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
     comment: ['', [Validators.required]],
     });
 
     // Generar un metodo get para cada campo del formularior reactivo
     get nombres(){ return this.registroForm.get('nombres'); }
     get email(){ return this.registroForm.get('email'); }
     get comment(){ return this.registroForm.get('comment'); }
     
 
     // Generar el metodo onSubmit para registrar los datos del formulario en un Array
     datos = new Array;
 
     exitoso = false;
 
     onSubmit(){
       if(!this.registroForm.valid){
         alert('Alguna validación no se ha cumplido');
         return;
       }
       this.datos.push({
         'Nombres': this.registroForm.get('nombres')?.value,
         'Email': this.registroForm.get('email')?.value,
         'Comment': this.registroForm.get('comment')?.value,
       });
       console.log(this.datos);
       this.exitoso = true;
     }
}
