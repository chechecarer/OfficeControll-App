Ext.define('TestApp.view.Powercontainer',{
	extend:'Ext.form.Panel',
	requires:[
		'Ext.field.Radio',
		'Ext.form.FieldSet'
	],
	alias:'widget.powercontainer',
	fullscreen:true,
	scrollable:'vertical',
	initialize:function(){
		this.callParent();
		
		var backBtn = {
			xtype:'button',
			ui:'back',
			text:'首页',
			handler:this.onBackButtonTap,
			scope:this
		};
		var topToolbar = {
			xtype:'toolbar',
			title:'电源控制',
			docked:'top',
			items:[
				backBtn
			]
			
		};
		var tg1 = {
			xtype:'togglefield',
			name:'office1',
			itemId:'tg1',
			label:'办公室1',
			listeners:{
				change:{
					fn:this.sb,
					scope:this
					}
			}
		};
		var tg2 = {
			xtype:'togglefield',
			itemId:'tg2',
			name:'office2',
			label:'办公室2',
			listeners:{
				change:{
					fn:this.sb,
					scope:this
					}
			}	
		};
		var tg3 = {
			xtype:'togglefield',
			itemId:'tg3',
			name:'office3',
			label:'办公室3',
			listeners:{
				change:{
					fn:this.sb,
					scope:this
					}
			}
		};
		var tg4 = {
			xtype:'togglefield',
			itemId:'tg4',
			name:'office4',
			label:'办公室4',
			listeners:{
				change:{
					fn:this.sb,
					scope:this
					}
			}
		};
		var tg5 = {
			xtype:'togglefield',
			itemId:'tg5',
			name:'office5',
			label:'办公室5',
			listeners:{
				change:{
					fn:this.sb,
					scope:this
					}
			}
		};
		var on = {
			xtype:'button',
			text:'一键开启',
			handler:this.fon,
			scope:this
		};
		var off = {
			xtype:'button',
			text:'一键关闭',
			handler:this.foff,
			scope:this
		}
		var bottomToolbar = {
			xtype:'toolbar',
			docked:'bottom',
			items:[
				on,
				{
					xtype:'spacer'
				},
				off
			]
		};
		this.add([
			topToolbar,
			{
				xtype:'fieldset',
				itemId:'fs',
				items:[tg1,tg2,tg3,tg4,tg5]
			},
			bottomToolbar
		]);
	},
	sb:function(field,newValue,oldValue){
		this.fireEvent('submitform',this,field,newValue);
	},
	onBackButtonTap: function() {
        console.log('backToHomeCommand');
        this.fireEvent("backToHomeCommand", this);
    },
    fon:function(){
    	console.log('一键开启');
    	this.fireEvent('allon',this);
    	
    },
    foff:function(){
    	console.log('一键关闭');
    	this.fireEvent('alloff',this);
    	
    }
});