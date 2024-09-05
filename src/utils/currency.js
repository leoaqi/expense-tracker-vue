export function currency(value){
    if(!Number.isFinite(value)){
        return "Rp 0";
    }
    return "Rp " + value.toLocaleString('id-ID');
}