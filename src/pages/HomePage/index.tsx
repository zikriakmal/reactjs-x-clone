import { ChangeEvent, useState } from 'react';
import Button from '../../components/atoms/Button';
import { Link } from 'react-router-dom';
import { GearIcon, XIcon, SearchIcon, HomeIcon, ImageIcon, GifIcon } from '../../components/atoms/Icons';
import './styles.css';
import PollIcon from '../../components/atoms/Icons/PollIcon';
import ThreePoint from '../../components/atoms/Icons/ThreePoint';
import ChatIcon from '../../components/atoms/Icons/ChatIcon';
import RetweetIcon from '../../components/atoms/Icons/RetweetIcon';
import LoveIcon from '../../components/atoms/Icons/LoveIcon';
import StatsIcon from '../../components/atoms/Icons/StatsIcon';
import SaveIcon from '../../components/atoms/Icons/SaveIcon';
import ShareIcon from '../../components/atoms/Icons/ShareIcon';
import { Dropdown, MenuProps } from 'antd';

type tabType = 'for-you' | 'following';

interface contentInt {
    username: string;
    fullName: string;
    textContent: string;
}

const items: MenuProps['items'] = [
    {
        key: '1',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="#">
                Delete Tweet
            </a>
        ),
    },
    {
        key: '2',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="#">
                Pin Tweet
            </a>
        ),
    },
];

const accountItems: MenuProps['items'] = [
    {
        key: '1',
        label: (
            <a className='font-bold py-2' target="_blank" rel="noopener noreferrer" href="#">
                Add an existing account
            </a>
        ),
    },
    {
        key: '2',
        label: (
            <Link to={'/login'}>
                <p className='font-bold py-2'>Log out @zikriakmals</p>
            </Link>
        ),
    },
];

const intialContent: Array<contentInt> = [
    {
        username: '@zikriakmals',
        fullName: 'Zikri Akmal S',
        textContent: 'initial Tweet 1'
    },
    {
        username: '@zikriakmals',
        fullName: 'Zikri Akmal S',
        textContent: 'initial Tweet 2'
    }
]

const Home = () => {
    const [activeTab, setActiveTab] = useState<tabType>('for-you')
    return (
        <div className="container mx-auto lg:px-16">
            {/* top and side navigation for desktop and tablet */}
            <div className='hidden sm:block sticky top-0'>
                <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>

            {/* top navigation for mobile */}
            <div className='sm:hidden'>
            </div>

            {/* this is the main content */}
            <Content activeTab={activeTab} />

            {/* bottom navigation for mobile */}
            <div className='sm:hidden sticky bottom-0'>
                <p></p>
            </div>
        </div>
    )
}

