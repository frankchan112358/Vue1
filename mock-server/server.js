const jsonServer = require('json-server')
const server = jsonServer.create({ noCors: false });
const router = jsonServer.router('mock-server/db.json')
const middlewares = jsonServer.defaults()


// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)
server.use(jsonServer.bodyParser);
const WS_URL = '/vuejs_demo_ws/services/user/';
const mappingUrl = '/vuejs_demo_ws/services/*';

server.get(mappingUrl, (req, res) => {

    console.log('get method...');
    console.log(req.url);
    let actionWithData = decodeURI(req.url.substr(WS_URL.length));
    let reqAction = actionWithData;
    if (actionWithData.indexOf('/') >= 0) {
        reqAction = actionWithData.substr(0, actionWithData.indexOf('/'));
    }
    console.log('find actionWithData:' + actionWithData);
    console.log('find reqAction:' + reqAction);
    if (reqAction === 'query') {
        let params = decodeURI(req.url.substr(WS_URL.length + reqAction.length + 1));
        console.log('取得參數');
        let queryParams = JSON.parse(params);
        console.log(queryParams);
        let db = router.db
        let agentList = db.get('agentList').value();
        let resultList = agentList.filter(user => {
            return user.userId == queryParams.userId;
        })
        if (resultList.length === 0) {
            let agentList = db.get('queryErrMsg').value();
            res.json(agentList);
        } else {
            let data = resultList[0];
            res.json(data);
        }

    } else if (reqAction === 'queryAll') {
        let db = router.db;
        let agentList = db.get('agentList').value();
        res.json(agentList);
    }

})

server.post(mappingUrl, function (req, res, next) {

    console.log('post method..');
    const reqBody = req.body;
    console.log(reqBody);
    let action = req.url.substr(WS_URL.length);
    console.log('find action:' + action);
    if (action === 'add') {//新增
        let db = router.db;
        let agentList = db.get('agentList').value();
        let newAgentList = agentList.filter(user => {
            return user.userId === reqBody.userId;
        });
        if (newAgentList.length > 0) {
            let data = db.get('addErrMsg').value();
            res.json(data);
        } else {
            newAgentList = agentList.push(reqBody);
            db.get('agentList').write(newAgentList);
            let data = db.get('addMsg').value();
            res.json(data);
        }
    } else if (action === 'update') {//修改
        let db = router.db
        let agentList = db.get('agentList').value();
        let newAgentList = agentList.map(user => {
            if (user.userId == reqBody.userId) {
                user.name = reqBody.name;
                user.branchName = reqBody.branchName;
                user.email = reqBody.email;
                user.activated = reqBody.activated;
            }
            return user;
        });
        db.get('agentList').write(newAgentList);
        let data = db.get('updateMsg').value();
        res.json(data);
    }

})



// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser)


// Use default router
server.use(router)
server.listen(9443, () => {
    console.log('JSON Server is running')
})