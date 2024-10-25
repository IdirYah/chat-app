import { Link } from "react-router-dom"
import GenderCheckbox from "./GenderCheckbox"
import { useState } from "react"

const SignUp = () => {
  const [inputs,setInputs] = useState({
    fullName:"",
    userName:"",
    password:"",
    confirmPassword:"",
    gender:""
  })
  const handleCheckGender = (gender)=>{
    setInputs({...inputs,gender:gender})
  }
  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(inputs);
  }
  return (
    <div className="flex flex-col items-center justify-center mx-auto min-w-96">
      <div className="w-full p-6 bg-gray-400 bg-opacity-0 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          SignUp
          <span className="text-blue-500">ChatApp</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="p-2 label">
              <span className="text-base label-text">FullName</span>
            </label>
            <input type="text" placeholder="YAHIAOUI Idir" className="w-full h-10 input input-bordered" value={inputs.fullName} onChange={(e)=>setInputs({...inputs,fullName:e.target.value})} />
          </div>
          <div>
            <label className="p-2 label">
              <span className="text-base label-text">UserName</span>
            </label>
            <input type="text" placeholder="IdirYah" className="w-full h-10 input input-bordered" value={inputs.userName} onChange={(e)=>setInputs({...inputs,userName:e.target.value})} />
          </div>
          <div>
            <label className="p-2 label">
              <span className="text-base label-text">Password</span>
            </label>
            <input type="password" placeholder="Enter password" className="w-full h-10 input input-bordered" value={inputs.password} onChange={(e)=>setInputs({...inputs,password:e.target.value})} />
          </div>
          <div>
            <label className="p-2 label">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input type="password" placeholder="confirm password" className="w-full h-10 input input-bordered" value={inputs.confirmPassword} onChange={(e)=>setInputs({...inputs,confirmPassword:e.target.value})} />
          </div>
          <GenderCheckbox onCheckBoxChange={handleCheckGender} selectedGender={inputs.gender} />
          <Link to="/login" className="inline-block mt-2 text-sm hover:underline hover:text-blue-600">
            Already have an account?
          </Link>
          <div>
            <button className="mt-2 btn btn-block btn-sm">
              SignUp
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp