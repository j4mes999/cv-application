export default function Section({
    title,
    icon,
    fields
}){
     return (
        <>
        <div className="section">
            <img src={icon} alt="icon" />
            <h2>{title}</h2>
            {
                fields.map((field, index) => (
                    <div key={index} className="field">
                        <label htmlFor={'section'+index}>{field.title}</label>
                        <input type="text" className="text" id={'section'+index}></input>
                    </div>
                ))
            }
          
        </div>
        </>
     )

}