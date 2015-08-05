/**
 * Created by kukumbing on 8/4/2015.
 */



module.exports = {
/*
    randomize: function(arr,range){
        if(range==0||range==1){
            return arr[0];
        } else
            return arr[Math.floor(Math.random() * range) + 1];

    },
*/

    customreplace: function(text,find,replacewhat,percent){

        var locate=[];
        var countoccurrence =0;
        var replaced = "";
        var temp = text.split(" ");

        var randomize = function(arr,range){
            if(range==0||range==1){
                return arr[0];
            } else
                return arr[Math.floor(Math.random() * range) + 1];

        };

        for(var i=0;i<temp.length;i++){
            if(temp[i]==find){
                countoccurrence++;

                locate[countoccurrence-1]=i;
                //temp[locate[count-1]]= replacewhat;
            }

            //replaced+=temp[i]+" ";
        }

        //var max = (countoccurrence*percent)/100;
        for(var i=0;i<(countoccurrence*percent)/100;i++){
            var j = randomize(locate,countoccurrence-1);
            temp[j]= replacewhat;
            //console.log(j);
        }

        for(var i=0;i<temp.length;i++){
            replaced+=temp[i]+" ";
        }
        return (replaced) ;


        //console.log(locate);

    }
}

