var setSomePropertiesOn = function(object)  {
    object.x = 7;
    object.y = 8;
    object.onePlus = function(number)    {
        return number + 1;
    }
}

console.log(setSomePropertiesOn.x);


