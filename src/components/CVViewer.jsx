export default function CVViewer({ data }){
    return (
        <div>
          {data.map((field, index) => (
            <p key={index}>{field}</p>
          ))}
        </div>
      );
}