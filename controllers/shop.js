exports.getIndex = (req,res,next) => {
    res.render('index',{
        path:'index'
    });
};