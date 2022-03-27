import curriculumVitae from "../assets/download/cv-steve-basse.pdf"

const DownloadCV = () => {
    return (
       <div className="download-cv">
           <form method="get" action={curriculumVitae} target="_blank">
            <button type="submit"> Télécharger mon CV</button>
           </form>
       </div>
    );
};

export default DownloadCV;