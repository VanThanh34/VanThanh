for (let i = 1; i <=5 ; i++) {
    for (let j = 1; j <=5 ; j++) {
        if (i==1||j==1||i==5||j==5){
            document.write("*");
        }else {
          document.write("&ensp;")
        }
    }
    document.write("<br>");
}
