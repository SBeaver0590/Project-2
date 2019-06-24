/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
/***Hello and welcome to Simone's Projecct Two. Before you jump into my code I want to
  say thank you for your time and patience in reading my code, as I am new to developing. 
  Please feel free to leave me comments on what I can improve on. I'm going for a grade
  of exceeds expectations.
 ***/
/***Here I created two global variables the identify students listed as well as how many 
 * per page.
 ***/
const studentList = document.querySelectorAll('li.student-item');
const itemsPerPage = 10;
/***I then created a function which shows the ten items to be diplayed
  per indidvidual page. The function also states that if the items aren't 
  present do nothing show nothing. I then logged it to the console.
 ***/
function showPage(list, pageNumber) {
   const startIndex = (pageNumber * itemsPerPage) - itemsPerPage;
   const endIndex = pageNumber * itemsPerPage;
   for (var i = 0; i<studentList.length; i++) {
      if(i >= startIndex && i < endIndex){
         // show the item
         studentList[i].style.display ='block';
      }else{
         // hide the item
         studentList[i].style.display ='none';
      }   
   } 

}
console.log(showPage(studentList, 1));
/***This function takes the length of the student list and divides it by
 the amount of items per page.
 ***/
function getNumberOfPages() {
   return Math.ceil(studentList.length/itemsPerPage);
}
/***Here is where I appended my page links that connect to the div tag of 
  student-items. the page should display 10 items on each page until you get 
  to the very last page which has 4.  
 ***/
const appendPageLinks = (studentList) => {
   let div = document.createElement('div');
   let ul = document.createElement('ul');

   let page = document.querySelector('.page');
   div.setAttribute('class', 'pagination');
   page.appendChild(div);
   div.appendChild(ul);
   
  
   
   for (let i = 0; i < getNumberOfPages(); i += 1) {
      let li = document.createElement('li');
      let a = document.createElement('a');
      li.appendChild(a);
      ul.appendChild(li);
      a.textContent = i + 1;
      
      /*** studentList[i].addEventListener('click', (event)=> {
         event.target.textContent= event.target.textContent.toUpperCase();
      });
      studentList[i].addEventListener('click', (event) => {
         event.target.textContent= event.target.textContent.toLowerCase();
         ***/
      a.addEventListener('click', e => {
         let link = document.querySelector('.pagination a.active');  
         link.className ='';
         e.target.className = 'active';
         showPage(studentList, e.target.textContent[0]);
      });
   }
   

}
/*** Here I created an appendPageLink function to add, generate, and append the 
  pages ability to function.
 ***/
showPage(studentList,1);
appendPageLinks();

/***Here is where the functions were called. */





// Remember to delete the comments that came with this file, and replace them with your own code comments.