// app/api/selenium/route.js
import { Builder, By } from "selenium-webdriver";
import { writeFileSync } from "fs";

export async function POST(request) {
  try {
    const { name, date , time, lat,lon } = await request.json();

    const driver = new Builder()
      .forBrowser("chrome")
      .usingServer("http://localhost:4444/wd/hub")
      .build();
    // Navigate to your target website
    await driver.get("https://apikundli.vercel.app/");

    // Fill input field
    const inputElement = await driver.findElement(By.id("name"));
    await inputElement.sendKeys(name);
    const dateElement = await driver.findElement(By.id("date"));
    await dateElement.sendKeys(date);
    const timeElement = await driver.findElement(By.id("time"));
    await timeElement.sendKeys(time);
    const latElement = await driver.findElement(By.id("lat"));
    await latElement.sendKeys(lat);
    const lonElement = await driver.findElement(By.id("lon"));
    await lonElement.sendKeys(lon);

    // Interact with the canvas
    const canvasElement = await driver.findElement(By.id("canvas_chart"));
    const canvasBase64 = await canvasElement.takeScreenshot();

    // Save the canvas as an image
    const outputPath = "./public/canvas_image.png";
    writeFileSync(outputPath, canvasBase64, "base64");

    // Clean up Selenium session
    await driver.quit();

    return new Response(
      JSON.stringify({ message: "Canvas scraped", imagePath: "/canvas_image.png" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ message: "An error occurred", error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}




// const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch("/api/selenium", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ name, time, date, lat, lon }),
//       });

//       const data = await response.json();
//       setResponseMessage(data.message || "Error");
//     } catch (error) {
//       setResponseMessage("An error occurred: " + error.message);
//     }
//   };