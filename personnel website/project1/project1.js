//Function to slide dynamic divisions
function slide(x){
           
            var picture = document.getElementById( x.id ).style;
            var pictureLeft = parseInt( picture.left );
            
            if ( parseInt ( picture.left) < 50 ) {
                    pictureLeft+=1;
                    picture.left = pictureLeft + "px";
                    setTimeout(function(){slide(x);}, 10);
           }
                       
    }
    

 /*This creates all the dynamic divsions on click and will check first for any last chlds of parent body
 *Also deletes the nodes when any click event changes.
 *Data is coming from data.js file
 *I have also provided an extra dataset2.js file which can also be used by this function
 */
function showOption( which )
{
   // var data;
    var icDiv= document.getElementById('innerContainer');
    myBody = document.getElementsByTagName ( 'body' )[0];
    if( which == 'initial')
    {
       var data = phones[which];   
    }
        
    else
    {
       var data = phones[which.value];
     // alert(which.parentNode.parentNode.lastChild.id);
    // alert(which.parentNode.id);
      if(which.parentNode.parentNode.lastChild.id == which.parentNode.id)
      {
       
     
        
        
       
      }else{
        
        
         while(which.parentNode.parentNode.lastChild.id != which.parentNode.id)
        {
                var lc = which.parentNode.parentNode.lastChild;
                
                which.parentNode.parentNode.removeChild(lc);
               
       
        }                            
        
      }
    }
    
    if( data[0]== 'null')
    //if(((data==undefined) && (which.value !='null')) || (data[0] != 'null'))
    {
        var division = document.createElement('div');
        division.setAttribute('class','dynamicDiv');
        //new line
        division.setAttribute('style','position:relative;left:0px');
        division.setAttribute('id',data[3]);
        var question = document.createTextNode( data[1]);
        var createDropDown1 = document.createElement('select');
        //console.log('select');
        //line div
        var line_div = document.createElement('div');
        line_div.setAttribute('id','line1');
        var line = document.createElement('br');
        line_div.appendChild(line);
        line.setAttribute('id','line1');
        var options = document.createElement('option');
        console.log('option');
        
         options.setAttribute('id','selectone');
         options.setAttribute('value','null');
         options.appendChild(document.createTextNode('Select'));
         createDropDown1.appendChild(options);
        for(var i=3; i<data.length; i++)
        {
            //console.log('infor');
            var options = document.createElement('option');
            optionValue = document.createTextNode(data[i]);
            options.appendChild(optionValue);
            createDropDown1.appendChild(options);
            //createDropDown1.setAttribute('id',data[i]);
            //alert(data[i]);
        }
    
        options.appendChild(optionValue);
        createDropDown1.appendChild(options);
    
        //createDropDown1.setAttribute('id',data[i]);
        
        /* calling iteratively to create dynamic divz*/
        
        createDropDown1.onchange = function(){showOption(this);};
       // alert("after functioncall");
        division.appendChild( question);
    
        division.appendChild(createDropDown1);
    
        //var icDiv= document.getElementById('innerContainer');
        icDiv.appendChild(division);
        
            //console.log('slide called');
           {slide(document.getElementById(data[3]));};
        //icDiv.appendChild(line_div);
        
    }//null is first element of array 1 2 3
    /* Following will generate the last node as image  which corresponds to the selection*/
    else if(((data==undefined) && (which.value !='null')) || (data[0] != 'null'))
    {
        //alert('hi');
        var imageDiv = document.createElement('div');
        var limit = (data.length - 5);
        for( var i =0;i<=limit ;i++)
        {
            var imageShow = document.createElement('img');
            imageShow.setAttribute('src',data[i]);
            imageShow.setAttribute('width',"300");
            imageShow.setAttribute('height',"300");
            imageDiv.appendChild(imageShow);
            
            //calling form function when its last node
            {makeForm();};
            
        }
        var icDiv= document.getElementById('innerContainer');
        icDiv.appendChild(imageDiv);
        
    }
   
    


}//function show option fifnishes
/*This function will be called when image div is created.It will build a form to collect data from user
*It also displays all data that was been selected by user 
*divisions created are named as dynamicDiv
*/
function makeForm()
{
    //creating email form
    var formEle = document.createElement('form');
    formEle.setAttribute('id','contactForm');
    formEle.setAttribute('name','form1');
    formEle.setAttribute('action','cellPhone.html');
    //formEle.setAttribute('method','get');
    //formEle.setAttribute( 'onsubmit','return validateForm();');
    formEle.onsubmit = function(){return validateForm();}
    var TextEle = document.createTextNode('Please fill Form: ');
    formEle.appendChild(TextEle);
    formEle.appendChild(document.createElement('br'));
    
    //text box created for name
    var textBoxName = document.createElement('input');
    textBoxName.setAttribute('type','text');
    textBoxName.setAttribute('id','uname');
    textBoxName.setAttribute('name','uname');
    
    var textEle = document.createTextNode('Name: ');
    formEle.appendChild(textEle);
    formEle.appendChild(textBoxName);
    formEle.appendChild(document.createElement('br'));
    
    //creating text box for email 
    var textBoxEmail = document.createElement('input');
    textBoxEmail.setAttribute('type','text');
    textBoxEmail.setAttribute('id','uemail');
    textBoxEmail.setAttribute('name','uemail');
    
    var textEle2 = document.createTextNode('Email: ');
    formEle.appendChild(textEle2);
    formEle.appendChild(textBoxEmail);
    formEle.appendChild(document.createElement('br'));
    
    //creating submit button
    var subEle = document.createElement('input');
    subEle.setAttribute('type','submit');
    subEle.setAttribute('name','submit');
    subEle.setAttribute('value','Submit Information');
    subEle.setAttribute('id','submit');
    
    //subEle.setAttribute('onsubmit', 'return validate()'); //creating anonymous function
    formEle.appendChild(document.createElement('br'));
    formEle.appendChild(subEle);
    
    var icDiv= document.getElementById('innerContainer');
    icDiv.appendChild(formEle);
    
    SetCookie('nm',document.getElementById('uname').value);
    SetCookie('mail',document.getElementById('uemail').value);
    setFormName(document.getElementById('uname').value);
    setFormEmail(document.getElementById('uemail').value);
    
     //Local Storage for modern browsers and use of cookies cookie for the non-modern browser for storing of name
    if(ie){
        
               if(GetCookie('nm')!=null)
               {
                    
                    document.getElementById('uname').value = GetCookie('nm');
               }
               //Local Storage for modern browsers and use of cookies cookie for the non-modern browser for storing of email
               if(GetCookie('mail')!=null)
               {
                    alert("in cookie mail");
                    document.getElementById('uemail').value = GetCookie('mail');
               }
                
        }
    
     var line_div2 = document.createElement('div');
     
     
        line_div2.setAttribute('id','line2');
        var line2 = document.createElement('br');
        line_div2.appendChild(line2);
   // line.setAttribute('id','line2form');
    //icDiv.appendChild(line_div2);
    
    
    
    ///////////////////////////////////////////////////
    //displays the selection done by user
  for(var i=0, j= document.getElementsByTagName('select').length;i<j;i++){
    //alert("in for");
    var selected_val =  document.getElementsByTagName('select')[i].value ;
    //alert(selected_val);
    icDiv.appendChild(document.createTextNode(selected_val));
    var br9 = document.createElement('br');
    icDiv.appendChild(br9);
    
  }
    
    //////////////////////////////////////////////////
    
}

