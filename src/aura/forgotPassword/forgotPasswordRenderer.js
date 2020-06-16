({
    render : function(cmp) {
        var ret = this.superRender();

        var actionName = cmp.get("c.forgotPassword");
        actionName.setParams({username: null, checkEmailUrl: null});
        actionName.setCallback(this, function (response) {
            var state = response.getState();
            if (component.isValid() && state === "SUCCESS") {
                var result = response.getReturnValue();

            }
        });
        $A.enqueueAction(actionName);
        
        return ret;
    },
})