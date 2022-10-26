import { Avatar } from 'flowbite-react';
import React, { useContext } from 'react';
import { ContextCreator } from '../../ContextProvider/ContextProvider';

const UpdateProfile = () => {
    const { user, dark, setNameAndPhoto } = useContext(ContextCreator);

    const handleUpdate = (e) => {
        const form = e.target;
        const givenName = (form.name.value);
        const name = givenName ? givenName : user.displayName;
        const givenPhotoURL = form.photoURL.value;
        const photoURL = givenPhotoURL ? givenPhotoURL : user.photoURL;

        setNameAndPhoto(name, photoURL);
    }
    return (
        <div className='px-3'>
            <div className={`my-12 border shadow-md max-w-xl mx-auto rounded-md p-5  ${dark ? 'bg-slate-500 text-slate-100' : 'bg-slate-100 text-slate-700'}`}>
                <div className='my-5'>
                    <Avatar size="xl" img={user.photoURL} rounded={true} />
                    <h2 className='text-2xl font-semibold text-center mt-3'>{user.displayName ? user.displayName : "Unknown"}</h2>
                    <p className='text-center'>{user.email ? user.email : "No Email"} </p>
                </div>
                <form className='flex flex-col gap-2 mb-5' onSubmit={handleUpdate}>
                    <label className='font-semibold mt-3' htmlFor="name">Update Name</label>
                    <input className='border-gray-400 rounded text-slate-700' type="text" placeholder='Update Name' name="name" defaultValue={user.displayName}/>
                    <label className='font-semibold mt-3' htmlFor="photoURL">Update Profile Picture</label>
                    <input className='border-gray-400 rounded text-slate-700' type="text" placeholder='Update Profile Photo' name="photoURL"  defaultValue={user.photoURL}/>
                    <button className={` ${dark ? 'bg-green-700 text-slate-100' : 'bg-green-300'} py-2 rounded font-semibold w-1/2 mx-auto mt-3 hover:scale-95`} type="submit">Update</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateProfile;