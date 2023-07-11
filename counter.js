function Counter(){
    return {
      count : 0,
      increment(){
        if(this.count<=9){

            this.count++;
        }
      },
      decrement(){
        if(this.count>0){

            this.count--;
        }
      }
    }
}

