$(document).ready(function()
{
 
  var a = 0;
         $("#add").click(function()
          { 
         var rows = " ";
         var firstname = document.getElementById("inputName4").value;
         var lastname= document.getElementById("inputLName4").value;
         var email= document.getElementById("inputEmail").value;
         var password= document.getElementById("inputPassword").value;
         var Address1 = document.getElementById("inputAddress1").value;
         var Address2= document.getElementById("inputAddress2").value;
         var city = document.getElementById("inputCity").value;
         var state = document.getElementById("inputState").value;
        
         
           rows +=' <tr><td>'+firstname+'</td>';
           rows +=' <td>'+lastname+'</td>';
           rows +=' <td>'+email+'</td>';
           rows +=' <td>'+password+'</td>';
           rows +=' <td>'+Address1+'</td>';
           rows +=' <td>'+Address2+'</td>';
           rows +=' <td>'+city+'</td>';
           rows +=' <td>'+state+'</td>';
          
           rows +='<td><button class="edit-btn">'+"edit"+"</button></td>";
           rows +='<td><button class="remove-btn">'+"remove"+"</button></td></tr>";
        
           
               $('#mytable').append(rows);
               document.getElementById("inputName4").value=" " ;
               document.getElementById("inputLName4").value=" ";
               document.getElementById("inputEmail").value=" ";
               document.getElementById("inputPassword").value=" ";
               document.getElementById("inputAddress1").value=" ";
               document.getElementById("inputAddress2").value=" ";
               document.getElementById("inputCity").value=" ";
               document.getElementById("inputState").value=" ";
              

               
           });
          
             
           $("#mytable").on('click', '.remove-btn', function () {
            $(this).closest('tr').remove();
           });
          
           $("#mytable").on('click', '.edit-btn', function () {
          
              var currentRow=$(this).closest("tr"); 
              
              var col1 = currentRow.find("td:eq(0)").text(); 
              var col2 = currentRow.find("td:eq(1)").text(); 
              var col3 = currentRow.find("td:eq(2)").text(); 
              var col4 = currentRow.find("td:eq(3)").text(); 
              var col5 = currentRow.find("td:eq(4)").text(); 
              var col6 = currentRow.find("td:eq(5)").text(); 
              var col7 = currentRow.find("td:eq(6)").text(); 
              var col8 = currentRow.find("td:eq(7)").text(); 
           
              $("#inputName4").val(col1);
              $("#inputLName4").val(col2);
              $("#inputEmail").val(col3);
              $("#inputPassword").val(col4);
              $("#inputAddress1").val(col5);
              $("#inputAddress2").val(col6);
              $("#inputCity").val(col7);
              $("#inputstate").val(col8);
              

            });
              

         });

       
            
       
       