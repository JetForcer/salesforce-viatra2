({

    // handleForgotPassword: function (component, event, helper) {
    //     var username = component.find("username").get("v.value");
    //     var checkEmailUrl = component.get("v.checkEmailUrl");
    //     var renamed = component.get("c.forgotPassword");
    //     renamed.setParams({username: username, checkEmailUrl: checkEmailUrl});
    //     renamed.setCallback(this, function (response) {
    //         var state = response.getState();
    //         if (component.isValid() && state === "SUCCESS") {
    //             var result = response.getReturnValue();
    //
    //         }
    //     });
    //     $A.enqueueAction(renamed);
    // }

    handleForgotPassword: function (component) {
        var username = component.find("username").get("v.value");
        var checkEmailUrl = component.get("v.checkEmailUrl");
        var renamed = component.get("c.forgotPassword");
        renamed.setParams({username: username, checkEmailUrl: checkEmailUrl});
        renamed.setCallback(this, function (response) {
            var state = response.getState();
            if (component.isValid() && state === "SUCCESS") {
                var result = response.getReturnValue();

            }
        });
        $A.enqueueAction(renamed);
    }
})