class MyClass {
    showName(uname:string, email:string){
        console.log('welcome to TS ${uname} ${email}');
    }
}
let classDemo= new MyClass
classDemo.showName('admin','admin@mn.com');