function Grid(){

    this.grid=[];

    this.prepare = function(){
        var begx=200;
        var endx=200;
        var begy=50;
        for(var i=begy;i<begy+10*scl;i+=scl){
            for(var j=begx;j<=endx;j+=scl){
              this.grid.push([j,i]);
            }
            begx-=2*scl;
            endx+=2*scl;
        }
        begx+=2*scl;
        endx-=2*scl;
        begy+=(10*scl);
        for(var i=begy;i<begy+9*scl;i+=scl){
            begx+=2*scl;
            endx-=2*scl;
            for(var j=begx;j<=endx;j+=scl){
              this.grid.push([j,i]);
            }
        }
    }

    this.show = function (){
      fill(0,0,155);
       for(var i=0;i<this.grid.length;i++){
         rect(this.grid[i][0],this.grid[i][1],scl,scl);
       }
       if(this.grid.length==0){
         textSize(50);
         fill(155,155,0);
         text("GAME OVER",50,100);
       }
    }

    this.isItem = function(item) {
    for (var i = 0; i < this.grid.length; i++) {
        // This if statement depends on the format of your array
        if (this.grid[i][0] == item[0] && this.grid[i][1] == item[1]) {
            return i;   // Found it
        }
    }
    return -1;   // Not found
  }

}
