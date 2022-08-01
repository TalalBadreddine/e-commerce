
const FormInput = ({ label, ...inputOptions }) => {
    return(
        <div className="group">
            { label && <label className= ' form-label block mb-1' > {label}: </label>}
            <input {...inputOptions} className="form-input border-black border rounded px-2" />

        </div>
    )
}

export default FormInput