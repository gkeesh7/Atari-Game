function Bat(){

    this.xloc=0;//location of bat
    this.long=5;//length of bat


    this.show = function (){
      fill(0,155,0);
      for(var i=0;i<this.long;i++){
        rect(this.xloc+i*scl,390,scl,scl);
      }
    }

    this.dir = function (val){
          this.xloc+=(val*scl);
          if(this.xloc<0){ //Hardcoding this because constrain was not working
            this.xloc=0;
          }
          if(this.xloc>350){//Hardcoding this because constrain was not working
            this.xloc=350;
          }
    }

}
