class CourseController{
    index(req, res) {    
        res.send("sucessfully");    
       // res.render('course');
    }
    show(req, res) {    
        res.send('detail');    
       // res.render('course');
    }
}

module.exports = new CourseController;