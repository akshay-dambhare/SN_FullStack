function show() {

    const udata = new Object()

    udata.uname = 'admin'
    udata.city = 'Pune'

    showdata = function () {
        document.getElementById('show').innerHTML = udata.uname + " " + udata.city

    }
    udata.showdata
}