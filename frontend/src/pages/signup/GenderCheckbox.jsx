// eslint-disable-next-line react/prop-types
const GenderCheckbox = ({onCheckboxChange, selectedGender}) => {
  return (
    <div className="flex">
        <div className="form-control">
            <label className={`label gap-2 cursor-pointer ${selectedGender === 'female' ? 'selected' : ""}`}>
                <span className="label-text">Homem</span>
                <input type="checkbox" 
                className="checkbox border-slate-900"
                checked={selectedGender === 'male'}
                onChange={()=> onCheckboxChange('male')}
                />
            </label>
        </div>
        <div className="form-control">
            <label className={`label gap-2 cursor-pointer ${selectedGender === 'female' ? 'selected' : ""}`}>
                <span className="label-text">Mulher</span>
                <input type="checkbox" 
                className="checkbox border-slate-900"
                checked={selectedGender === 'female'}
                onChange={()=> onCheckboxChange('female')}
                />
            </label>
        </div>
    </div>
  )
}

export default GenderCheckbox