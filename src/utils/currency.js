export function currency(value){
    if(!Number.isFinite(value)){
        return "Rp 0";
    }else if(value < 0){
        return "-Rp " + Math.abs(value).toLocaleString('id-ID');
    }
    return "Rp " + value.toLocaleString('id-ID');
}