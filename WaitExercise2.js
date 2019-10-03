var isItYeet=false;
const YeetYesOrNo=new Promise(
    function (resolve, reject){
        if (isItYeet){
            var yote={
                distance: 'far',
                speed:  'max'
            };
            resolve(yote);
        } else{
            var reason= new Error ('Not much of a yeet');
            reject(reason);
        }
    }
);

var exports=module.exports={
    Yeetus: function(){
        console.log("YEET");
        return ("YEET");   
        }
    };    