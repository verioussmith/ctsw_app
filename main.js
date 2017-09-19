function fetchIssues() {
	var issues = JSON.parse(localStorage.getItem('issues'));
	var issuesList = document.getElementByID('issuesList');

	issuesList.innerHTML = '';
}