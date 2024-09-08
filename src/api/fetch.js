// api.js
import axios from 'axios';

export const fetchJsonData = async () => {
    const token = process.env.REACT_APP_GITHUB_TOKEN;
    const repoOwner = 'swet-s';
    const repoName = 'CV';
    const filePath = 'resume.json';

    const response = await axios.get(`https://api.github.com/repos/${repoOwner}/${repoName}/contents/${filePath}`, {
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/vnd.github.v3.raw',
        },
    });

    return response.data;
};
