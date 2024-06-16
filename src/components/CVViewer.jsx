export default function CVViewer({ data }){
    return (
        <div>
          {data.map((field, index) => (
            <p key={index}>{field.title}: {field.value}</p>
          ))}
        </div>
      );
}