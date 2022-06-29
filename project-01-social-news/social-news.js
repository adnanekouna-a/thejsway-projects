// Social News

// Where I store links
const links = [];

// Functions
// To format links for display
const formatLinks = links => links.map(link => `${links.indexOf(link)+1}: ${link.title} (${link.url}). Author: ${link.author}`).reduce((linksList, link) => linksList + '\n' + link)
// To format correctly the numbers after "between"
const between = (startNum, endNum) => {
	if(endNum == startNum) {
		return ``	
	} else {
		return `(between ${Math.min(startNum, endNum)} and ${Math.max(startNum, endNum)})`
	}
};
// Adds http:// if needed
const formatUrl = url => {
	if(!(url.startsWith("http://") || url.startsWith("https://"))){
		return "http://" + url
	}
	return url
}

// The messgaes
const promptMsg = `Choose an option:
1 : Show links
2 : Add a link
3 : Remove a link
0 : Quit`;
const addTitleMsg = "Enter the link's title:";
const addUrlMsg = "Enter the URL:";
const addAuthorMsg = "Enter the link's author:";
const removeLinkMsg = "Enter the index of the link to be removed: ";
const noLinksMsg = "There are no added links :\'(";


// Main Program
while(1) {
	const actionChoice = prompt(promptMsg);
	// Cases
	if(Number(actionChoice) == 1) {
		// Displays the links if there are any, otherwise it shows a custom message
		switch(links.length) {
			case 0:
				alert(noLinksMsg);
				break;
			default:
				alert(formatLinks(links));
				break;
		}
		continue;
	} else if(Number(actionChoice == 2)) {
		// Adds a newLink object to store it in the links array
		const newLink = {};
		newLink.title = prompt(addTitleMsg);
		newLink.url = formatUrl(prompt(addUrlMsg));
		newLink.author = prompt(addAuthorMsg);
		links.push(newLink);
		continue;
	} else if(Number(actionChoice == 3)) {
		// Removes the link by index if provided correctly, otherwise it prompts again (Broken)
		if (links.length > 0) {
			let removedIndex = -1;
			const maxIndex = links.length+1;
			while(removedIndex < 1 || removedIndex > maxIndex){
				removedIndex = Number(prompt(`Enter the index of the link to be removed ${between(1,links.length)}`));
			};
			links.splice(removedIndex-1,1);
		} else {
			alert(noLinksMsg);
		}
			continue;
	} else {
			break;
	}

}
alert("See you later!")
