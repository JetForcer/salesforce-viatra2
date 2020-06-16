({
    myAction: function (component, event, helper) {
        var toStringForObjAction = component.get("c.method12");
        var action = component.get("c.method12");
        action.setParams({param1: "", param2: ""});
        action.setCallback(this, function (response) {
            var state = response.getState();
            if (component.isValid() && state === "SUCCESS") {
                var result = response.getReturnValue();
                
            }
        });
        $A.enqueueAction(action);
        toStringForObjAction.setParams({param2:'Skif', param1: 'Passed param'});
        toStringForObjAction.setCallback(this, function (response) {
            var state = response.getState();
            if(state === "SUCCESS") {
                alert(response.getReturnValue());
            }
            //component.set("v.toStringAttr", res);
            // TODO : issue for auto-popup completion after pressing dot ( v.<caret> )
        });

        $A.enqueueAction(toStringForObjAction);
    }
})