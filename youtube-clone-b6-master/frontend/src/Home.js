import {TbSquareRoundedLetterS} from 'react-icons/tb'
import mkbhd from './images/mkbhd.jpeg'
import {ImFire} from 'react-icons/im'
import {GoVideo} from 'react-icons/go'
import gotham from './images/gotham.png'
import {BiSolidLike} from 'react-icons/bi'
import tseries from './images/tseries.png'
import bbkivines from './images/bb.jpg'
import carry from './images/carry.png'
import {GoHomeFill} from 'react-icons/go'
import {BsFire} from 'react-icons/bs'
import {MdOutlineSubscriptions, MdOutlineWatchLater} from 'react-icons/md'
import {BiSolidVideos, BiHistory} from 'react-icons/bi'
import Header from './Header'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function VideoGrid(props){
    const video = props.video;
    return (
        <div class="thumbnail">
            <div class="video">
                <Link to={`/video?id=${video.videoId}`}>
                    <img class="thumbnail-img" src={video.thumbnail} />
                </Link>
            </div>
            <div class="video-title">
                <div>
                    <img src={gotham} height={'30px'} width={'43px'}></img>
                </div>
                <div class="video-info">
                    <h4 class="track-title margin-0">{video.title}</h4>
                    <p class="margin-0 smaller-fontsize">Gotham Chess</p>
                    <p class="margin-0 smaller-fontsize">{video.views} views . 1 year ago</p>
                </div>
            </div>
        
        </div>
    );
}

function Home(){
    // let videos = [1, 2, 3, 4, 5 , 6, 7, 8, 9, 10, 11, 12]
    const [videos, setVideos] = useState([]);

    const url = "http://localhost:5500/videos"

    const getVideos = async() => {
        try{
            const response = await fetch(url);
            const json = await response.json();
            console.log(json);
            setVideos(json.videos);

        }catch(error){
            console.log("Error", error)
        }
    };

    useEffect(() => {
        getVideos();
    }, [])

    return (
        <div>
            <Header />
            <div class="main-section">
                <div class="main-left">
                    <button class="yt-side-button">
                        <GoHomeFill /> <span class="side-button-label">Home</span>
                    </button>
                    <button class="yt-side-button">
                        <TbSquareRoundedLetterS /> <span class="side-button-label">Shorts</span>
                    </button>
                    <button class="yt-side-button">
                        <MdOutlineSubscriptions /> <span class="side-button-label">Subscriptions</span>
                    </button>
                    <hr />
                    <button class="yt-side-button">
                        <ImFire /> <span class="side-button-label">Trending</span>
                    </button>
                    <button class="yt-side-button">
                        <BiHistory /> <span class="side-button-label">History</span>
                    </button>
                    <button class="yt-side-button">
                        <GoVideo /> <span class="side-button-label">Your Videos</span>
                    </button>
                    <button class="yt-side-button">
                        <MdOutlineWatchLater /> <span class="side-button-label">Watch Later</span>
                    </button>
                    <button class="yt-side-button">
                        <BiSolidLike /> <span class="side-button-label">Liked Videos</span>
                    </button>
                    <hr />
                    <h6 class="fav">Favourites &gt; </h6>
                    <button class="yt-side-button">
                        <img src={carry} height={'30px'} width={'30px'}></img>
                        <span class="side-channel-label">Carry Minati</span>
                    </button>
                    <button class="yt-side-button">
                        <img src={bbkivines} height={'30px'} width={'30px'}></img>

                        <span class="side-channel-label">BB ki Vines</span>
                    </button>
                    <button class="yt-side-button">
                        <img src={tseries} height={'30px'} width={'30px'}></img>
                        <span class="side-channel-label">T-Series</span>
                    </button>
                    <button class="yt-side-button">
                        <img src={mkbhd} height={'30px'} width={'30px'}></img>
                        <span class="side-channel-label">MKBHD</span>
                    </button>
                </div>
                <div class="main-right">
                    <div className="navbar-container">
                        <div className="navbar">
                            <div className="nav-items white">All</div>
                            <div className="nav-items white">iPhones</div>
                            <div className="nav-items white">Entertainment</div>
                            <div className="nav-items white">Football</div>
                            <div className="nav-items white">Supercar</div>
                            <div className="nav-items white">Gaming</div>
                            <div className="nav-items white">Podcasts</div>
                            <div className="nav-items white">Live</div>
                            <div className="nav-items white">Travel</div>
                            <div className="nav-items white">Racing</div>
                            <div className="nav-items white">Computers</div>
                            <div className="nav-items white">Cricket</div>
                            <div className="nav-items white">Chess</div>

                        </div>
                    </div>
                        {videos.map((video) => {
                            return <VideoGrid video={video} />
                        })}
                    
                </div>
            </div>
        </div>
    )
}

export default Home;