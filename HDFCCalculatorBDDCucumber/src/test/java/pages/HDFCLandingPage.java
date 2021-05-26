package pages;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

import net.serenitybdd.core.annotations.findby.FindBy;
import net.serenitybdd.core.pages.PageObject;


public class HDFCLandingPage extends PageObject{
	
	
	
	WebDriver driver;
	
	public HDFCLandingPage() {
	    super();
	}
	
	@FindBy(id="SeniorNo")
	WebElement chooseCitizenOption;
	
	@FindBy(xpath="//div[@class=\"selectbg\"]/select")
	WebElement selectFixedDepositeType;
	
	@FindBy(id="months")
	WebElement giveMonthsValue;
	
	@FindBy(id="days")
	WebElement giveDaysValue;
	
	@FindBy(xpath="//a[@class=\"nextBtn\"]")
	WebElement clickNext;
	
	
//	public HDFCLandingPage(WebDriver driver)
//	{
//		this.driver=driver;
//		PageFactory.initElements(driver, this);
//	}
	public void HDFCHomePageLaunch() throws InterruptedException {
		getDriver().get("https://v1.hdfcbank.com/htdocs/common/fd/fixed-deposit.html#");
		getDriver().manage().window().maximize();
		Thread.sleep(3000);
	}
	
	public void chooseCitizenOption()
	{
		getDriver().manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);
		WebElement chooseCitizenOption = getDriver().findElement(By.id("SeniorNo"));
		chooseCitizenOption.click();
	}
	
	public void selectFixedDepositType(String paymentType)
	{
		getDriver().manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);
		Select s=new Select(getDriver().findElement(By.xpath("//div[@class=\"selectbg\"]/select")));
		s.selectByVisibleText(paymentType);
	}
	
	public void provideDepositeTerms(String months,String days)
	{
		getDriver().manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);
		giveMonthsValue.click();
		giveMonthsValue.sendKeys(months);
		giveDaysValue.click();
		giveDaysValue.sendKeys(days);
		clickNext.click();
		getDriver().manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);
	}

}
