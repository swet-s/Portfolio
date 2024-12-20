import axios from "axios";

export const fetchJsonData = async () => {
    const token = process.env.REACT_APP_GITHUB_TOKEN;
    const repoOwner = "swet-s";
    const repoName = "CV";
    const filePath = "resume.json";

    const response = await axios.get(
        `https://api.github.com/repos/${repoOwner}/${repoName}/contents/${filePath}`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
                Accept: "application/vnd.github.v3.raw",
            },
        }
    );

    return response.data;
};

export const fetchPdf = async () => {
    const token = process.env.REACT_APP_GITHUB_TOKEN;
    const repoOwner = "swet-s";
    const repoName = "CV";
    const filePath = "resume.pdf";

    const response = await axios.get(
        `https://api.github.com/repos/${repoOwner}/${repoName}/contents/${filePath}`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
                Accept: "application/vnd.github.v3.raw",
            },
            responseType: "arraybuffer",
        }
    );

    const pdfBlob = new Blob([response.data], { type: "application/pdf" });
    const pdfUrl = URL.createObjectURL(pdfBlob);
    return pdfUrl;
};

export const handlePdf = async (shouldDownload, fileName = "resume.pdf") => {
    try {
        const url = await fetchPdf();

        if (shouldDownload) {
            const link = document.createElement("a");
            link.href = url;
            link.download = fileName;
            link.click();
            URL.revokeObjectURL(url); // Clean up the URL
        } else {
            window.open(url, "_blank");
        }
    } catch (error) {
        console.error("Error fetching or handling PDF:", error);
    }
};
