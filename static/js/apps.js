// Run this function when the page is loaded

$(async function () {
	console.log("Okay. Now I have to Render all the Apps");
	const md = window.markdownit()

	// Check App Filter
	if(!window.appFilter){
		window.appFilter = "all"
	}


	await renderApps();
	renderTags()

	// Handle Opening Modal
	document.querySelectorAll(".app-button").forEach((btn) => {
		btn.addEventListener("click", async(e) => {
			const id = e.target.id;

			// Find App By Id
			// Load Apps from Local Storage
			const data = await $.getJSON("https://d9k4c3n8.stackpathcdn.com/api/v1/apps");


			const app = data.apps.find((app) => app.id == id);

			var description = app.manifest.description.replace(/This.+\<\/upstream>.*/gm, "")
			var result = md.render(description);

			document.getElementById("appModalName").innerText = app.manifest.title;
			document.getElementById("appModalDescription").innerHTML = result;
			document.getElementById("appModalIcon").src = app.iconUrl;
		});
	});

	// Handle Tag Button Click
	$(".tag-btn").on("click", (e) => {

		// Setting filter in Window
		window.appFilter = e.target.id
		renderApps()
	})
});

// Function to capitalize only the first letter of tag
function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

const renderTags = async() => {

	// Get Tags container
	const ref = document.getElementById("tags-container")
	const tags = JSON.parse(localStorage.getItem("tags"))

	// Add Button to the container
	tags.forEach(tag => {
		const button = document.createElement("button")
		button.id = tag.name
		button.type = "button"
		button.classList.add("tag-btn", "btn", "btn-secondary", "btn-sm", "m-1")
		button.innerText = capitalizeFirstLetter(tag.name)
		ref.append(button)
	})
}

const renderApps = async() => {
	// Fetch Data from DB

	const data = await $.getJSON("/apps.json");

	// Filtering Just Used Attributes (Title, Description, Icon etc...)
	const mappedApps = data.apps.map((app) => {
		const {
			title,
			description,
			icon,
			tagline,
			tags
		} = app.manifest;
		const img = app.iconUrl;
		const id = app.id;

		return {
			id,
			title,
			description,
			icon,
			img,
			tagline,
			tags
		};
	})

	if (!localStorage.getItem("tags")){

		// Adjacency List
		let tagsList = {}

		mappedApps.forEach( app => {
			app.tags.forEach( tag => {
				if (!tagsList[tag]){
					tagsList = {
						...tagsList,
						[tag]: 1
					}
				} else {
					tagsList = {
						...tagsList,
						[tag]: tagsList[tag] + 1
					}
				}
			})
		})
		
		// Take just the first 15 tags which are most popular inside the collection of apps.
		const orderedList = Object.entries(tagsList).sort((a,b) => b[1] - a[1]).slice(0, 15).map(item => {return {name: item[0],value:item[1]}})

		// Saving Tags in Local Storage
		localStorage.setItem("tags", JSON.stringify(orderedList))
	} else {
		// Tags are already available
		//console.log(JSON.parse(localStorage.getItem("tags")));
	}

	// Saving Mapped Apps For Modal
	if (!localStorage.getItem("apps")) {
		console.log("Saving Apps in Local Storage");
		localStorage.setItem("apps", JSON.stringify(mappedApps));
	}


	// Computing Categories
	const tags = JSON.parse(localStorage.getItem("tags"))
	const categories = tags.map( tag => {
		return {
			title: tag.name,
			description: "",
			apps: mappedApps.filter(app => app.tags.includes(tag.name))
		}
	})
	
	// Main Category
	const mainCategory = {
		title: "Tutte le app",
		description: "",
		apps: mappedApps,
	};
	
	categories.splice(0, 0, mainCategory)
	
	
	//console.log("Categories:", categories);

	// Main Section - Where Categories Must be Rendered
	const appsSection = document.querySelector("#appsSection");
	appsSection.innerHTML = ""

	const newSection = document.createElement("section");

	// Filtered Categories
	let filteredCategories = categories
	if(window.appFilter != 'all'){
		filteredCategories = categories.filter(cat => cat.title == window.appFilter)
	} else {
		filteredCategories = categories
	}

	// Category 
	filteredCategories.forEach( category => {


	const sectionDiv = document.createElement("div");
	sectionDiv.classList.add("container", "mt-5");

	// Title and Description
	const firstRow = document.createElement("div");
	firstRow.classList.add("row");

	const titleRow = document.createElement("div");
	titleRow.classList.add("row", "text-center");

	const categoryTitle = document.createElement("h3");
	categoryTitle.innerText = capitalizeFirstLetter(category.title)

	const categoryDescription = document.createElement("p");
	categoryDescription.innerText = category.description;

	//
	// Apps
	//
	const appsRow = document.createElement("div");
	appsRow.classList.add(
		"g-3",
		"row",
		"row-cols-2",
		"row-cols-lg-4",
		"row-cols-md-3",
		"row-cols-sm-2"
	);

	let filter = ""
	let filteredApps = category.apps

	// Card Image
	filteredApps.forEach((app, index) => {


		const appCol = document.createElement("div");
		appCol.classList.add("col");
		const appColDiv = document.createElement("div");
		appColDiv.classList.add(
			"border-secondary",
			"card",
			"d-flex",
			"p-1",
			"h-100",
			"text-center"
		);
		const appImg = document.createElement("img");
		appImg.src = app.img;
		appImg.style.height = "75px";
		appImg.classList.add("m-1", "mx-auto");
		//Card Title & Description
		const cardBody = document.createElement("div");
		cardBody.classList.add("card-body");
		const cardTitle = document.createElement("h4");
		cardTitle.classList.add("card-title");
		cardTitle.innerText = app.title;
		const cardTagline = document.createElement("p");
		cardTagline.innerHTML = app.tagline;

		//Card Button
		const cardButton = document.createElement("button");
		cardButton.classList.add("btn", "btn-link", "app-button", "stretched-link");
		cardButton.id = app.id;
		cardButton.setAttribute("data-bs-toggle", "modal");
		cardButton.setAttribute("data-bs-target", "#appModal");

		cardButton.innerText = "Scopri";

		// Creating the DOM
		cardBody.append(cardTitle, cardTagline);
		appColDiv.append(appImg, cardBody, cardButton);
		appCol.append(appColDiv);

		// All Apps Here Inside
		appsRow.append(appCol);
	});

	titleRow.append(categoryTitle, categoryDescription);
	firstRow.append(titleRow);
	sectionDiv.append(firstRow);
	sectionDiv.append(appsRow);
	newSection.append(sectionDiv);

	appsSection.prepend(newSection);

})

};