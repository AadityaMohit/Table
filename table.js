function table()
{
    let x=parseFloat(document.getElementById('t').value)
    var result="";
    if(!x)
    {
        alert("fill it first you fool 😂😂")
    }
    else{
            for(let i=1;i<=10;i++)
    {
       let v=x*i
       result= result +x+ " X" +i +" ="+v+"\n"
       
    }
    document.getElementById('res').innerText=result
    document.getElementById('res').style.backgroundColor='black'
    document.getElementById('res').style.color='white'
  
    }

}
function table1()
{
    let x=parseFloat(document.getElementById('t1').value)
    var result="";
    if(!x)
    {
        alert("fill it first you fool 😂😂")
    }
    else
    {
for(let i=1;i<=10;i++)
    {
       let v=x*i
       result= result +x+ " X" +i +" ="+v+"\n"
       
    }
    document.getElementById('res1').innerText=result

    }
    
    
}