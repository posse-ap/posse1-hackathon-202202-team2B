const answer = "sample1";

document.getElementById("check_correct").style.display = "none";
document.getElementById("check_incorrect").style.display = "none";

function judgeAnswer(){
  
  document.getElementById("check_correct").style.display = "none";
  document.getElementById("check_incorrect").style.display = "none";

  if(document.getElementById("input_answer").value == answer){
      document.getElementById("check_correct").style.display = "block";
  }else{
      document.getElementById("check_incorrect").style.display = "block";
  }
}