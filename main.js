var studentarray=[];
function submit(){
  var namestorage1=document.getElementById("SN_1").value;
  var namestorage2=document.getElementById("SN_2").value;
  var namestorage3=document.getElementById("SN_3").value;
  var namestorage4=document.getElementById("SN_4").value;
  studentarray.push(namestorage1);
  studentarray.push(namestorage2);
  studentarray.push(namestorage3);
  studentarray.push(namestorage4);
  document.getElementById("arrayname").innerHTML=studentarray;
  document.getElementById("buttonwierd").style.display="none";
  document.getElementById("SAA").style.display="inline-block";
  document.getElementById("SAD").style.display="inline-block";
}
function sortingA(){
    studentarray.sort();
    document.getElementById("arrayname").innerHTML=studentarray;
}
function sortingD(){
    studentarray.reverse();
    document.getElementById("arrayname").innerHTML=studentarray;
}
