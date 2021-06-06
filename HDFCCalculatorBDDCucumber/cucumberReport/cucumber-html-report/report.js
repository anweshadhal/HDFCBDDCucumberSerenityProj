$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/HDFCCalculator.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: Anwesha Dhal"
    }
  ],
  "line": 3,
  "name": "Calculate the maturity amount for different deposites in HDFC bank",
  "description": "User can calculate the maturity amount after a certain time period with a certain rate of inetrest",
  "id": "calculate-the-maturity-amount-for-different-deposites-in-hdfc-bank",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@HDFCCalculator"
    }
  ]
});
formatter.scenarioOutline({
  "line": 7,
  "name": "To Calculate the maturity amount for fixed deposite",
  "description": "",
  "id": "calculate-the-maturity-amount-for-different-deposites-in-hdfc-bank;to-calculate-the-maturity-amount-for-fixed-deposite",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@FixedDeposite"
    },
    {
      "line": 6,
      "name": "@FD"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "a user landed on the hdfc FD calculator page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "the user given with \"\u003ctypeOfFixedDeposit\u003e\" deposite terms \"\u003cmonths\u003e\" and \"\u003cdays\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "the fixed deposite \"\u003cdate\u003e\" and \"\u003camountOfDeposit\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I verify the aggregate interest amount",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "calculate-the-maturity-amount-for-different-deposites-in-hdfc-bank;to-calculate-the-maturity-amount-for-fixed-deposite;",
  "rows": [
    {
      "cells": [
        "typeOfFixedDeposit",
        "months",
        "days",
        "date",
        "amountOfDeposit"
      ],
      "line": 14,
      "id": "calculate-the-maturity-amount-for-different-deposites-in-hdfc-bank;to-calculate-the-maturity-amount-for-fixed-deposite;;1"
    },
    {
      "cells": [
        "Monthly Payout",
        "10",
        "8",
        "5",
        "9000"
      ],
      "line": 15,
      "id": "calculate-the-maturity-amount-for-different-deposites-in-hdfc-bank;to-calculate-the-maturity-amount-for-fixed-deposite;;2"
    },
    {
      "cells": [
        "Quarterly Payout",
        "18",
        "10",
        "7",
        "25000"
      ],
      "line": 16,
      "id": "calculate-the-maturity-amount-for-different-deposites-in-hdfc-bank;to-calculate-the-maturity-amount-for-fixed-deposite;;3"
    },
    {
      "cells": [
        "Reinvestment",
        "10",
        "15",
        "25",
        "30000"
      ],
      "line": 17,
      "id": "calculate-the-maturity-amount-for-different-deposites-in-hdfc-bank;to-calculate-the-maturity-amount-for-fixed-deposite;;4"
    },
    {
      "cells": [
        "Reinvestment",
        "36",
        "20",
        "17",
        "78000"
      ],
      "line": 18,
      "id": "calculate-the-maturity-amount-for-different-deposites-in-hdfc-bank;to-calculate-the-maturity-amount-for-fixed-deposite;;5"
    },
    {
      "cells": [
        "Monthly Payout",
        "24",
        "19",
        "20",
        "8800"
      ],
      "line": 19,
      "id": "calculate-the-maturity-amount-for-different-deposites-in-hdfc-bank;to-calculate-the-maturity-amount-for-fixed-deposite;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 15,
  "name": "To Calculate the maturity amount for fixed deposite",
  "description": "",
  "id": "calculate-the-maturity-amount-for-different-deposites-in-hdfc-bank;to-calculate-the-maturity-amount-for-fixed-deposite;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@HDFCCalculator"
    },
    {
      "line": 6,
      "name": "@FixedDeposite"
    },
    {
      "line": 6,
      "name": "@FD"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "a user landed on the hdfc FD calculator page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "the user given with \"Monthly Payout\" deposite terms \"10\" and \"8\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "the fixed deposite \"5\" and \"9000\"",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I verify the aggregate interest amount",
  "keyword": "Then "
});
formatter.match({
  "location": "HDFCStepDefinition.a_user_landed_on_the_hdfc_FD_calculator_page()"
});
formatter.result({
  "duration": 35432988700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Monthly Payout",
      "offset": 21
    },
    {
      "val": "10",
      "offset": 53
    },
    {
      "val": "8",
      "offset": 62
    }
  ],
  "location": "HDFCStepDefinition.the_user_given_with_deposite_terms_and(String,String,String)"
});
formatter.result({
  "duration": 3510763300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 20
    },
    {
      "val": "9000",
      "offset": 28
    }
  ],
  "location": "HDFCStepDefinition.the_fixed_deposite_and(String,String)"
});
formatter.result({
  "duration": 1958161300,
  "error_message": "org.openqa.selenium.ElementNotVisibleException: Timed out after 0 seconds. Element not available\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1cd5757287168e54b817830adce9b0158d\u0027, time: \u00272016-06-30 19:26:09\u0027\nSystem info: host: \u0027LAPTOP-2D7HJLAU\u0027, ip: \u0027192.168.1.103\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_261\u0027\nDriver info: driver.version: unknown\r\n\tat net.thucydides.core.annotations.locators.SmartAjaxElementLocator.ajaxFindElement(SmartAjaxElementLocator.java:147)\r\n\tat net.thucydides.core.annotations.locators.SmartAjaxElementLocator.findElement(SmartAjaxElementLocator.java:102)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy21.click(Unknown Source)\r\n\tat pages.HDFCInterestCalculationPage.selectDateOfFD(HDFCInterestCalculationPage.java:53)\r\n\tat stepdefinitions.HDFCStepDefinition.the_fixed_deposite_and(HDFCStepDefinition.java:43)\r\n\tat ✽.And the fixed deposite \"5\" and \"9000\"(src/test/resources/HDFCCalculator.feature:10)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "HDFCStepDefinition.i_verify_the_aggregate_interest_amount()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 16,
  "name": "To Calculate the maturity amount for fixed deposite",
  "description": "",
  "id": "calculate-the-maturity-amount-for-different-deposites-in-hdfc-bank;to-calculate-the-maturity-amount-for-fixed-deposite;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@HDFCCalculator"
    },
    {
      "line": 6,
      "name": "@FixedDeposite"
    },
    {
      "line": 6,
      "name": "@FD"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "a user landed on the hdfc FD calculator page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "the user given with \"Quarterly Payout\" deposite terms \"18\" and \"10\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "the fixed deposite \"7\" and \"25000\"",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I verify the aggregate interest amount",
  "keyword": "Then "
});
formatter.match({
  "location": "HDFCStepDefinition.a_user_landed_on_the_hdfc_FD_calculator_page()"
});