//This function validates the form to check if the information in the fields is properly filled or not
function validateForm()
{
    //pattern to validate the name eneterd
    var nameCheck = /^[A-Za-z ]+$/;
    
    //pattern to validate the email
    var emailCheck = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;

   // alert('in validate');
    var error ="";
    var new_name = document.getElementById('uname').value;
    //alert(new_name);
    localStorage.name=new_name;
    var new_email = document.getElementById('uemail').value;
    if(new_name =="" || new_name=='null')
    {
         //alert('in name');
         error  = "Please enter name";
         alert(error);
          return false;
         //alert('error in name');
        
    }
    else if((new_email =="") || (emailCheck.test(new_email) !=true) )
    {
         error = "Please enter proper formated email";
         alert(error);
         return false;
    }
    else if((new_name != "" && nameCheck.test(new_name) != false) ||(new_email != "" && emailCheck.test(new_email) != false) )
    {
        
        /*SetCookie('name',new_name);
        SetCookie('email',new_email);
        localStorage.name=new_name;
        localStorage.email=new_email;*/
        alert("Information submission Done");
        SetCookie('nm',document.getElementById('uname').value);
        SetCookie('mail',document.getElementById('uemail').value);
        setFormName(document.getElementById('uname').value);
        setFormEmail(document.getElementById('uemail').value);
        return true;
    }
    
}

//Function sets the form name for person and populates when previous user returns back
function setFormName(name)
{
		
        if(window.localStorage)
        {
                if(name)
                {
                        //check if I sent a new name
                        window.localStorage.setItem('name',name);
                }
                if(localStorage.getItem('name'))
                {
                        document.getElementById('uname').value=localStorage.getItem('name');
                        
                }
        }
}

//Function to set email in local storage and populate in form when previous user returns back		
function setFormEmail(email)
{
        
        if(window.localStorage)
        {
                if(email)
                {
                        //check if sent a new email
                        window.localStorage.setItem('email',email);
                }
                if(localStorage.getItem('email'))
                {
                        document.getElementById('uemail').value=localStorage.getItem('email');
                                
                }
        }
}

