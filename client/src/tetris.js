app.tetris.init = function(sMode){
    app.tetris.config.setEnv(sMode || 'development');

    // initialize Singleton
    app.tetris.Game.StageView = app.tetris.Game.StageView.getInstance();
    app.tetris.Router = app.tetris.Router.getInstance();

    app.tetris.Network.startSession();

    app.tetris.ui.BackButton.setEvents();
    Backbone.history.start();

    var sNavigation = Backbone.history.fragment ? Backbone.history.fragment : false;

    app.tetris.Router.navigate(sNavigation, {trigger: true});
};