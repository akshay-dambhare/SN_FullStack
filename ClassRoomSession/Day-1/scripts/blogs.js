const getBlogs=(callbackDemo)=>
{
    setTimeout(() =>{
        callbackDemo({
        
            title: 'welcome to my app'
        })
    }, 2000);
}
getBlogs((bp)=>
{
    console.log(bp.title);
})