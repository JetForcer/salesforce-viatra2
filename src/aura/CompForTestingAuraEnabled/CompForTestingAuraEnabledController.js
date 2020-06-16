({
    handlePress : function(component, event, helper) {
        var action = component.get("c.insertedAccount");
        action.setCallback(this,function(response){
                if (response.getState() === "SUCCESS"){
                    component.set("v.NewAccountId",response.getReturnValue());
                }
            });
        $A.enqueueAction(action);
    }
})