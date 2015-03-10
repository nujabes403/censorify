/**
 * Created by KIM on 2015-03-08.
 */

var storyWriter = function(){
    var story = '';
    return {
        addWords:function(words){
            story += " " + words;
            return story;
        },

        erase:function(){
            story = '';
            return story + "erased!";
        }

    };
};

var farmLoveStory = storyWriter();

console.log(farmLoveStory.addWords('There was once a lonely cow.'));
console.log(farmLoveStory.addWords('It saw a friendly face.'));
console.log(farmLoveStory.erase());