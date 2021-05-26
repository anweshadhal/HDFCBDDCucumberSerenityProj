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
  "line": 22,
  "name": "To Calculate the maturity amount for fixed deposite",
  "description": "",
  "id": "calculate-the-maturity-amount-for-different-deposites-in-hdfc-bank;to-calculate-the-maturity-amount-for-fixed-deposite",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 21,
      "name": "@RecurringDeposite"
    },
    {
      "line": 21,
      "name": "@RD"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "a user landed on the hdfc RD calculator page",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "the user given with \"\u003camountOfDeposit\u003e\" deposite terms for \"\u003cdepositMonths\u003e\", \"\u003ccitizenType\u003e\", \"\u003cstartMonth\u003e\" and \"\u003cstartDate\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "verify the aggregate interest amount",
  "keyword": "Then "
});
formatter.examples({
  "line": 27,
  "name": "",
  "description": "",
  "id": "calculate-the-maturity-amount-for-different-deposites-in-hdfc-bank;to-calculate-the-maturity-amount-for-fixed-deposite;",
  "rows": [
    {
      "cells": [
        "amountOfDeposit",
        "depositMonths",
        "citizenType",
        "startMonth",
        "startDate"
      ],
      "line": 28,
      "id": "calculate-the-maturity-amount-for-different-deposites-in-hdfc-bank;to-calculate-the-maturity-amount-for-fixed-deposite;;1"
    },
    {
      "cells": [
        "9000",
        "15",
        "Yes",
        "Jun",
        "8"
      ],
      "line": 29,
      "id": "calculate-the-maturity-amount-for-different-deposites-in-hdfc-bank;to-calculate-the-maturity-amount-for-fixed-deposite;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 29,
  "name": "To Calculate the maturity amount for fixed deposite",
  "description": "",
  "id": "calculate-the-maturity-amount-for-different-deposites-in-hdfc-bank;to-calculate-the-maturity-amount-for-fixed-deposite;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 21,
      "name": "@RecurringDeposite"
    },
    {
      "line": 21,
      "name": "@RD"
    },
    {
      "line": 2,
      "name": "@HDFCCalculator"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "a user landed on the hdfc RD calculator page",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "the user given with \"9000\" deposite terms for \"15\", \"Yes\", \"Jun\" and \"8\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "verify the aggregate interest amount",
  "keyword": "Then "
});
formatter.match({
  "location": "HDFCStepDefinition.a_user_landed_on_the_hdfc_RD_calculator_page()"
});
formatter.result({
  "duration": 42101409000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9000",
      "offset": 21
    },
    {
      "val": "15",
      "offset": 47
    },
    {
      "val": "Yes",
      "offset": 53
    },
    {
      "val": "Jun",
      "offset": 60
    },
    {
      "val": "8",
      "offset": 70
    }
  ],
  "location": "HDFCStepDefinition.the_user_given_with_deposite_terms_for_and(String,String,String,String,String)"
});
formatter.result({
  "duration": 5317014300,
  "error_message": "org.openqa.selenium.WebDriverException: element click intercepted: Element \u003ctd class\u003d\" ui-datepicker-week-end ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled\"\u003e...\u003c/td\u003e is not clickable at point (646, 508). Other element would receive the click: \u003ctable class\u003d\"ui-datepicker-calendar\"\u003e...\u003c/table\u003e\n  (Session info: chrome\u003d90.0.4430.212)\n  (Driver info: chromedriver\u003d90.0.4430.24 (4c6d850f087da467d926e8eddb76550aed655991-refs/branch-heads/4430@{#429}),platform\u003dWindows NT 10.0.19041 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 1.13 seconds\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1cd5757287168e54b817830adce9b0158d\u0027, time: \u00272016-06-30 19:26:09\u0027\nSystem info: host: \u0027LAPTOP-2D7HJLAU\u0027, ip: \u0027192.168.1.105\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_261\u0027\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:60359}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, webauthn:extension:largeBlob\u003dtrue, unexpectedAlertBehaviour\u003dignore, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d90.0.4430.24 (4c6d850f087da467d926e8eddb76550aed655991-refs/branch-heads/4430@{#429}), userDataDir\u003dC:\\Users\\ANWESHA\\AppData\\Local\\Temp\\scoped_dir1204_845848981}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, strictFileInteractability\u003dfalse, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d90.0.4430.212, browserConnectionEnabled\u003dfalse, proxy\u003d{}, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: e7af286a57625bbb3e10b2ba190083f6\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:327)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:85)\r\n\tat pages.HDFCRCIntrstCalculationPage.calculateInterest(HDFCRCIntrstCalculationPage.java:85)\r\n\tat stepdefinitions.HDFCStepDefinition.the_user_given_with_deposite_terms_for_and(HDFCStepDefinition.java:60)\r\n\tat ✽.When the user given with \"9000\" deposite terms for \"15\", \"Yes\", \"Jun\" and \"8\"(src/test/resources/HDFCCalculator.feature:24)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "HDFCStepDefinition.verify_the_aggregate_interest_amount()"
});
formatter.result({
  "status": "skipped"
});
});