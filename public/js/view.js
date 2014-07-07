/**
 The roseView is responsible for updating all of the HTML
 It is called by the roseApp only and the only thing it calls is jQuery
**/

var roseView = (function($){
    
    function refreshView(myData){

        updateTitle(myData.user);
        refreshTable(myData.items);
        console.log(myData.items);
    }
    
    
    // updates the title with the user's name
    function updateTitle(user){
        var newTitle = user + "'s Gallery";
        $("#title").html(newTitle);
    }
    
    
    
    // redraw the table using the current model
    function refreshTable(myItems){  
                var rows = "";
                var len = myItems.length;
                console.log("length = "+len);
                for(var n=0; n<len; n++){ 
                    var item = myItems[n];
                    rows = rows + itemToRow(item);
                }

                var itemTableBody = $("#itemTableBody").html(rows);

    }

    // convert an item into an HTML tr element
    function itemToRow(item){
        var row = 
        "<tr><td>"+item.title+ " " +
        "</td><td>"+ 
            item.artist+ " " +
        "</td><td>"+
            item.period+ " " +
        "</td></tr>";
        return row;
    } 
    

    
    
    roseView={
        refreshView: refreshView,
        refreshView: refreshView,
        itemToRow: itemToRow
    };
    
    return(roseView);
    
}(jQuery));