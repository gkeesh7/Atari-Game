function Ball(){
    this.xloc=mybat.xloc+2*scl;
    this.yloc=380;
    this.xdir=1;
    this.ydir=-1;
    this.launched=false;

    this.show = function(){
      fill(155,0,0);
      rect(this.xloc,this.yloc,scl,scl);
    }

    this.update = function(){
      if(this.launched){
        this.xloc+=(this.xdir*scl);
        this.yloc+=(this.ydir*scl);
        if(this.xloc==0){
          this.xdir=1;
        }
        if(this.xloc==390){
          this.xdir=-1;
        }
        if(this.yloc==0){
          this.ydir=1;
        }
        if(this.yloc==390){
          this.ydir=-1;
        }
      }
      else{
        this.xloc=mybat.xloc+2*scl;
        this.yloc=380;
      }
    }

    this.collide = function(){
      //collison with bat
      if(this.launched){
        if(this.yloc==390){
          this.launched=false;
          return;
        }
        if((this.yloc==380) && (this.xloc>=mybat.xloc) && (this.xloc<=mybat.xloc+20)){
          this.ydir=-1;
          this.xdir=-1;
        }
        if((this.yloc==380) && (this.xloc>mybat.xloc+20) && (this.xloc<=mybat.xloc+50)){
          this.ydir=-1;
          this.xdir=1;
        }

        if(mygrid.isItem([this.xloc,this.yloc])!=-1){
          mygrid.grid.splice(mygrid.isItem([this.xloc,this.yloc]),1);
          this.xdir*=(-1);
          this.ydir*=(-1);
          return;
        }
        upneigh=[this.xloc,this.yloc-scl];
        leftneigh=[this.xloc-scl,this.yloc];
        rightneigh=[this.xloc+scl,this.yloc];
        downneigh=[this.xloc,this.yloc+scl];
        //here
        //console.log("All Neighbours!",upneigh,downneigh,leftneigh,rightneigh)

        if(mygrid.isItem(upneigh)!=-1){
          mygrid.grid.splice(mygrid.isItem(upneigh),1);
          this.ydir*=(-1);
          return;
        }

        if(mygrid.isItem(leftneigh)!=-1){
          mygrid.grid.splice(mygrid.isItem(leftneigh),1);
          this.xdir*=(-1);
          return;
        }

        if(mygrid.isItem(rightneigh)!=-1){
          mygrid.grid.splice(mygrid.isItem(rightneigh),1);
          this.xdir*=(-1);
          return;
        }

        if(mygrid.isItem(downneigh)!=-1){
          mygrid.grid.splice(mygrid.isItem(downneigh),1);
          this.ydir*=(-1);
          return;
        }

      }

    }

}
