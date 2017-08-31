function Timer(){
    this.msecond = 0;
    this.second = 0;
    this.mTimer = null;
    this.Timer = null;
}
Timer.prototype = {
    constructor : Timer,
    setmTimer : function(){
        var _this = this;
        this.mTimer = setInterval(function(){
            _this.msecond += 1;
            if(_this.msecond == 100){
                _this.msecond = 0;
            }
        },10);
    },
    clearmTimer : function(){
        clearInterval(this.mTimer);
    },
    setTimer : function(){
        var _this = this;
        this.Timer = setInterval(function(){
            _this.second += 1;
            if(_this.second == 1000){
                _this.second = 999;
            }
        },1000)
    },
    clearTimer : function(){
        clearInterval(this.Timer);
    },
    getmSecond : function(){
        if(this.msecond >= 10){
            return this.msecond;
        }else{
            return '0'+this.msecond;
        }
    },
    getSecond : function(){
        if(this.second >= 10){
            return this.second;
        }else{
            return '0'+this.second;
        }
    }
};