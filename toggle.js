let isDOBOpen = false;
const settingCogEL = document.getElementById("settingIcon");
const settingContentEL = document.getElementById("settingContent");

const toggleDateOfBirthSelector = () => {
    if (isDOBOpen) {
        settingContentEL.classList.add("hide");
    } else {
        settingContentEL.classList.remove("hide");
    }

    isDOBOpen = !isDOBOpen;
    console.log("Toggle");
};

settingCogEL.addEventListener("click", toggleDateOfBirthSelector);