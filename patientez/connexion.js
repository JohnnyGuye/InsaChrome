chrome.storage.onChanged.addListener(function(changes, namespace) { //On va regarder ce qui est tick�
	for (key in changes) {
		if((key=="services" && (changes["services"].newValue == "CAS")) || (key=="state" && (changes["state"].newValue == "connect�"))) { //Si on est connect� � CAS
			chrome.runtime.sendMessage({method: "timetable"});
		}
	}
});