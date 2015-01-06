Ext.define('wkexp.view.Cont', {
    extend: 'Ext.Container',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
    ],
    
    config: {
        
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
                ],
                
            }
            
        ],
        
        html: [
            'Welcome to the Ajax test'
        ]
    }
});
