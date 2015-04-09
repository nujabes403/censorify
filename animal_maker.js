/**
 * Created by KIM on 2015-03-11.
 */
function AnimalMaker(name){
    return {
        speak: function(){
            console.log("my name is ", name);
        }
    };
};

var animalNames = ['Sheep','Liger','Big Bird'];

var farm = [];

for(var i = 0 ; i < animalNames.length ; i++){
    farm.push(AnimalMaker(animalNames[i]));
}

farm[0].speak();
farm[1].speak();
farm[2].speak();