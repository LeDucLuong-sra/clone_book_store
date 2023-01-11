const newsRouter = require('./news')
const homeRouter = require('./home')
const courseRouter =require('./course')
const bookRouter =require('./bookRoute')
const meRouter =require('./me')
function routes(app){
    app.use('/news', newsRouter)
    app.use('/course',courseRouter)
    app.use('/book',bookRouter)
    app.use('/me',meRouter)
    app.use('/',homeRouter)

}

module.exports = routes