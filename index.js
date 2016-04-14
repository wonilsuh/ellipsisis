/*-----------------------------------------------------
 *	truncates text and adds ellipsis at the end
	TEST CASE:
		var t= 'CHICAGO — Racism has contributed to a long, systemic pattern of institutional failures by this city’s police department in which police officers have mistreated people, operated without sufficient oversight, and lost the trust of residents, a task force assigned by Mayor Rahm Emanuel has found. Document: Chicago Police Accountability Task Force Report The report, issued on Wednesday, was blistering, blunt and backed up by devastating statistics. Coincidentally, it was released as city leaders were installing a new, permanent superintendent for the Chicago Police Department. “The community’s lack of trust in CPD is justified,” the task force wrote. “There is substantial evidence that people of color — particularly African-Americans — have had disproportionately negative experiences with the police over an extended period of time.” The report gives validation to complaints made for years by African-American residents here who have said they were unfairly targeted by officers without justification on a regular basis. It raises the pressure on Mr. Emanuel and other Chicago leaders to make significant changes at a pivotal time for the nation’s second largest municipal police force, which has been under intense fire from residents and under scrutiny from the federal authorities. It includes more than 100 recommendations for change. <a href="test">hello</a>';
		ellipsisis(t, 30);
 */

// console.log('ellipsisis!!!');

var ellipsisis = function(text, max){
	if(text.length>max){
		var wordsArray = text
			.substring(0,max).split(' ')
		;
		wordsArray.pop();
		var testCase = wordsArray.toString().replace(/,/g, ' ').trim();
		var output = text.substring(0,testCase.length);
		output = output + ' ...';
	}else{
		var output = text;
	}
	return output;
}


module.exports = ellipsisis;