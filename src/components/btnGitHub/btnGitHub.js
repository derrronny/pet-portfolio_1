import github from "./../../img/githubicon.png"

const BtnGitHub = ({link}) => {
    return (
        <a href={link} target="_blank" rel="noreferrer" className="btn-outline">
        <img src={github} width="36px" height="36px" alt="1"/>
        GitHub repo
        </a>
    )
}

export default BtnGitHub
