var div=document.createElement("div");
div.innerHTML=`
<h1>Postal Branches</h1>
<h4>Enter your City name : </h4>
<input type="text" id="txt">
<button type="button" onclick="getData()">Search</button>
<div id="tracking"></div>
`;
div.style.textAlign="center";
document.body.append(div);

async function getData(){
    let cc=document.getElementById("txt").value;
    const response=await fetch(`https://api.postalpincode.in/postoffice/${cc}`);
    let result=await response.json();
    console.log(result);

    let index=result.length-1;
    var output=result[index].Message;
    console.log(output);
    document.getElementById("tracking").innerText=output;

}
