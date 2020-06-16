<?xml version="1.0" encoding="UTF-8"?>
<Workflow xmlns="http://soap.sforce.com/2006/04/metadata">
    <rules>
        <fullName>DP_Rule_For_Account</fullName>
        <actions>
            <name>DP_Task</name>
            <type>Task</type>
        </actions>
        <active>true</active>
        <criteriaItems>
            <field>Account.Name</field>
            <operation>equals</operation>
            <value>DP</value>
        </criteriaItems>
        <triggerType>onCreateOnly</triggerType>
    </rules>
    <tasks>
        <fullName>DP_Task</fullName>
        <assignedTo>salesforce.viatra2@gmail.com</assignedTo>
        <assignedToType>user</assignedToType>
        <dueDateOffset>90</dueDateOffset>
        <notifyAssignee>false</notifyAssignee>
        <offsetFromField>Account.MyCustomField__c</offsetFromField>
        <priority>Normal</priority>
        <protected>false</protected>
        <status>Not Started</status>
        <subject>DP_Task</subject>
    </tasks>
</Workflow>
