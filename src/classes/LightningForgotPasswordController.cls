global class LightningForgotPasswordController {

    public LightningForgotPasswordController() {

    }

    @AuraEnabled
    public String getForgotPassword() {
        return '';
    }

    @AuraEnabled
    public static String forgotPassword(String username, String checkEmailUrl) {
        try {
            Site.forgotPassword(username);
            ApexPages.PageReference checkEmailRef = new PageReference(checkEmailUrl);
            if(!Site.isValidUsername(username)) {
                return Label.Site.invalid_email;
            }
            aura.redirect(checkEmailRef);
            return null;
        }
        catch (Exception ex) {
            return ex.getMessage();
        }
    }

}