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
   
 /*** Here I created an appendPageLink function to add, generate, and append the 
  pages ability to function.
 ***/ 
   
   for (let i = 0; i < getNumberOfPages(); i += 1) {
      let li = document.createElement('li');
      let a = document.createElement('a');
      li.appendChild(a);
      ul.appendChild(li);
      a.textContent = i + 1;
     
      if (i === 0) {
         a.className = 'active';   // target the first a
      }

      a.addEventListener('click', (e) => { //listens for a click to highlight the page number.
         a = document.querySelectorAll(' .pagination a ');
         for(let v = 0; v < a.length; v+= 1) {
            a[v].className = '';
         }
         e.target.className = 'active';
         showPage(studentList, e.target.textContent);
      });
   }
   

}
/***Here is where the functions were called. */
showPage(studentList,1);
appendPageLinks();



