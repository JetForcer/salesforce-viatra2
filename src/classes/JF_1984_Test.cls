@IsTest
public class JF_1984_Test {

    // change 10

    @IsTest static void testSayTicketNumber() {
        Test.startTest();
        String ticketNumber = new JF_1984().sayTicketNumber();
        System.assertEquals('https://youtrack.jetforcer.com/issue/JF-1984', ticketNumber);
        Test.stopTest();
    }
}