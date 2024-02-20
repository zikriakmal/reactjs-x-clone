import { useState } from 'react';
import './styles.css';

const Home = () => {
    const [activeTab, setActiveTab] = useState<'for-you' | 'following'>('for-you')

    return (
        <div className="container mx-auto sm:px-14">
            <div className="sticky top-0 grid grid-cols-12 max-h-14">
                <div className="col-span-2  left-0 top-0 h-svh glass-bg border-r-[1px] border-r-gray-200 py-4">
                    <div>
                        <p>tassss cha</p>
                    </div>
                </div>
                <div className="col-span-10 sm:col-span-6 max-h-14 glass-bg px-10 pt-2 flex border-b-gray-200 border-b-[1px]  flex-row justify-around items-end">
                    <div className='cursor-pointer' onClick={() => { setActiveTab('for-you') }}>
                        <p className={` py-2 border-b-4 ${activeTab === 'for-you' ? 'font-bold  border-b-blue-400' : 'border-b-transparent'}`}>For You</p>
                    </div>
                    <div className='cursor-pointer' onClick={() => { setActiveTab('following') }}>
                        <p className={` py-2 border-b-4 rou ${activeTab === 'following' ? 'font-bold  border-b-blue-400' : 'border-b-transparent'}`}>Following</p>
                    </div>
                </div>
                <div className="col-span-3 max-h-14 glass-bg px-10 py-2 hidden sm:block border-l-[1px]  border-l-gray-200 px-4">
                    <div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12 grid-flow-col">
                <div className="col-span-2" />
                <div className="col-span-10 sm:col-span-6 bg-white h-svh m-2">
                    <p>this is content</p>
                </div>
                <div className="col-span-3  hidden sm:block border-l-[1px] border-l-gray-200 px-4">
                    <p>test</p>
                    <div className='bg-gray-400 rounded-md'>
                        <p>Subscriber Premium</p>
                        <p>Subscriber Premium</p>
                    </div>
                    <div className='bg-gray-400 rounded-md'>
                        <p>Trends Terkini</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;