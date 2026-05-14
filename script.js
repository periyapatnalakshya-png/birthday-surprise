function checkPin(){

  const pin=document.getElementById("pinInput").value;

  if(pin==="8055"){
    document.getElementById("page1").classList.add("hidden");
    document.getElementById("page2").classList.remove("hidden");
  }

  else{
    alert("Wrong PIN 💔");
  }

}

function openLetter(){

  document.getElementById("page2").classList.add("hidden");

  document.getElementById("page3").classList.remove("hidden");

}
