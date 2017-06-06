function show_books() {

    var list = document.getElementsByClassName("book")[0];
    console.log(list);
    window.alert(list);

    var x = document.getElementsByClassName("book");
    for (var i = 0; i < x.length; i ++) {
    x[i].style.display = 'none';
    console.log(x[i]);
}
}	
