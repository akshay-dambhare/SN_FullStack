"use strict";
class MyClass {
    showName(uname, email) {
        console.log('welcome to TS ${uname} ${email}');
    }
}
let classDemo = new MyClass;
classDemo.showName('admin', 'admin@mn.com');
