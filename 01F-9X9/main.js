


$(function(){
    let tpl ='';
    let arr1 = numberRange(1,3); // 左邊的
    let arr2 = numberRange(4,9); // 右邊的
    
    function numberRange(start,end){
      var arr=[];
      for(var i = start;i<end+1;i++){
        arr.push(i);
      };
      return arr;
    }

    for(var i=2;i<10;i++){
        let dom =`
          <div id="NightBox"  class="col-4 box" >
              <div class="card">
                  <div class="card-body clearfix">
                    <div class="row">
                       <div class="col-6">
                            <h4 class="card-title">${i}</h4> 
                             <div class="card-list">
                               ${arr1.map(num =>
                               `<p class="card-text" >${i}X${num}= ${i*num}</p>`).join('')}
                                
                             </div>        

                       </div>
                       <div class="col-6">
                          <div class="card-list right">
                               ${arr2.map(num =>
                               `<p class="card-text" >${i}X${num}= ${i*num}</p>`).join('')}
                                
                          </div>
                      </div>
                    </div>


                  </div>
              </div>
          </div>

  `;
       tpl=tpl+dom;
    };
    $('#NightBlock').append(tpl);

})


