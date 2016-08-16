/**
 * Created by Chongshi Tan on 14-3-4.
 */

Ext.application( {
    name: 'TestApp',
    controllers: ['TestController'],
    models: [],
    stores: [],
    views: ['Mainpage','Lightcontainer','Powercontainer','Curtaincontainer'],
    launch: function() {
        var mainpage = {
            xtype: "mainpage"
        };
      
        var lightcontainer = {
        	xtype:'lightcontainer'
        };
        var powercontainer = {
        	xtype:'powercontainer'
        };
        var curtaincontainer = {
        	xtype:'curtaincontainer'
        };
        Ext.Viewport.add([
            mainpage,
            lightcontainer,
            powercontainer,
            curtaincontainer
        ]);
    }
});