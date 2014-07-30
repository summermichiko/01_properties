var setSomePropertiesOn = function(obj) {
    obj.x = 7; //reference dot something **(the dot dereferences the reference of obj, and then calls x on it)
    obj.y = 8; //can also say obj_reference["y"] = 8;
    //using brackets allows you to insert a number saved as a variable or a string with a space (ex. "fullstack academy")
    
    //[] - accessing objects and arrays

    //obj_reference.num = 8;
    //obj_reference["fullstack academy"] = 8;
    //obj_reference[true] =8;

    obj.onePlus = function(number) {
        return number + 1;
    }

    //could also be obj["onePlus"] = function(number) {
    	//return number + 1;
    }
};


