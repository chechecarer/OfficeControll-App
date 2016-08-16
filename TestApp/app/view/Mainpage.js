/**
 * Created by Chonshi Tan on 14-3-4.
 */

Ext.define("TestApp.view.Mainpage", {
    extend: 'Ext.Container',
    alias: 'widget.mainpage',
    requires: ['Ext.Toolbar'],
    initialize: function() {
        this.callParent();
        var switchBtn = {
        	xtype:'button',
        	text:'电源',
        	itemid:'power',
        	height:109,
        	width:93,
        	// ui:'action',
            style: "background-image: url('./resources/images/homebackground.jpg'); background-size:100% 100%;color:white",
        	handler:this.showpwlist,
        	scope:this,
            flex: 1
        };
        var curtainBtn = {
        	xtype:'button',
        	text:'窗帘',
        	itemid:'curtain',
        	height:109,
        	width:93,
            style: "background-image: url('./resources/images/homebackground.jpg'); background-size:100% 100%;color:white",
        	handler:this.showctlist,
        	scope:this,
            flex: 1
        };
        var lightBtn = {
        	xtype:'button',
        	text:'灯',
        	itemid:'light',
        	height:109,
        	width:93,
        	//iconCls: 'add',
            style: "background-image: url('./resources/images/homebackground.jpg'); background-size:100% 100%;color:white",
        	// ui:'action',
        	handler:this.showltlist,
        	scope:this,
            flex: 1
        };
        var myTopToolBar = {
        	xtype:'toolbar',
        	title:'首页',
        	docked:'top'
        };
        var myContainer = {
        	xtype:'container',
            // cls: 'homepage',
        	flex : 1,
            layout: {
                type : 'vbox',
                align: 'center'
            },
            items:[
            	{
	            	xtype:'spacer',
                    flex: 1
	            },
	            switchBtn,
	            {
	            	xtype:'spacer',
                    flex: 1
	            },
	            curtainBtn,
	            {
	            	xtype:'spacer',
                    flex: 1
	            },
	            lightBtn,
	            {
	            	xtype:'spacer',
                    flex: 1
	            }
            ]
        }
        this.add([
            myTopToolBar,
            myContainer
        ]);
    },
    showltlist:function(me,e,opts){
    	
    	this.fireEvent('showltlist',me);
    },
   	showpwlist:function(me,e,opts){
   		this.fireEvent('showpwlist',me);
   	},
   	showctlist:function(me,e,opts){
   		this.fireEvent('showctlist',me);
   	},
    config: {
      layout:{
          type: 'fit'
      }
    }
});