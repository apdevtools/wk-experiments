Ext.define('wkexp.controller.Data', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            coreButton: '#ajaxPanel button[itemId=loadAjaxBtn]',
            main: 'main'
        },
        control: {
            coreButton: {
                tap1: 'loadAjax',
                tap2: 'clearData',
                tap3: 'displayNextStep'
            },
        }
    },
    
    requires: [
        'Ext.Ajax'
    ],
    
    //called when the Application is launched, remove if not needed
    launch: function(app) {
        
        //var btn = Ext.ComponentQuery.query('#ajaxPanel button[itemId=loadAjaxBtn]')[0];
        //console.log(btn)
        
        this.getCoreButton().setAutoEvent('tap1');
    },
    
    loadAjax: function() {
        
        var me = this;
        
        Ext.Ajax.on('beforerequest',this.updateBtn('Request started','disabled'),me);
        Ext.Ajax.on('requestcomplete',this.updateBtn('Request completed..loading data','disabled'),me);
        //Ext.Ajax.on('requestexception',this.updateBtn('Request excepted, try again','disabled'),me);
        
        Ext.Ajax.request({
            
            scope: me,
            url: './resources/data/Config.json',
            timeout: 120000,
            useDefaultXhrHeader: false,
            
            success: function(response){
                
                me.displayData(response);
                this.updateBtn('Clear data','enabled','tap2');
                
            },
            
            failure: function(response) {
                
                alert('Problem loading Ajax')
                
            },
        });
    },
    
    updateBtn: function(message,state,event){
        
        var btn = this.getCoreButton();
        
        if(message!=undefined){
            
            btn.setText(message);
            
        } 
        
        if(state!=undefined){
            
            if(state=='enabled'){
                
                btn.setDisabled(false);
                
            } else if(state=='disabled'){
                
                btn.setDisabled(true);
            } 
            
        }
        
        if(event!=undefined){
            
            btn.setAutoEvent(event);
            console.log(btn.getAutoEvent());
            
        }
    },
    
    displayData: function(response) {
        
        var data = Ext.JSON.decode(response.responseText.trim()),
        json = JSON.stringify(data);
        
        //var myPanel = this.getMain()[0];
        var myPanel = Ext.ComponentQuery.query('main')[0];
        
        myPanel.setHtml(json);
    },
    
    displayNextStep: function() {
        
        this.getMain().setHtml('This is the next step');
        //this.getCoreButton().hide();
        this.updateBtn('Start again','enabled','tap1')
    },
    
    clearData: function() {
        
        var myPanel = Ext.ComponentQuery.query('main')[0] //change to getter when working
        //.getMain()
        
        myPanel.setHtml('');
        this.updateBtn('Go to the next step','enabled','tap3')
    },
    
});
