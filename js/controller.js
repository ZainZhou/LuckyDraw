/**
 * Created by Zain on 2017/5/6.
 */
function InWindow(obj,top){
    obj.animate({
        top:top+'px'
    },1000,function(){
        if(top == -114){
            obj.css('top',0);
            top = -38;
        }else {
            top -= 38;
        }
    });
    setTimeout(function(){
       InWindow(obj,top);
    },3000)
}
$(function(){
    var oBegin = $('.begin_btn');
    var oPlate = $('.DrawPlate');
    var Btn_flag = true;
    var oUl = $('.gift_list').find('ul');
    var _data = {
        success:true,
        msg:"抽奖成功",
        award:{
            level:"一等奖",
            prize:"蝴蝶来野门票",
            angle:60
        }
    };
    InWindow(oUl,0);
    oBegin.on('click',function(){
        if(!Btn_flag){
            return false;
        }
        //测试用
        //if(_data.success == true){
        //    oPlate.rotate({
        //        angle: 0,
        //        animateTo: 1440+_data.award.angle,
        //        duration: 5000,
        //        callback:function(){
        //            if(_data.award.level){
        //                alert("恭喜您获得"+_data.award.level+_data.award.prize);
        //            }else {
        //                alert(_data.award.prize);
        //            }
        //            Btn_flag = true;
        //        }
        //    })
        //}else {
        //    alert(_data.msg)
        //}

        //实际用
        Btn_flag = false;
        $.post(get_url,"",function(data){
            if(data.success == true){
                oPlate.rotate({
                    angle: 0,
                    animateTo: 1440+data.award.angle,
                    duration: 5000,
                    callback:function(){
                        if(data.award.level){
                            alert("恭喜您获得"+data.award.level+data.award.prize);
                        }else {
                            alert(data.award.prize);
                        }
                        Btn_flag = true;
                    }
                })
            }else {
                alert(data.msg)
            }
        });
   });
});