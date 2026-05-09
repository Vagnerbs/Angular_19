import { Component } from '@angular/core';
//Modulo necessario para calcular o resultado da soma dos numeros
//Preciamos dele para trabalhar com formularios e obter os valores dos inputs.
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-calculadora',
  imports: [FormsModule],//Não esquecer de importar o FormsModule para usar ngModel
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.scss'
})
export class CalculadoraComponent {

  numero1: number = 0;
  numero2: number = 0;
  resultado: number = 0;

  calcularResultado(){
    console.log('Calculando resultado...');
    console.log('Número 1:', this.numero1);
    console.log('Número 2:', this.numero2); 
    this.resultado = this.numero1 + this.numero2;
  }
}
