import curriculumVitae from "../assets/download/cv-steve-basse.pdf"

const DownloadCV = () => {
    return (
       <div className="download-cv">
           <form method="get" action={curriculumVitae} target="_blank">
            <button type="submit">Get my resume</button>
           </form>
       </div>
    );
};

export default DownloadCV;