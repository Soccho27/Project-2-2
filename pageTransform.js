const changePage = (s) => {
    window.location.href = s;
};

const addClickListener = (elementId, handler) => {
    const el = document.getElementById(elementId);
    if (el) {
        el.addEventListener('click', handler);
    } else {
        console.warn(`Element with ID '${elementId}' not found.`);
    }
};

addClickListener("home", () => changePage('home.html'));
addClickListener("market", () => changePage("marketPlace.html"));
addClickListener("Tutorials", () => changePage("tutorial.html"));
addClickListener("Weather", () => alert('coming soon!'));
addClickListener("Blog", () => changePage("blog.html"));
addClickListener("AgriDoctor", () => changePage("agridoc.html"));

addClickListener("logIn", () => changePage("logIn.html"));
addClickListener("signUp", () => changePage("signUp.html"));

addClickListener("smartTutorials", () => changePage("tutorial.html"));
addClickListener("exploreMarket", () => changePage("marketPlace.html"));

addClickListener("CreateSignUp", () => changePage("signUp.html"));
addClickListener("watchDemo", () => alert('coming soon!'));

addClickListener("lastMarket", () => changePage("marketPlace.html"));
addClickListener("lastTutorials", () => changePage("tutorial.html"));
addClickListener("lastWeather", () => alert('coming soon!'));
addClickListener("lastBlog", () => changePage("blog.html"));
addClickListener("lastAgriDoctor", () => changePage("agridoc.html"));