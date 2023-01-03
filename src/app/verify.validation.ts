import { AbstractControl } from "@angular/forms";

export function name(control:AbstractControl){

    if(control &&(control.value!=null || control.value !==undefined)){
        const regex=new RegExp('^[A-z]{8}');
    

    if(!regex.test(control.value)){
        return{
            isError:true
        };
    }
}
    return null;
}

export function password(control:AbstractControl){

    if(control &&(control.value!=null || control.value !==undefined)){
        const regex=new RegExp('^((?!.*[s])(?=.*[A-Z])(?=.*d).{8,16})');
    

    if(!regex.test(control.value)){
        return{
            isError:true
        };
    }
}
    return null;
}