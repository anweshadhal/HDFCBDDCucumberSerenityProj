#Author: Anwesha Dhal
@HDFCCalculator
Feature: Calculate the maturity amount for different deposites in HDFC bank
  User can calculate the maturity amount after a certain time period with a certain rate of inetrest

  @FixedDeposite @FD
  Scenario Outline: To Calculate the maturity amount for fixed deposite
    Given a user landed on the hdfc FD calculator page
    When the user given with "<typeOfFixedDeposit>" deposite terms "<months>" and "<days>"
    And the fixed deposite "<date>" and "<amountOfDeposit>"
    Then I verify the aggregate interest amount

    Examples: 
      | typeOfFixedDeposit | months | days | date | amountOfDeposit |
      | Monthly Payout     |     24 |   19 |   20 |            9000 |
      | Quarterly Payout   |     18 |   10 |    7 |           25000 |
      | Reinvestment       |     10 |   15 |   25 |           30000 |
      | Reinvestment       |     36 |   20 |   17 |           78000 |
      | Monthly Payout     |     24 |   19 |   20 |            8800 |

  @RecurringDeposite @RD
  Scenario Outline: To Calculate the maturity amount for fixed deposite
    Given a user landed on the hdfc RD calculator page
    When the user given with "<amountOfDeposit>" deposite terms for "<depositMonths>", "<citizenType>", "<startMonth>" and "<startDate>"
    Then verify the aggregate interest amount

    Examples: 
      | amountOfDeposit | depositMonths | citizenType | startMonth | startDate |
      |            9000 |            15 | Yes         | Jun        |         8 |
      #|            8000 |     24 | No          |         9 |
      #| Quarterly Payout |     18 |        10 |
      #| Reinvestment     |     10 |        15 |
      #| Reinvestment     |     36 |        20 |
      #| Monthly Payout   |     24 |        19 |
