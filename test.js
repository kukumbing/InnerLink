/**
 * Created by kukumbing on 8/4/2015.
 */


var str = "qqqq wwww eeee ffff ssss cccc gggg ssss eeee eeee eeee eeee eeee eeee eeee eeee eeee eeee eeee eeee eeee ttttt ssdfd sdfsdgg sdfsdg " +
    "sdfsdf sdfsdf sdfsdf sdfsdf" +
    "sdfsdfsdfsdfsdfdf sdfdfsdfsd";

//var str2 = str.replace(/hello/g,"eeee");

//console.log(str.replace(/eeee/g,"hello"));

var arr=["qqqq", "wwww", "eeee", "ffff", "ssss"];

var randomize =function(arr,range){
    if(range==0||range==1){
        return arr[0];
    } else
    return arr[Math.floor(Math.random() * range) + 1];

};


var customreplace = function(text,find,replacewhat,percent){

    //var countoccurrence = occurrencecount(find,text);
    var locate=[];
    var countoccurrence =0;
    var replaced = "";
    var temp = text.split(" ");

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

};







console.log(str);

console.log(customreplace(str,"eeee","hello",30));


console.log(randomize(arr,4));
console.log(randomize(arr,4));
console.log(randomize(arr,4));
console.log(randomize(arr,4));



