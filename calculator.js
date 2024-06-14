
function buttonclick(val){
   document.getElementById("screen").value=document.getElementById("screen").value+val

}

function clearAc(){
    document.getElementById('screen').value="";
}

function equalTo(){
    var text=document.getElementById('screen').value
    var result=eval(text)
    document.getElementById('screen').value=result;  
    
}
