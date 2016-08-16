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
        	ui:'action',
        	//iconCls:'addicon',
        	handler:this.showpwlist,
        	scope:this
        };
        var curtainBtn = {
        	xtype:'button',
        	text:'窗帘',
        	itemid:'curtain',
        	height:109,
        	width:93,
        	//iconCls: 'add',
        	ui:'action',
        	handler:this.showctlist,
        	scope:this
        };
        var lightBtn = {
        	xtype:'button',
        	text:'灯',
        	itemid:'light',
        	height:109,
        	width:93,
        	//iconCls: 'add',
        	ui:'action',
        	handler:this.showltlist,
        	scope:this
        };
        var myTopToolBar = {
        	xtype:'toolbar',
        	title:'首页',
        	docked:'top'	
        };
        var myContainer = {
        	xtype:'container',
        	flex : 1,
            layout: {
                type : 'hbox',
                align: 'middle'
            },
            items:[
            	{
	            	xtype:'spacer'
	            },
	            switchBtn,
	            {
	            	xtype:'spacer'
	            },
	            curtainBtn,
	            {
	            	xtype:'spacer'
	            },
	            lightBtn,
	            {
	            	xtype:'spacer'
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