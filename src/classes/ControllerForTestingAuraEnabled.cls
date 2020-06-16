public with sharing class ControllerForTestingAuraEnabled {

	@AuraEnabled
	public static Id insertedAccount(){
		Account a = new Account(Name = 'I\'m new here');
		insert a;
		return a.Id;
	}
}