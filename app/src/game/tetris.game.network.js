
app.tetris.Game.Network = {};

app.tetris.Game.Network.close = function(){
    if(app.tetris.Game.Network.io){
        app.tetris.Game.Network.io.disconnect();
    }
};
app.tetris.Game.Network.open = function(){
    if(app.tetris.Game.Network.io){
        app.tetris.Game.Network.io.reconnect();
    }
};

app.tetris.Game.Network.init = function(){
    app.tetris.Game.Network.io = app.tetris.io.of('/game');

    app.tetris.Game.Network.io
        .on("reconnect", function(){
            console.log('connect', arguments);
        })

        .on('disconnected', function(){
            console.log('game disconnected')
        })
        .on('brGameStart', function(htObj){
            console.log('brGameStart');
            if(htObj.bIsStarted){
                app.tetris.Game.Network.sRoomName = htObj.sRoomName;
            }
        })
        .on('resStartGame', function(htObj){
            console.log('resStartGame', arguments);

            if(htObj.code === 400){
                app.tetris.Game.Network.io.emit('reqRoomInfo', { sRoomId : htObj.sRoomId});
            }
            
            if(htObj.bIsStarted){
                console.log('GAME BEGIN');
                app.tetris.Game.Network.sRoomName = htObj.sRoomName;
            }
        })
        .on('brLeagueClosed', function(){
            console.log(arguments);
        });
};