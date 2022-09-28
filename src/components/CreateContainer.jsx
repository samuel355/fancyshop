import React, {useState} from 'react'
import {motion} from 'framer-motion'
import {MdFastfood, MdCloudUpload, MdDelete, MdFoodBank, MdAttachMoney} from 'react-icons/md'
import {categories} from '../utils/data'
import Loader from './Loader'
import {ref, uploadBytesResumable, getDownloadURL} from 'firebase/storage'
import { storage } from '../firebase.config'

const CreateContainer = () => {

    const [title, setTitle] = useState("")
    const [calories, setCalories] = useState("")
    const [ price, setPrice] = useState("")
    const [imageAsset, setImageAsset] = useState(null) //Uploaded image url
    const [alertStatus, setAlertStatus] = useState("danger")
    const [category, setCategory] = useState(null)
    const [fields, setFields] = useState(false) //for error checking of input fields
    const [msg, setMsg] = useState(null) // alert message
    const [isLoading, setIsLoading] = useState(false) //


    const uploadImage =  (e) => {
        setIsLoading(true);
        const imageFile = e.target.files[0] //single image
        const imageName = `${Date.now()}_${imageFile.name}`
        const storageRef = ref(storage, `images/${imageName}`)
        console.log(imageName)

        //upload image
        const uploadTask = uploadBytesResumable(storageRef, imageFile, imageName)

        //uploading
        //snapshot - every single time the image is uploading
        //error - error when image uploading encounters
        //success upload
        uploadTask.on('state_change', (snapshot) => {
            const uploadProgress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        }, (error) => {
            console.log('error uploading image - ' + error)
            setFields(true)
            setAlertStatus('danger')
            setMsg('Error While Uploading. Try again')

            //remove error message after 5secs
            setTimeout(() =>{
                setFields(false)
                setIsLoading(false)
            }, 5000)

        }, () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                setImageAsset(downloadURL)
                setIsLoading(false)
                setFields(true)
                setMsg('Image Uploaded Successfully')
                setAlertStatus('success')
                setTimeout(() => {
                    setFields(false)
                }, 5000)
            })
        })
    }

    const deleteImage = () => {

    }
    const saveDetails = () => {

    }

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
                    {
                        isLoading ? 
                            <Loader /> 
                        : 
                        <> 
                            {
                               !imageAsset ? 
                                <> 
                                    <label className="w-full h-full flex flex-col items-center justify-center cursor-pointer">
                                        <div className="w-full h-full flex flex-col items-center justify-center">
                                            <MdCloudUpload className="text-gray-500 group-hover:text-gray-700 text-3xl" />
                                            <p className="text-gray-500 group-hover:text-gray-700">
                                                Click here to upload
                                            </p>
                                        </div>

                                        <input
                                            type="file"
                                            name="upload-image"
                                            accept="image/*"
                                            onChange={uploadImage}
                                            className="w-0 h-0"
                                        />
                                    </label>
                                </> 
                                : 
                                <> 
                                    <div className='relative h-full'>
                                        <img src={imageAsset} alt="uploaded pic" className='h-full w-full object-cover' />
                                        <button onClick={deleteImage} type='button' className='absolute bottom-3 rounded-full p-3 bg-red-500 cursor-pointer outline-none text-xl hover:shadow-md duration-500 transition-all ease-in-out'>
                                            <MdDelete className='text-white' />
                                        </button>
                                    </div>
                                </>
                            }
                        </>
                    }
                </div>

                <div className='w-full flex flex-col md:flex-row items-center gap-3'>
                    <div className='w-full py-2 border-b border-x-gray-300 items-center flex gap-2'>
                        <MdFoodBank className='text-gray-700 text-2xl ' />
                        <input 
                            className='w-full h-full text-lg bg-transparent font-semibold outline-none border-none placeholder:text-gray-300 text-textColor'
                            type="text" 
                            placeholder='Calories' 
                            required value={calories} 
                            onChange ={(e) => setCalories(e.target.value)}
                        />
                    </div>

                    <div className='w-full py-2 border-b border-x-gray-300 items-center flex gap-2'>
                        <MdAttachMoney className='text-gray-700 text-2xl ' />
                        <input 
                            className='w-full h-full text-lg bg-transparent font-semibold outline-none border-none placeholder:text-gray-300 text-textColor'
                            type="text" 
                            placeholder='Price' 
                            required value={price} 
                            onChange ={(e) => setPrice(e.target.value)}
                        />
                    </div>
                </div>
                <div className='flex flex-col mt-5 mb-2 w-full'>
                    <button 
                        onClick={saveDetails} 
                        type='button' 
                        className='ml-0 md:m-auto w-full md:w-auto border-none outline-none bg-emerald-500 px-12 py-2 rounded-lg text-lg text-white font-semibold'
                    >
                        Save Details
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CreateContainer