package stepdefinitions;

import org.openqa.selenium.WebDriver;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import net.serenitybdd.core.pages.PageObject;
import net.thucydides.core.annotations.Managed;
import pages.HDFCInterestCalculationPage;
import pages.HDFCLandingPage;
import pages.HDFCRCIntrstCalculationPage;

public class HDFCStepDefinition extends PageObject {
	
//	@Managed
//	WebDriver driver;
	
//	WebDriver driver = getDriver();
	HDFCLandingPage hdfcLandingPage = new HDFCLandingPage();
	HDFCInterestCalculationPage hdfcCalculatorePage = new HDFCInterestCalculationPage();
	HDFCRCIntrstCalculationPage hdfcRCIntrstCalculationPage = new HDFCRCIntrstCalculationPage();
	
	@Given("^a user landed on the hdfc FD calculator page$")
	public void a_user_landed_on_the_hdfc_FD_calculator_page() throws Throwable {
		hdfcLandingPage.HDFCHomePageLaunch();
		
	}

	@When("^the user given with \"([^\"]*)\" deposite terms \"([^\"]*)\" and \"([^\"]*)\"$")
	public void the_user_given_with_deposite_terms_and(String typeOfFixedDeposit, String months, String days) throws Throwable {
		
		hdfcLandingPage.chooseCitizenOption();
		hdfcLandingPage.selectFixedDepositType(typeOfFixedDeposit);
		hdfcLandingPage.provideDepositeTerms(months,days);
		
	}

	@When("^the fixed deposite \"([^\"]*)\" and \"([^\"]*)\"$")
	public void the_fixed_deposite_and(String date, String amountOfDeposit) throws Throwable {
	   
		hdfcCalculatorePage.selectDateOfFD(date);
		hdfcCalculatorePage.fixedDepositAmount(amountOfDeposit);
		
	}

	@Then("^I verify the aggregate interest amount$")
	public void i_verify_the_aggregate_interest_amount() throws Throwable {
		hdfcCalculatorePage.aggregateInterestAmount();
	}
	
	@Given("^a user landed on the hdfc RD calculator page$")
	public void a_user_landed_on_the_hdfc_RD_calculator_page() throws Throwable {
		hdfcRCIntrstCalculationPage.HDFCRCCalculatorPage();
	}

	@When("^the user given with \"([^\"]*)\" deposite terms for \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\" and \"([^\"]*)\"$")
	public void the_user_given_with_deposite_terms_for_and(String amountOfDeposit, String depositMonths, String citizenType, String startMonth, String startDate) throws Throwable {
		hdfcRCIntrstCalculationPage.calculateInterest(amountOfDeposit,depositMonths,citizenType,startMonth,startDate);
	}
	

	@Then("^verify the aggregate interest amount$")
	public void verify_the_aggregate_interest_amount() throws Throwable {
	   
	}

}
