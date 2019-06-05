function search() {
    let arrayEL = ["hello" , "bye" , "thanks", "sorry"];
    let arrayVN = ["xin chào" , "tạm biệt" , "cảm ơn" , "xin lỗi"];
    let search = document.getElementById('search').value;
    for(let i = 0; i < arrayEL.length; i++){
        let n = arrayEL.indexOf(search);
        if(n !== -1){
            document.getElementById('result').innerHTML = arrayVN[n];
        }else{
            document.getElementById('result').innerHTML = "Not found";
        }
    }
}