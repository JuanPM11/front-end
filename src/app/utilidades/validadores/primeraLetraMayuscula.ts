import { AbstractControl, ValidatorFn } from "@angular/forms";

export function primeraLetraMayuscula(): ValidatorFn{
    return (control : AbstractControl) => {
        const VALOR = <string>control.value;
        if(!VALOR) return;
        if(VALOR.length === 0) return;

        const PRIMERALETRA = VALOR[0];
        if(PRIMERALETRA !== PRIMERALETRA.toUpperCase()){
            return {
                primeraLetraMayuscula: {
                    mensaje: 'La primera letra debe ser mayúscula'
                }
            };
        } 
        return;
    }    
}