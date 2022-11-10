function Product(){
    var productNum;
    productNum = document.getElementById("product").value;
    
    

    if(productNum > 0 && productNum <=5)  //--Number of project not more than 5
    {
    
        document.getElementById("workArea").innerHTML = "";

            //-- Creating table and table header 
            document.getElementById("workArea").innerHTML += 
            "<br><br>" +
            "<table class='table table-dark'>" +
            "<tr>" +
            "<th> Product Number </th>" +
            "<th>" + "Product Name" + "</th>" + 
            "<th>" + "Product Quantity" + "</th>" + 
            "<th>" + "Product Price" + "</th>" +  
            "<th>" + "Button" + "</th>" +  
            "<th>" + "Product Total Price" + "</th>" +  
            "</tr>";
        


        for (i=1; i<=productNum; i++)
        {

            //-- creating table row for table data
            document.getElementById("workArea").innerHTML += 
            "<tr>" +
            
                "<td>" + 
                    "<input type='text' value='" + i + "'/>" + 
                "</td>";


                //-- Check product name
                document.getElementById("workArea").innerHTML += 
                "<td>" +
                     "<input placeholder='Product Name...' id='productname'" + i + " type = 'text'>" +
                "</td>";   


                //-- Check product quantity
                document.getElementById("workArea").innerHTML += 
                "<td>" +
                "<input placeholder='Product Quantity...' id='productquan" + i + "' type = 'text'>" +
                "</td>";   
    

                //-- Check product price
                document.getElementById("workArea").innerHTML +=  
                "<td>" +
                "<input placeholder='Product price...' id='productprice"+ i + "' type = 'text'>";
                "</td>";



                //-- particular product total button 
                document.getElementById("workArea").innerHTML += 
                "<td>" +
                "<input type = 'button' onclick='productTotal"+ i +"()' value='Calculate'> ";
                "</td>";

                
                //-- particular product total 
                document.getElementById("workArea").innerHTML += 
                "<td style=' width:5%'>" +
                "<input id='productpricetotal" + i + "'  type = 'text'>";
                "</td>"
                "</tr>"; 
                    
                document.getElementById("workArea").innerHTML += "<br><br>";
        }    

        
        document.getElementById("workArea").innerHTML += "</table>";

            //-- Create a button at output area out of loop
            document.getElementById("workArea").innerHTML +=
            "<br><input type='button' value='Total' onclick='productTotal()'>";
            
            document.getElementById("workArea").innerHTML +=         
            "&nbsp;&nbsp;<input id='Total' type='text'/>";
 
    }    
} 





//-- creating function to find particular product price
function productTotal1(){
    var qty,Total,price;
    Total = 0
    qty = parseInt(document.getElementById("productquan1").value);
    price = parseInt(document.getElementById("productprice1").value);
    Total = qty*price;
    document.getElementById("productpricetotal1").value = Total;
}

function productTotal2(){
    var qty,Total,price;
    Total = 0
    qty = parseInt(document.getElementById("productquan2").value);
    price = parseInt(document.getElementById("productprice2").value);
    Total = qty*price;
    document.getElementById("productpricetotal2").value = Total;
}

function productTotal3(){
    var qty,Total,price;
    Total = 0
    qty = parseInt(document.getElementById("productquan3").value);
    price = parseInt(document.getElementById("productprice3").value);
    Total = qty*price;
    document.getElementById("productpricetotal3").value = Total;
}


function productTotal4(){
    var qty,Total,price;
    Total = 0
    qty = parseInt(document.getElementById("productquan4").value);
    price = parseInt(document.getElementById("productprice4").value);
    Total = qty*price;
    document.getElementById("productpricetotal4").value = Total;
}



function productTotal5(){
    var qty,Total,price;
    Total = 0
    qty = parseInt(document.getElementById("productquan5").value);
    price = parseInt(document.getElementById("productprice5").value);
    Total = qty*price;
    document.getElementById("productpricetotal5").value = Total;
}



//-- creating function find all product total
function productTotal(){
    var Total;
    Total = 0
    var productNum;
    productNum = document.getElementById("product").value;

    for(i=1; i<=productNum; i++){
        Total = Total + parseInt(document.getElementById("productpricetotal"+i).value);
    }
   
    document.getElementById("Total").value = Total;
}
