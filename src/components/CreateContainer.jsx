import React, {useState} from 'react'
import {motion} from 'framer-motion'
import {MdFastfood} from 'react-icons/md'
import {categories} from '../utils/data'
const CreateContainer = () => {

    const [title, setTitle] = useState("")
    const [calories, setCalories] = useState("")
    const [ price, setPrice] = useState("")
    const [imageAsset, setImageAsset] = useState(null)
    const [alertStatus, setAlertStatus] = useState("danger")
    const [category, setCategory] = useState(null)
    const [fields, setFields] = useState(false) //for error checking of input fields
    const [msg, setMsg] = useState(null) // alert message

    return (
        <div className='flex items-center justify-center'>
            <div className="w-[80%] flex flex-col items-center justify-center p-2 border border-gray-300 rounded-lg gap-4">
                {
                    fields && (
                        <motion.p 
                            initial= {{opacity: 0}}
                            animate= {{opacity: 1}}
                            exit= {{opacity: 0}}
                            className={`w-full p-2 rounded-lg text-center text-lg font-semibold ${alertStatus === 'danger' ? 'bg-red-400 text-red-800' : 'bg-emerald-800'}`}>
                            {msg}
                        </motion.p>
                    )
                }

                <div className='w-full py-2 border-b border-gray-300 flex items-center gap-2'>
                    <MdFastfood  className='text-xl text-gray-700' />
                    <input 
                        className='w-full h-full text-lg bg-transparent font-semibold outline-none border-none placeholder:text-gray-300 text-textColor'
                        type="text" 
                        placeholder='Enter a title' 
                        required value={title}  
                        onChange ={(e) => setTitle(e.target.value)}
                    />
                </div>

                <div className='w-full'>
                    <select className='outline-none border-gray-200 rounded-md cursor-pointer w-full p-2 border-b-2 text-base' onChange={(e)=> setCategory(e.target.value)} name="categories" id="categories">
                        <option className='bg-white ' value="other">Select Category</option>
                        {
                            categories && categories.map((category)=>(
                                <option className='text-base border-0 outline-none capitalize bg-white text-headingColor' key={category.id} value={category.urlParamName}> {category.name}</option>
                            ))
                        }
                    </select>
                </div>

                <div className='group flex justify-center items-center flex-col border-2 border-dotted border-gray-300 w-full h-225 md:h-420 cursor-pointer rounded-lg'>
                    
                </div>
            </div>
        </div>
    )
}

export default CreateContainer