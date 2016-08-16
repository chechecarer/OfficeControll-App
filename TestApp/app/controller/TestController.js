/**
 * Created by Chongshi Tan on 14-3-4.
 */

Ext.define('TestApp.controller.TestController', {
    extend: 'Ext.app.Controller',
    launch: function() {
        this.callParent(arguments);
        console.log("launch");
    },
    init: function() {
        this.callParent();
        console.info('init');
    },
    config: {
        refs: {
            mainpage: "mainpage", 
            lightcontainer:'lightcontainer',
            powercontainer:'powercontainer',
            curtaincontainer:'curtaincontainer'
        },
        control: {
            mainpage: {
            	showltlist:'showltlist',
            	showpwlist:'showpwlist',
            	showctlist:'showctlist'
            },
            lightcontainer:{
            	submitform:'submitltform',
            	backToHomeCommand: 'onBackToHomeCommand',
            	allon:'allon',
            	alloff:'alloff'
            },
            powercontainer:{
            	submitform:'submitptform',
            	backToHomeCommand: 'onBackToHomeCommand',
            	allon:'allon',
            	alloff:'alloff'
            },
            curtaincontainer:{
            	backToHomeCommand: 'onBackToHomeCommand',
            	changecheck:'changecheck'
            	
            	
            }
        }
    },
   
    slideLeftTransition: { type: 'slide', direction: 'left' },
    slideRightTransition: { type: 'slide', direction: 'right' },

    onBackToHomeCommand: function() {
        console.log('onBackToHomeCommand');
        Ext.Viewport.animateActiveItem(this.getMainpage(), this.slideRightTransition);
    },
    showltlist:function(me){
    	console.log('showlist');
    	//console.log(me.itemid);
    	var tp = this;
    	console.log(me.itemid);
    	Ext.Ajax.request({
			url:'app/data/listdata.jsp',
			method:'post',
			params:{p:me.itemid},
			success:function(response,opts){
				var resp = Ext.JSON.decode(response.responseText);
				tp.getLightcontainer().setValues(
					resp[0]
				);
			
			},
			failure:function(){
			
			}
		});
    	Ext.Viewport.animateActiveItem(this.getLightcontainer(),this.slideLeftTransition);
    },
    showpwlist:function(me){
    	var tp = this;
    	console.log(me.itemid);
    	Ext.Ajax.request({
			url:'app/data/listdata.jsp',
			method:'post',
			params:{p:me.itemid},
			success:function(response,opts){
				var resp = Ext.JSON.decode(response.responseText);
				tp.getPowercontainer().setValues(
					resp[0]
				);
			
			},
			failure:function(){
			
			}
		});
    	Ext.Viewport.animateActiveItem(this.getPowercontainer(),this.slideLeftTransition);
    },
    showctlist:function(){
    	Ext.Viewport.animateActiveItem(this.getCurtaincontainer(),this.slideLeftTransition);
    },
    submitptform:function(me,field,v){
    	console.log('submit');
    	//console.log(me);
    	me.submit({
    		url:'app/data/writepower.jsp',
    		method:'post',
    		params:{name:field.getName(),value:v},
    		success:function(){
    			console.log('hello');
    		}
    	});
    },
     submitltform:function(me,field,v){
    	console.log('submit');
    	//console.log(me);
    	me.submit({
    		url:'app/data/writelight.jsp',
    		method:'post',
    		params:{name:field.getName(),value:v},
    		success:function(){
    			console.log('hello');
    		}
    	});
    },
    allon:function(me){
    	me.getComponent('fs').getComponent('tg1').setValue(1);
    	me.getComponent('fs').getComponent('tg2').setValue(1);
    	me.getComponent('fs').getComponent('tg3').setValue(1);
    	me.getComponent('fs').getComponent('tg4').setValue(1);
    	me.getComponent('fs').getComponent('tg5').setValue(1);
    },
    alloff:function(me){
    	me.getComponent('fs').getComponent('tg1').setValue(0);
    	me.getComponent('fs').getComponent('tg2').setValue(0);
    	me.getComponent('fs').getComponent('tg3').setValue(0);
    	me.getComponent('fs').getComponent('tg4').setValue(0);
    	me.getComponent('fs').getComponent('tg5').setValue(0);
    },
    changecheck:function(mp,mc){
    	mp.submit({
    		url:'app/data/writecurtain.jsp',
    		method:'post',
    		params:{name:mc.getName(),value:mc.getValue()},
    		success:function(){
    			console.log('hello');
    		}
    	});
    }
    });