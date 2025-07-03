const main=document.querySelector('#main')
const inputSection=document.querySelector('#inputSection')
const allButtons=document.querySelectorAll('button');
const output=document.querySelector('#output')
const equal=document.getElementById('equal')
// console.log(output.value);

// ,'1','2','3','4','5','6','7','8','9','0'
const symbol=['+','-','/','*','(',')','.'];
function evaluation(input)
{
    const p=output.childNodes[0];
    const ans=eval(input);
    // console.log(eval(input));
    if(input==undefined )
    {
        p.innerHTML='Give Valid Expression'
    }
    else
    {
        p.innerHTML=`${ans}`
    }
}

allButtons.forEach((element)=>{
    element.addEventListener('click',(event)=>{
        // console.log('in envent listener');
        if(element.value=='equals')
        {
            let input=inputSection.value;
            inputSection.value=""
            evaluation(input);
            return;
        }
        else if(element.value=='ClearAll')
        {
            inputSection.value="";
        }
        else if(element.value=="delete")
        {
            inputSection.value=inputSection.value.slice(0,-1);
        }
        else
        {
            inputSection.value+=`${element.value}`
        }
        event.target.blur();

    })
})


document.addEventListener('keydown',(event)=>{
    // console.log(event.key);
    let input;
    //event hi prevent hote hai 
    // input bhi value le lega and and ye upar vala function bhi isi liye input ko prevent kiya
    inputSection.addEventListener('keydown',(e)=>{
        e.preventDefault()
    })
    if(event.key=='Enter')
    {
        input=inputSection.value;
        inputSection.value="";
        // console.log(typeof(input));
        evaluation(input);
    }
    else if( event.key=='Backspace')
    {
        if(!inputSection.value.length==0)
        {
            inputSection.value=inputSection.value.slice(0,-1);
        }
    }
    else if(event.key=='Delete')
    {
        if(!inputSection.value.length==0)
        { inputSection.value=''
        }

    }
    else if(!isNaN(event.key) || symbol.includes(event.key))
    {
        inputSection.value+=`${event.key}` 
    }

 
})



