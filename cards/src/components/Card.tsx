interface Props {
    title: string;
    description: string;
    image?: string;
    link:string
}

export default  function Card ({title, description, image, link}: Props) {
    return (
        <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card">
                {image ? <img src={image} className="card-img-top" alt="..."/>  : ""}
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href={link} className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    )
}