import { useState } from 'react';
import './styles.css';
import Button from '../../components/atoms/Button';
import { Link } from 'react-router-dom';

type tabType = 'for-you' | 'following';

const Home = ({ props }: any) => {
    const [activeTab, setActiveTab] = useState<tabType>('for-you')

    return (
        <div className="container mx-auto lg:px-32">
            <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
            <Content activeTab={activeTab} />
        </div>
    )
}

const Navigation = ({ activeTab, setActiveTab }: { activeTab: tabType, setActiveTab: React.Dispatch<React.SetStateAction<tabType>> }) => {
    return (
        <div className="sticky top-0 grid grid-cols-12 max-h-14">
            <div className="col-span-3 left-0 top-0 h-svh glass-bg border-r-[1px] border-r-gray-200 px-5">
                <div className='flex flex-col flex-1 h-full'>
                    <div className='flex-1'>
                        <p>tassss cha</p>
                    </div>
                    <div>
                        <Link to={'/login'} className='flex'>
                            <Button title="LOGOUT" />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="col-span-9 sm:col-span-6 max-h-14 glass-bg  flex border-b-gray-200 border-b-[1px]  flex-row justify-around items-end">
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
                    <p className='text-center'>GEAR</p>
                </div>
            </div>
            <div className=" col-span-3 max-h-14 bg-white px-4 sm:px-10 py-2 hidden sm:block border-l-[1px]  border-l-gray-200 ">
                <div className='p-2 focus-within:border-blue-400 flex flex-row border rounded-full bg-gray-100 hover:border-blue-400 border-gray-100 h-full'>
                    <p>S</p>
                    <input placeholder='search' className='outline-none hover:border-none px-2 bg-gray-100 w-auto flex-1 overflow-auto' />
                </div>
            </div>
        </div>
    )
}

const Content = ({ activeTab }: { activeTab: tabType }) => {
    return (
        // checking tab is working tho
        <div className={`grid grid-cols-12 grid-flow-col ${activeTab === 'for-you' ? 'bg-white' : 'bg-white'}`}>
            <div className="col-span-3" />
            <div className="col-span-10 sm:col-span-6 h-svh m-2">
                <p>this is content</p>
            </div>
            <div className="col-span-3  sm:px-10 sm:flex-col  hidden sm:block border-l-[1px] border-l-gray-200 px-4">
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