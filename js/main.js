var ToggleCircle=document.getElementById('ToggleCircle');
var SwitchBackground=document.getElementById('switch-root');
var ToggleContainer=document.getElementById('Toggle-Switch');
var toggleSwitchValue='left';
function  toggleSwitch()
{
    if(toggleSwitchValue=='left')
    {   
        // Dark Mode
        setTimeout(() => {
            ToggleCircle.style.backgroundColor='white';
            ToggleCircle.style.border='20px solid rgb(211, 211, 211)';
            ToggleContainer.style.backgroundColor='rgb(28, 28, 28)';
            ToggleContainer.style.borderColor='black';
            SwitchBackground.style.backgroundColor='rgb(28, 28, 28)';
          }, 0)


        ToggleCircle.classList.add('right');
        ToggleCircle.classList.remove('left');
        toggleSwitchValue='right';
    }
    else{
        //Light Mode
        setTimeout(()=>{
            ToggleCircle.style.backgroundColor='rgb(255, 217, 0)';
            ToggleCircle.style.border='20px solid rgb(255, 197, 7)';
            ToggleContainer.style.backgroundColor='skyblue';
            ToggleContainer.style.borderColor='rgb(89, 136, 155)';
            SwitchBackground.style.backgroundColor='white';    
        },0);
        

        toggleSwitchValue='left';
        ToggleCircle.classList.remove('right');
        ToggleCircle.classList.add('left');
    }    

}