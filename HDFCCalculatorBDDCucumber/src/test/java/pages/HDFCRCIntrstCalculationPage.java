package pages;


import java.util.List;
import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

import net.serenitybdd.core.annotations.findby.FindBy;
import net.serenitybdd.core.pages.PageObject;

public class HDFCRCIntrstCalculationPage extends PageObject {
	
	
	
	@FindBy(id="loanamt")
	WebElement depositAmount;
	
	@FindBy(xpath="*//div[@class=\"monthDropdwn\"]/select")
	WebElement monthsFor;
	
	@FindBy(xpath="*//ul[@class=\"yes-no-button\"]/li/input[@value=\"0\"]")
	WebElement citizenOptionNo;
	
	@FindBy(xpath="*//ul[@class=\"yes-no-button\"]/li/input[@value=\"1\"]")
	WebElement citizenOptionYes;
	
	@FindBy(xpath="*//button[@class=\"ui-datepicker-trigger\"]")
	WebElement clickCalender;
	
	@FindBy(xpath="*//div[@class=\"ui-datepicker-title\"]/select[@class=\"ui-datepicker-month\"]")
	WebElement monthPicker;
	
	@FindBy(xpath="*//table[@class=\"ui-datepicker-calendar\"]/tbody/tr")
	List<WebElement> dateRows;
	
	@FindBy(xpath="*//a[contains(text(),\"Calculate\")]")
	WebElement calculateBtn;
	
	public void HDFCRCCalculatorPage()
	{
		getDriver().get("https://www.hdfcbank.com/personal/tools-and-calculators/rd-calculator");
		getDriver().manage().window().maximize();
		String title=getDriver().getTitle();
		String expectedTitle="RD Calculator – Recurring Deposit Interest Rate Calculator | HDFC Bank";
		Assert.assertEquals(expectedTitle, title);
	}

	public void calculateInterest(String amountOfDeposit,String depositMonths,String citizenType,String startMonth,String startDate) {
		
		depositAmount.click();
		depositAmount.clear();
		depositAmount.sendKeys(amountOfDeposit);
		depositAmount.sendKeys(Keys.TAB);
		Select s=new Select(monthsFor);
		s.selectByVisibleText(depositMonths);
//		String no=citizenOptionNo.getText();
//		String yes=citizenOptionYes.getText();
//		System.out.println("  No  "+ no +"  Yes  " + yes);
		if(citizenType.equalsIgnoreCase("Yes"))
		{
			citizenOptionYes.click();
		}
		clickCalender.click();
		Select se=new Select(monthPicker);
		se.selectByVisibleText(startMonth);
		System.out.println("size of rows"+dateRows.size());
		for(int i=0;i<dateRows.size();i++)
		{
			
			List<WebElement> colValueEachRow=getDriver().findElements(By.xpath("*//table[@class=\"ui-datepicker-calendar\"]/tbody/tr[" + i+1 + "]/td"));
			for(int j=0;j<colValueEachRow.size();j++)
			{
				WebElement colValue=getDriver().findElement(By.xpath("*//table[@class=\"ui-datepicker-calendar\"]/tbody/tr[" + i+1 + "]/td[" + j+1 + "]"));
				System.out.println(colValue.getText());
				String stringValue=colValue.getText().toString();
				if(stringValue.equalsIgnoreCase(startDate));
				{
					System.out.println(colValue.getText());
					System.out.println("-----------------");
					colValue.click();
				}
			}
		}
//		for(int i=0;i<dateRows.size();i++)
//		{
//			List<WebElement> values=getDriver().findElements(By.xpath("*//table[@class=\"ui-datepicker-calendar\"]/tbody/tr[" +(i+1)+ "]/td"));
//			for(int j=0;j<values.size();j++)
//			{
//				
//				WebElement dateValue=getDriver().findElement(By.xpath("*//table[@class=\"ui-datepicker-calendar\"]/tbody/tr[" +(i+1)+ "]/td[" +(j+1)+"]"));
//				
//				String stringValue=dateValue.getText().toString();
//				if(stringValue.equalsIgnoreCase(startDate))
//				{
//				dateValue.click();
//				getDriver().manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);
//				break;
//				}
//			}
//		}
		getDriver().manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);
		calculateBtn.click();
		
		
	}

}
