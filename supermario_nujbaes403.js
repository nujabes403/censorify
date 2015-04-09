/**
 * Created by KIM on 2015-03-11.
 */
var mario = function(){
    var spaces = ['ground','air'];
    var conditions = ['small','big','fire'];
    var currentConditionNum = 0;
    var marioCondition = conditions[currentConditionNum];
    var marioSpace = spaces[0];
    return {
        fire:function(){
            if(marioCondition === 'fire'){
                console.log("FIRE!");
                return;
            } else{
                return;
            }
        },
        jump:function(){
            if(marioSpace === 'ground'){
            console.log("Jump!");
            marioSpace = spaces[1];
            setTimeout(function(){
                console.log("Land.");
                marioSpace = spaces[0];
            },1000);
            } else{
                console.log("Already flying.");
            }
        },
        eat:function(){
            if(currentConditionNum===2){
                console.log("Mario's condition is : " + marioCondition);
                return;
            }
            currentConditionNum++;
            marioCondition = conditions[currentConditionNum];
            console.log("Mario's condition is : " + marioCondition);
        }

    };
};

var mario_nujabes = mario();
mario_nujabes.fire();
mario_nujabes.eat();
mario_nujabes.eat();
mario_nujabes.eat();
mario_nujabes.jump();
mario_nujabes.fire();
