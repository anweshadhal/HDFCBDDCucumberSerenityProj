package runner;

import org.junit.runner.RunWith;
import net.serenitybdd.cucumber.CucumberWithSerenity;
import cucumber.api.CucumberOptions;

@RunWith(CucumberWithSerenity.class)
@CucumberOptions(
		features = "src/test/resources/HDFCCalculator.feature"
		,glue={"stepdefinitions"},
		plugin={"pretty", "html:cucumberReport/cucumber-html-report","json:cucumberReport/cucumber-report.json"}
		
		,tags={"@RecurringDeposite"}
		//,tags={"@FixedDeposite"}
		//https://github.com/serenity-bdd/serenity-cucumber/issues/261
		
		)
public class HDFCRunner {

}








/*To see the serenity report in follow the below procedure
 * 1.Remove the older target folder and then clean the project(Project--> Clean... -->select the project n click on clean)
 * 2.Then Run the serenity BDD Code wih junit
 * 3.Then right click on project-->Show in System Explorer-->then on the file path type cmd and enter
 * 4.then type gradle aggregate
 * 5.then come to target-->site-->serenity
 * 6.You will be able to see the index.html report
 * 
 */
