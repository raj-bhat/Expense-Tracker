
//Get  elements

const elem = document.getElementById('InputField');
const desc=document.querySelector('#descExpense');
const card=document.getElementById('cardItem');
const text=document.getElementById('totalAmount');
const bttn = document.getElementById('btn');

//Intializing array to get values from Object created after getting both values of amount and desc
const listExpense=[];

let totalSum=0;

//listening to button click  and adding vales

let clickEvent=bttn.addEventListener('click', function(){
    
    let value=elem.value;
    let descValue=desc.value;
    totalSum=totalSum+parseInt(value,10);
    //intializing object, so that added values can  be put into.
    let expenseObj={
        'amount':value,
        'description':descValue
    };
    
    //pushing these objects to array.
    listExpense.push(expenseObj);

    //making input field empty once we add value after every iteration.

     elem.value="";
    desc.value="";

    //intializing a variable so that we can have template literals added to totoal text

    totaltext=`u spent RS ${totalSum} in total`;
    text.textContent=totaltext;

     
     // here we are adding every object values to html, by taking anvariable with empty value and concating to HML element using `
    //all those as made as function and itscalled here.
    showcard();
});
    function showcard(){
    
    let html="";
    //iterating through array and adding to HTML card element
    listExpense.forEach((item, index)=>{
        
      html=html+` <div id="cardParent"><div> ${index +1} expense</div> 
      <div> ${item.amount}</div>
      
    <div>${item.description}</div><button id='${index}' onclick="deleteExpense(this.id)">Delete</button><br> </div>`} );
    //In above line  used onclick event to capture delete button , and index of for each is used.
   // adding value to card reference element. 
    card.innerHTML=html;   
    
}


//function to delete the added Expense:

function deleteExpense(index){
// to update totalsum since user is delting the added expense.
 totalSum=totalSum-listExpense[index].amount;
 totaltext=`u spent RS ${totalSum} in total`;
    text.textContent=totaltext;
//deleting item from array and then showing again the array with remaining values.
    listExpense.splice(index,1);
    if(listExpense.length!=0){ 
    showcard();
    }
    else{card.innerHTML=`Nothing to Show , use Add option to Add expense`};
    }






