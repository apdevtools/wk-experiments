Ext.define('wkexp.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',

    requires: [
        'Ext.TitleBar',
        //'Ext.Video'
    ],
    config: {
        tabBarPosition: 'bottom',
        
        items: [
            {
                title: 'AJAX',
                iconCls: 'home',

                styleHtmlContent: true,
                scrollable: true,
                
                itemId: 'ajaxPanel',
                
                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Test Ajax Loading',
                    },
                    
                    {
                        xtype: 'button',
                        itemId: 'loadAjaxBtn',
                        text: 'Load Ajax',
                        width: '50%',
                        centered: true
                    }
                ]

                //html: [
                //    "You've just generated a new Sencha Touch 2 project. What you're looking at right now is the ",
                //    "contents of <a target='_blank' href=\"app/view/Main.js\">app/view/Main.js</a> - edit that file ",
                //    "and refresh to change what's rendered here."
                //].join("")
                
            },
            
            {
                title: 'SQL',
                iconCls: 'action',

                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Test Native SQL'
                    },
                    
                    {
                        xtype: 'button',
                        text: 'Load Data into SQL',
                        width: '50%',
                        centered: true
                    },
                    
                    // Display the data when loaded                    
                    //{
                    //    xtype: 'button',
                    //    text: 'Load Ajax'
                    //}
                ]
            }
        ]
    }
});
