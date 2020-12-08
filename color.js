var Link = {
    setColor:function(color){
    /**querySelector과 달리 배열로 받아야 함 **/
    // var alist = document.querySelectorAll('a');
    //           var i = 0;
    //           while(i < alist.length){
    //             alist[i].style.color = color;
    //             i = i + 1; }
    //jquery $
    $('a').css('color',color);
    }
  }
  var Body = {
    setColor:function(color){
    // document.querySelector('body').style.color = color;
    $('body').css('color',color);
  }, // property와 property 구분은 콤마(,)
    setBackgroundColor(color){
        $('body').css('backgroundColor',color);
    //document.querySelector('body').style.backgroundColor = color;
  } 
}
  function LightDarkHandler(self){
    var target = document.querySelector('body');
      if(self.value === 'Dark')
      {
        Body.setBackgroundColor('black');
        Body.setColor('white');
        Link.setColor('powderblue');
        self.value = 'Light';
      } else {
        Body.setBackgroundColor('white');
        Body.setColor('black');
        Link.setColor('rgb(57, 78, 172)');
        self.value = 'Dark';
        }
  }