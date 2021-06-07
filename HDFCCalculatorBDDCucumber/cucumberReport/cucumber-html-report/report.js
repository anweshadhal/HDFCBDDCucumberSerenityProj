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
  "duration": 27384874100,
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
  "duration": 2351494400,
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
  "duration": 2169776600,
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
formatter.result({
  "duration": 18531860900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Quarterly Payout",
      "offset": 21
    },
    {
      "val": "18",
      "offset": 55
    },
    {
      "val": "10",
      "offset": 64
    }
  ],
  "location": "HDFCStepDefinition.the_user_given_with_deposite_terms_and(String,String,String)"
});
formatter.result({
  "duration": 1613850200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7",
      "offset": 20
    },
    {
      "val": "25000",
      "offset": 28
    }
  ],
  "location": "HDFCStepDefinition.the_fixed_deposite_and(String,String)"
});
formatter.result({
  "duration": 6739503800,
  "status": "passed"
});
formatter.match({
  "location": "HDFCStepDefinition.i_verify_the_aggregate_interest_amount()"
});
formatter.result({
  "duration": 238252700,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "To Calculate the maturity amount for fixed deposite",
  "description": "",
  "id": "calculate-the-maturity-amount-for-different-deposites-in-hdfc-bank;to-calculate-the-maturity-amount-for-fixed-deposite;;4",
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
  "name": "the user given with \"Reinvestment\" deposite terms \"10\" and \"15\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "the fixed deposite \"25\" and \"30000\"",
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
  "duration": 15015113000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Reinvestment",
      "offset": 21
    },
    {
      "val": "10",
      "offset": 51
    },
    {
      "val": "15",
      "offset": 60
    }
  ],
  "location": "HDFCStepDefinition.the_user_given_with_deposite_terms_and(String,String,String)"
});
formatter.result({
  "duration": 1559192000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "25",
      "offset": 20
    },
    {
      "val": "30000",
      "offset": 29
    }
  ],
  "location": "HDFCStepDefinition.the_fixed_deposite_and(String,String)"
});
formatter.result({
  "duration": 6088775300,
  "status": "passed"
});
formatter.match({
  "location": "HDFCStepDefinition.i_verify_the_aggregate_interest_amount()"
});
formatter.result({
  "duration": 226197000,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "To Calculate the maturity amount for fixed deposite",
  "description": "",
  "id": "calculate-the-maturity-amount-for-different-deposites-in-hdfc-bank;to-calculate-the-maturity-amount-for-fixed-deposite;;5",
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
  "name": "the user given with \"Reinvestment\" deposite terms \"36\" and \"20\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "the fixed deposite \"17\" and \"78000\"",
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
  "duration": 14711491200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Reinvestment",
      "offset": 21
    },
    {
      "val": "36",
      "offset": 51
    },
    {
      "val": "20",
      "offset": 60
    }
  ],
  "location": "HDFCStepDefinition.the_user_given_with_deposite_terms_and(String,String,String)"
});
formatter.result({
  "duration": 1256541200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "17",
      "offset": 20
    },
    {
      "val": "78000",
      "offset": 29
    }
  ],
  "location": "HDFCStepDefinition.the_fixed_deposite_and(String,String)"
});
formatter.result({
  "duration": 6697138500,
  "status": "passed"
});
formatter.match({
  "location": "HDFCStepDefinition.i_verify_the_aggregate_interest_amount()"
});
formatter.result({
  "duration": 191637000,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "To Calculate the maturity amount for fixed deposite",
  "description": "",
  "id": "calculate-the-maturity-amount-for-different-deposites-in-hdfc-bank;to-calculate-the-maturity-amount-for-fixed-deposite;;6",
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
  "name": "the user given with \"Monthly Payout\" deposite terms \"24\" and \"19\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "the fixed deposite \"20\" and \"8800\"",
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
  "duration": 12954047800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Monthly Payout",
      "offset": 21
    },
    {
      "val": "24",
      "offset": 53
    },
    {
      "val": "19",
      "offset": 62
    }
  ],
  "location": "HDFCStepDefinition.the_user_given_with_deposite_terms_and(String,String,String)"
});
formatter.result({
  "duration": 1281462000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 20
    },
    {
      "val": "8800",
      "offset": 29
    }
  ],
  "location": "HDFCStepDefinition.the_fixed_deposite_and(String,String)"
});
formatter.result({
  "duration": 6613575200,
  "status": "passed"
});
formatter.match({
  "location": "HDFCStepDefinition.i_verify_the_aggregate_interest_amount()"
});
formatter.result({
  "duration": 199708100,
  "status": "passed"
});
});