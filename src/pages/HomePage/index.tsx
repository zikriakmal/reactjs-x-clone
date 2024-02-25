import { useState } from 'react';
import Button from '../../components/atoms/Button';
import { Link } from 'react-router-dom';
import { GearIcon, XIcon, SearchIcon, HomeIcon } from '../../components/atoms/Icons';
import './styles.css';

type tabType = 'for-you' | 'following';

const Home = () => {
    const [activeTab, setActiveTab] = useState<tabType>('for-you')

    return (
        <div className="container mx-auto lg:px-16">
            {/* top and side navigation for desktop and tablet */}
            <div className='hidden sm:block'>
                <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>

            {/* top navigation for mobile */}
            <div className='sm:hidden'>
                <p>test</p>
            </div>

            {/* this is the main content */}
            <Content activeTab={activeTab} />

            {/* bottom navigation for mobile */}
            <div className='sm:hidden sticky bottom-0'>
                <p>test</p>
            </div>
        </div>
    )
}

const Navigation = ({ activeTab, setActiveTab }: { activeTab: tabType, setActiveTab: React.Dispatch<React.SetStateAction<tabType>> }) => {
    return (
        <div className="sticky top-0 grid grid-cols-12 max-h-14">
            <div className="col-span-3 left-0 top-0 h-svh glass-bg border-r-[1px] border-r-gray-200 sm:px-20  py-3">
                <div className='flex flex-col flex-1 h-full'>
                    <div className='flex-1 px-2 flex flex-col gap-4'>
                        <XIcon className='h-8 w-8' />
                        <div className='flex flex-row items-center gap-4 cursor-pointer' onClick={() => alert('click home')}>
                            <HomeIcon className={'h-5 w-5'} />
                            <p className='font-bold text-lg'>Home</p>
                        </div>
                        <div className='flex flex-row items-center gap-4 cursor-pointer' onClick={() => alert('click home')}>
                            <SearchIcon className={'h-5 w-5'} />
                            <p className='text-lg'>Explore</p>
                        </div>

                    </div>
                    <div>
                        <Link to={'/login'} className='flex'>
                            <Button title="LOGOUT" />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="col-span-9 sm:col-span-5 max-h-14 glass-bg  flex border-b-gray-200 border-b-[1px]  flex-row justify-around items-end">
                <div className='cursor-pointer hover:bg-slate-50 flex-1  h-full' onClick={() => { setActiveTab('for-you') }}>
                    <div className='flex items-end justify-center h-full'>
                        <p className={` py-2 border-b-4 ${activeTab === 'for-you' ? 'font-bold  border-b-blue-400' : 'border-b-transparent'}`}>For You</p>
                    </div>
                </div>
                <div className='cursor-pointer hover:bg-slate-50 flex-1 h-full' onClick={() => { setActiveTab('following') }}>
                    <div className='flex items-end justify-center h-full'>
                        <p className={` py-2 border-b-4 ${activeTab === 'following' ? 'font-bold  border-b-blue-400' : 'border-b-transparent'}`}>Following</p>
                    </div>
                </div>
                <div className='self-center justify-center items-center content-center'>
                    <div className='cursor-pointer text-center p-2  mx-2 hover:bg-gray-200 rounded-full'>
                        <GearIcon className='h-5 w-5' />
                    </div>
                </div>
            </div>
            <div className=" col-span-4 max-h-14 bg-white px-4 sm:px-10 py-2 hidden sm:block border-l-[1px]  border-l-gray-200 ">
                <div className='p-2 px-3 items-center focus-within:border-blue-400 flex flex-row border rounded-full bg-gray-100 hover:border-blue-400 border-gray-100 h-full'>
                    <SearchIcon className={'h-4 w-4'} />
                    <input placeholder='Search' className='outline-none hover:border-none px-2 bg-gray-100 w-auto flex-1 overflow-auto' />
                </div>
            </div>
        </div>
    )
}

const Content = ({ activeTab }: { activeTab: tabType }) => {
    return (
        // checking tab is working tho
        <div className={`grid sticky sm:static grid-cols-12 grid-flow-col ${activeTab === 'for-you' ? 'bg-white' : 'bg-white'}`}>
            <div className="col-span-3" />
            <div className="col-span-10 sm:col-span-5 h-svh m-2">
                <div className='flex flex-row'>
                    <img className='w-14 h-14 rounded-full' src='https://pbs.twimg.com/profile_images/1547743320780455936/VfK1dCFG_400x400.jpg' />
                    <div className='mx-4 border-b border-gray-200 pb-4 flex flex-1 flex-col'>
                        <textarea className='flex-1 py-2 my-1 text-lg font-semibold focus:outline-none' placeholder='What is Happening?' />
                        <div className='hover:bg-blue-50 text-blue-400 font-extrabold cursor-pointer rounded-full self-start px-2 py-1'>
                            <p className='text-center'>🌐 Everyone can reply</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-4  sm:px-10 sm:flex-col  hidden sm:block border-l-[1px] border-l-gray-200 px-5">
                <div className={'flex flex-col gap-3'}>
                    <div className='bg-gray-200 rounded-md p-4'>
                        <p className='text-lg font-bold'>Subscriber Premium</p>
                        <p className='text-xs'>Subscriber Premium</p>
                    </div>
                    <div className='bg-gray-200 rounded-md p-4'>
                        <p>Trends Terkini</p>
                    </div>
                </div>
            </div>
        </div>)
}

export default Home;