import axios from "axios";

export default async function downloadDirect(req, res) {
  const { url } = req.body;

  if (!url) {
    return res.status(400).json({ success: false, message: "URL is required" });
  }

  try {
    // URL se image ko stream me lo
    const response = await axios.get(url, {
      responseType: "stream"
    });

    // content-type check (sirf images)
    const contentType = response.headers["content-type"];
    if (!contentType.startsWith("image/")) {
      return res.status(400).json({
        success: false,
        message: "Provided URL is not an image"
      });
    }

    // filename extract
    const filename = "image-" + Date.now() + "." + contentType.split("/")[1];

    // download headers set
    res.setHeader("Content-Type", contentType);
    res.setHeader("Content-Disposition", `attachment; filename="${filename}"`);

    // Stream directly to client
    response.data.pipe(res);

  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Failed to download image",
      error: err.message
    });
  }
}
