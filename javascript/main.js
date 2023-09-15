let overlay = document.querySelector(".overlay"),
	mylist = document.querySelector(".headerlist"),
	xicon = document.querySelector(".xIcon"),
	burgericon = document.querySelector(".burgericon"),
	logo = document.querySelector(".logo"),
	mobilelist = [mylist, xicon, overlay],
	[...featurebutton] = document.querySelectorAll('[name="selector"]'),
	[...pbutton] = document.querySelectorAll('[name="showingP"]');

/* function */
//function made for adding and removing calss
function removeactivation(e, removedclas, hiddeneleclass, n = 0) {
	if (n == "add") {
		if (e.classList.contains(removedclas) !== false) {
			e.classList.remove(removedclas);
			let mye = document.querySelector(`div.${e.value}`);
			mye.classList.add(hiddeneleclass);
			return "done";
		}
	} else {
		if (e.classList.contains(removedclas) !== false) {
			e.classList.remove(removedclas);
			let mye = document.querySelector(`div.${e.value}`);
			mye.classList.remove(hiddeneleclass);
			return "done";
		}
	}
}

/* making the list in mobile */

if (window.outerWidth <= 784) {
	mylist.classList.add("non-active");
}
/* opening the list*/
burgericon.addEventListener("click", (e) => {
	burgericon.classList.toggle("non-active");
	xicon.classList.toggle("non-active");
	mylist.classList.toggle("non-active");
	overlay.classList.toggle("non-active");
	logo.classList.add("logo-overlay");
	window.scroll;
	console.log("iam here");
});
/* closing the list*/
xicon.addEventListener("click", (e) => {
	burgericon.classList.toggle("non-active");
	xicon.classList.toggle("non-active");
	mylist.classList.toggle("non-active");
	overlay.classList.toggle("non-active");
	logo.classList.remove("logo-overlay");
});

/*  prevent bug from taking place when resize screen  */
window.onresize = (e) => {
	if (window.outerWidth > 784) {
		for (let i = 0; i < mobilelist.length; i++) {
			if (mobilelist[i].classList.contains("non-active")) {
				if (i == 0) {
					mobilelist[i].classList.remove("non-active");
				}
			} else {
				if (i != 0) {
					mobilelist[i].classList.add("non-active");
				}
			}
		}
	}
	if (window.outerWidth <= 784) {
		for (let i = 0; i < mobilelist.length; i++) {
			if (mobilelist[i].classList.contains("non-active")) {
				continue;
			} else {
				mobilelist[i].classList.add("non-active");
			}
		}
		if (burgericon.classList.contains("non-active")) {
			burgericon.classList.remove("non-active");
		}
		if (logo.classList.contains("logo-overlay")) {
			logo.classList.remove("logo-overlay");
		}
	}
};
/* end list in mobile */

/*start feature slider */
featurebutton;
for (let j = 0; j < featurebutton.length; j++) {
	featurebutton[j].addEventListener("click", (e) => {
		for (let i = 0; i < pbutton.length - 1; i++) {
			removeactivation(featurebutton[i], "onclick", "non-active", "add");
		}

		featurebutton[j].classList.add("onclick");
		let mye = document.querySelector(`div.${featurebutton[j].value} `);
		mye.classList.remove("non-active");
	});
}

/*end feature slider */

/* Start showing FAQ section pragraph */

for (let j = 0; j < pbutton.length; j++) {
	pbutton[j].addEventListener("click", () => {
		if (removeactivation(pbutton[j], "updownbutton", "showdiv") === "done") {
			return;
		} else {
			for (let i = 0; i < pbutton.length; i++) {
				removeactivation(pbutton[i], "updownbutton", "showdiv");
			}

			pbutton[j].classList.add("updownbutton");
			let myp = document.querySelector(`div.${pbutton[j].value} `);
			myp.classList.add("showdiv");
		}
	});
}
/* end FAQ*/

//check emeail
let regexp = /\w+@\w+\.\w+/;

let emailbutton = document.querySelector(".emailverifaction"),
	theemail = document.querySelector('[name="email"]'),
	span = document.querySelector(".email-error");

emailbutton.onclick = (e) => {
	if (
		theemail.value.match(regexp) == null ||
		theemail.value.match(regexp).length > 1
	) {
		e.preventDefault();
		if (span.classList.contains("non-active")) {
			span.classList.remove("non-active");
		}
	}
};
