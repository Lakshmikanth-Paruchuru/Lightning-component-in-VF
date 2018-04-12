({
	handleClick : function(component, event, helper) {
		var getContact = component.get("v.objCon");
        var action = component.get("c.saveContact");
        action.setParams({
            'objCon' : getContact
        });
        
        action.setCallback(this, function(response){
            var state = response.getState();
            var returnId = response.getReturnValue();
            if(state == 'SUCCESS'){
                window.open('/'+returnId);
            }
        });
        $A.enqueueAction(action);
	}
})