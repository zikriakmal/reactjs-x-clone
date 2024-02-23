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
                            <HomeIcon className={'h-5 w-5'} />
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
                        {/* <svg className='h-5 w-5' viewBox="0 0 24 24" aria-hidden="true" ><g><path d="M10.54 1.75h2.92l1.57 2.36c.11.17.32.25.53.21l2.53-.59 2.17 2.17-.58 2.54c-.05.2.04.41.21.53l2.36 1.57v2.92l-2.36 1.57c-.17.12-.26.33-.21.53l.58 2.54-2.17 2.17-2.53-.59c-.21-.04-.42.04-.53.21l-1.57 2.36h-2.92l-1.58-2.36c-.11-.17-.32-.25-.52-.21l-2.54.59-2.17-2.17.58-2.54c.05-.2-.03-.41-.21-.53l-2.35-1.57v-2.92L4.1 8.97c.18-.12.26-.33.21-.53L3.73 5.9 5.9 3.73l2.54.59c.2.04.41-.04.52-.21l1.58-2.36zm1.07 2l-.98 1.47C10.05 6.08 9 6.5 7.99 6.27l-1.46-.34-.6.6.33 1.46c.24 1.01-.18 2.07-1.05 2.64l-1.46.98v.78l1.46.98c.87.57 1.29 1.63 1.05 2.64l-.33 1.46.6.6 1.46-.34c1.01-.23 2.06.19 2.64 1.05l.98 1.47h.78l.97-1.47c.58-.86 1.63-1.28 2.65-1.05l1.45.34.61-.6-.34-1.46c-.23-1.01.18-2.07 1.05-2.64l1.47-.98v-.78l-1.47-.98c-.87-.57-1.28-1.63-1.05-2.64l.34-1.46-.61-.6-1.45.34c-1.02.23-2.07-.19-2.65-1.05l-.97-1.47h-.78zM12 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5c.82 0 1.5-.67 1.5-1.5s-.68-1.5-1.5-1.5zM8.5 12c0-1.93 1.56-3.5 3.5-3.5 1.93 0 3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5c-1.94 0-3.5-1.57-3.5-3.5z"></path></g></svg> */}
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
                <p>What's Happening?</p>
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