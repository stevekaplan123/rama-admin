/**
  The RoseList class has all the methods for downloading the model
  from the server, updating the model (and sending the updates to the server)
  and refreshing the model by pulling down the server info.

  
**/

function RoseList() {
    this.user = "Katherine";
    this.cutoff = 0;
    this.items = [];

};



// we use the locally cached model to lookup elements...
RoseList.prototype.getElement = function(id){
    var item;
    var i;
    for(i=0; i<this.items.length; i++){
        item = this.items[i];
        if(item.id == id){
            return(item);
        }
    }
};


RoseList.prototype.loadModel = function() {
    var myList = this;
    
    // send request to the server for the items in the list
    $.ajax({
        type: "GET",
        url: "/model/rose",
    }).done(function(items) {
        myList.items = items;
        items.map(function(x){x.id=x["_id"];});
        roseView.refreshView(myList);
        console.log(JSON.stringify(myList.items));

    });
};

RoseList.prototype.addElement = function(newItem){
    console.log("sending "+JSON.stringify(newItem));
    var myList = this;
    $.ajax({
        type: "POST",
        url: "/model/rose",
        data: JSON.stringify(newItem),
        contentType: "application/json; charset=utf-8",
        dataType: "json"
    }).done(function(items) {
        myList.loadModel();
    });
}

RoseList.prototype.updateElement = function(id,newItem){
    var myList = this;
    $.ajax({
        type: "PUT",
        url: "/model/rose/"+id,
        data: JSON.stringify(newItem),
        contentType: "application/json; charset=utf-8",
        dataType: "json"
    }).done(function(items) {
        myList.loadModel();
    });
}

RoseList.prototype.deleteElement = function(id){
    var myList = this;
    $.ajax({
        type: "DELETE",
        url: "/model/rose/"+id,
    }).done(function(items) {
        myList.loadModel();
    });

}
    