function CmsInputs(props){
return(
    <div className="input-cont mb-3">
            <label
              htmlFor={props.id}
              className="form-label text-primary"
            >
              {props.label}
            </label>
            <input
              type={props.type}
              className={props.className ?? "form-control border border-primary"}
              id={props.id}
              placeholder={props.placeholder}
            />
          </div>
)
}
export default CmsInputs