


class userpagesController{

    index(req, res){
        res.render('user/index');
    }
}

module.exports = new userpagesController();