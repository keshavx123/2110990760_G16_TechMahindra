function createCounter(){
    let count=0;
    return {
      increment:function(){
        count++;
        console.log(count);
      },
      decrement:function(){
        count--;
        console.log(count);
      },
      getCount:function(){
        return count;
      }
    }
  }
  
  const value=createCounter();
  value.increment();              
  value.increment();            
  value.decrement();              
  console.log(value.getCount());  