
const base = 'https://api.github.com'

export async function getRepositoriesByLanguage(props) {
    const uri = `${base}/search/repositories?per_page=${props.pageNumber}&q=${props.language}`
    const response = await fetch(uri);
    const responseJSON = await response.json();
    return responseJSON
}

export async function getTopContributors({ fullname, numberPage }) {

    const uri = `${base}/repos/${fullname}/contributors?per_page=${numberPage}`
    const response = await fetch(uri);
    const responseJSON = await response.json();
    return responseJSON
}
