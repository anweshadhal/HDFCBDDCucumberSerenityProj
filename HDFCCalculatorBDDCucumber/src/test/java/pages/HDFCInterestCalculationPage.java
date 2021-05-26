package pages;

import java.util.List;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import net.serenitybdd.core.pages.PageObject;


public class HDFCInterestCalculationPage extends PageObject {
	
	@FindBy(xpath="//img[@title=\"Click to show the calendar\"]")
	WebElement clickCalenderIcon;
	
	@FindBy(xpath="//a[@class=\"closeBtn\"]")
	WebElement closeButton;
	
	@FindBy(xpath="//a[@data-handler=\"next\"]")
	WebElement nextMonth;
	
	@FindBy(xpath="//table[@class=\"ui-datepicker-calendar\"]/tbody/tr")
	List<WebElement> calenderRows;
	
	@FindBy(xpath="//table[@class=\"ui-datepicker-calendar\"]/tbody/tr/td[@data-month=\"5\"]")
	List<WebElement> dates;
	
	@FindBy(xpath="//input[@class=\"AmtDeposit\"]")
	WebElement depositAmount;
	
	@FindBy(xpath="//a[@class=\"calculateBtn\"]")
	WebElement calculateBtn;
	
	@FindBy(xpath="//div[@class=\"innerBox\"]/span")
	List<WebElement> outPut;
	
	@FindBy(xpath="//span[@class=\"dueDate\"]")
	WebElement dueDate;
	
	@FindBy(xpath="//div[@class=\"InterestWrap\"]/div/span")
	WebElement interestAmount;
	
	@FindBy(xpath="//div[@class=\"resultWrap\"]/div[1]/span")
	WebElement maturityValue;
	
	
	public void selectDateOfFD(String date)
	{
		getDriver().findElement(By.xpath("//img[@title=\"Click to show the calendar\"]")).click();
		closeButton.click();
		nextMonth.click();
//		System.out.println("size of the list"+calenderRows.size());
//		System.out.println("size of the list"+dates.size());
		List<WebElement> calenderRows=getDriver().findElements(By.xpath("//table[@class=\"ui-datepicker-calendar\"]/tbody/tr"));
		for(int i=0;i<calenderRows.size();i++)
		{
			List<WebElement> values=getDriver().findElements(By.xpath("*//table[@class=\"ui-datepicker-calendar\"]/tbody/tr[" +(i+1)+ "]/td"));
			for(int j=0;j<values.size();j++)
			{
				
				WebElement dateValue=getDriver().findElement(By.xpath("*//table[@class=\"ui-datepicker-calendar\"]/tbody/tr[" +(i+1)+ "]/td[" +(j+1)+"]"));
				
				String stringValue=dateValue.getText().toString();
				if(stringValue.equalsIgnoreCase(date))
				{
				dateValue.click();
				getDriver().manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);
				break;
				}
			}
		}
		
	}
	
	public void fixedDepositAmount(String amount)
	{
		depositAmount.click();
		depositAmount.sendKeys(amount);
		calculateBtn.click();
		
	}

	public void aggregateInterestAmount() {
		
		System.out.println("Maturity Value is: "+maturityValue.getText());
		System.out.println("Due date for the amount to get matured is: "+dueDate.getText());
		//System.out.println("Interest amount is: "+interestAmount.getText());
	}

}
