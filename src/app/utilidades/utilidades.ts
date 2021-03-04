import { FileDetector } from "protractor"

export function toBase64(FILE: File){
    return new Promise ((resolve, reject)=>{
        const READER = new FileReader();
        READER.readAsDataURL(FILE);
        READER.onload = () => resolve(READER.result);
        READER.onerror = (error) => reject(error);
    })
}

export function parsearErroresAPI(response: any): string[]{
    const RESULTADO: string[] = [];

        if(response.error){

            if(typeof response.error == 'string'){
                RESULTADO.push(response.error);
            }else{
                //ITERA CADA UNO DE LOS ERRORES QUE DEVUELVA EL API Y SE LO ASIGNA A CADA UNO DE LOS PROPIEDADES
                const MAPAERRORES = response.error.errors;
                const ENTRADAS = Object.entries(MAPAERRORES);
                ENTRADAS.forEach((arreglo: any[]) =>{
                    const CAMPO = arreglo[0];
                    arreglo[1].forEach(mensajeError => {
                        RESULTADO.push(`${CAMPO}: ${mensajeError}`);
                    });

                })
            }
        }

    return RESULTADO;
    }
    export function formatearFecha(date: Date){
        date = new Date(date);
        const FORMATO = new Intl.DateTimeFormat('en', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
        });

    const [
        {value: month},,
        {value: day},,
        {value: year}
    ]= FORMATO.formatToParts(date);

    return `${year}-${month}-${day}`;
    
}