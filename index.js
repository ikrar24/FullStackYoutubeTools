const apiKey = "AIzaSyARzsIDwkskmRecmVTrapsmWPV0fPSKXqI";
const api = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=";


const lang = document.getElementById("lang");
const title = document.getElementById("title");
const Case = document.getElementById("Case");
const Generate = document.getElementById("Generate");
const GeneratedDescriptions = document.getElementById("GeneratedDescriptions");
const Category = document.getElementById("Category");
const copy = document.getElementById("copy");
const GeneratingBox = document.querySelector(".GeneratingBox");
const GenerateDescriptionsPara = document.querySelector(".GenerateDescriptionsPara");
const GenerateResults = document.querySelector(".GenerateResults");

copy.style.display = "none";

Generate.addEventListener("click", async () => {
    if (Category.value.trim() === "NotSelect") {
        alert("⚠️ Please enter Your Category before generating!");
        Category.style.border = "2px solid red";
        return;
    } else {
        Category.style.border = "1px solid black";
    }



     // **Title validation**: Agar title khali hai toh request API par na jaye
     if (title.value.trim() === "") {
        alert("⚠️ Please enter a title before generating!");
        title.style.border = "2px solid red";
        return; // **API request nahi jayegi**
    }else {
        title.style.border = "1px solid black";
    }



    GeneratingBox.style.display = "flex";
    GeneratedDescriptions.style.display = "block";

    try {
        let response = await fetch(`${api}${apiKey}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                contents: [
                    {
                        parts: [
                            {
                                text: `Generate a fully SEO-friendly description in 425 words for a YouTube video titled '${title.value}' and my video category is '${Category.value}'. Write in ${lang.value} language. Include 5 #hashtags and emojis.`
                            }
                        ]
                    }
                ]
            })
        });
        let result = await response.json();
        if (result.candidates && result.candidates.length > 0) {
            let description = result.candidates[0].content.parts[0].text;

            // **Formatting**
            description = description
                .replace(/\*/g, "<b>") // "*" ko "<b>" me replace karega for bold text
                .replace(/<b>(.*?)<b>/g, "<b>$1</b>") // **Bold text fix**
                .replace(/\n/g, "<br>"); // **Line breaks add**

            GeneratingBox.style.display = "none";
            GenerateDescriptionsPara.style.display = "block";
            GenerateResults.style.display = "block";
            copy.style.display = "flex";

            GenerateResults.innerHTML = description;
        } else {
            throw new Error("Invalid response");
        }
    } catch (error) {
        console.error("Error:", error);
        GeneratingBox.style.display = "none";
        GenerateResults.innerHTML = "<b>⚠️ Sorry, an error occurred while generating the description.</b>";
        copy.style.display = "none";
    }

    title.value = "";
});

// **Copy Button Functionality**
copy.addEventListener("click", () => {
    const tempElement = document.createElement("textarea");
    tempElement.value = GenerateResults.innerText; // **Formatted content copy karega**
    document.body.appendChild(tempElement);
    tempElement.select();
    document.execCommand("copy");
    document.body.removeChild(tempElement);
    alert("✅ Description copied successfully!");
});












document.addEventListener("DOMContentLoaded", function () {
    const questions = document.querySelectorAll(".QuestionsBox");

    questions.forEach((box) => {
        const question = box.querySelector(".Questions");
        const answer = box.querySelector(".ans");
        const icon = box.querySelector(".icon");

        question.addEventListener("click", function () {
            const isActive = answer.style.display === "block";

            // Sabhi answers ko hide karna
            document.querySelectorAll(".ans").forEach((ans) => {
                ans.style.display = "none";
            });

            document.querySelectorAll(".icon").forEach((icon) => {
                icon.textContent = "+";
            });

            // Agar answer already visible hai to usko hide karna, nahi to show karna
            if (!isActive) {
                answer.style.display = "block";
                icon.textContent = "-";
            }
        });
    });
});