const Navigation = ({ activeTab, setActiveTab }: { activeTab: tabType, setActiveTab: React.Dispatch<React.SetStateAction<tabType>> }) => {
    return (
        <div className="sticky top-0 grid grid-cols-12 max-h-14">
            <div className="hidden sm:block sm:col-span-3 sticky left-0 top-0 h-svh glass-bg border-r-[1px] border-r-gray-200 sm:pl-10  py-3">
                <div className='flex flex-col flex-1 h-full'>
                    <div className='flex-1 px-2 flex flex-col gap-4 lg:ml-10 lg:mr-2'>
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
                    <div className='lg:ml-5 lg:mr-2 cursor-pointer'>
                        <Dropdown menu={{ items: accountItems }} placement="topCenter" arrow>
                            <div className='p-2 flex flex-row items-center justify-around rounded-full border border-white hover:border-gray-200'>
                                <div>
                                    <img className='w-10 h-10 rounded-full' src='https://pbs.twimg.com/profile_images/1547743320780455936/VfK1dCFG_400x400.jpg' />
                                </div>
                                <div>
                                    <p className='font-bold'>Zikri Akmal</p>
                                    <p className='font-light'>@zikriakmals</p>
                                </div>
                                <div>
                                    <ThreePoint className={'h-5 w-5'} />
                                </div>
                            </div>
                        </Dropdown>
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
    const [textContent, setTextContent] = useState<string>('');
    const [posts, setPosts] = useState<Array<contentInt>>(intialContent);

    const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setTextContent(event.target.value ?? "");
    };

    const handleSubmitPost = () => {
        setTextContent("");
        setPosts([{ fullName: 'Zikri Akmal S', username: '@zikriakmals', textContent: textContent }, ...posts])
    }

    return (
        // checking tab is working tho
        <div className={`grid sticky sm:static grid-cols-12 grid-flow-col ${activeTab === 'for-you' ? 'bg-white' : 'bg-white'}`}>
            <div className="col-span-3 hidden sm:block" />
            <div className="col-span-12 sm:col-span-5 h-svh">
                <div className='flex flex-row  border-b border-gray-200 pb-2 p-2'>
                    <img className='w-14 h-14 rounded-full' src='https://pbs.twimg.com/profile_images/1547743320780455936/VfK1dCFG_400x400.jpg' />
                    <div className='flex flex-1 flex-col'>
                        <div className='mx-4 border-b border-gray-200 pb-4 flex flex-1 flex-col'>
                            <textarea value={textContent} onChange={handleInputChange} className='flex-1 py-2 my-1 text-lg font-semibold focus:outline-none' placeholder='What is Happening?'>
                            </textarea>
                            <div className='hover:bg-blue-50 text-blue-400 font-extrabold cursor-pointer rounded-full self-start px-2 py-1'>
                                <p className='text-center'>🌐 Everyone can reply</p>
                            </div>
                        </div>
                        <div className='mx-4 flex flex-row items-center'>
                            <div className='flex flex-row flex-1 gap-2'>
                                <ImageIcon className={'h-5 w-5 cursor-pointer'} />
                                <GifIcon className={'h-5 w-5 cursor-pointer'} />
                                <PollIcon className={'h-5 w-5 cursor-pointer'} />
                            </div>
                            <div>
                                <Button variant='primary' type='button' onClick={handleSubmitPost} title='POST' />
                            </div>
                        </div>
                    </div>
                </div>
                {
                    posts.map((dt: contentInt, index: number) => {
                        return (<Post username={dt.username} fullName={dt.fullName} textContent={dt.textContent} key={index} />)
                    })
                }
            </div>
            <div className="col-span-4 py-10  sm:px-10 sm:flex-col  hidden sm:block border-l-[1px] border-l-gray-200 px-5">
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

const Post = ({ username, fullName, textContent }: { username?: string, fullName?: string, textContent?: string }) => {
    return (
        <div className='flex flex-row hover:bg-gray-100 cursor-pointer p-2 py-1 border-b'>
            <div className='m-1'>
                <img className='w-10 h-10 rounded-full' src='https://pbs.twimg.com/profile_images/1547743320780455936/VfK1dCFG_400x400.jpg' />
            </div>
            <div className='flex flex-col flex-1 px-2 py-1'>
                <div className='flex flex-row'>
                    <a href="#" className='flex-1'>
                        <p className='text-sm text-black font-semibold'>{fullName} <span className='font-bold'>{username}</span> </p>
                    </a>
                    <div onClick={() => alert('tes')} className='hover:bg-blue-100 p-1 font-extrabold cursor-pointer rounded-full'>
                        <Dropdown menu={{ items }} placement="bottomRight" arrow>
                            <ThreePoint className={'h-4 w-4'} />
                        </Dropdown>
                    </div>
                </div>
                <div className='pb-4'>
                    <div dangerouslySetInnerHTML={{ __html: textContent?.replace(/\n/g, '<br />') ?? '' }} />
                </div>
                <div className='flex flex-row justify-between flex-1 px-2'>
                    <div className='hover:bg-blue-100 p-1 font-extrabold cursor-pointer rounded-full'>
                        <ChatIcon className={'h-4 w-4'} />
                    </div>
                    <div className='hover:bg-blue-100 p-1 font-extrabold cursor-pointer rounded-full'>
                        <RetweetIcon className={'h-4 w-4'} />
                    </div>
                    <div className='hover:bg-blue-100 p-1 font-extrabold cursor-pointer rounded-full'>
                        <LoveIcon className={'h-4 w-4'} />
                    </div>
                    <div className='hover:bg-blue-100 p-1 font-extrabold cursor-pointer rounded-full'>
                        <StatsIcon className={'h-4 w-4'} />
                    </div>
                    <div className='flex flex-row gap-2'>
                        <div className='hover:bg-blue-100 p-1 font-extrabold cursor-pointer rounded-full'>
                            <SaveIcon className={'h-4 w-4'} />
                        </div>
                        <div className='hover:bg-blue-100 p-1 font-extrabold cursor-pointer rounded-full'>
                            <ShareIcon className={'h-4 w-4'} />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Home;