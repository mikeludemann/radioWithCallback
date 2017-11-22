function radioWithCallback(eventElement,callback){

    'use strict';

    $(eventElement).change(function(){

        if($(this) + ":checked"){

            $(this).prop("checked","checked");

            if(typeof callback == "function"){

                callback();

            } else {

                console.log("No callback method available");

            }

        } else {

            console.log("Nothing");

        }

    });

}