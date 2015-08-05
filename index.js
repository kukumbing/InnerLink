/**
 * Created by kukumbing on 8/4/2015.
 */

var fs = require('fs');

var functions = require('./functions');

fs.readFile('demo.html', {encoding : 'utf8'}, function (err,result) {
    if(err) {
        return console.log(err);
    }

    var replaced1 = functions.customreplace(result,'Node.js','\<a href=\"http://techmaster.vn/khoa-hoc/25480/nodejs-truc-tuyen\">Node.js</a>',40);
    var replaced2 = functions.customreplace(replaced1,'PHP','\<a href=\"http://techmaster.vn/khoa-hoc/8229/lap-trinh-phalcon-php-2\">PHP</a>',40);
    fs.writeFile('demo2.html',replaced2, function (err) {
        if(err){
            return console.log(err);
        }
        console.log('done');
    })


    console.log(replaced2);


})


/*
fs.writeFile('demo2.html','xin chao', function (err) {
    if(err){
        return console.log(err);
    }
    console.log('done');
})

fs.readFile('demo.html', {encoding : 'utf8'}, function (err,result) {
    if(err) {
        return console.log(err);
    }
    fs.writeFile('demo2.html',result, function (err) {
        if(err){
            return console.log(err);
        }
        console.log('done');
    })
})*/