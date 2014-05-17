app.tetris.Account.Network = {};



app.tetris.Account.Network.connect = function(cb){
    if(!app.tetris.Account.Network.io){
        app.tetris.Account.Network.io = io.connect(app.tetris.config.sAccountUrl);

        app.tetris.Account.Network.io
            .on('connection', function(){
                if(cb){
                    cb();
                }
            })
            .on('error', function(){
                alert('Cannot connect to Server');
            })
            .on('reconnect_failed', function(){
                console.log('reconnect_failed');
            })
            .on('connect_failed', function (err) {
                console.log(err);
            })
            .on('resLogin', function(htData){
                
                app.tetris.Account.Info.bAvail = htData.bAvail;
                if(app.tetris.Account.Info.bAvail){
                    app.tetris.Account.Info.broadcast('onSuccessLogin');
                } else {
                    app.tetris.Account.Info.broadcast('onFailLogin');
                }
            })
            .on('resJoin', function(htData){

                if(htData.bAvail === false){
                    alert(htData.sMessage);
                    return;
                }

                app.tetris.Account.Info.on('onSuccessLogin', function () {
                    app.tetris.Account.Info.save();
                    app.tetris.Menu.View.render();
                    app.tetris.Router.navigate('menu', {trigger: true});
                });

                app.tetris.Account.Network.io.emit('reqLogin', app.tetris.Account.Info.getAccount());
            });
        
//setInterval(function(){
//        app.tetris.Account.Network.io.emit('reqLogin', app.tetris.Account.Info.getAccount());
//}, 1000);
    }
    
    if (app.tetris.Account.Network.io.socket.connected === false && app.tetris.Account.Network.io.socket.connecting === false) {
        app.tetris.Account.Network.io.socket.connect();
    } else {
        
        
        if(cb){
            cb();
        }
    }
    
    
};